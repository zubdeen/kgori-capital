"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseIcon,
  Check,
  LeafIcon,
  NetworkIcon,
  SearchIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";
import { ArrowLink, CtaBand } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { blurProps } from "@/lib/image-blur";

const essentialIcons = [
  UsersIcon,
  BriefcaseIcon,
  SearchIcon,
  LeafIcon,
  NetworkIcon,
  ShieldIcon,
];

export function InvestmentsView() {
  const { copy } = useLocale();
  const c = copy.investments;

  return (
    <>
      <figure className="border-b border-line">
        <section className="relative isolate overflow-hidden bg-ink text-white">
          <Image
            src="/images/research.webp"
            {...blurProps("/images/research.webp")}
            alt={c.intro.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/60" />
          <div className="container-x relative z-10 py-16 md:py-20">
            <p className="eyebrow text-white/65">{c.hero.eyebrow}</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
              <h1 className="display text-[clamp(2.5rem,5.6vw,4.6rem)] lg:col-span-8">
                {c.hero.title}
              </h1>
              <p className="max-w-md text-[15px] leading-relaxed text-white/80 lg:col-span-4 lg:pb-1.5">
                {c.hero.lead}
              </p>
            </div>
          </div>
        </section>
      </figure>

      <section className="py-8 md:py-10">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-[1.4] tracking-[-0.025em] text-ink">
              {c.intro.quote}
            </p>
            <div className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-ink-3">
              <p>{c.intro.p1}</p>
              <p>{c.intro.p2}</p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border border-line p-6">
              <p className="label">{c.dont.label}</p>
              <ul className="mt-4 space-y-3">
                {c.dont.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-3"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="essentials" className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{c.essentials.eyebrow}</p>
            <h2 className="display mt-5 max-w-[14ch] text-[clamp(2rem,3.4vw,2.9rem)]">
              {c.essentials.title}
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted">
              {c.essentials.body}
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-px bg-line sm:grid-cols-2">
              {c.essentials.items.map((item, index) => {
                const Icon = essentialIcons[index] ?? ShieldIcon;
                return (
                  <li
                    key={item}
                    className={`flex items-start gap-3 bg-paper p-5 text-[12.5px] leading-relaxed text-ink-3 ${
                      index === c.essentials.items.length - 1 &&
                      c.essentials.items.length % 2 === 1
                        ? "lg:col-span-2 lg:justify-center lg:text-center"
                        : ""
                    }`}
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x">
          
          <div className="mt-8 grid gap-px bg-line md:grid-cols-3">
            {[
              { href: "/investments/process", eyebrow: c.process.eyebrow, title: c.process.title },
              {
                href: "/investments/capabilities",
                eyebrow: c.capabilities.eyebrow,
                title: c.capabilities.title,
              },
              {
                href: "/investments/reporting",
                eyebrow: c.reporting.eyebrow,
                title: c.reporting.title,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col bg-paper p-6 transition-colors hover:bg-white md:p-7"
              >
                <span className="eyebrow text-muted">{item.eyebrow}</span>
                <span className="mt-4 text-[1.2rem] font-semibold leading-snug tracking-[-0.02em]">
                  {item.title}
                </span>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-rust">
                  {copy.common.read}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ArrowLink href="/funds">{c.reporting.documents}</ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
