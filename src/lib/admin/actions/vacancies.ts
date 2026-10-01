"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { vacancySchema, slugify } from "@/lib/admin/validators";
import { saveUpload, deleteUpload } from "@/lib/admin/storage";

const MAX_DOCUMENT_BYTES = 5 * 1024 * 1024;

async function uniqueVacancySlug(base: string, ignoreId?: string): Promise<string> {
  const root = base || "vacancy";
  let slug = root;
  let n = 2;
  while (
    await prisma.vacancy.findFirst({
      where: { slug, ...(ignoreId ? { id: { not: ignoreId } } : {}) },
    })
  ) {
    slug = `${root}-${n++}`;
  }
  return slug;
}

function parseVacancy(formData: FormData) {
  const parsed = vacancySchema.safeParse({
    title: formData.get("title"),
    isOpen: formData.get("isOpen") === "on",
  });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
  }
  return parsed.data;
}

/** Returns the uploaded PDF, or null when none was chosen and that's allowed (editing without replacing it). */
function parseDocument(formData: FormData, required: boolean): File | null {
  const file = formData.get("document");
  if (!(file instanceof File) || file.size === 0) {
    if (required) throw new Error("Please attach the vacancy document (PDF)");
    return null;
  }
  if (file.type !== "application/pdf") {
    throw new Error("Document must be a PDF file");
  }
  if (file.size > MAX_DOCUMENT_BYTES) {
    throw new Error(`Document must be under ${Math.round(MAX_DOCUMENT_BYTES / (1024 * 1024))}MB`);
  }
  return file;
}

export async function createVacancy(formData: FormData) {
  const { title } = parseVacancy(formData);
  const document = parseDocument(formData, true);
  const documentUrl = await saveUpload(document!, "vacancies");
  const slug = await uniqueVacancySlug(slugify(title));

  await prisma.vacancy.create({ data: { title, isOpen: true, slug, documentUrl } });

  revalidatePath("/admin/careers");
  revalidatePath("/about-us/careers");
  redirect("/admin/careers");
}

export async function updateVacancy(id: string, formData: FormData) {
  const data = parseVacancy(formData);
  const document = parseDocument(formData, false);
  const existing = await prisma.vacancy.findUniqueOrThrow({ where: { id } });

  const newSlug = slugify(data.title);
  const slug = newSlug === existing.slug ? existing.slug : await uniqueVacancySlug(newSlug, id);

  let documentUrl = existing.documentUrl;
  if (document) {
    documentUrl = await saveUpload(document, "vacancies");
    await deleteUpload(existing.documentUrl);
  }

  await prisma.vacancy.update({ where: { id }, data: { ...data, slug, documentUrl } });

  revalidatePath("/admin/careers");
  revalidatePath("/about-us/careers");
  revalidatePath(`/about-us/careers/${slug}`);
  redirect("/admin/careers");
}

export async function setVacancyStatus(id: string, value: string) {
  await prisma.vacancy.update({ where: { id }, data: { isOpen: value === "open" } });

  revalidatePath("/admin/careers");
  revalidatePath("/about-us/careers");
}

export async function deleteVacancy(id: string) {
  const vacancy = await prisma.vacancy.findUniqueOrThrow({ where: { id } });
  const applications = await prisma.application.findMany({ where: { vacancyId: id } });

  await prisma.vacancy.delete({ where: { id } });
  await deleteUpload(vacancy.documentUrl);
  await Promise.all(applications.map((a) => deleteUpload(a.cvUrl)));

  revalidatePath("/admin/careers");
  revalidatePath("/about-us/careers");
}
