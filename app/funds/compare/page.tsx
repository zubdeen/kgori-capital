import type { Metadata } from "next";
import { CompareView } from "@/components/pages/compare-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Compare the funds",
  description:
    "Compare the Kgori Capital Enhanced Cash, Global Balanced and USD Money Market funds by risk, objective, market exposure and horizon.",
  path: "/funds/compare",
});

export default function ComparePage() {
  return <CompareView />;
}
