"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { PhilosophyTabs } from "@/components/philosophy-tabs";
import { Testimonials } from "@/components/testimonials";
import { ArrowLink, CtaBand, RiskMeter, SectionHeading, StatBlock } from "@/components/ui";
import {
  BuildingIcon,
  BriefcaseIcon,
  CompassIcon,
  GaugeIcon,
  GlobeIcon,
  StarIcon,
  TargetIcon,
  UserIcon,
  valueIcons,
} from "@/components/icons";
import type { Dict } from "@/lib/i18n";
import { blurProps } from "@/lib/image-blur";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const statLabels: (keyof Dict)[] = ["facts.founded", "facts.owned", "facts.experience", "facts.funds"];

const firmPrinciples: { title: keyof Dict; body: keyof Dict; icon: typeof TargetIcon }[] = [
  { title: "firm.p1Title", body: "firm.p1Body", icon: TargetIcon },
  { title: "firm.p2Title", body: "firm.p2Body", icon: GaugeIcon },
  { title: "firm.p3Title", body: "firm.p3Body", icon: GlobeIcon },
];

const audiences: {
  title: keyof Dict;
  body: keyof Dict;
  cta: keyof Dict;
  href: string;
  icon: typeof TargetIcon;
}[] = [
  {
    title: "audience.private.title",
    body: "audience.private.body",
    cta: "audience.private.cta",
    href: "/funds#forms",
    icon: UserIcon,
  },
  {
    title: "audience.institution.title",
    body: "audience.institution.body",
    cta: "audience.institution.cta",
    href: "/investments/capabilities",
    icon: BuildingIcon,
  },
  {
    title: "audience.corporate.title",
    body: "audience.corporate.body",
    cta: "audience.corporate.cta",
    href: "/contact",
    icon: BriefcaseIcon,
  },
  {
    title: "audience.advisor.title",
    body: "audience.advisor.body",
    cta: "audience.advisor.cta",
    href: "/contact",
    icon: CompassIcon,
  },
];

export function HomeView() {
  const { t, data, copy } = useLocale();
  const { funds, insights, stats, values } = data;
  const featured = insights.filter((insight) => !insight.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
          <div className="lg:col-span-5">              <p className="eyebrow text-rust">{t("hero.eyebrow")}</p>

            <h1 className="display mt-5 text-[clamp(2.9rem,5.2vw,4.6rem)]">{t("hero.title")}</h1>

            <p className="mt-6 max-w-[30rem] text-[15.5px] leading-relaxed text-ink-3">
              {t("hero.body")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/funds" className="btn btn-rust">
                {t("hero.ctaFunds")}
              </Link>
              <Link href="/contact" className="btn btn-outline">
                {t("hero.ctaContact")}
              </Link>
            </div>

            <p className="mt-8 max-w-[26rem] text-[12.5px] leading-relaxed text-muted">
              {t("hero.note")}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <Image
                src="/images/header.jpg"
                {...blurProps("/images/header.jpg")}
                alt="A woman in a black blazer against a grey background."
                width={2050}
                height={640}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-[280px] w-full object-cover object-[62%_center] sm:h-[340px] lg:h-[440px]"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.02em] text-muted">
              <span>{t("utility.location")}</span>
              <span>{t("hero.established")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-line" aria-label="Kgori Capital at a glance">
        <div className="container-x grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 py-9 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatBlock key={stat.label} value={stat.value} label={t(statLabels[index])} />
          ))}
        </div>
      </section>

      {/* Funds */}
      <section className="py-16 md:py-20" aria-labelledby="funds-heading">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-rust">{t("funds.eyebrow")}</p>
              <h2 id="funds-heading" className="display mt-5 text-[clamp(2rem,3.6vw,3.1rem)]">
                {t("funds.title")}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                {t("funds.lead")}
              </p>
            </div>
            <ArrowLink href="/funds/compare" className="md:pb-2">
              {t("funds.compare")}
            </ArrowLink>
          </div>

          <div className="mt-10 border-t border-line">
            {funds.map((fund) => (
              <Link
                key={fund.slug}
                href={`/funds/${fund.slug}`}
                className="group grid gap-3 border-b border-line py-5 transition-colors hover:bg-paper-2 md:grid-cols-[1.7fr_1fr_1fr_auto] md:items-center md:gap-8 md:px-2"
              >
                <div>
                  <p className="text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-rust">
                    {fund.name}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-muted md:hidden">
                    {fund.summary}
                  </p>
                  <span className="mt-2 block md:hidden">
                    <RiskMeter
                      score={fund.riskScore}
                      label={fund.risk === "Low" ? t("funds.riskLow") : t("funds.riskModerate")}
                    />
                  </span>
                </div>
                <div className="hidden md:block">
                  <RiskMeter
                    score={fund.riskScore}
                    label={fund.risk === "Low" ? t("funds.riskLow") : t("funds.riskModerate")}
                  />
                </div>
                <p className="hidden text-[12.5px] text-muted md:block">{fund.horizon}</p>
                <span className="text-[12.5px] font-semibold text-rust md:text-right">
                  {t("funds.view")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audience routes */}
      <section
        className="border-y border-line bg-paper-2 py-16 md:py-20"
        aria-labelledby="audience-heading"
      >
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
            <p className="eyebrow text-rust">{t("audience.eyebrow")}</p>
              <h2 id="audience-heading" className="display mt-5 text-[clamp(2rem,3.6vw,3.1rem)]">
                {t("audience.title")}
              </h2>
            </div>
            <p className="max-w-md text-[14.5px] leading-relaxed text-muted lg:col-span-5 lg:self-end">
              {t("audience.lead")}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col justify-between border border-line bg-paper p-6 transition-colors duration-200 hover:border-ink/40 md:p-7"
              >
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <item.icon className="h-5 w-5 shrink-0 text-rust" />
                    <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors duration-200 group-hover:text-rust">
                      {t(item.title)}
                    </h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{t(item.body)}</p>
                </div>
                <span className="mt-6 inline-flex items-center text-[12px] font-semibold uppercase tracking-[0.1em] text-rust">
                  {t(item.cta)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The firm */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-rust">{t("firm.eyebrow")}</p>
            <h2 className="display mt-5 max-w-[16ch] text-[clamp(2rem,3.5vw,3rem)]">
              {t("firm.title")}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">{t("firm.body")}</p>
            <div className="mt-7">
              <ArrowLink href="/about">{t("firm.link")}</ArrowLink>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {firmPrinciples.map((item) => (
              <div key={item.title} className="border-t border-line py-6 first:border-t-0 first:pt-0">
                <div className="flex items-center gap-2.5">
                  <item.icon className="h-4 w-4 shrink-0 text-rust" />
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.015em] text-rust">
                    {t(item.title)}
                  </h3>
                </div>
                <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted">{t(item.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botswana */}
      <section className="border-b border-line">
        <div className="grid lg:grid-cols-12">
          <div className="flex items-center bg-ink px-5 py-12 text-white md:px-10 lg:col-span-5 lg:py-16 lg:pl-[max(2.5rem,calc((100vw-82rem)/2+3.5rem))]">
            <div className="max-w-md">
              <p className="eyebrow text-white/50">{t("botswana.eyebrow")}</p>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.2vw,2.8rem)]">
                {t("botswana.title")}
              </h2>
              <p className="mt-5 text-[14.5px] leading-relaxed text-white/65">
                {t("botswana.body")}
              </p>
              <div className="mt-7">
                <ArrowLink href="/investments" tone="paper">
                  {t("botswana.link")}
                </ArrowLink>
              </div>
            </div>
          </div>
          <div className="relative min-h-[260px] lg:col-span-7 lg:min-h-[420px]">
            <Image
              src="/images/botswana.jpg"
              {...blurProps("/images/botswana.jpg")}
              alt="Aerial view of the Okavango Delta in Botswana."
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-3">
            <h2 className="display text-[clamp(1.8rem,3.2vw,2.6rem)]">{t("values.title")}</h2>
            <p className="max-w-md text-[13.5px] leading-relaxed text-muted">{t("values.lead")}</p>
          </div>
          <div className="mt-9 grid grid-cols-2 justify-items-center gap-x-8 gap-y-6 text-center lg:grid-cols-5">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? StarIcon;
              return (
                <div
                  key={value.name}
                  className={`flex flex-col items-center ${
                    index === values.length - 1 && values.length % 2 === 1
                      ? "col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <Icon className="mb-3 h-[18px] w-[18px] text-rust" />
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-rust">
                    {value.name}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <ArrowLink href="/about#values">{t("values.link")}</ArrowLink>
          </div>
        </div>
      </section>

      {/* Private clients */}
      <section className="border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="relative order-first h-[260px] lg:order-last lg:h-auto lg:min-h-[460px]">
            <Image
              src="/images/couple.jpg"
              {...blurProps("/images/couple.jpg")}
              alt="A couple reviewing their finances on a laptop."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
          <div className="flex items-center px-5 py-14 md:px-10 lg:py-20 lg:pl-[max(2rem,calc((100vw-82rem)/2+3.5rem))] lg:pr-14">
            <div className="max-w-lg">
              <p className="eyebrow text-rust">{t("private.eyebrow")}</p>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.9rem)]">
                {t("private.title")}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-3">
                {t("private.body")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/funds#forms" className="btn btn-rust">
                  {t("private.open")}
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  {t("private.ask")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-paper-2 py-16 md:py-20" id="philosophy">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("philosophy.eyebrow")}
            title={t("philosophy.title")}
            lead={t("philosophy.lead")}
          />
          <div className="mt-10">
            <PhilosophyTabs />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
            <ArrowLink href="/investments">{t("philosophy.linkApproach")}</ArrowLink>
            <ArrowLink href="/investments/capabilities">
              {t("philosophy.linkCapabilities")}
            </ArrowLink>
            <ArrowLink href="/responsibility">{t("philosophy.linkResponsible")}</ArrowLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <Testimonials />
        </div>
      </section>

      {/* Insights */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-rust">{t("insights.eyebrow")}</p>
              <h2 className="display mt-4 text-[clamp(1.9rem,3.5vw,2.9rem)]">
                {t("insights.title")}
              </h2>
            </div>
            <ArrowLink href="/insights">{t("insights.all")}</ArrowLink>
          </div>

          <div className="mt-9 grid gap-x-8 border-t border-line md:grid-cols-3">
            {featured.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex h-full flex-col border-b border-line py-6 pr-2 md:border-b-0"
              >
                {insight.image && (
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden bg-paper-2">
                    <Image
                      src={insight.image}
                      {...blurProps(insight.image)}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-rust">
                  {insight.category}
                </p>
                <h3 className="mt-3 text-[1.3rem] font-semibold leading-snug tracking-[-0.02em] transition-colors group-hover:text-rust">
                  {insight.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-[13.5px] leading-relaxed text-muted">
                  {insight.excerpt}
                </p>
                <p className="mt-auto pt-5 text-[11.5px] text-muted">
                  {dateFormatter.format(new Date(insight.date))} ·{" "}
                  {copy.common.minutes(insight.readMinutes)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
