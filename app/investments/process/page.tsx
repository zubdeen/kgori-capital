import type { Metadata } from "next";
import { ProcessView } from "@/components/pages/process-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our process",
  description:
    "The four-step Kgori Capital investment process, applied consistently across every mandate and market cycle.",
  path: "/investments/process",
});

export default function ProcessPage() {
  return <ProcessView />;
}
