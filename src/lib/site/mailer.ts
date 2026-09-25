import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

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
