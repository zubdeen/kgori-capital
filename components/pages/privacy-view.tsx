"use client";

import { PageHero } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { company } from "@/lib/content";

export function PrivacyView() {
  const { copy } = useLocale();
  const c = copy.legal.privacy;

  const fill = (text: string) =>
    text
      .replace("{legalName}", company.legalName)
      .replace("{registration}", company.registration)
      .replace("{email}", company.email);

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="border-t border-ink pt-4 text-[10px] uppercase tracking-[0.14em] text-muted">
              {copy.legal.updated}
            </p>
            <p className="mt-2 text-[12.5px] text-ink-3">{copy.legal.updatedValue}</p>
          </div>
          <div className="prose-editorial max-w-[42rem] lg:col-span-8">
            {c.sections.map((section) => (
              <section key={section.h}>
                <h2>{section.h}</h2>
                {section.p.map((paragraph) => (
                  <p key={paragraph}>{fill(paragraph)}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
