"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { BrandMark } from "@/components/brand";
import {
  ArrowRight,
  ArrowUpRight,
  FileIcon,
  LinkedIn,
  LockIcon,
  Mail,
  MapPin,
  Phone,
  YouTube,
} from "@/components/icons";
import { ArrowLink, PageHero } from "@/components/ui";
import { company } from "@/lib/content";
import { blurProps } from "@/lib/image-blur";
import { FaqList } from "@/components/faq";
import { useLocale } from "@/components/locale-provider";

export function ContactView() {
  const { copy, data, t } = useLocale();
  const c = copy.contact;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-muted">{c.enquiry.eyebrow}</p>
            <h2 className="display mt-4 max-w-[20ch] text-[clamp(1.8rem,3vw,2.4rem)]">
              {c.enquiry.title}
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow text-muted">{c.det.eyebrow}</p>

            <div className="relative mt-4 aspect-[16/10] overflow-hidden bg-paper-2">
              <Image
                src="/images/team.webp"
                {...blurProps("/images/team.webp")}
                alt={c.det.photoCaption}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mb-5 mt-2 text-[11px] leading-relaxed text-muted">{c.det.photoCaption}</p>

            <div className="mt-4 border border-line bg-paper-2 p-6">
              <div className="flex items-center gap-3">
                <BrandMark className="h-9 w-auto" />
                <div>
                  <p className="text-[14px] font-semibold leading-tight">Kgori Capital</p>
                  <p className="text-[10.5px] uppercase tracking-[0.1em] text-muted">
                    {c.det.headOffice}
                  </p>
                </div>
              </div>

              <dl className="mt-6 [&>dd]:mt-4 [&>dd:first-of-type]:mt-0">
                <dt className="sr-only">{c.det.address}</dt>
                <dd className="flex items-start gap-3 border-t border-line pt-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                  <div>
                    <span className="block text-[12.5px] leading-relaxed text-ink-3">
                      {company.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                    <a
                      href={company.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line mt-2 inline-flex items-center gap-1.5 text-[11.5px] text-ink"
                    >
                      {c.det.directions}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </dd>

                <dt className="sr-only">{c.det.phoneLabel}</dt>
                <dd className="flex items-start gap-3 border-t border-line pt-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                  <div>
                    <span className="text-[12.5px] leading-relaxed text-ink-3">
                      <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="link-line">
                        {company.phone}
                      </a>
                      <span className="mx-2 text-line">|</span>
                      <a href={`tel:${company.phoneAlt.replace(/\s/g, "")}`} className="link-line">
                        {company.phoneAlt}
                      </a>
                    </span>
                    <p className="mt-1 text-[11px] text-muted">{c.det.fax(company.fax)}</p>
                  </div>
                </dd>

                <dt className="sr-only">{c.det.emailLabel}</dt>
                <dd className="flex items-start gap-3 border-t border-line pt-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                  <div>
                    <span className="text-[12.5px] leading-relaxed text-ink-3">
                      <a href={`mailto:${company.email}`} className="link-line">
                        {company.email}
                      </a>
                    </span>
                  </div>
                </dd>
              </dl>

              <div className="mt-6 border-t border-line pt-4">
                <p className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.1em] text-muted">
                  <FileIcon className="h-3.5 w-3.5 text-rust" />
                  {c.det.postal}
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-3">
                  {company.postalLines.join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-4 border border-line p-6">
              <p className="label flex items-center gap-2">
                <LockIcon className="h-3.5 w-3.5 text-rust" />
                {c.det.existing}
              </p>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink-3">{c.det.existingBody}</p>
              <a
                href={company.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5 w-full"
              >
                {c.det.portal}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
                {c.det.portalNote.replace("{phone}", company.phone)}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.linkedin")}
                className="flex h-11 w-11 items-center justify-center border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink"
              >
                <LinkedIn className="h-4 w-4" />
              </a>
              <a
                href={company.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.youtube")}
                className="flex h-11 w-11 items-center justify-center border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink"
              >
                <YouTube className="h-4 w-4" />
              </a>
              <p className="text-[11px] leading-relaxed text-muted">{c.det.hours}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-muted">{c.faq.eyebrow}</p>
            <h2 className="display mt-4 max-w-[14ch] text-[clamp(1.8rem,3vw,2.4rem)]">
              {c.faq.title}
            </h2>
            <div className="mt-6">
              <ArrowLink href="/funds#faqs">{c.faq.all}</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={data.faqs.slice(2, 6)} />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/funds#forms"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink"
              >
                {c.faq.forms}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
