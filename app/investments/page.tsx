import type { Metadata } from "next";
import { InvestmentsView } from "@/components/pages/investments-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Investment philosophy",
  description:
    "Active investment management with a balanced focus on risk and reward. How Kgori Capital researches, values, builds and reports on portfolios.",
  path: "/investments",
});

export default function InvestmentsPage() {
  return <InvestmentsView />;
}
