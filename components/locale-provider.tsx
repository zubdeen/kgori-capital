"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  readLocaleCookie,
  translate,
  writeLocaleCookie,
  type Dict,
  type Locale,
} from "@/lib/i18n";
import { pageCopy, siteData, type PageCopy, type SiteData } from "@/lib/localized";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Dict) => string;
  copy: PageCopy;
  data: SiteData;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Always start in English so the server and the first client render agree.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = readLocaleCookie();
    // Deliberate: the first render must match the server's English HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "tn" ? "tn" : "en";
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeLocaleCookie(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => translate(locale, key),
      copy: pageCopy[locale],
      data: siteData[locale],
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
}
