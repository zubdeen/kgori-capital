"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import type { Leader } from "@/lib/content";
import { blurProps } from "@/lib/image-blur";

function PersonCard({
  person,
  readProfile,
  className,
}: {
  person: Leader;
  readProfile: string;
  className?: string;
}) {
  return (
    <li className={className}>
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
        <Image
          src={person.photo}
          {...blurProps(person.photo)}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <h3 className="mt-4 text-[1.15rem] font-semibold leading-tight tracking-[-0.02em]">
        {person.name}
      </h3>
      <p className="mt-1 text-[10.5px] uppercase tracking-[0.08em] text-muted">
        {person.role}
      </p>
      <details className="group mt-4 border-t border-line">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-rust [&::-webkit-details-marker]:hidden">
          {readProfile}
          <span
            aria-hidden
            className="text-[15px] leading-none transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <p className="pb-3 text-[12.5px] leading-relaxed text-muted">{person.bio}</p>
      </details>
    </li>
  );
}

function personGridClass(index: number, total: number) {
  const remainder = total % 3;
  const centeredStart =
    remainder === 2 && index === total - 2
      ? "lg:col-start-2"
      : remainder === 1 && index === total - 1
        ? "lg:col-start-3"
        : "";

  return `lg:col-span-2 ${centeredStart}`;
}

export function PeopleView() {
  const { copy, data } = useLocale();
  const c = copy.about.people;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="border-b border-ink pb-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
              {c.board}
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-ink-3">
            {c.boardBody}
          </p>
          <p className="mt-3 max-w-2xl text-[12.5px] leading-relaxed text-muted">
            {c.boardNote}
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {data.leadership.board.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                readProfile={c.readProfile}
                className={personGridClass(index, data.leadership.board.length)}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="container-x">
          <div className="border-b border-ink pb-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
              {c.executives}
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-ink-3">
            {c.note}
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {data.leadership.executives.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                readProfile={c.readProfile}
                className={personGridClass(index, data.leadership.executives.length)}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
