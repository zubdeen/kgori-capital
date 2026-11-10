import type { Metadata } from "next";
import { ReportingView } from "@/components/pages/reporting-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Risk and reporting",
  description:
    "How Kgori Capital manages risk, reports to clients and exercises stewardship: defined risk budgets, monthly reporting and active voting.",
  path: "/investments/reporting",
});

export default function ReportingPage() {
  return <ReportingView />;
}
