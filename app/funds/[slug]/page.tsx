import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FundView } from "@/components/pages/fund-view";
import { funds } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return funds.map((fund) => ({ slug: fund.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fund = funds.find((item) => item.slug === slug);
  if (!fund) return { title: "Fund not found" };

  return pageMetadata({
    title: fund.shortName,
    description: fund.summary,
    path: `/funds/${fund.slug}`,
  });
}

export default async function FundPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fund = funds.find((item) => item.slug === slug);
  if (!fund) notFound();

  return <FundView slug={slug} />;
}
