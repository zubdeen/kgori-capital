"use client";

import Image from "next/image";
import { ArrowLink, SectionHeading, StatBlock } from "@/components/ui";
import { StarIcon, valueIcons } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { company } from "@/lib/content";
import { blurProps } from "@/lib/image-blur";

export function AboutView() {
  const { copy, data } = useLocale();
  const c = copy.about;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/team.webp"
          {...blurProps("/images/team.webp")}
          alt={c.teamPhoto.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden />
        <div className="container-x relative flex min-h-[440px] flex-col justify-end pb-12 pt-24 md:min-h-[560px] md:pb-16 md:pt-32">
          <p className="eyebrow text-white/70">{c.hero.eyebrow}</p>
          <h1 className="display mt-5 max-w-[20ch] text-[clamp(2.4rem,5.6vw,4.6rem)] text-white">
            {c.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-[14.5px] leading-relaxed text-white/70">
            {c.hero.lead}
          </p>
          <p className="mt-10 text-[10.5px] uppercase tracking-[0.12em] text-white/50">
            {c.teamPhoto.caption}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-[clamp(1.4rem,2.3vw,1.9rem)] font-medium leading-[1.4] tracking-[-0.025em] text-ink">
              {c.intro.quote}
            </p>
            <div className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-ink-3">
              <p>{c.intro.p1}</p>
              <p>{c.intro.p2}</p>
              <p>{c.intro.p3}</p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-8 text-center">
              {c.stats.map((label, index) => (
                <div
                  key={label}
                  className={index === 2 ? "col-span-2 [&>div>p:last-child]:mx-auto" : ""}
                >
                  <StatBlock
                    value={index === 0 ? "2012" : index === 1 ? "100%" : "100+"}
                    label={label}
                    tone="ink"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 border border-line p-5">
              <p className="label">{c.registered.label}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-3">
                {company.legalName}
                <br />
                {c.registered.regLabel} {company.registration}
                <br />
                {c.registered.licence}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={c.story.eyebrow} title={c.story.title} lead={c.story.lead} />
          <ol className="mt-10 grid gap-px bg-line md:grid-cols-4">
            {c.story.items.map((item) => (
              <li key={item.year} className="bg-paper">
                <div className="flex h-full flex-col p-6 md:p-7">
                  <span className="tabular w-full text-center text-[2rem] font-bold leading-none tracking-[-0.04em] text-rust">
                    {item.year}
                  </span>
                  <h3 className="mt-6 text-[15px] font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="values" className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow={c.values.eyebrow}
            title={c.values.title}
            lead={c.values.lead}
          />
          <ul className="mt-10 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {data.values.map((value, index) => {
              const Icon = valueIcons[index] ?? StarIcon;
              return (
                <li key={value.name} className="bg-paper">
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0 text-rust" />
                      <h3 className="text-[15px] font-semibold">{value.name}</h3>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{value.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="ownership" className="bg-ink py-16 text-white md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/45">{c.ownership.eyebrow}</p>
            <h2 className="display mt-5 max-w-[18ch] text-[clamp(2rem,3.6vw,3rem)]">
              {c.ownership.title}
            </h2>
            <p className="mt-6 max-w-xl text-[14.5px] leading-relaxed text-white/65">
              {c.ownership.p1}
            </p>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/65">
              {c.ownership.p2}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-white/25 pt-5">
              <p className="w-full text-center tabular text-[3.5rem] font-bold leading-none tracking-[-0.05em]">
                100%
              </p>
              <p className="mt-3 text-[12px] leading-relaxed text-white/50">
                {c.ownership.statLabel}
              </p>
            </div>

            <div className="mt-8 border-t border-white/25 pt-5">
              <p className="label text-white/60">{c.ownership.indepLabel}</p>
              <p className="mt-3 text-[12px] leading-relaxed text-white/60">
                {c.ownership.indepBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x grid gap-px bg-line md:grid-cols-2">
          <div className="bg-paper p-6 md:p-8">
            <p className="eyebrow text-muted">{c.people.eyebrow}</p>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.7rem,3vw,2.4rem)]">
              {c.people.title}
            </h2>
            <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-muted">{c.people.lead}</p>
            <div className="mt-6">
              <ArrowLink href="/about/people">{c.peopleLink}</ArrowLink>
            </div>
          </div>

          <div className="bg-paper p-6 md:p-8">
            <p className="eyebrow text-muted">{c.governance.eyebrow}</p>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.7rem,3vw,2.4rem)]">
              {c.governance.title}
            </h2>
            <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-muted">
              {c.governance.body}
            </p>
            <div className="mt-6">
              <ArrowLink href="/about/governance">{c.governanceLink}</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
