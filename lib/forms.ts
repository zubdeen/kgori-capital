import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Server-side plumbing for the website forms.
 *
 * Every submission is written to `.data/*.jsonl` so nothing is silently lost.
 * Email delivery is optional: set RESEND_API_KEY and CONTACT_INBOX to have the
 * team notified, or CONTACT_WEBHOOK_URL to forward into a CRM or automation.
 */

const DATA_DIR = path.join(process.cwd(), ".data");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string) {
  return value.length <= 254 && EMAIL_PATTERN.test(value);
}

export function trim(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Simple in-memory limiter. Adequate for a single Node process. */
const buckets = new Map<string, { count: number; reset: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60_000) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function store(kind: "enquiries" | "subscribers", record: Record<string, unknown>) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const line = JSON.stringify({ ...record, receivedAt: new Date().toISOString() });
  await fs.appendFile(path.join(DATA_DIR, `${kind}.jsonl`), `${line}\n`, "utf8");
}

async function sendEmail(subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX;
  if (!key || !inbox) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Kgori Capital website <website@kgoricapital.com>",
      to: [inbox],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed with status ${response.status}`);
  }
}

async function sendWebhook(body: Record<string, unknown>) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }
}

/**
 * Best-effort notification. The submission is already stored, so a delivery
 * failure is logged rather than surfaced to the visitor.
 */
export async function notify(subject: string, text: string, payload: Record<string, unknown>) {
  try {
    await sendEmail(subject, text);
  } catch (error) {
    console.error("[forms] email delivery failed", error);
  }

  try {
    await sendWebhook(payload);
  } catch (error) {
    console.error("[forms] webhook delivery failed", error);
  }
}
