"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * The assistant panel is not part of the first paint. It is loaded once the
 * browser is idle, so the chat code and its copy stay out of the initial bundle.
 */
const Assistant = dynamic(
  () => import("@/components/assistant").then((module) => module.Assistant),
  { ssr: false },
);

export function AssistantLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idle = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idle.requestIdleCallback) {
      const handle = idle.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => idle.cancelIdleCallback?.(handle);
    }

    const timer = window.setTimeout(() => setReady(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return ready ? <Assistant /> : null;
}
