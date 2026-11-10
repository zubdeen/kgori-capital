"use client";

import { FaqList } from "@/components/faq";
import { ArrowLink, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { ClockIcon, GaugeIcon, ScaleIcon, ShieldIcon } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

const reportingIcons = [GaugeIcon, ClockIcon, ScaleIcon];

export function ReportingView() {
  const { copy } = useLocale();
  const c = copy.investments.reporting;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.body} />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-3">
            {c.cards.map((item, index) => {
              const Icon = reportingIcons[index] ?? ShieldIcon;
              return (
                <div key={item.title} className="border-t border-line pt-5">
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-rust" />
                    <div>
                      <h2 className="text-[1.05rem] font-semibold leading-snug">{item.title}</h2>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={c.cadence.eyebrow} title={c.cadence.title} lead={c.cadence.body} />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-left">
              <caption className="sr-only">{c.cadence.title}</caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[18%] border-b border-ink py-3 pr-4 text-[10px] uppercase tracking-[0.14em] text-muted"
                  >
                    {c.cadence.columns[0]}
                  </th>
                  <th
                    scope="col"
                    className="w-[22%] border-b border-ink py-3 pr-4 text-[10px] uppercase tracking-[0.14em] text-muted"
                  >
                    {c.cadence.columns[1]}
                  </th>
                  <th
                    scope="col"
                    className="border-b border-ink py-3 text-[10px] uppercase tracking-[0.14em] text-muted"
                  >
                    {c.cadence.columns[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.cadence.rows.map((row) => (
                  <tr key={`${row.when}-${row.what}`} className="align-top">
                    <th
                      scope="row"
                      className="border-b border-line py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.1em] text-muted"
                    >
                      {row.when}
                    </th>
                    <td className="border-b border-line py-4 pr-4 text-[13px] font-semibold text-ink">
                      {row.what}
                    </td>
                    <td className="border-b border-line py-4 text-[12.5px] leading-relaxed text-ink-3">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{c.questions.eyebrow}</p>
            <h2 className="display mt-5 max-w-[14ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {c.questions.title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={c.questions.items} />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-10">
        <div className="container-x flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[12.5px] leading-relaxed text-muted">{c.disclaimer}</p>
          <div className="flex flex-wrap gap-6">
            <ArrowLink href="/funds#documents">{c.documents}</ArrowLink>
            <ArrowLink href="/responsibility">{c.stewardship}</ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
