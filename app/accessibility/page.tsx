import type { Metadata } from "next";
import { AccessibilityView } from "@/components/pages/accessibility-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility",
  description:
    "Kgori Capital's accessibility commitment, the standards we aim for, known limitations and how to ask for information in another format.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return <AccessibilityView />;
}
