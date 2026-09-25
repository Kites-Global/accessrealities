import { NextResponse } from "next/server";
import { floorPlanRequestSchema } from "@/lib/site/validators";
import { verifyRecaptcha } from "@/lib/site/recaptcha";
import { sendFloorPlanLinkEmail } from "@/lib/site/mailer";
import { signFloorPlanToken } from "@/lib/site/floorPlanToken";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = floorPlanRequestSchema.safeParse(body);
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

  const token = signFloorPlanToken(data.tower, data.email);
  const link = `${new URL(request.url).origin}/api/floor-plans/download?token=${encodeURIComponent(token)}`;

  try {
    await sendFloorPlanLinkEmail({ to: data.email, tower: data.tower, link });
  } catch (error) {
    console.error("Failed to send floor plan link email", error);
    return NextResponse.json({ error: "Could not send the download link. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
