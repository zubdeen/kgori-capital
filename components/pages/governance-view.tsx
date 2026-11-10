"use client";

import Link from "next/link";
import { FaqList } from "@/components/faq";
import { ArrowLink, PageHero, SectionHeading } from "@/components/ui";
import { BookIcon, LeafIcon, LockIcon, MedalIcon } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

const governanceIcons = [MedalIcon, BookIcon, LeafIcon, LockIcon];

const governanceLinks: (string | undefined)[] = [
  undefined,
  undefined,
  "https://www.kgoricapital.com/wp-content/uploads/2022/12/Private_RI_Report_Kgori-Capital-(Pty)-Ltd_2021.pdf",
  undefined,
];

export function GovernanceView() {
  const { copy } = useLocale();
  const c = copy.about.governance;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.body} />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow={c.framework.eyebrow}
            title={c.framework.title}
            lead={c.framework.body}
          />
          <ol className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {c.framework.items.map((item, index) => (
              <li key={item.title} className="bg-paper">
                <div className="flex h-full flex-col p-6 md:p-7">
                  <span className="tabular text-[11px] font-semibold tracking-[0.12em] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.1rem] font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-muted">{c.practice.eyebrow}</p>
            <h2 className="display mt-5 max-w-[18ch] text-[clamp(1.9rem,3.2vw,2.7rem)]">
              {c.practice.title}
            </h2>

            <dl className="mt-9 border-t border-line">
              {c.rows.map((item, index) => {
                const Icon = governanceIcons[index] ?? BookIcon;
                return (
                  <div
                    key={item.term}
                    className="grid gap-2 border-b border-line py-5 sm:grid-cols-[1.25rem_10rem_1fr] sm:items-start"
                  >
                    <dt className="flex items-center gap-4 text-[10.5px] uppercase tracking-[0.1em] md:text-[11px] sm:col-span-2">
                      <Icon className="h-4 w-4 shrink-0 text-rust" />
                      {item.term}
                    </dt>
                    <dd className="text-[13px] leading-relaxed text-ink-3">
                      {item.detail}
                      {governanceLinks[index] && (
                        <a
                          href={governanceLinks[index]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-rust underline underline-offset-2"
                        >
                          {copy.common.source}
                        </a>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/complaints" className="btn btn-outline">
                {c.complaints}
              </Link>
              <Link href="/contact" className="btn btn-primary">
                {c.contactCompliance}
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-3 lg:col-start-10">
            <div className="border-t border-ink pt-4">
              <ArrowLink href="/responsibility">{c.link}</ArrowLink>
            </div>
            <div className="mt-6 border-t border-line pt-4">
              <ArrowLink href="/about/people">{copy.about.peopleLink}</ArrowLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-16 md:py-20">
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
    </>
  );
}
