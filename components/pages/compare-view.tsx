"use client";

import Link from "next/link";
import { FaqList } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { ArrowLink, PageHero, RiskMeter, SectionHeading } from "@/components/ui";
import { ArrowRight, Check } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

export function CompareView() {
  const { copy, data } = useLocale();
  const c = copy.funds;
  const riskLabel = (risk: string) => (risk === "Low" ? c.riskLow : c.riskModerate);

  return (
    <>
      <PageHero eyebrow={c.compare.eyebrow} title={c.compare.title} lead={c.compare.lead} />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <p className="text-[11.5px] text-muted md:hidden">{c.compare.scrollHint}</p>
          <Reveal className="mt-3 overflow-x-auto md:mt-0">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">{c.compare.caption}</caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[16%] border-b border-ink py-3 pr-4 text-[10px] uppercase tracking-[0.14em] text-muted"
                  >
                    {c.compare.feature}
                  </th>
                  {data.funds.map((fund) => (
                    <th
                      key={fund.slug}
                      scope="col"
                      className="w-[28%] border-b border-ink py-3 pr-4 text-[0.95rem] font-semibold leading-snug"
                    >
                      {fund.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: c.compare.rows.risk,
                    render: (fundIndex: number) => (
                      <RiskMeter
                        score={data.funds[fundIndex].riskScore}
                        label={riskLabel(data.funds[fundIndex].risk)}
                      />
                    ),
                  },
                  {
                    label: c.compare.rows.objective,
                    render: (fundIndex: number) => c.compare.objectives[fundIndex],
                  },
                  {
                    label: c.compare.rows.exposure,
                    render: (fundIndex: number) => c.compare.exposures[fundIndex],
                  },
                  {
                    label: c.compare.rows.horizon,
                    render: (fundIndex: number) => data.funds[fundIndex].horizon,
                  },
                ].map((row) => (
                  <tr key={row.label} className="align-top">
                    <th
                      scope="row"
                      className="border-b border-line py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.1em] text-muted"
                    >
                      {row.label}
                    </th>
                    {data.funds.map((fund, fundIndex) => (
                      <td
                        key={fund.slug}
                        className="border-b border-line py-4 pr-4 text-[12.5px] leading-relaxed text-ink-3"
                      >
                        {row.render(fundIndex)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.1em] text-muted"
                  >
                    {c.compare.details}
                  </th>
                  {data.funds.map((fund) => (
                    <td key={fund.slug} className="py-4 pr-4">
                      <Link href={`/funds/${fund.slug}`} className="link-line text-[12px] text-rust">
                        {c.compare.viewFund}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Reveal>
          <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-muted">
            {c.compare.disclaimer}
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{c.compare.shared.eyebrow}</p>
            <h2 className="display mt-5 max-w-[15ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {c.compare.shared.title}
            </h2>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-muted">
              {c.compare.shared.body}
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-ink">
              {c.compare.shared.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line py-4 text-[13px] leading-relaxed text-ink-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow={c.compare.choose.eyebrow}
            title={c.compare.choose.title}
            lead={c.compare.choose.body}
          />
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {c.compare.choose.items.map((item, index) => {
              const fund = data.funds.find((entry) => entry.slug === item.fund);
              return (
                <div key={item.question} className="bg-paper">
                  <div className="flex h-full gap-4 p-6 md:p-7">
                    <span className="tabular pt-1 text-[11px] font-semibold tracking-[0.08em] text-rust">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <h3 className="text-[1.05rem] font-semibold leading-snug">{item.question}</h3>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">{item.answer}</p>
                      <div className="mt-auto pt-6">
                        <Link
                          href={`/funds/${item.fund}`}
                          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-rust hover:text-ink"
                        >
                          {fund?.shortName ?? item.label}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <ArrowLink href="/funds#finder">{c.compare.finderLink}</ArrowLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{c.compare.questions.eyebrow}</p>
            <h2 className="display mt-5 max-w-[14ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {c.compare.questions.title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={c.compare.questions.items} />
          </div>
        </div>
      </section>
    </>
  );
}
