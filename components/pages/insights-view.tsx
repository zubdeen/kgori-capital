"use client";

import Link from "next/link";
import { InsightsExplorer } from "@/components/insights-explorer";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function InsightsView({ initialCategory = "All" }: { initialCategory?: string }) {
  const { copy, data } = useLocale();
  const c = copy.insights;
  const featured = data.insights.find((insight) => insight.featured) ?? data.insights[0];

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={<p>{c.hero.lead}</p>} />

      {/* Featured */}
      <section className="border-b border-line py-12 md:py-16">
        <div className="container-x">
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid gap-8 border-t-2 border-rust pt-7 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-rust">
                {c.featured}
              </p>
              <p className="mt-2 text-[12px] text-muted">
                {formatter.format(new Date(featured.date))} ·{" "}
                {copy.common.minutes(featured.readMinutes)}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-[clamp(1.9rem,4vw,3rem)] transition-colors duration-300 group-hover:text-rust">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-ink-3">
                {featured.excerpt}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-ink">
                {c.readArticle}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Library */}
      <section className="py-14 md:py-20">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-muted">{c.library}</p>
              <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)]">{c.all}</h2>
            </div>
            <a
              href="https://www.kgoricapital.com/market_watch/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-line inline-flex items-center gap-1.5 text-[12px] text-muted hover:text-ink"
            >
              {c.archive}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <InsightsExplorer
            items={data.insights}
            initialCategory={initialCategory}
            excludeSlug={featured.slug}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
