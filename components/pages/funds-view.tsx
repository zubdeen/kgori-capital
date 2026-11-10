"use client";

import Link from "next/link";
import { FundFinder } from "@/components/fund-finder";
import { FaqList } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import {
  ArrowRight,
  ArrowUpRight,
  BuildingIcon,
  Check,
  Download,
  SendIcon,
  UserIcon,
} from "@/components/icons";
import { PageHero, RiskMeter, SectionHeading } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";

const applicationFormHrefs = [
  "https://www.kgoricapital.com/wp-content/uploads/2026/06/Kgori-Capital-UT-Application-Form-2026.pdf",
  "https://www.kgoricapital.com/wp-content/uploads/2026/06/Kgori-Capital-UT-Application-form-Legal-Entities.pdf",
  "https://www.kgoricapital.com/wp-content/uploads/2023/02/Kgori-Capital-Additional-Form.pdf",
  "https://www.kgoricapital.com/wp-content/uploads/2023/02/Kgori-Capital-Unit-Trust-Redemption-Form.pdf",
];

export function FundsView() {
  const { copy, data, t } = useLocale();
  const c = copy.funds;
  const riskLabel = (risk: string) => (risk === "Low" ? c.riskLow : c.riskModerate);

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={<p>{c.hero.lead}</p>}
      >
        <nav
          aria-label={t("a11y.pageNav")}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4"
        >
          {c.hero.jump.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="link-line text-[11.5px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="link-line text-[11.5px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </PageHero>

      {/* Funds */}
      <section id="funds" className="py-16 md:py-20">
        <div className="container-x">
          <div className="border-t border-ink">
            {data.funds.map((fund, index) => (
              <article
                key={fund.slug}
                className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:items-start md:gap-8"
              >
                <div className="md:col-span-3">
                  <p className="eyebrow text-muted">
                    {c.unitTrust(String(index + 1).padStart(2, "0"))}
                  </p>
                  <div className="mt-3">
                    <RiskMeter score={fund.riskScore} label={riskLabel(fund.risk)} />
                  </div>
                </div>

                <div className="md:col-span-5">
                  <h2 className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-semibold leading-tight tracking-[-0.02em]">
                    {fund.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-ink-3">
                    {fund.summary}
                  </p>
                </div>

                <div className="md:col-span-4 md:text-right">
                  <Link
                    href={`/funds/${fund.slug}`}
                    className="link-line inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-rust hover:text-ink"
                  >
                    {c.compare.viewFund}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <p className="mt-3">
                    <a
                      href={fund.documents[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line inline-flex items-center gap-1.5 text-[11.5px] text-muted hover:text-ink"
                    >
                      {c.factSheet}
                      <Download className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fees and minimums */}
      <section id="fees" className="border-b border-line bg-paper-2/40 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={c.fees.eyebrow} title={c.fees.title} lead={c.fees.lead} />
          <div className="mt-10 border-t border-ink">
            {data.funds.map((fund) => {
              const prospectus = fund.documents.find((doc) => doc.kind === "Prospectus");
              const factSheet = fund.documents.find((doc) => doc.kind === "Fact sheet");
              return (
                <div
                  key={fund.slug}
                  className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-4">
                    <p className="text-[1.05rem] font-semibold">{fund.shortName}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                      {c.fees.documentsLabel}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-8 md:justify-end">
                    {prospectus && (
                      <a
                        href={prospectus.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line inline-flex items-center gap-1.5 text-[12.5px] text-ink-3 transition-colors hover:text-ink"
                      >
                        {c.fees.prospectus}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                      </a>
                    )}
                    {factSheet && (
                      <a
                        href={factSheet.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line inline-flex items-center gap-1.5 text-[12.5px] text-ink-3 transition-colors hover:text-ink"
                      >
                        {c.fees.factSheet}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <p className="text-[11.5px] leading-relaxed text-muted lg:col-span-7">
              {c.fees.priceNote}
            </p>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="#documents"
                className="link-line text-[11.5px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                {c.fees.documentsLink}
              </Link>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-[11.5px] leading-relaxed text-muted">{c.fees.note}</p>
        </div>
      </section>

      {/* Finder */}
      <section id="finder" className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={c.finder.eyebrow} title={c.finder.title} lead={c.finder.lead} />
          <div className="mt-10">
            <FundFinder />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="border-y border-line bg-paper-2/40 py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{c.faqs.eyebrow}</p>
            <h2 className="display mt-5 max-w-[16ch] text-[clamp(2rem,3.4vw,2.8rem)]">
              {c.faqs.title}
            </h2>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted">
              {c.faqs.body}
            </p>
            <Link href="/contact" className="btn btn-outline mt-6">
              {c.faqs.ask}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={data.faqs} />
          </div>
        </div>
      </section>

      {/* KYC + Forms */}
      <section id="forms" className="py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={c.forms.eyebrow} title={c.forms.title} lead={c.forms.lead} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="h-full border border-line p-6">
                <p className="eyebrow flex items-center gap-2 text-muted">
                  <UserIcon className="h-4 w-4 text-rust" />
                  {c.forms.individuals}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.forms.kycIndividuals.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 border-b border-line pb-3 text-[12.5px] leading-relaxed text-ink-3 last:border-b-0 last:pb-0">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full border border-line p-6">
                <p className="eyebrow flex items-center gap-2 text-muted">
                  <BuildingIcon className="h-4 w-4 text-rust" />
                  {c.forms.entities}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.forms.kycEntities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 border-b border-line pb-3 text-[12.5px] leading-relaxed text-ink-3 last:border-b-0 last:pb-0">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="flex h-full flex-col border border-line bg-paper-2/40 p-6">
                <p className="eyebrow flex items-center gap-2 text-muted">
                  <SendIcon className="h-4 w-4 text-rust" />
                  {c.forms.nextStep}
                </p>
                <p className="mt-5 text-[1.2rem] font-semibold leading-snug">
                  {c.forms.nextStepBody}
                </p>
                <a
                  href="mailto:info@kgoricapital.com?subject=Unit%20trust%20application"
                  className="link-line mt-3 inline-block text-[12.5px] text-rust"
                >
                  info@kgoricapital.com
                </a>
                <p className="mt-4 text-[11.5px] leading-relaxed text-muted">
                  {c.forms.conversationHint}
                </p>
                <Link href="/contact" className="btn btn-primary mt-auto w-full">
                  {c.forms.talk}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="border-b border-ink pb-3 text-[1.05rem] font-semibold">
                {c.forms.applicationForms}
              </h3>
              <ul>
                {applicationFormHrefs.map((href, index) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 border-b border-line py-3.5 text-[12.5px] text-ink-3 transition-colors hover:text-ink"
                    >
                      {c.forms.applications[index]}
                      <Download className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-rust" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div id="documents" className="scroll-mt-28">
              <h3 className="border-b border-ink pb-3 text-[1.05rem] font-semibold">
                {c.forms.documents}
              </h3>
              <ul>
                {data.funds.flatMap((fund) =>
                  fund.documents.slice(0, fund.slug === "usd-money-market" ? 1 : 2).map((doc) => (
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
                          {fund.shortName}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-rust" />
                      </a>
                    </li>
                  )),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
