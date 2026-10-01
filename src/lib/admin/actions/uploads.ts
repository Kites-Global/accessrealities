"use server";

import { saveUpload } from "@/lib/admin/storage";

const MAX_IMAGE_BYTES = 800 * 1024;

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
  if (file.size > MAX_IMAGE_BYTES) {
    return { error: `Image must be under ${Math.round(MAX_IMAGE_BYTES / 1024)}KB.` };
  }

  const url = await saveUpload(file, "content");
  return { url };
}
