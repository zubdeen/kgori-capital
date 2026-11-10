"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BrandMark } from "@/components/brand";
import { ChatIcon, Close, SendIcon } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import type { Dict } from "@/lib/i18n";

type Message = { id: string; role: "user" | "assistant"; content: string };

const chipKeys: { label: keyof Dict; query: string }[] = [
  { label: "assistant.chip1", query: "Which fund suits me?" },
  { label: "assistant.chip2", query: "How do I start investing?" },
  { label: "assistant.chip3", query: "Can I withdraw at any time?" },
  { label: "assistant.chip4", query: "What documents do I need?" },
];

export function Assistant() {
  const pathname = usePathname();
  const { t, locale } = useLocale();
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const close = useCallback(() => {
    abortRef.current?.abort();
    setBusy(false);
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => {
    if (open && window.matchMedia("(pointer: fine)").matches) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollTo({ top: node.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [messages, busy]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], textarea, input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || busy) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const pendingId = crypto.randomUUID();
    const history = [...messages, userMessage].filter((message) => message.id !== "welcome");

    setMessages((current) => [
      ...current,
      userMessage,
      { id: pendingId, role: "assistant", content: "" },
    ]);
    setInput("");
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pathname,
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });
      const reply = (await response.text()).trim();
      if (!response.ok) throw new Error(reply || "Request failed");
      setMessages((current) =>
        current.map((message) =>
          message.id === pendingId
            ? { ...message, content: reply || t("assistant.noAnswer") }
            : message,
        ),
      );
    } catch (error) {
      if ((error as Error).name === "AbortError") return;
      setMessages((current) =>
        current.map((message) =>
          message.id === pendingId
            ? {
                ...message,
                content: t("assistant.unreachable"),
              }
            : message,
        ),
      );
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void send();
  };

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        className={`group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[70] flex items-center gap-3 bg-ink py-2 pl-2 pr-4 text-white transition-colors duration-200 hover:bg-rust md:bottom-[max(1.5rem,env(safe-area-inset-bottom))] md:right-[max(1.5rem,env(safe-area-inset-right))] ${
          open ? "pointer-events-none translate-y-1 opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-9 w-9 items-center justify-center bg-rust text-white">
          <ChatIcon className="h-4 w-4" />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[12.5px] font-semibold">{t("assistant.launcher")}</span>
          <span className="mt-0.5 text-[10px] tracking-[0.04em] text-white/50">
            {t("assistant.launcherNote")}
          </span>
        </span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("assistant.dialogLabel")}
        hidden={!open}
        className={`fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[80] flex h-[min(38rem,calc(100dvh-1.5rem-env(safe-area-inset-top)-env(safe-area-inset-bottom)))] flex-col overflow-hidden border border-line bg-paper shadow-[0_40px_80px_-30px_rgba(23,18,15,0.45)] sm:inset-x-auto sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:h-[min(36rem,calc(100dvh-3rem-env(safe-area-inset-top)-env(safe-area-inset-bottom)))] sm:w-[25.5rem] ${
          open ? "animate-rise" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3.5">
          <div className="flex items-center gap-3">
            <BrandMark className="h-7 w-auto" />
            <div>
              <p className="text-[13px] font-semibold text-ink">{t("assistant.title")}</p>
              <p className="text-[10.5px] text-muted">{t("assistant.subtitle")}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={t("assistant.close")}
            className="-mr-1 flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-ink"
          >
            <Close className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto overscroll-contain bg-paper-2/40 px-4 py-4"
          aria-live="polite"
          aria-atomic="false"
        >
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border bg-paper">
              <BrandMark className="h-3.5 w-auto" />
            </span>
            <div className="max-w-[85%] border bg-paper px-3.5 py-2.5">
              <p className="text-[13px] leading-relaxed text-ink-3">
                {t("assistant.welcome")}
                {locale === "tn" ? " Dikarabo di ka nna ka Sekgowa." : ""}
              </p>
            </div>
          </div>

          {messages.map((message) =>
            message.role === "assistant" ? (
              <div key={message.id} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-line bg-paper">
                  <BrandMark className="h-3.5 w-auto" />
                </span>
                <div className="max-w-[85%] border border-line bg-paper px-3.5 py-2.5">
                  {message.content ? (
                    <RichText text={message.content} />
                  ) : (
                    <span className="flex items-center gap-1 py-1" aria-label={t("assistant.thinking")}>
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted/60"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-end">
                <p className="max-w-[85%] bg-ink px-3.5 py-2.5 text-[13px] leading-relaxed text-paper">
                  {message.content}
                </p>
              </div>
            ),
          )}

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 pl-8">
              {chipKeys.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => void send(chip.query)}
                  className="inline-flex min-h-11 items-center border bg-paper px-2.5 py-2 text-left text-[11.5px] text-ink-3 transition-colors duration-300 hover:border-ink/40 hover:text-ink"
                >
                  {t(chip.label)}
                </button>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={onSubmit} className="border-t border-line bg-paper px-3 pb-3 pt-3">
          <label htmlFor={`${panelId}-input`} className="sr-only">
            {t("assistant.questionLabel")}
          </label>
          <div className="flex items-end gap-2">
            <textarea
              id={`${panelId}-input`}
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={800}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void send();
                }
              }}
              placeholder={t("assistant.placeholder")}
              className="field max-h-28 min-h-11 resize-none py-3 text-[13px]"
              aria-describedby={`${panelId}-hint`}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label={t("assistant.send")}
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-rust text-paper transition-colors duration-300 hover:bg-maroon disabled:cursor-not-allowed disabled:bg-line disabled:text-muted"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p id={`${panelId}-hint`} className="text-[10px] text-muted">
              {t("assistant.enterHint")}
            </p>
            <Link
              href="/contact"
              onClick={close}
              className="link-line inline-flex min-h-11 items-center text-[11px] font-medium text-ink-3"
            >
              {t("assistant.talk")}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-2 text-[13px] leading-relaxed text-ink-3">
      {lines.map((line, lineIndex) =>
        line.trim() === "" ? (
          <span key={lineIndex} className="block h-1" aria-hidden />
        ) : (
          <p key={lineIndex}>{renderInline(line)}</p>
        ),
      )}
    </div>
  );
}

function renderInline(line: string) {
  const tokens = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g);
  return tokens.map((token, index) => {
    if (!token) return null;
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href} className="text-rust underline underline-offset-2">
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rust underline underline-offset-2"
        >
          {label}
        </a>
      );
    }
    if (/^https?:\/\//.test(token)) {
      return (
        <a
          key={index}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-rust underline underline-offset-2"
        >
          {token.replace(/^https?:\/\//, "")}
        </a>
      );
    }
    return <span key={index}>{token}</span>;
  });
}
