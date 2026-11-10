"use client";

import Link from "next/link";
import { Logo } from "@/components/brand";
import { LinkedIn, Mail, MapPin, Phone, YouTube } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { NewsletterForm } from "@/components/newsletter-form";
import { company } from "@/lib/content";
import type { Dict } from "@/lib/i18n";

type Column = {
  title: keyof Dict;
  links: { label: keyof Dict; href: string; external?: boolean }[];
};

const columns: Column[] = [
  {
    title: "footer.company",
    links: [
      { label: "footer.about", href: "/about" },
      { label: "footer.people", href: "/about/people" },
      { label: "footer.governance", href: "/about/governance" },
      { label: "footer.responsibility", href: "/responsibility" },
      { label: "footer.contact", href: "/contact" },
    ],
  },
  {
    title: "footer.investing",
    links: [
      { label: "footer.philosophy", href: "/investments" },
      { label: "footer.process", href: "/investments/process" },
      { label: "footer.funds", href: "/funds" },
      { label: "footer.compare", href: "/funds/compare" },
    ],
  },
  {
    title: "footer.resources",
    links: [
      { label: "footer.insights", href: "/insights" },
      { label: "footer.marketWatch", href: "/insights?category=Market+Watch" },
      { label: "footer.portal", href: company.portal, external: true },
    ],
  },
];

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="on-dark bg-ink text-white">
      <div className="container-x pb-[calc(2rem+env(safe-area-inset-bottom))] pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-7 max-w-[26rem] text-[13.5px] leading-relaxed text-white/55">
              {t("footer.description")}
            </p>

            <div className="mt-7 space-y-3 text-[13px] text-white/70">
              <a
                href={`mailto:${company.email}`}
                className="flex min-h-11 items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-white/55" />
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex min-h-11 items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-white/55" />
                <span>
                  {company.phone}
                  <span className="text-white/45"> / {company.phoneAlt.replace("+267 ", "")}</span>
                </span>
              </a>
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <span>
                  {company.addressLines.join(", ")}
                  <br />
                  <a
                    href={company.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-1 inline-flex min-h-11 items-center text-[12px] text-white/60 hover:text-white"
                  >
                    {t("footer.directions")}
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-8 lg:col-span-8 lg:gap-10 lg:pl-8">
            {columns.map((column) => (
              <nav key={column.title} aria-label={t(column.title)}>
                <p className="label mb-4 text-white/60">{t(column.title)}</p>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex min-h-11 break-words items-center py-1 text-[12px] leading-snug text-white/65 transition-colors hover:text-white sm:text-[13.5px]"
                      >
                        {t(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className="label mb-3 text-white/60">{t("footer.newsletterTitle")}</p>
            <p className="mb-4 max-w-md text-[13px] leading-relaxed text-white/55">
              {t("footer.newsletterBody")}
            </p>
            <div className="max-w-md">
              <NewsletterForm tone="dark" />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-6 lg:items-end">
            <div className="flex items-center gap-2">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.linkedin")}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-white/60 hover:text-white"
              >
                <LinkedIn className="h-4 w-4" />
              </a>
              <a
                href={company.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.youtube")}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-white/60 hover:text-white"
              >
                <YouTube className="h-4 w-4" />
              </a>
            </div>
            <div className="text-left text-[11.5px] leading-relaxed text-white/55 lg:text-right">
              <p>{company.legalName}</p>
              <p>
                {t("footer.registration")} {company.registration}
              </p>
              <p>{t("footer.licensed")}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] leading-relaxed text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl">{t("footer.disclaimerText")}</p>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <Link href="/legal/privacy" className="inline-flex min-h-11 items-center hover:text-white/70">
              {t("footer.privacy")}
            </Link>
            <Link href="/legal/disclaimer" className="inline-flex min-h-11 items-center hover:text-white/70">
              {t("footer.disclaimer")}
            </Link>
            <Link href="/complaints" className="inline-flex min-h-11 items-center hover:text-white/70">
              {t("footer.complaints")}
            </Link>
            <Link href="/accessibility" className="inline-flex min-h-11 items-center hover:text-white/70">
              {t("footer.accessibility")}
            </Link>
            <span>© {new Date().getFullYear()} Kgori Capital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
