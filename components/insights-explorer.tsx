"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import type { Insight } from "@/lib/content";
import { useLocale } from "@/components/locale-provider";
import { blurProps } from "@/lib/image-blur";

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const categories = ["All", "Market Watch", "Quarterly Insights", "Investment Insights"] as const;

export function InsightsExplorer({
  items,
  initialCategory = "All",
  excludeSlug,
}: {
  items: Insight[];
  initialCategory?: string;
  excludeSlug?: string;
}) {
  const { copy } = useLocale();
  const c = copy.insights;

  const initial = categories.includes(initialCategory as (typeof categories)[number])
    ? initialCategory
    : "All";
  const [category, setCategory] = useState(initial);

  const select = useCallback((next: string) => {
    setCategory(next);
    const url = new URL(window.location.href);
    if (next === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", next);
    window.history.replaceState({}, "", `${url.pathname}${url.search}`);
  }, []);

  const filtered =
    category === "All"
      ? items.filter((item) => item.slug !== excludeSlug)
      : items.filter((item) => item.category === category);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div role="group" aria-label={c.filter} className="flex flex-wrap gap-2">
          {categories.map((option) => {
            const active = option === category;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => select(option)}
                className={`min-h-10 border px-3.5 py-2 text-[11.5px] transition-colors duration-300 ${
                  active
                    ? "on-rust border-rust bg-rust text-white"
                    : "border text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {c.categories[option]}
              </button>
            );
          })}
        </div>
        <p className="tabular text-[11px] text-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? copy.common.article : copy.common.articles}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-[13.5px] text-muted">{c.empty}</p>
      ) : (
        <ul className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((insight) => (
            <li key={insight.slug}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group flex h-full flex-col py-7"
              >
                {insight.image && (
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden bg-paper-2">
                    <Image
                      src={insight.image}
                      {...blurProps(insight.image)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-rust">
                    {c.categories[insight.category]}
                  </span>
                </div>
                <h3 className="mt-3 text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-rust">
                  {insight.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-muted">
                  {insight.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-[10.5px] text-muted">
                    {formatter.format(new Date(insight.date))} · {" "}
                    {copy.common.minutes(insight.readMinutes)}
                  </span>
                  <span className="text-[11.5px] font-semibold text-ink transition-colors group-hover:text-rust">
                    {copy.common.read}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
