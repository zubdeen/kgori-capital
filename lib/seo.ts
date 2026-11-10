import type { Metadata } from "next";

export const siteUrl = "https://www.kgoricapital.com";

export const rssAlternate = {
  "application/rss+xml": "/insights/rss.xml",
};

export const defaultSocialImage = {
  url: "/brand/og-card.png",
  width: 1200,
  height: 630,
  alt: "Kgori Capital — Invest with pride.",
};

/**
 * Page metadata with a canonical URL and matching Open Graph and Twitter
 * cards. Without this, the root layout's social copy would be inherited by
 * every route.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = defaultSocialImage,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: { url: string; width?: number; height?: number; alt: string };
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      types: rssAlternate,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
