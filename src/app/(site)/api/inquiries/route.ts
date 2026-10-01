import { NextResponse } from "next/server";
import { inquirySchema, type InquiryInput } from "@/lib/site/validators";
import { verifyRecaptcha } from "@/lib/site/recaptcha";
import { sendInquiryEmail } from "@/lib/site/mailer";

export const dynamic = "force-dynamic";

const SUBJECTS: Record<InquiryInput["type"], string> = {
  office: "Office Rental Inquiry",
  facilities: "Facilities & Services Inquiry",
  "west-tower": "West Tower Inquiry",
  contact: "Contact Us Inquiry",
};

function buildFields(data: InquiryInput): Array<{ label: string; value: string }> {
  switch (data.type) {
    case "office":
      return [
        { label: "Business name", value: data.businessName },
        { label: "Name", value: data.name },
        { label: "Phone", value: data.phone },
        { label: "Nature of business", value: data.natureOfBusiness },
        { label: "Email", value: data.email },
        ...(data.size ? [{ label: "Space required", value: data.size }] : []),
        ...(data.requirements ? [{ label: "Requirements", value: data.requirements }] : []),
        { label: "Requested floor plan", value: data.downloadFloorPlan ? "Yes" : "No" },
      ];
    case "facilities":
      return [
        { label: "Name", value: data.name },
        { label: "Phone", value: data.phone },
        { label: "Nature of requirement", value: data.nature },
        { label: "Email", value: data.email },
        ...(data.requirements ? [{ label: "Requirements", value: data.requirements }] : []),
      ];
    case "west-tower":
      return [
        { label: "Name", value: data.name },
        { label: "Phone", value: data.phone },
        { label: "Email", value: data.email },
        ...(data.requirements ? [{ label: "Requirements", value: data.requirements }] : []),
      ];
    case "contact":
      return [
        { label: "Name", value: data.name },
        { label: "Phone", value: data.phone },
        { label: "Email", value: data.email },
        ...(data.company ? [{ label: "Company/Organization", value: data.company }] : []),
        { label: "Message", value: data.message },
      ];
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const data = parsed.data;

  let captchaOk: boolean;
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const remoteIp = forwardedFor?.split(",")[0]?.trim();
    captchaOk = await verifyRecaptcha(data.recaptchaToken, remoteIp);
  } catch (error) {
    console.error("reCAPTCHA verification failed", error);
    return NextResponse.json({ error: "Could not verify reCAPTCHA. Try again later." }, { status: 500 });
  }
  if (!captchaOk) {
    return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
  }

  try {
    await sendInquiryEmail({
      subject: SUBJECTS[data.type],
      fields: buildFields(data),
      replyTo: data.email,
    });
  } catch (error) {
    console.error("Failed to send inquiry email", error);
    return NextResponse.json({ error: "Could not send your inquiry. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
