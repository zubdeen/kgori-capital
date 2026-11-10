import type { Metadata } from "next";
import { HomeView } from "@/components/pages/home-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kgori Capital | Invest with pride",
  description:
    "Kgori Capital is an independent, Botswana-owned investment manager providing local and international investment solutions for pension funds, corporates, charities and private clients since 2012.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeView />;
}
