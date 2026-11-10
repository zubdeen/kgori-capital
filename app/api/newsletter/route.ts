import { NextResponse } from "next/server";
import { clientIp, isEmail, notify, rateLimit, store, trim } from "@/lib/forms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (!rateLimit(`newsletter:${ip}`, 10)) {
    return NextResponse.json({ error: "rate-limited" }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: "invalid-body" }, { status: 400 });
  }

  if (trim(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const email = trim(body.email, 254);
  if (!isEmail(email)) {
    return NextResponse.json({ errors: { email: "invalid" } }, { status: 400 });
  }

  const record = { email, ip };
  await store("subscribers", record);
  await notify("Newsletter subscription", `New subscriber: ${email}`, {
    kind: "subscription",
    ...record,
  });

  return NextResponse.json({ ok: true });
}
