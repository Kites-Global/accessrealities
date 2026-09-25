"use client"
import ReCAPTCHA from "react-google-recaptcha"

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export type InquiryStatus = "idle" | "submitting" | "success" | "error";

/** Posts an inquiry payload to the SES-backed API route. */
export async function submitInquiry(payload: Record<string, unknown>): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: data.error ?? "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}

export function InquiryStatusMessage({ status, error }: { status: InquiryStatus; error: string }) {
  if (status === "success") {
    return <div className="alert alert-success mt-3">Thank you — your inquiry has been sent. We&apos;ll be in touch soon.</div>;
  }
  if (status === "error") {
    return <div className="alert alert-danger mt-3">{error}</div>;
  }
  return null;
}

/** react-google-recaptcha throws if given an empty site key, so skip mounting it until one is configured. */
export const RecaptchaField = ({ recaptchaRef }: { recaptchaRef: React.RefObject<ReCAPTCHA | null> }) =>
  RECAPTCHA_SITE_KEY ? (
    <div className="mt-3">
      <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} ref={recaptchaRef} />
    </div>
  ) : (
    <div className="alert alert-warning mt-3">
      reCAPTCHA is not configured yet (set NEXT_PUBLIC_RECAPTCHA_SITE_KEY). Form submission is disabled until it is.
    </div>
  );
