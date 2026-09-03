import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type UploadFolder = "news" | "cv" | "content";

const REGION = process.env.AWS_REGION;
const BUCKET = process.env.S3_BUCKET_NAME;
// Optional: set for an S3-compatible provider (R2, MinIO, DigitalOcean Spaces, ...).
const ENDPOINT = process.env.S3_ENDPOINT;
// Optional: set to a CloudFront/CDN domain (e.g. "https://cdn.example.com") to serve
// uploads through it instead of the raw S3 URL.
const PUBLIC_URL_BASE = process.env.S3_PUBLIC_URL_BASE;

let client: S3Client | null = null;

function getClient(): S3Client {
  if (client) return client;

  if (!REGION || !BUCKET || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error(
      "S3 is not configured. Set AWS_REGION, S3_BUCKET_NAME, AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.",
    );
  }

  client = new S3Client({
    region: REGION,
    endpoint: ENDPOINT || undefined,
    forcePathStyle: Boolean(ENDPOINT),
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
  return client;
}

function publicUrlFor(key: string): string {
  if (PUBLIC_URL_BASE) return `${PUBLIC_URL_BASE.replace(/\/$/, "")}/${key}`;
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
}

/** Extracts the S3 object key from a URL previously returned by saveUpload/publicUrlFor. */
function keyFromPublicUrl(url: string): string | null {
  if (PUBLIC_URL_BASE && url.startsWith(PUBLIC_URL_BASE)) {
    return url.slice(PUBLIC_URL_BASE.replace(/\/$/, "").length + 1);
  }
  const s3HostPrefix = `https://${BUCKET}.s3.${REGION}.amazonaws.com/`;
  if (url.startsWith(s3HostPrefix)) {
    return url.slice(s3HostPrefix.length);
  }
  return null;
}

/**
 * Uploads a file to the S3 bucket under <folder>/ and returns its public URL.
 * The bucket must allow public reads for these URLs to resolve (either via a
 * bucket policy or by fronting the bucket with a CDN and setting S3_PUBLIC_URL_BASE).
 */
export async function saveUpload(file: File, folder: UploadFolder): Promise<string> {
  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name);
  const key = `${folder}/${randomUUID()}${ext}`;

  await getClient().send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: bytes,
      ContentType: file.type || "application/octet-stream",
    }),
  );

  return publicUrlFor(key);
}

export async function deleteUpload(publicUrl: string | null | undefined): Promise<void> {
  if (!publicUrl) return;
  const key = keyFromPublicUrl(publicUrl);
  if (!key) return;

  await getClient()
    .send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }))
    .catch(() => {});
}

/**
 * Reads pixel dimensions straight from the file header — no decoding, so it works
 * server-side without an image library. Supports PNG, JPEG, GIF, and WEBP (VP8/VP8X).
 */
export function getImageDimensions(buffer: Buffer): { width: number; height: number } | null {
  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  if (buffer.length >= 10 && buffer.toString("ascii", 0, 3) === "GIF") {
    return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
  }

  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 4 <= buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 2;
        continue;
      }
      const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      const segmentLength = buffer.readUInt16BE(offset + 2);
      if (isSOF) {
        return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
      }
      offset += 2 + segmentLength;
    }
    return null;
  }

  if (
    buffer.length >= 30 &&
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    const format = buffer.toString("ascii", 12, 16);
    if (format === "VP8X") {
      const width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16));
      const height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16));
      return { width, height };
    }
    if (format === "VP8 ") {
      return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
    }
    return null;
  }

  return null;
}
