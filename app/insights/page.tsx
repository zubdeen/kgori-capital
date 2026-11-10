import type { Metadata } from "next";
import { InsightsView } from "@/components/pages/insights-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Market watch, quarterly insights and investment thinking from Kgori Capital's investment team in Gaborone.",
  path: "/insights",
});

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  return <InsightsView initialCategory={params.category ?? "All"} />;
}
