"use client";

import Link from "next/link";
import {
  BanknoteIcon,
  ChartIcon,
  Check,
  FileIcon,
  GlobeIcon,
  PieIcon,
  Plus,
  ArrowRight,
} from "@/components/icons";
import { ArrowLink, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";

const capabilityIcons = [GlobeIcon, PieIcon, ChartIcon, FileIcon, BanknoteIcon];

export function CapabilitiesView() {
  const { copy, data } = useLocale();
  const c = copy.investments.capabilities;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="border-t border-line">
            {data.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? ChartIcon;
              const detail = c.items[index];
              return (
                <details key={capability.name} className="group border-b border-line">
                  <summary className="grid cursor-pointer list-none items-start gap-3 py-5 sm:grid-cols-[1.5rem_1fr_1.4fr_auto] sm:items-center sm:gap-8 [&::-webkit-details-marker]:hidden">
                    <Icon className="h-5 w-5 shrink-0 text-rust" />
                    <h2 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.02em]">
                      {capability.name}
                    </h2>
                    <p className="text-[13px] leading-relaxed text-muted">{capability.detail}</p>
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center border text-ink-3 transition-transform duration-300 group-open:rotate-45"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </span>
                  </summary>
                  <div className="grid gap-6 pb-6 sm:grid-cols-2 sm:pl-[4.5rem]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-muted">
                        {c.labels.suits}
                      </p>
                      <p className="mt-2 max-w-sm text-[12.5px] leading-relaxed text-ink-3">
                        {detail.suits}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-muted">
                        {c.labels.access}
                      </p>
                      <p className="mt-2 max-w-sm text-[12.5px] leading-relaxed text-ink-3">
                        {detail.access}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-rust hover:text-ink"
                      >
                        {c.enquire}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
          <p className="mt-6 max-w-2xl text-[12.5px] leading-relaxed text-muted">{c.note}</p>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={c.split.eyebrow} title={c.split.title} />
          <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
            <div className="bg-paper p-6 md:p-8">
              <h3 className="text-[1.15rem] font-semibold">{c.split.institutional.title}</h3>
              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-ink-3">
                {c.split.institutional.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {c.split.institutional.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-3"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ArrowLink href="/contact">{c.enquire}</ArrowLink>
              </div>
            </div>

            <div className="bg-paper p-6 md:p-8">
              <h3 className="text-[1.15rem] font-semibold">{c.split.private.title}</h3>
              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-ink-3">
                {c.split.private.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {c.split.private.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-3"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ArrowLink href="/funds">{c.split.private.link}</ArrowLink>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
            <ArrowLink href="/investments/process">{c.links.process}</ArrowLink>
            <ArrowLink href="/investments/reporting">{c.links.reporting}</ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
