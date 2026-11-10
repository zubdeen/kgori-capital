"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

export default function NotFound() {
  const { copy } = useLocale();
  const c = copy.notFound;

  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow text-muted">{c.eyebrow}</p>
          <h1 className="display mt-5 text-[clamp(2.8rem,6vw,4.8rem)]">{c.title}</h1>
          <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-ink-3">{c.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary">
              {c.home}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/funds" className="btn btn-outline">
              {c.funds}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="border-t border-line pt-5">
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">{c.popular}</p>
            <ul className="mt-4 space-y-3">
              {c.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-line text-[13px] text-ink-3 hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
