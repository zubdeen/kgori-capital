"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

export function Testimonials() {
  const { t, data, locale } = useLocale();
  const testimonials = data.testimonials;
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (direction: 1 | -1) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-3">
        <p className="eyebrow text-rust">{t("feedback.eyebrow")}</p>
        <div className="mt-6 flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t("feedback.previous")}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t("feedback.next")}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <span className="tabular ml-2 text-[11px] text-muted">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="lg:col-span-9" aria-live="polite">
        <figure key={index} className="animate-rise pt-6">
          <blockquote className="max-w-3xl text-[clamp(1.05rem,1.7vw,1.4rem)] font-medium leading-[1.55] tracking-[-0.02em] text-ink">
            {current.quote}
          </blockquote>
          {locale === "tn" && (
            <p className="mt-3 text-[11px] italic text-muted">{t("feedback.original")}</p>
          )}
          <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-4">
            <span className="flex h-9 w-9 items-center justify-center bg-ink text-[12px] font-semibold text-white">
              {current.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </span>
            <span>
              <span className="block text-[13px] font-semibold text-ink">{current.name}</span>
              <span className="block text-[11px] uppercase tracking-[0.1em] text-muted">
                {current.role}
              </span>
            </span>
          </figcaption>
        </figure>
        <p className="mt-5 max-w-2xl text-[10.5px] leading-relaxed text-muted">
          {t("feedback.disclosure")}
        </p>
      </div>
    </div>
  );
}
