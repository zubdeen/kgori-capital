import type { Metadata } from "next";
import { CapabilitiesView } from "@/components/pages/capabilities-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities",
  description:
    "Five specialist investment strategies for pension funds, corporates, charities and private clients, managed from Gaborone with global reach.",
  path: "/investments/capabilities",
});

export default function CapabilitiesPage() {
  return <CapabilitiesView />;
}
