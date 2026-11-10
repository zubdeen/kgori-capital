"use client";

import { Plus } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

export function FaqList({ items }: { items?: readonly { q: string; a: string }[] }) {
  const { data } = useLocale();
  const list = items ?? data.faqs;

  return (
    <div>
      {list.map((item) => (
        <details key={item.q} className="group border-b">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.15rem]">
              {item.q}
            </h3>
            <span
              aria-hidden
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border text-ink-3 transition-transform duration-300 group-open:rotate-45"
            >
              <Plus className="h-3.5 w-3.5" />
            </span>
          </summary>
          <div className="max-w-2xl pb-6 pr-10 text-[13.5px] leading-relaxed text-ink-3">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
