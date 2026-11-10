"use client";

import Link from "next/link";
import { FaqList } from "@/components/faq";
import {
  ArrowRight,
  ArrowUpRight,
  ChartIcon,
  Check,
  Download,
} from "@/components/icons";
import { ArrowLink, PageHero, RiskMeter } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";

const chartColors = ["#6e1a26", "#2c2c30", "#9a5c66", "#a5a5a9", "#e1deda"];

export function FundView({ slug }: { slug: string }) {
  const { copy, data } = useLocale();
  const c = copy.funds;
  const page = c.fundPage;
  const index = data.funds.findIndex((item) => item.slug === slug);
  const fund = data.funds[index];

  if (!fund) return null;

  const riskLabel = (risk: string) => (risk === "Low" ? c.riskLow : c.riskModerate);

  return (
    <>
      <PageHero
        eyebrow={c.unitTrust(String(index + 1).padStart(2, "0"))}
        title={fund.name}
        lead={<p>{fund.summary}</p>}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <RiskMeter score={fund.riskScore} label={riskLabel(fund.risk)} />
          <ArrowLink href="/funds/compare">{c.compare.eyebrow}</ArrowLink>
          <ArrowLink href="/funds#fees">{c.fees.eyebrow}</ArrowLink>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-[14px] leading-relaxed text-ink-3">{fund.description}</p>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {fund.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 border-t border-line pt-3 text-[12.5px] leading-relaxed text-ink-3"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-line bg-paper-2/40 p-6">
              <p className="eyebrow text-muted">{c.atGlance}</p>
              <dl className="mt-4">
                {fund.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0"
                  >
                    <dt className="text-[11px] text-muted">{fact.label}</dt>
                    <dd className="text-right text-[12px] text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-4 border border-line p-6">
              <p className="eyebrow flex items-center gap-2 text-muted">
                <ChartIcon className="h-3.5 w-3.5 text-rust" />
                {c.allocation}
              </p>
              <div
                className="mt-4 flex h-2.5 w-full overflow-hidden"
                role="img"
                aria-label={`${c.allocation}: ${fund.holdings
                  .map((holding) => `${holding.label} ${holding.value}%`)
                  .join(", ")}`}
              >
                {fund.holdings.map((holding, holdingIndex) => (
                  <span
                    key={holding.label}
                    style={{
                      width: `${holding.value}%`,
                      backgroundColor: chartColors[holdingIndex % chartColors.length],
                    }}
                  />
                ))}
              </div>
              <ul className="mt-4 grid gap-1.5">
                {fund.holdings.map((holding, holdingIndex) => (
                  <li key={holding.label} className="flex items-center justify-between gap-3 text-[11px]">
                    <span className="flex items-center gap-2 text-muted">
                      <span
                        className="h-1.5 w-1.5"
                        style={{
                          backgroundColor: chartColors[holdingIndex % chartColors.length],
                        }}
                        aria-hidden
                      />
                      {holding.label}
                    </span>
                    <span className="tabular text-ink">{holding.value}%</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] leading-relaxed text-muted">{c.allocationNote}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/funds#forms" className="btn btn-rust flex-1 whitespace-nowrap px-4">
                {c.apply}
              </Link>
              <a
                href={fund.documents[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-4"
              >
                {c.factSheet}
                <Download className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="eyebrow text-muted">{page.approach.eyebrow}</p>
            <h2 className="display mt-5 max-w-[18ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {page.approach.title}
            </h2>
            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-ink-3">
              {fund.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-ink pt-4">
              <p className="eyebrow text-muted">{page.fit.eyebrow}</p>
              <h2 className="mt-3 text-[1.15rem] font-semibold leading-snug">{page.fit.title}</h2>
              <ul className="mt-5">
                {fund.suits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3.5 text-[12.5px] leading-relaxed text-ink-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-muted">{page.consider.eyebrow}</p>
            <h2 className="display mt-5 max-w-[18ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {page.consider.title}
            </h2>
            <ul className="mt-6 border-t border-ink">
              {fund.considerations.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3.5 text-[12.5px] leading-relaxed text-ink-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-muted">{page.documents.eyebrow}</p>
            <h2 className="mt-3 text-[1.15rem] font-semibold leading-snug">{page.documents.title}</h2>
            <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-muted">
              {page.documents.body}
            </p>
            <ul className="mt-5 border-t border-ink">
              {fund.documents.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-line py-3.5 text-[12.5px] text-ink-3 transition-colors hover:text-ink"
                  >
                    <span>
                      <span className="mr-2 text-[10px] uppercase tracking-[0.12em] text-rust">
                        {c.kinds[doc.kind]}
                      </span>
                      {doc.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-rust" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{page.questions.eyebrow}</p>
            <h2 className="display mt-5 max-w-[14ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {page.questions.title}
            </h2>
            <div className="mt-6">
              <ArrowLink href="/funds/compare">{page.compare}</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={page.questions.items} />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-14 md:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-muted">{page.next.eyebrow}</p>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {page.next.title}
            </h2>
            <p className="mt-4 max-w-lg text-[13.5px] leading-relaxed text-muted">
              {page.next.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Link href="/funds#forms" className="btn btn-primary">
              {c.apply}
            </Link>
            <Link href="/contact" className="btn btn-outline">
              {page.talk}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-8">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/funds"
            className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-rust hover:text-ink"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            {page.allFunds}
          </Link>
          <a
            href={fund.documents[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line inline-flex items-center gap-1.5 text-[12.5px] text-ink-3 hover:text-ink"
          >
            {fund.documents[0].label}
            <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </a>
        </div>
      </section>

    </>
  );
}
