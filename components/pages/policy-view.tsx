"use client";

import { PageHero } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { company } from "@/lib/content";

type Policy = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: readonly { h: string; p: readonly string[] }[];
};

export function PolicyView({
  policy,
  document,
}: {
  policy: Policy;
  document?: { label: string; href: string };
}) {
  const { copy } = useLocale();

  const fill = (text: string) =>
    text
      .replace(/\{legalName\}/g, company.legalName)
      .replace(/\{registration\}/g, company.registration)
      .replace(/\{email\}/g, company.email)
      .replace(/\{phone\}/g, company.phone);

  return (
    <>
      <PageHero eyebrow={policy.eyebrow} title={policy.title} lead={policy.lead} />
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="border-t border-ink pt-4 text-[10px] uppercase tracking-[0.14em] text-muted">
              {copy.legal.updated}
            </p>
            <p className="mt-2 text-[12.5px] text-ink-3">{copy.legal.updatedValue}</p>
            {document && (
              <a
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line mt-6 inline-block text-[12px] text-ink-3 hover:text-ink"
              >
                {document.label}
              </a>
            )}
          </div>
          <div className="prose-editorial max-w-[42rem] lg:col-span-8">
            {policy.sections.map((section) => (
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
