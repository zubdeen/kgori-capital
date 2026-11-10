import type { Metadata } from "next";
import { FundsView } from "@/components/pages/funds-view";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Funds",
  description:
    "Kgori Capital unit trusts: the Enhanced Cash Fund, the Global Balanced Fund and the USD Money Market Fund. Compare risk, horizon, liquidity and documents.",
  path: "/funds",
});

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FundsPage() {
  return (
    <>
      <FundsView />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
