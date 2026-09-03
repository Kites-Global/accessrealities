"use server";

import { saveUpload } from "@/lib/admin/storage";

const CONTENT_IMAGE_LIMITS = {
  news: 800 * 1024,
  vacancy: 1024 * 1024,
} as const;

type ContentImageContext = keyof typeof CONTENT_IMAGE_LIMITS;

export async function uploadContentImage(
  formData: FormData,
): Promise<{ url: string } | { error: string }> {
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "No file provided." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "File must be an image." };
  }

  const context: ContentImageContext = formData.get("context") === "vacancy" ? "vacancy" : "news";
  const maxBytes = CONTENT_IMAGE_LIMITS[context];
  if (file.size > maxBytes) {
    return { error: `Image must be under ${Math.round(maxBytes / 1024)}KB.` };
  }

  const url = await saveUpload(file, "content");
  return { url };
}
