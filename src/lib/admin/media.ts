// URL shapes for uploaded files. Kept free of the S3 SDK so server components can
// import it without pulling the client in.

const REGION = process.env.AWS_REGION;
const BUCKET = process.env.S3_BUCKET_NAME;
// Optional: a CloudFront/CDN domain that fronts the bucket. When set, uploads are
// addressed through it and the /api/media route isn't used.
const PUBLIC_URL_BASE = process.env.S3_PUBLIC_URL_BASE;

/** Route that streams private bucket objects to the browser. */
export const MEDIA_ROUTE = "/api/media";

/** Folders under /api/media that anyone may read. Everything else needs an admin session. */
export const PUBLIC_MEDIA_FOLDERS = ["news", "content"];

function cdnBase(): string | null {
  return PUBLIC_URL_BASE ? PUBLIC_URL_BASE.replace(/\/$/, "") : null;
}

/** The URL stored in the database for a freshly uploaded object. */
export function publicUrlFor(key: string): string {
  const base = cdnBase();
  return base ? `${base}/${key}` : `${MEDIA_ROUTE}/${key}`;
}

/** Extracts the S3 object key from a URL previously produced by publicUrlFor. */
export function keyFromPublicUrl(url: string): string | null {
  const base = cdnBase();
  if (base && url.startsWith(`${base}/`)) {
    return url.slice(base.length + 1);
  }
  if (url.startsWith(`${MEDIA_ROUTE}/`)) {
    return url.slice(MEDIA_ROUTE.length + 1);
  }
  // Absolute S3 URL — the shape uploads used before they were served through this app.
  const s3HostPrefix = `https://${BUCKET}.s3.${REGION}.amazonaws.com/`;
  if (url.startsWith(s3HostPrefix)) {
    return url.slice(s3HostPrefix.length);
  }
  return null;
}

/**
 * Turns a stored upload URL into one the browser can actually load. Rows written before
 * the media route existed hold a raw S3 URL that the private bucket rejects, so they get
 * rewritten here rather than migrated.
 */
export function mediaSrc(url: string | null | undefined): string | null {
  if (!url) return null;
  const base = cdnBase();
  if (base && url.startsWith(`${base}/`)) return url;
  const key = keyFromPublicUrl(url);
  return key ? `${MEDIA_ROUTE}/${key}` : url;
}
