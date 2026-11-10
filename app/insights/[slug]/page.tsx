import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightView } from "@/components/pages/insight-view";
import { insights } from "@/lib/content";
import { rssAlternate } from "@/lib/seo";

const base = "https://www.kgoricapital.com";
const author = "Kgori Capital Investment Team";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) return { title: "Insight not found" };

  const path = `/insights/${insight.slug}`;
  const image = insight.image ?? "/brand/og-card.png";

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: path, types: rssAlternate },
    authors: [{ name: author }],
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
      url: path,
      publishedTime: insight.date,
      authors: [author],
      images: [{ url: image, alt: insight.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.excerpt,
      images: [{ url: image, alt: insight.title }],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) notFound();

  const url = `${base}/insights/${insight.slug}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: insight.title,
      description: insight.excerpt,
      datePublished: insight.date,
      articleSection: insight.category,
      author: { "@type": "Organization", name: author },
      publisher: {
        "@type": "Organization",
        name: "Kgori Capital",
        logo: {
          "@type": "ImageObject",
          url: `${base}/brand/favicon-512.png`,
        },
      },
      image: [`${base}${insight.image ?? "/brand/og-card.png"}`],
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${base}/insights` },
        { "@type": "ListItem", position: 3, name: insight.title, item: url },
      ],
    },
  ];

  return (
    <>
      <InsightView slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
