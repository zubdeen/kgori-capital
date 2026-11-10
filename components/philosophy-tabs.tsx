"use client";

import { useRef, useState } from "react";
import { ShieldIcon, ScaleIcon, LeafIcon } from "@/components/icons";
const pointIcons = [ShieldIcon, ScaleIcon, LeafIcon];
import { useLocale } from "@/components/locale-provider";
import type { Dict } from "@/lib/i18n";

const tabs: {
  id: string;
  label: keyof Dict;
  title: keyof Dict;
  body: keyof Dict;
  points: (keyof Dict)[];
}[] = [
  {
    id: "equities",
    label: "philosophy.tabs.equities",
    title: "philosophy.equities.title",
    body: "philosophy.equities.body",
    points: [
      "philosophy.equities.point1",
      "philosophy.equities.point2",
      "philosophy.equities.point3",
    ],
  },
  {
    id: "fixed-income",
    label: "philosophy.tabs.fixed",
    title: "philosophy.fixed.title",
    body: "philosophy.fixed.body",
    points: ["philosophy.fixed.point1", "philosophy.fixed.point2", "philosophy.fixed.point3"],
  },
  {
    id: "multi-asset",
    label: "philosophy.tabs.multi",
    title: "philosophy.multi.title",
    body: "philosophy.multi.body",
    points: ["philosophy.multi.point1", "philosophy.multi.point2", "philosophy.multi.point3"],
  },
];

export function PhilosophyTabs() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = tabs.length - 1;
    let next = index;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div
          role="tablist"
          aria-label={t("a11y.philosophyTabs")}
          aria-orientation="vertical"
          className="no-scrollbar flex w-full flex-row justify-between gap-1 border-b border-line pb-1 lg:flex-col lg:justify-start lg:gap-2 lg:border-b-0 lg:pb-0"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(node) => {
                refs.current[index] = node;
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === index}
              aria-controls={`panel-${tab.id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`group flex min-w-0 flex-1 items-center justify-center gap-4 border-b-2 px-1 py-3.5 text-center transition-colors duration-200 lg:flex-none lg:justify-between lg:border-2 lg:px-4 lg:text-left ${
                active === index
                  ? "border-rust text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <span className="text-[15px] font-semibold tracking-[-0.01em] lg:text-[17px]">
                {t(tab.label)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={active !== index}
            tabIndex={0}
            className="focus-visible:outline-offset-4"
          >
            <h3 className="display max-w-[24ch] text-[clamp(1.9rem,3.4vw,2.8rem)]">{t(tab.title)}</h3>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-3">{t(tab.body)}</p>
            <ul className="mt-8 grid gap-0 border-t border-line">
              {tab.points.map((point, pIndex) => {
                const Icon = pointIcons[pIndex] ?? ShieldIcon;
                return (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-line py-3.5 text-[13.5px] text-ink-3"
                >
                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" />
                  {t(point)}
                </li>
              );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
