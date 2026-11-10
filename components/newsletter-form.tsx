"use client";

import { useId, useState } from "react";
import { useLocale } from "@/components/locale-provider";

export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const id = useId();
  const { copy } = useLocale();
  const c = copy.newsletter;

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError(c.error);
      return;
    }

    setError(null);
    setSending(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });

      if (response.ok) {
        setSent(true);
        setEmail("");
        return;
      }

      setError(response.status === 400 ? c.error : c.failure);
    } catch {
      setError(c.failure);
    } finally {
      setSending(false);
    }
  };

  const labelTone = tone === "dark" ? "text-white/70" : "text-ink-3";

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <label htmlFor={`${id}-email`} className={`mb-2 block text-[11.5px] font-medium ${labelTone}`}>
        {c.label}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          inputMode="email"
          placeholder="name@company.co.bw"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(null);
            if (sent) setSent(false);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : `${id}-hint`}
          className={`field h-11 flex-1 ${tone === "dark" ? "field-dark" : ""}`}
        />
        <button
          type="submit"
          disabled={sending}
          className={`btn h-11 min-h-11 shrink-0 px-4 text-[12.5px] ${
            tone === "dark" ? "btn-invert" : "btn-primary"
          }`}
        >
          {sending ? c.sending : c.submit}
        </button>
      </div>
      <p
        id={`${id}-hint`}
        className={`mt-2 text-[11px] ${tone === "dark" ? "text-paper/45" : "text-muted"}`}
      >
        {c.hint}
      </p>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className={`mt-2 text-[11.5px] ${tone === "dark" ? "text-[#F2AEB6]" : "text-rust"}`}
        >
          {error}
        </p>
      )}
      {sent && !error && (
        <p
          role="status"
          className={`mt-2 text-[11.5px] ${tone === "dark" ? "text-paper/70" : "text-rust"}`}
        >
          {c.success}
        </p>
      )}
    </form>
  );
}
