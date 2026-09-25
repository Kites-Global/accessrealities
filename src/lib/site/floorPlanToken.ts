import { createHmac, timingSafeEqual } from "node:crypto";
import { isTower, type Tower } from "@/lib/floorPlans";

export const FLOOR_PLAN_LINK_TTL_MS = 30 * 60 * 1000; // 30 minutes

type FloorPlanTokenPayload = {
  tower: Tower;
  email: string;
  exp: number; // epoch ms
};

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET is not configured; it is required to sign floor plan download links.");
  }
  return secret;
}

function sign(payloadB64: string): string {
  return createHmac("sha256", getSecret()).update(payloadB64).digest("base64url");
}

/** Signs a self-contained, time-limited download token — no database record needed. */
export function signFloorPlanToken(tower: Tower, email: string): string {
  const payload: FloorPlanTokenPayload = { tower, email, exp: Date.now() + FLOOR_PLAN_LINK_TTL_MS };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${payloadB64}.${sign(payloadB64)}`;
}

/** Verifies signature and expiry. Returns null if the token is malformed, tampered with, or expired. */
export function verifyFloorPlanToken(token: string): FloorPlanTokenPayload | null {
  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) return null;

  const expected = sign(payloadB64);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  let payload: FloorPlanTokenPayload;
  try {
    payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
  } catch {
    return null;
  }

  if (!isTower(payload.tower) || typeof payload.email !== "string" || typeof payload.exp !== "number") return null;
  if (Date.now() > payload.exp) return null;

  return payload;
}
