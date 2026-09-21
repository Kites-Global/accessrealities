"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { newsSchema, slugify } from "@/lib/admin/validators";
import { saveUpload, deleteUpload, getImageDimensions } from "@/lib/admin/storage";

const MAX_THUMBNAIL_BYTES = 800 * 1024;
const THUMBNAIL_WIDTH = 640;
const THUMBNAIL_HEIGHT = 427;

async function validateThumbnail(image: File): Promise<void> {
  if (image.size > MAX_THUMBNAIL_BYTES) {
    throw new Error("Thumbnail image must be under 800KB");
  }
  const bytes = Buffer.from(await image.arrayBuffer());
  const dimensions = getImageDimensions(bytes);
  if (!dimensions || dimensions.width !== THUMBNAIL_WIDTH || dimensions.height !== THUMBNAIL_HEIGHT) {
    throw new Error(`Thumbnail image must be exactly ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT} pixels`);
  }
}

async function uniqueNewsSlug(base: string, ignoreId?: string): Promise<string> {
  const root = base || "post";
  let slug = root;
  let n = 2;
  while (
    await prisma.newsPost.findFirst({
      where: { slug, ...(ignoreId ? { id: { not: ignoreId } } : {}) },
    })
  ) {
    slug = `${root}-${n++}`;
  }
  return slug;
}

function parseNews(formData: FormData) {
  const parsed = newsSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    published: formData.get("published") === "on",
  });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
  }
  return parsed.data;
}

export async function createNews(formData: FormData) {
  const data = parseNews(formData);

  const image = formData.get("image");
  if (image instanceof File && image.size > 0) {
    await validateThumbnail(image);
  }
  const imageUrl = image instanceof File && image.size > 0 ? await saveUpload(image, "news") : undefined;

  const slug = await uniqueNewsSlug(slugify(data.title));

  await prisma.newsPost.create({ data: { ...data, slug, imageUrl } });

  revalidatePath("/admin/news");
  revalidatePath("/news-and-events");
  redirect("/admin/news");
}

export async function updateNews(id: string, formData: FormData) {
  const data = parseNews(formData);
  const existing = await prisma.newsPost.findUniqueOrThrow({ where: { id } });

  const image = formData.get("image");
  let imageUrl = existing.imageUrl;
  if (image instanceof File && image.size > 0) {
    await validateThumbnail(image);
    imageUrl = await saveUpload(image, "news");
    await deleteUpload(existing.imageUrl);
  }

  const newSlug = slugify(data.title);
  const slug = newSlug === existing.slug ? existing.slug : await uniqueNewsSlug(newSlug, id);

  await prisma.newsPost.update({ where: { id }, data: { ...data, slug, imageUrl } });

  revalidatePath("/admin/news");
  revalidatePath("/news-and-events");
  revalidatePath(`/news-and-events/${slug}`);
  redirect("/admin/news");
}

export async function setNewsStatus(id: string, value: string) {
  await prisma.newsPost.update({ where: { id }, data: { published: value === "published" } });

  revalidatePath("/admin/news");
  revalidatePath("/news-and-events");
}

export async function deleteNews(id: string) {
  const existing = await prisma.newsPost.findUnique({ where: { id } });
  if (!existing) return;

  await prisma.newsPost.delete({ where: { id } });
  await deleteUpload(existing.imageUrl);

  revalidatePath("/admin/news");
  revalidatePath("/news-and-events");
}
