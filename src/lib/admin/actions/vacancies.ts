"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { vacancySchema, slugify } from "@/lib/admin/validators";
import { deleteUpload } from "@/lib/admin/storage";

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
    location: formData.get("location") || undefined,
    description: formData.get("description"),
    isOpen: formData.get("isOpen") === "on",
  });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
  }
  return parsed.data;
}

export async function createVacancy(formData: FormData) {
  const data = parseVacancy(formData);
  const slug = await uniqueVacancySlug(slugify(data.title));

  await prisma.vacancy.create({ data: { ...data, slug } });

  revalidatePath("/admin/careers");
  revalidatePath("/about-us/careers");
  redirect("/admin/careers");
}

export async function updateVacancy(id: string, formData: FormData) {
  const data = parseVacancy(formData);
  const existing = await prisma.vacancy.findUniqueOrThrow({ where: { id } });

  const newSlug = slugify(data.title);
  const slug = newSlug === existing.slug ? existing.slug : await uniqueVacancySlug(newSlug, id);

  await prisma.vacancy.update({ where: { id }, data: { ...data, slug } });

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
  const applications = await prisma.application.findMany({ where: { vacancyId: id } });

  await prisma.vacancy.delete({ where: { id } });
  await Promise.all(applications.map((a) => deleteUpload(a.cvUrl)));

  revalidatePath("/admin/careers");
  revalidatePath("/about-us/careers");
}
