import { answerQuestion, systemPrompt } from "@/lib/assistant";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Message = { role: "user" | "assistant"; content: string };

const MODEL_ALLOWLIST = ["gpt-4o-mini", "gpt-4.1-mini", "gpt-4.1"];
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;
const buckets = new Map<string, { count: number; reset: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.reset < now) {
    buckets.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

function textResponse(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "local";

  if (rateLimited(ip)) {
    return textResponse(
      "I am getting a lot of questions at the moment. Please try again in a minute, or call the team on +267 3915990.",
      429,
    );
  }

  let payload: { messages?: unknown; pathname?: unknown };
  try {
    payload = await request.json();
  } catch {
    return textResponse("That request could not be read. Please try again.", 400);
  }

  const raw = Array.isArray(payload.messages) ? payload.messages : [];
  const messages: Message[] = raw
    .filter(
      (item): item is Message =>
        Boolean(item) &&
        typeof item === "object" &&
        (item as Message).role !== undefined &&
        ["user", "assistant"].includes((item as Message).role) &&
        typeof (item as Message).content === "string",
    )
    .map((item) => ({ role: item.role, content: item.content.slice(0, 1200) }))
    .slice(-8);

  const lastUser = [...messages].reverse().find((message) => message.role === "user");
  if (!lastUser || !lastUser.content.trim()) {
    return textResponse("Please type a question and I will do my best to help.", 400);
  }

  const pathname = typeof payload.pathname === "string" ? payload.pathname : "/";
  const apiKey = process.env.OPENAI_API_KEY;
  const requestedModel = process.env.CHAT_MODEL ?? "gpt-4o-mini";
  const model = MODEL_ALLOWLIST.includes(requestedModel) ? requestedModel : "gpt-4o-mini";

  if (apiKey && apiKey.trim().length > 10) {
    try {
      const upstreamUrl =
        process.env.CHAT_API_URL ?? "https://freebuff.com/api/v1/paid/chat/completions";
      const upstream = await fetch(upstreamUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey.trim()}`,
        },
        body: JSON.stringify({
          model,
          stream: false,
          temperature: 0.4,
          max_tokens: 420,
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
            { role: "system", content: `The visitor is currently on ${pathname}.` },
          ],
        }),
        signal: AbortSignal.timeout(25_000),
      });

      if (upstream.ok) {
        const data = (await upstream.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const reply = data.choices?.[0]?.message?.content?.trim();
        if (reply) {
          return new Response(reply, {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "no-store",
              "X-Content-Type-Options": "nosniff",
              "X-Assistant-Source": "model",
            },
          });
        }
      }
    } catch {
      // Fall through to the curated knowledge base.
    }
  }

  return textResponse(answerQuestion(lastUser.content, pathname));
}
