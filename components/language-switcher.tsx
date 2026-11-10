"use client";

import { useLocale } from "@/components/locale-provider";
import { locales } from "@/lib/i18n";

export function LanguageSwitcher({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { locale, setLocale, t } = useLocale();
  const isDark = tone === "dark";

  return (
    <div role="group" aria-label={t("nav.language")} className={`flex items-center ${className}`}>
      {locales.map((option, index) => {
        const active = option.code === locale;
        return (
          <span key={option.code} className="flex items-center">
            {index > 0 && (
              <span
                aria-hidden
                className={`mx-1 h-3 w-px ${isDark ? "bg-white/25" : "bg-line"}`}
              />
            )}
            <button
              type="button"
              lang={option.code}
              onClick={() => setLocale(option.code)}
              aria-pressed={active}
              aria-label={`${option.label} (${option.short})`}
              className={`min-h-11 px-1.5 text-[11px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
                active
                  ? isDark
                    ? "text-white"
                    : "text-rust"
                  : isDark
                    ? "text-white/50 hover:text-white"
                    : "text-muted hover:text-ink"
              }`}
            >
              {option.short}
            </button>
          </span>
        );
      })}
    </div>
  );
}
