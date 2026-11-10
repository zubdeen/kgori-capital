"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  GraduationIcon,
  LeafIcon,
  NewspaperIcon,
  ScaleIcon,
  UsersIcon,
} from "@/components/icons";
import { ArrowLink, SectionHeading } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { blurProps } from "@/lib/image-blur";

const pillarIcons = [UsersIcon, LeafIcon, ScaleIcon];
const initiativeIcons = [GraduationIcon, NewspaperIcon];

const stewardshipHrefs = [
  "https://www.kgoricapital.com/wp-content/uploads/2023/04/Investor-Stewardship-Policy.pdf",
  "https://www.kgoricapital.com/wp-content/uploads/2024/10/Proxy-Q3-2024.pdf",
  "https://www.nbfira.org.bw/regulated-entities/",
];

export function ResponsibilityView() {
  const { copy } = useLocale();
  const c = copy.responsibility;

  return (
    <>
      <section className="border-b border-line">
        <section className="relative isolate overflow-hidden bg-ink text-white">
          <Image
            src="/images/citizenship.webp"
            {...blurProps("/images/citizenship.webp")}
            alt={c.citizenship.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%]"
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
      </section>

      <section className="py-8 md:py-10">
        <div className="container-x">
          <div className="grid gap-px border-t border-line bg-line md:grid-cols-3">
            {c.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? LeafIcon;
              return (
              <Reveal key={pillar.title} delay={index * 80} className="bg-paper">
                <div className="flex h-full gap-4 p-7 md:gap-5 md:p-8">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-rust" />
                  <div>
                    <h2 className="text-[1.25rem] font-semibold leading-tight">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">{pillar.body}</p>
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-16 text-paper md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-white/45">{c.pri.eyebrow}</p>
            <h2 className="display mt-5 max-w-[15ch] text-[clamp(2rem,3.8vw,3.1rem)]">
              {c.pri.title}
            </h2>
            <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-paper/65">
              {c.pri.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.kgoricapital.com/wp-content/uploads/2022/12/2021-Assessment-Report-for-Kgori-Capital-Pty-Ltd.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-invert"
              >
                {c.pri.assessment}
                <Download className="h-4 w-4" />
              </a>
              <a
                href="https://www.kgoricapital.com/wp-content/uploads/2022/12/Private_RI_Report_Kgori-Capital-(Pty)-Ltd_2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-paper/25 text-paper hover:border-paper/60"
              >
                {c.pri.transparency}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative mb-8 aspect-[16/10] overflow-hidden bg-ink">
              <Image
                src="/images/stewardship.webp"
                {...blurProps("/images/stewardship.webp")}
                alt={c.pri.photoAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mb-4 text-[11px] leading-relaxed text-paper/40">{c.pri.photoCaption}</p>
            <div className="border-t border-line-dark pt-6">
              <h3 className="text-[1.1rem] font-semibold">{c.pri.documentsTitle}</h3>
              <ul className="mt-5">
                {c.pri.documents.map((label, index) => (
                  <li key={label}>
                    <a
                      href={stewardshipHrefs[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 border-b border-line-dark py-4 text-[12.5px] text-paper/75 transition-colors hover:text-paper"
                    >
                      {label}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-paper/40 transition-colors group-hover:text-rust-bright" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[10.5px] leading-relaxed text-paper/55">
                {c.pri.documentsNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow={c.citizenship.eyebrow}
            title={c.citizenship.title}
            lead={c.citizenship.lead}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                  <Image
                    src="/images/citizenship-school.webp"
                    {...blurProps("/images/citizenship-school.webp")}
                    alt={c.citizenship.schoolAlt}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 text-[11px] leading-relaxed text-muted">
                  {c.citizenship.schoolCaption}
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-6 lg:col-span-5 lg:content-start">
              {c.citizenship.initiatives.map((initiative, index) => {
                const Icon = initiativeIcons[index] ?? NewspaperIcon;
                return (
                <Reveal key={initiative.title} delay={index * 80}>
                  <article className="group flex h-full gap-4 border border-line p-6 transition-colors duration-500 hover:bg-paper-2/50 md:gap-5">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-rust" />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-rust">{initiative.tag}</span>
                      <h3 className="mt-2 text-[1.2rem] font-semibold leading-snug">{initiative.title}</h3>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">{initiative.body}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-[11.5px] text-ink">
                      <Link href="/contact" className="link-line">
                        {c.citizenship.enquire}
                      </Link>
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    </div>
                  </article>
                </Reveal>
                );
              })}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ArrowLink href="/investments/reporting">{c.citizenship.reporting}</ArrowLink>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] text-ink">
              {c.citizenship.partner}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
