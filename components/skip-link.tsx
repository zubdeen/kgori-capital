"use client";

import { useLocale } from "@/components/locale-provider";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-[max(1rem,env(safe-area-inset-left))] focus-visible:top-[max(1rem,env(safe-area-inset-top))] focus-visible:z-[100] focus-visible:bg-ink focus-visible:px-5 focus-visible:py-3 focus-visible:text-sm focus-visible:text-white"
    >
      {t("a11y.skip")}
    </a>
  );
}
