import type { Metadata } from "next";
import { ComplaintsView } from "@/components/pages/complaints-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Complaints",
  description:
    "How to raise a complaint with Kgori Capital, what happens next, and how to escalate to NBFIRA.",
  path: "/complaints",
});

export default function ComplaintsPage() {
  return <ComplaintsView />;
}
