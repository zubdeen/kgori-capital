"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { ArrowLink, CtaBand } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { blurProps } from "@/lib/image-blur";

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function InsightView({ slug }: { slug: string }) {
  const { copy, data } = useLocale();
  const c = copy.insights;
  const insight = data.insights.find((item) => item.slug === slug) ?? data.insights[0];
  const related = data.insights.filter((item) => item.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="container-x">
            <Link
              href="/insights"
              className="link-line inline-flex items-center gap-2 text-[11.5px] uppercase tracking-[0.14em] text-muted hover:text-ink"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              {c.article.back}
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-center gap-3 text-[11px]">
                  <span className="font-semibold uppercase tracking-[0.1em] text-rust">
                    {c.categories[insight.category]}
                  </span>
                  <span className="text-muted">
                    {formatter.format(new Date(insight.date))} ·{" "}
                    {copy.common.minutes(insight.readMinutes)}
                  </span>
                </div>
                <h1 className="display mt-5 max-w-[22ch] text-[clamp(2.3rem,5vw,4rem)]">
                  {insight.title}
                </h1>
                <p className="mt-6 max-w-2xl text-[1.15rem] font-medium leading-relaxed text-ink-3">
                  {insight.excerpt}
                </p>
              </div>
            </div>
          </div>
        </header>

        {insight.image && (
          <div className="relative aspect-[16/9] max-h-[520px] w-full overflow-hidden bg-paper-2">
            <Image
              src={insight.image}
              {...blurProps(insight.image)}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="py-14 md:py-20">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="border-t border-ink pt-4 lg:sticky lg:top-36">
                <p className="eyebrow text-muted">{c.article.publishedBy}</p>
                <p className="mt-3 text-[13px] text-ink">{c.article.team}</p>
                <p className="mt-1 text-[11.5px] text-muted">{c.article.location}</p>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-[10.5px] leading-relaxed text-muted">
                    {c.article.disclaimer}
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="prose-editorial max-w-[38rem]">
                {insight.body.map((block, index) => {
                  if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
                  if (block.type === "quote")
                    return (
                      <blockquote key={index}>
                        <p>{block.text}</p>
                      </blockquote>
                    );
                  return <p key={index}>{block.text}</p>;
                })}
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
                <ArrowLink href="/funds">{c.article.funds}</ArrowLink>
                <ArrowLink href="/contact">{c.article.teamLink}</ArrowLink>
              </div>

              <div className="mt-10 border-t border-line pt-6">
                <p className="label">{c.article.aboutAuthor}</p>
                <p className="mt-2 text-[13px] font-semibold text-ink">{c.article.team}</p>
                <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
                  {c.article.teamBio}
                </p>
              </div>
            </div>

            <aside className="lg:col-span-2 lg:col-start-11">
              <p className="border-t border-line pt-4 text-[10px] uppercase tracking-[0.14em] text-muted">
                {c.article.share}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://www.kgoricapital.com/insights/${insight.slug}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11.5px] text-muted hover:text-ink"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(insight.title)}&body=${encodeURIComponent(
                    `https://www.kgoricapital.com/insights/${insight.slug}`,
                  )}`}
                  className="inline-flex items-center gap-2 text-[11.5px] text-muted hover:text-ink"
                >
                  Email
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Related */}
        <section className="border-t border-line py-14 md:py-20">
          <div className="container-x">
            <div className="flex items-end justify-between gap-4">
              <h2 className="display text-[clamp(1.8rem,3.2vw,2.5rem)]">{c.article.keepReading}</h2>
              <ArrowLink href="/insights">{c.article.back}</ArrowLink>
            </div>
            <ul className="mt-10 grid gap-x-8 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/insights/${item.slug}`} className="group flex h-full flex-col border-t border-line py-6">
                    {item.image && (
                      <div className="relative mb-5 aspect-[16/10] overflow-hidden bg-paper-2">
                        <Image
                          src={item.image}
                          {...blurProps(item.image)}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 30vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-rust">{c.categories[item.category]}</span>
                    </div>
                    <h3 className="mt-3 text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.02em] transition-colors duration-300 group-hover:text-rust">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-[12.5px] leading-relaxed text-muted">{item.excerpt}</p>
                    <span className="mt-auto flex items-center justify-between pt-5 text-[10.5px] text-muted">
                      {formatter.format(new Date(item.date))}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>

      <CtaBand />
    </>
  );
}
