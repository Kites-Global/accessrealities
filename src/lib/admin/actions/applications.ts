"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { applicationSchema } from "@/lib/admin/validators";
import { verifyRecaptcha } from "@/lib/site/recaptcha";
import { sendEmailWithAttachment } from "@/lib/site/mailer";

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

  // The reCAPTCHA widget injects its own hidden "g-recaptcha-response" field into
  // whatever <form> it's mounted in — no client-side wiring needed to populate it.
  const recaptchaToken = formData.get("g-recaptcha-response");
  if (typeof recaptchaToken !== "string" || !recaptchaToken) {
    throw new Error("Please complete the reCAPTCHA");
  }
  const captchaOk = await verifyRecaptcha(recaptchaToken);
  if (!captchaOk) {
    throw new Error("reCAPTCHA verification failed. Please try again.");
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

  const vacancy = await prisma.vacancy.findUnique({
    where: { id: parsed.data.vacancyId },
    select: { title: true },
  });
  if (!vacancy) {
    throw new Error("That position is no longer available.");
  }

  // Nothing is persisted anywhere else, so a failed send here means the application is
  // lost — this must throw (not be swallowed) so the applicant sees the error and can retry.
  await sendEmailWithAttachment({
    subject: `New Job Application - ${vacancy.title}`,
    fields: [
      { label: "Position", value: vacancy.title },
      { label: "Name", value: parsed.data.name },
      { label: "Phone", value: parsed.data.phone },
      { label: "Email", value: parsed.data.email },
    ],
    replyTo: parsed.data.email,
    attachment: {
      filename: cv.name || "cv.pdf",
      contentType: "application/pdf",
      content: Buffer.from(await cv.arrayBuffer()),
    },
  });

  redirect("/about-us/careers?applied=1");
}
