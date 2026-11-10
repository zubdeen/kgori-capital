import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Kgori Capital is an independent, 100% Botswana-owned investment manager founded in 2012. Meet the people, the ownership model and the governance behind the firm.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutView />;
}
