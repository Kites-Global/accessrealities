"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { applicationSchema } from "@/lib/admin/validators";
import { saveUpload } from "@/lib/admin/storage";

const MAX_CV_BYTES = 5 * 1024 * 1024;

export async function submitApplication(formData: FormData) {
  const parsed = applicationSchema.safeParse({
    vacancyId: formData.get("vacancyId"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  });
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
  }

  const cv = formData.get("cv");
  if (!(cv instanceof File) || cv.size === 0) {
    throw new Error("Please attach your CV (PDF)");
  }
  if (cv.type !== "application/pdf") {
    throw new Error("CV must be a PDF file");
  }
  if (cv.size > MAX_CV_BYTES) {
    throw new Error(`CV must be under ${Math.round(MAX_CV_BYTES / (1024 * 1024))}MB`);
  }

  const cvUrl = await saveUpload(cv, "cv");

  await prisma.application.create({ data: { ...parsed.data, cvUrl } });

  redirect("/about-us/careers?applied=1");
}
