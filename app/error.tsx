"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-x py-24 md:py-32">
      <p className="eyebrow text-rust">Something went wrong</p>
      <h1 className="display mt-5 max-w-[18ch] text-[clamp(2.4rem,5vw,4rem)]">
        This page could not load.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
        Try again, or return to the home page. If it keeps happening, call the team on +267
        3915990 or email info@kgoricapital.com.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="btn btn-rust">
          Try again
        </button>
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
      </div>
    </section>
  );
}
