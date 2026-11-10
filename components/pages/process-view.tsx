"use client";

import { ArrowLink, CtaBand, PageHero } from "@/components/ui";
import { Check, Plus } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

export function ProcessView() {
  const { copy, data } = useLocale();
  const c = copy.investments.process;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-muted">{c.steps.eyebrow}</p>
              <h2 className="display mt-5 max-w-[15ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
                {c.steps.title}
              </h2>
              <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-muted">
                {c.steps.body}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="border-t border-line">
                {data.process.map((step, index) => {
                  const detail = c.steps.items[index];
                  return (
                    <li key={step.step} className="border-b border-line">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                          <span className="tabular w-9 shrink-0 pt-1 text-[1.4rem] font-bold leading-none tracking-[-0.04em] text-rust">
                            {step.step}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[1.25rem]">
                              {step.title}
                            </span>
                            <span className="mt-1.5 block max-w-xl text-[12.5px] leading-relaxed text-muted">
                              {step.body}
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border text-ink-3 transition-transform duration-300 group-open:rotate-45"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </span>
                        </summary>
                        <div className="pb-6 sm:pl-14">
                          <p className="max-w-2xl text-[13px] leading-relaxed text-ink-3">
                            {detail.body}
                          </p>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {detail.checks.map((check) => (
                              <li
                                key={check}
                                className="flex items-start gap-2.5 text-[12px] leading-relaxed text-ink-3"
                              >
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                                {check}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="eyebrow text-muted">{c.equities.eyebrow}</p>
            <h2 className="display mt-5 max-w-[20ch] text-[clamp(1.9rem,3.3vw,2.8rem)]">
              {c.equities.title}
            </h2>
            <p className="mt-6 border-l-2 border-rust pl-5 text-[1.05rem] font-medium leading-relaxed tracking-[-0.015em] text-ink">
              {c.equities.quote}
            </p>
            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-ink-3">
              <p>{c.equities.p1}</p>
              <p>{c.equities.p2}</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-ink pt-4">
              <ul className="mt-1">
                {c.equities.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-b border-line py-3.5 text-[13px] leading-relaxed text-ink-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="eyebrow text-muted">{c.fixedIncome.eyebrow}</p>
            <h2 className="display mt-5 max-w-[20ch] text-[clamp(1.9rem,3.3vw,2.8rem)]">
              {c.fixedIncome.title}
            </h2>
            <p className="mt-6 border-l-2 border-rust pl-5 text-[1.05rem] font-medium leading-relaxed tracking-[-0.015em] text-ink">
              {c.fixedIncome.quote}
            </p>
            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-ink-3">
              <p>{c.fixedIncome.p1}</p>
              <p>{c.fixedIncome.p2}</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-ink pt-4">
              <ul className="mt-1">
                {c.fixedIncome.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-b border-line py-3.5 text-[13px] leading-relaxed text-ink-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-10">
        <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-4">
          <ArrowLink href="/investments/capabilities">{c.linkCapabilities}</ArrowLink>
          <ArrowLink href="/investments/reporting">{c.linkReporting}</ArrowLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
