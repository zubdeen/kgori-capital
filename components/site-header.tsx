"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand";
import { ChevronDown, Close, Mail, Phone } from "@/components/icons";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/components/locale-provider";
import { company } from "@/lib/content";
import type { Dict } from "@/lib/i18n";

type MenuKey = "about" | "investments" | "funds";

type Menu = {
  key: MenuKey | null;
  label: keyof Dict;
  href: string;
  links?: { label: keyof Dict; href: string; note?: keyof Dict }[];
};

const menus: Menu[] = [
  {
    key: "about",
    label: "nav.about",
    href: "/about",
    links: [
      { label: "menu.about.company", href: "/about", note: "menu.about.companyNote" },
      { label: "menu.about.people", href: "/about/people", note: "menu.about.peopleNote" },
      { label: "menu.about.governance", href: "/about/governance", note: "menu.about.governanceNote" },
      {
        label: "menu.about.responsibility",
        href: "/responsibility",
        note: "menu.about.responsibilityNote",
      },
    ],
  },
  {
    key: "investments",
    label: "nav.investments",
    href: "/investments",
    links: [
      {
        label: "menu.invest.philosophy",
        href: "/investments",
        note: "menu.invest.philosophyNote",
      },
      { label: "menu.invest.process", href: "/investments/process", note: "menu.invest.processNote" },
      {
        label: "menu.invest.capabilities",
        href: "/investments/capabilities",
        note: "menu.invest.capabilitiesNote",
      },
      {
        label: "menu.invest.reporting",
        href: "/investments/reporting",
        note: "menu.invest.reportingNote",
      },
    ],
  },
  {
    key: "funds",
    label: "nav.funds",
    href: "/funds",
    links: [
      { label: "menu.funds.cash", href: "/funds/enhanced-cash", note: "menu.funds.cashNote" },
      { label: "menu.funds.balanced", href: "/funds/global-balanced", note: "menu.funds.balancedNote" },
      { label: "menu.funds.usd", href: "/funds/usd-money-market", note: "menu.funds.usdNote" },
      { label: "menu.funds.compare", href: "/funds/compare", note: "menu.funds.compareNote" },
    ],
  },
  { key: null, label: "nav.insights", href: "/insights" },
  { key: null, label: "nav.contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Route changes happen outside React (links, history), so close the menus.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.menuOpen = mobileOpen ? "true" : "false";
    return () => {
      document.documentElement.dataset.menuOpen = "false";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const activeMenu = menus.find((menu) => menu.key === open);
  const isActive = (href: string) =>
    href !== "/" && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 bg-paper pt-[env(safe-area-inset-top)]">
      <div className="on-dark hidden bg-ink text-white md:block">
        <div className="container-x flex h-11 items-center justify-between">
          <p className="flex items-center gap-3 text-[11px] tracking-[0.04em] text-white/60">
            <span>{t("utility.licensed")}</span>
            <span className="h-3 w-px bg-white/25" aria-hidden />
            <span>{t("utility.location")}</span>
          </p>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.04em] text-white/60">
            <LanguageSwitcher tone="dark" />
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex min-h-11 items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="hidden min-h-11 items-center gap-2 transition-colors hover:text-white sm:flex"
            >
              <Mail className="h-3 w-3" />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div
        ref={navRef}
        onMouseLeave={() => setOpen(null)}
        className={`relative border-b border-line bg-paper transition-shadow duration-300 ${
          scrolled ? "shadow-[0_12px_30px_-28px_rgba(11,11,12,0.6)]" : ""
        }`}
      >
        <div className="container-x flex h-[74px] items-center justify-between gap-4 lg:h-[84px]">
          <Logo />

          <nav aria-label={t("a11y.primaryNav")} className="hidden h-full items-center lg:flex">
            {menus.map((menu) =>
              menu.key ? (
                <div key={menu.label} className="relative h-full">
                  <button
                    type="button"
                    aria-expanded={open === menu.key}
                    aria-controls="mega-menu"
                    onClick={() => setOpen(menu.key)}
                    onMouseEnter={() => setOpen(menu.key)}
                    onFocus={() => setOpen(menu.key)}
                    className={`flex h-full items-center gap-1.5 border-b-2 px-4 text-[13.5px] font-medium transition-colors ${
                      isActive(menu.href)
                        ? "border-transparent text-rust"
                        : "border-transparent text-ink-3 hover:text-ink"
                    }`}
                  >
                    {t(menu.label)}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        open === menu.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={menu.label}
                  href={menu.href}
                  onMouseEnter={() => setOpen(null)}
                  className={`flex h-full items-center border-b-2 px-4 text-[13.5px] font-medium transition-colors ${
                    isActive(menu.href)
                      ? "border-transparent text-rust"
                      : "border-transparent text-ink-3 hover:text-ink"
                  }`}
                >
                  {t(menu.label)}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={company.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line hidden min-h-11 items-center text-[13px] font-medium text-ink-3 hover:text-ink xl:inline-flex"
            >
              {t("nav.portal")}
            </a>
            <Link href="/funds#forms" className="btn btn-rust h-11 min-h-11 px-5 text-[13px]">
              {t("nav.invest")}
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 items-center gap-2 border border-line px-3.5 text-[12.5px] font-medium lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <Close className="h-4 w-4" /> : <MenuGlyph />}
            {mobileOpen ? t("nav.close") : t("nav.menu")}
          </button>
        </div>

        <div
          id="mega-menu"
          aria-hidden={!activeMenu}
          inert={!activeMenu}
          className={`absolute inset-x-0 top-full hidden overflow-hidden border-b border-line bg-paper transition-[max-height,opacity] duration-300 ease-out lg:block ${
            activeMenu ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          {activeMenu?.links && (
            <div className="container-x grid gap-12 py-9 lg:grid-cols-[1.55fr_1fr]">
              <div>
                <p className="label mb-5">{t(activeMenu.label)}</p>
                <ul className="grid sm:grid-cols-2 sm:gap-x-10">
                  {activeMenu.links.map((link) => (
                    <li key={link.label} className="border-t border-line">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(null)}
                        className="group block py-3.5 pr-4 transition-colors"
                      >
                        <span className="block text-[15px] font-semibold text-ink transition-colors group-hover:text-rust">
                          {t(link.label)}
                        </span>
                        {link.note && (
                          <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">
                            {t(link.note)}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper-2 p-7">
                <p className="label">{t("mega.speak")}</p>
                <p className="mt-4 text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {t("mega.pitch")}
                </p>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-rust"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {company.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[calc(75px+env(safe-area-inset-top))] z-40 overflow-y-auto overscroll-contain bg-paper transition-[opacity,transform] duration-300 ease-out md:top-[calc(119px+env(safe-area-inset-top))] lg:hidden ${
          mobileOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="container-x flex min-h-full flex-col pb-[calc(2rem+env(safe-area-inset-bottom))] pt-8">
          <nav aria-label={t("a11y.mobileNav")} className="flex-1">
            {menus.map((menu) => (
              <div key={menu.label} className="py-1">
                <Link
                  href={menu.href}
                  className="flex min-h-12 items-center justify-between py-3 text-[1.55rem] font-semibold tracking-[-0.02em] text-ink"
                >
                  {t(menu.label)}
                </Link>
                {menu.links && (
                  <ul className="grid gap-0.5 pb-4">
                    {menu.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="flex min-h-11 items-center py-1 text-[13.5px] text-muted transition-colors hover:text-ink"
                        >
                          {t(link.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 grid gap-3">
            <Link href="/funds#forms" className="btn btn-rust w-full">
              {t("nav.invest")}
            </Link>
            <a
              href={company.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full"
            >
              {t("nav.portal")}
            </a>
            <div className="mt-4 flex flex-col gap-2 text-[13px] text-muted">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex min-h-11 items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> {company.email}
              </a>
              <div className="mt-2 flex items-center justify-between gap-4 border-t border-line pt-3">
                <p className="text-[11px] tracking-[0.08em] text-muted">
                  {t("utility.licensed")}
                </p>
                <LanguageSwitcher tone="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor">
      <path d="M2 5h12M2 11h12" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
