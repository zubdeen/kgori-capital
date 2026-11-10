import type { MetadataRoute } from "next";
import { funds, insights } from "@/lib/content";

const base = "https://www.kgoricapital.com";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/people", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/governance", priority: 0.7, changeFrequency: "yearly" },
  { path: "/investments", priority: 0.9, changeFrequency: "monthly" },
  { path: "/investments/process", priority: 0.7, changeFrequency: "yearly" },
  { path: "/investments/capabilities", priority: 0.7, changeFrequency: "yearly" },
  { path: "/investments/reporting", priority: 0.6, changeFrequency: "yearly" },
  { path: "/funds", priority: 0.9, changeFrequency: "weekly" },
  { path: "/funds/compare", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/responsibility", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/complaints", priority: 0.5, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.5, changeFrequency: "yearly" },
  { path: "/legal/privacy", priority: 0.4, changeFrequency: "yearly" },
  { path: "/legal/disclaimer", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const fundPages = funds.map((fund) => ({
    url: `${base}/funds/${fund.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articles = insights.map((insight) => ({
    url: `${base}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...fundPages, ...articles];
}
