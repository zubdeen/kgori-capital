import { NextResponse } from "next/server";
import { clientIp, isEmail, notify, rateLimit, store, trim } from "@/lib/forms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (!rateLimit(`contact:${ip}`)) {
    return NextResponse.json({ error: "rate-limited" }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: "invalid-body" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (trim(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = trim(body.name, 120);
  const email = trim(body.email, 254);
  const phone = trim(body.phone, 40);
  const interest = trim(body.interest, 80);
  const message = trim(body.message, 4000);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "required";
  if (!isEmail(email)) errors.email = "invalid";
  if (message.length < 12) errors.message = "too-short";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const record = { name, email, phone, interest, message, ip };
  await store("enquiries", record);
  await notify(
    `Website enquiry: ${interest || "General"}`,
    [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Enquiring as: ${interest || "Not provided"}`,
      "",
      message,
    ].join("\n"),
    { kind: "enquiry", ...record },
  );

  return NextResponse.json({ ok: true });
}
