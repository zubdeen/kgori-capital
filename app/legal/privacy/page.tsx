import type { Metadata } from "next";
import { PrivacyView } from "@/components/pages/privacy-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice",
  description: "How Kgori Capital handles personal information collected through this website.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return <PrivacyView />;
}
