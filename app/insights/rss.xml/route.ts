import { insights } from "@/lib/content";

const base = "https://www.kgoricapital.com";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = insights
    .slice()
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map(
      (insight) => `    <item>
      <title>${escapeXml(insight.title)}</title>
      <link>${base}/insights/${insight.slug}</link>
      <guid isPermaLink="true">${base}/insights/${insight.slug}</guid>
      <pubDate>${new Date(insight.date).toUTCString()}</pubDate>
      <category>${escapeXml(insight.category)}</category>
      <description>${escapeXml(insight.excerpt)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kgori Capital — Insights</title>
    <link>${base}/insights</link>
    <description>Market watch, quarterly insights and investment thinking from Kgori Capital.</description>
    <language>en</language>
    <atom:link href="${base}/insights/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
