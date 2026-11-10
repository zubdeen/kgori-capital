"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SETTLE_MS = 420;

function targetFor(hash: string) {
  if (!hash || hash === "#") return null;
  const id = decodeURIComponent(hash.slice(1));
  return id ? document.getElementById(id) : null;
}

function scrollToHash(hash: string) {
  const target = targetFor(hash);
  if (!target) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

/**
 * Section links such as /funds#forms and /about#values are used in the menu,
 * footer and in-page navigation. Next's scroll restoration and the browser's own
 * hash jump disagree on where to land, so the page could open at the top or past
 * the section. This keeps hash navigation deterministic: same-page clicks are
 * handled here, and a landing page with a hash is aligned once layout has settled.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;
      if (!targetFor(url.hash)) return;
      event.preventDefault();
      event.stopPropagation();
      if (url.hash !== window.location.hash) {
        window.history.pushState(null, "", url.hash);
      }
      scrollToHash(url.hash);
    };

    const onHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    let cancelled = false;
    let userMoved = false;
    const markMoved = () => {
      userMoved = true;
    };
    window.addEventListener("wheel", markMoved, { passive: true });
    window.addEventListener("touchmove", markMoved, { passive: true });

    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      scrollToHash(window.location.hash);
    });
    const timer = window.setTimeout(() => {
      if (cancelled || userMoved) return;
      scrollToHash(window.location.hash);
    }, SETTLE_MS);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("wheel", markMoved);
      window.removeEventListener("touchmove", markMoved);
    };
  }, [pathname]);

  return null;
}
