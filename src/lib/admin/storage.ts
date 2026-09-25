import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { publicUrlFor, keyFromPublicUrl } from "./media";
import { floorPlanKey, type Tower } from "@/lib/floorPlans";

export type UploadFolder = "news" | "cv" | "content";

const REGION = process.env.AWS_REGION;
const BUCKET = process.env.S3_BUCKET_NAME;
// Optional: set for an S3-compatible provider (R2, MinIO, DigitalOcean Spaces, ...).
const ENDPOINT = process.env.S3_ENDPOINT;

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

/**
 * Uploads a file to the S3 bucket under <folder>/ and returns the URL to store.
 * The bucket stays private: that URL points at /api/media, which streams the object
 * back using these credentials. Set S3_PUBLIC_URL_BASE to serve via a CDN instead.
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

/** Overwrites the tower's floor plan PDF at its fixed key — one object per tower, no DB record. */
export async function saveFloorPlan(file: File, tower: Tower): Promise<void> {
  const bytes = Buffer.from(await file.arrayBuffer());
  await getClient().send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: floorPlanKey(tower),
      Body: bytes,
      ContentType: "application/pdf",
    }),
  );
}

/** Whether a tower's floor plan PDF has been uploaded yet — used to show status in the admin UI. */
export async function floorPlanExists(tower: Tower): Promise<boolean> {
  try {
    await getClient().send(new HeadObjectCommand({ Bucket: BUCKET, Key: floorPlanKey(tower) }));
    return true;
  } catch (error) {
    const name = (error as { name?: string }).name;
    if (name === "NotFound" || name === "NoSuchKey") return false;
    throw error;
  }
}

export type UploadObject = {
  body: ReadableStream;
  contentType: string;
  contentLength?: number;
  etag?: string;
};

/** Fetches an object for the /api/media route. Returns null when the key doesn't exist. */
export async function getUpload(key: string): Promise<UploadObject | null> {
  try {
    const result = await getClient().send(new GetObjectCommand({ Bucket: BUCKET, Key: key }));
    if (!result.Body) return null;
    return {
      body: result.Body.transformToWebStream(),
      contentType: result.ContentType || "application/octet-stream",
      contentLength: result.ContentLength,
      etag: result.ETag,
    };
  } catch (error) {
    const name = (error as { name?: string }).name;
    if (name === "NoSuchKey" || name === "NotFound") return null;
    throw error;
  }
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
