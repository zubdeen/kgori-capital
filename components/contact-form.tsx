"use client";

import { useId, useRef, useState } from "react";
import { company } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const id = useId();
  const { copy } = useLocale();
  const c = copy.contactForm;

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      interest: String(form.get("interest") ?? ""),
      message: String(form.get("message") ?? "").trim(),
      website: String(form.get("website") ?? ""),
    };

    const next: Errors = {};
    if (!payload.name) next.name = c.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) next.email = c.errors.email;
    if (payload.message.length < 12) next.message = c.errors.message;

    setErrors(next);
    const firstError = Object.keys(next)[0] as Field | undefined;
    if (firstError) {
      const map = { name: nameRef, email: emailRef, message: messageRef } as const;
      map[firstError].current?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("sent");
        formEl.reset();
        return;
      }

      if (response.status === 400) {
        const data = (await response.json().catch(() => null)) as {
          errors?: Record<string, string>;
        } | null;
        if (data?.errors) {
          setErrors({
            name: data.errors.name ? c.errors.name : undefined,
            email: data.errors.email ? c.errors.email : undefined,
            message: data.errors.message ? c.errors.message : undefined,
          });
          setStatus("idle");
          return;
        }
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="mb-2 block text-[11.5px] font-medium text-ink-3">
            {c.name}
          </label>
          <input
            ref={nameRef}
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Thabo Mokoena"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className="field"
          />
          {errors.name && (
            <p id={`${id}-name-error`} role="alert" className="mt-1.5 text-[11.5px] text-rust">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="mb-2 block text-[11.5px] font-medium text-ink-3">
            {c.email}
          </label>
          <input
            ref={emailRef}
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="name@company.co.bw"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className="field"
          />
          {errors.email && (
            <p id={`${id}-email-error`} role="alert" className="mt-1.5 text-[11.5px] text-rust">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-2 block text-[11.5px] font-medium text-ink-3">
            {c.phone} <span className="text-muted">{c.optional}</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+267 71 234 567"
            className="field"
          />
        </div>
        <div>
          <label
            htmlFor={`${id}-interest`}
            className="mb-2 block text-[11.5px] font-medium text-ink-3"
          >
            {c.interest}
          </label>
          <select id={`${id}-interest`} name="interest" className="field bg-white">
            {c.interests.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="mb-2 block text-[11.5px] font-medium text-ink-3">
          {c.message}
        </label>
        <textarea
          ref={messageRef}
          id={`${id}-message`}
          name="message"
          rows={5}
          placeholder={c.messagePlaceholder}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : `${id}-message-hint`}
          className="field resize-y"
        />
        {errors.message ? (
          <p id={`${id}-message-error`} role="alert" className="mt-1.5 text-[11.5px] text-rust">
            {errors.message}
          </p>
        ) : (
          <p id={`${id}-message-hint`} className="mt-1.5 text-[11px] text-muted">
            {c.hint}
          </p>
        )}
      </div>

      {/* Honeypot, hidden from people and assistive technology. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-rust" disabled={status === "sending"}>
          {status === "sending" ? c.sending : c.submit}
        </button>
        <p className="max-w-[24rem] text-[11px] leading-relaxed text-muted">
          {c.note}{" "}
          <a href={`mailto:${company.email}`} className="link-line text-ink">
            {company.email}
          </a>
        </p>
      </div>

      {status === "sent" && (
        <p
          role="status"
          className="border border-line bg-paper-2/60 px-4 py-3 text-[12.5px] text-ink-3"
        >
          {c.success}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="border border-rust/30 bg-rust/5 px-4 py-3 text-[12.5px] text-rust">
          {c.failure}{" "}
          <a href={`mailto:${company.email}`} className="underline underline-offset-2">
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
