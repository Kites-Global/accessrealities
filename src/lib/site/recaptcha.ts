const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

type SiteVerifyResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

/** Verifies a reCAPTCHA v2 token server-side. Returns false on any failure or misconfiguration. */
export async function verifyRecaptcha(token: string, remoteIp?: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("reCAPTCHA is not configured. Set RECAPTCHA_SECRET_KEY.");
  }
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const res = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) return false;

  const data = (await res.json()) as SiteVerifyResponse;
  return data.success === true;
}
