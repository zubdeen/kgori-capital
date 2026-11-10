import type { Metadata } from "next";
import { GovernanceView } from "@/components/pages/governance-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Governance",
  description:
    "How Kgori Capital is governed: the board, its committees, the King IV benchmark, responsible investment and the controls around client money.",
  path: "/about/governance",
});

export default function GovernancePage() {
  return <GovernanceView />;
}
