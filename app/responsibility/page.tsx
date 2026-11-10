import type { Metadata } from "next";
import { ResponsibilityView } from "@/components/pages/responsibility-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Responsibility",
  description:
    "ESG integration, investor stewardship and corporate citizenship at Kgori Capital, a UNPRI signatory since 2012.",
  path: "/responsibility",
});

export default function ResponsibilityPage() {
  return <ResponsibilityView />;
}
