"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

/**
 * Client feedback.
 *
 * One quotation at a time on its own band: the quote sets the pace of the
 * section, and the small print (disclosure, language note, controls) sits in the
 * quiet column beside it rather than stacked underneath. On small screens the
 * order falls back to heading, quote, then small print.
 */
export function Testimonials() {
  const { t, data, locale } = useLocale();
  const testimonials = data.testimonials;
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (direction: 1 | -1) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  const initials = current.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section
      id="client-feedback"
      aria-labelledby="client-feedback-title"
      className="scroll-mt-28 border-y border-line bg-paper-2 py-20 md:py-24"
    >
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
          <h2
            id="client-feedback-title"
            className="eyebrow text-rust lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-start"
          >
            {t("feedback.eyebrow")}
          </h2>

          <div
            className="lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1"
            aria-live="polite"
          >
            <figure key={index} className="animate-rise">
              <blockquote className="max-w-[36rem] text-[clamp(1.25rem,2.1vw,1.85rem)] font-medium leading-[1.5] tracking-[-0.02em] text-ink">
                <span aria-hidden="true" className="text-ink/25">
                  &ldquo;
                </span>
                {current.quote}
                <span aria-hidden="true" className="text-ink/25">
                  &rdquo;
                </span>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-9 w-9 items-center justify-center bg-ink text-[11.5px] font-semibold text-white">
                  {initials}
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-ink">{current.name}</span>
                  <span className="block text-[10.5px] uppercase tracking-[0.14em] text-muted">
                    {current.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="max-w-[22rem] text-[12px] leading-relaxed text-muted">
              {t("feedback.disclosure")}
            </p>
            {locale === "tn" && (
              <p className="mt-3 text-[11px] italic text-muted">{t("feedback.original")}</p>
            )}

            <div className="mt-7 flex items-center gap-2">
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
        </div>
      </div>
    </section>
  );
}
