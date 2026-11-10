"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";

export function Eyebrow({
  children,
  className = "",
  tone = "muted",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "muted" | "rust" | "paper";
}) {
  const color = tone === "rust" ? "text-rust" : tone === "paper" ? "text-white/55" : "text-muted";
  return <p className={`eyebrow ${color} ${className}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "ink",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  const isPaper = tone === "paper";
  return (
    <div className={`grid gap-8 lg:grid-cols-12 lg:gap-10 ${className}`}>
      <Reveal className="lg:col-span-6">
        {eyebrow && (
          <Eyebrow tone={isPaper ? "paper" : "rust"} className="mb-5">{eyebrow}</Eyebrow>
        )}
        <h2
          className={`display max-w-[19ch] text-[clamp(2.1rem,3.9vw,3.35rem)] ${
            isPaper ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={80} className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <div
            className={`max-w-xl text-[15px] leading-relaxed ${
              isPaper ? "text-white/65" : "text-muted"
            }`}
          >
            {lead}
          </div>
        </Reveal>
      )}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
  tone = "ink",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "paper" | "rust";
  external?: boolean;
}) {
  const color =
    tone === "paper" ? "text-white hover:text-white/70" : tone === "rust" ? "text-rust" : "text-ink";
  const content = (
    <span className={`link-line inline-flex items-center text-[13.5px] font-semibold ${color} ${className}`}>
      {children}
    </span>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}

export function RiskMeter({ score, label }: { score: number; label?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex items-center gap-1" aria-hidden>
        {[1, 2, 3, 4, 5].map((level) => (
          <span
            key={level}
            className={`h-1 w-4 ${level <= score ? "bg-rust" : "bg-ink/15"}`}
          />
        ))}
      </span>
      <span className="text-[11px] uppercase tracking-[0.08em] text-muted">
        {label ?? "Risk"} {score}/5
      </span>
    </span>
  );
}

export function StatBlock({
  value,
  label,
  tone = "ink",
}: {
  value: string;
  label: string;
  tone?: "paper" | "ink";
}) {
  const isPaper = tone === "paper";
  return (
    <div className={"pt-4"}>
      <p
        className={`tabular text-[clamp(2rem,3.2vw,2.75rem)] font-bold leading-none tracking-[-0.04em] ${
          isPaper ? "text-white" : "text-rust"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-0 max-w-[24ch] text-[12.5px] leading-relaxed font-medium ${
          isPaper ? "text-white/55" : "text-ink"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pb-4 pt-10 md:pb-8 md:pt-16">
      <div className="container-x">
        <Eyebrow tone="rust" className="mb-5">{eyebrow}</Eyebrow>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h1 className="display col-span-full text-[clamp(2.5rem,5.6vw,4.6rem)] lg:col-span-8">
            {title}
          </h1>
          {lead && (
            <div className="col-span-full max-w-md text-[15px] leading-relaxed text-muted lg:col-span-4 lg:pb-1.5">
              {lead}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useLocale();
  return (
    <section className="on-rust bg-rust text-white">
      <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-white/60">{t("cta.eyebrow")}</p>
          <h2 className="display mt-5 max-w-[16ch] text-[clamp(2.2rem,4.6vw,3.8rem)]">
            {t("cta.title")}
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-8">
          <p className="max-w-sm text-[14.5px] leading-relaxed text-white/75">{t("cta.body")}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-invert">
              {t("cta.book")}
            </Link>
            <Link
              href="/funds"
              className="btn border border-white/50 bg-white/5 text-white hover:border-white hover:bg-white/15"
            >
              {t("cta.explore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
