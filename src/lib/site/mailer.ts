import { SESClient, SendEmailCommand, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { randomUUID } from "node:crypto";
import { towerLabel, type Tower } from "@/lib/floorPlans";

const REGION = process.env.AWS_REGION;
const FROM_EMAIL = process.env.SES_FROM_EMAIL;
const TO_EMAIL = process.env.SES_TO_EMAIL;

let client: SESClient | null = null;

function getClient(): SESClient {
  if (client) return client;

  if (!REGION || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error("SES is not configured. Set AWS_REGION, AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.");
  }

  client = new SESClient({
    region: REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
  return client;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Sends a notification email for a submitted inquiry form. Recipient/sender come from SES_TO_EMAIL / SES_FROM_EMAIL. */
export async function sendInquiryEmail(options: {
  subject: string;
  fields: Array<{ label: string; value: string }>;
  replyTo: string;
}): Promise<void> {
  if (!FROM_EMAIL || !TO_EMAIL) {
    throw new Error("SES is not configured. Set SES_FROM_EMAIL and SES_TO_EMAIL.");
  }

  const rowsHtml = options.fields
    .map(
      (f) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;">${escapeHtml(f.label)}</td><td style="padding:4px 0;">${escapeHtml(f.value).replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("");
  const rowsText = options.fields.map((f) => `${f.label}: ${f.value}`).join("\n");

  await getClient().send(
    new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: { ToAddresses: [TO_EMAIL] },
      ReplyToAddresses: options.replyTo ? [options.replyTo] : undefined,
      Message: {
        Subject: { Data: options.subject, Charset: "UTF-8" },
        Body: {
          Html: { Data: `<table cellspacing="0" cellpadding="0">${rowsHtml}</table>`, Charset: "UTF-8" },
          Text: { Data: rowsText, Charset: "UTF-8" },
        },
      },
    }),
  );
}

function encodeHeaderValue(value: string): string {
  // RFC 2047 encoded-word — needed since raw headers below aren't handled by SES the way
  // SendEmailCommand's structured Subject field is.
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function base64Wrapped(data: Buffer | string): string {
  const b64 = Buffer.isBuffer(data) ? data.toString("base64") : Buffer.from(data, "utf8").toString("base64");
  return b64.replace(/(.{76})/g, "$1\r\n");
}

/**
 * Sends a notification email with a file attached (e.g. a job application's CV).
 * Uses SES's raw-message API since the structured SendEmailCommand has no attachment support.
 */
export async function sendEmailWithAttachment(options: {
  subject: string;
  fields: Array<{ label: string; value: string }>;
  replyTo: string;
  attachment: { filename: string; contentType: string; content: Buffer };
}): Promise<void> {
  if (!FROM_EMAIL || !TO_EMAIL) {
    throw new Error("SES is not configured. Set SES_FROM_EMAIL and SES_TO_EMAIL.");
  }

  const bodyText = options.fields.map((f) => `${f.label}: ${f.value}`).join("\n");
  const boundary = `----=_Part_${randomUUID()}`;
  const safeFilename = options.attachment.filename.replace(/["\r\n]/g, "_");

  const message = [
    `From: ${FROM_EMAIL}`,
    `To: ${TO_EMAIL}`,
    `Reply-To: ${options.replyTo}`,
    `Subject: ${encodeHeaderValue(options.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    base64Wrapped(bodyText),
    `--${boundary}`,
    `Content-Type: ${options.attachment.contentType}; name="${safeFilename}"`,
    "Content-Transfer-Encoding: base64",
    `Content-Disposition: attachment; filename="${safeFilename}"`,
    "",
    base64Wrapped(options.attachment.content),
    `--${boundary}--`,
    "",
  ].join("\r\n");

  await getClient().send(new SendRawEmailCommand({ RawMessage: { Data: Buffer.from(message, "utf8") } }));
}

/**
 * Emails a visitor their temporary floor plan download link.
 * Note: while the SES account is in sandbox mode, `to` must itself be a verified address.
 */
export async function sendFloorPlanLinkEmail(options: { to: string; tower: Tower; link: string }): Promise<void> {
  if (!FROM_EMAIL) {
    throw new Error("SES is not configured. Set SES_FROM_EMAIL.");
  }

  const label = towerLabel(options.tower);
  const html = `<p>Thanks for your interest in ${escapeHtml(label)}.</p><p><a href="${escapeHtml(options.link)}">Download the floor plan (PDF)</a></p><p>This link expires in 30 minutes. If it has expired, please request a new one from the website.</p>`;
  const text = `Thanks for your interest in ${label}.\n\nDownload the floor plan: ${options.link}\n\nThis link expires in 30 minutes. If it has expired, please request a new one from the website.`;

  await getClient().send(
    new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: { ToAddresses: [options.to] },
      Message: {
        Subject: { Data: `${label} Floor Plan — Download Link`, Charset: "UTF-8" },
        Body: {
          Html: { Data: html, Charset: "UTF-8" },
          Text: { Data: text, Charset: "UTF-8" },
        },
      },
    }),
  );
}
