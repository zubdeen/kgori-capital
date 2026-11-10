import type { Metadata } from "next";
import { DisclaimerView } from "@/components/pages/disclaimer-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "Important information about the content on the Kgori Capital website and investing in unit trusts.",
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return <DisclaimerView />;
}
