"use client";

import { PolicyView } from "@/components/pages/policy-view";
import { useLocale } from "@/components/locale-provider";

export function AccessibilityView() {
  const { copy } = useLocale();

  return <PolicyView policy={copy.accessibility} />;
}
