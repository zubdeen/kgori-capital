import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AssistantLoader } from "@/components/assistant-loader";
import { LocaleProvider } from "@/components/locale-provider";
import { HashScroll } from "@/components/hash-scroll";
import { SkipLink } from "@/components/skip-link";
import { company } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kgoricapital.com"),
  title: {
    default: "Kgori Capital | Invest with pride",
    template: "%s | Kgori Capital",
  },
  description:
    "Kgori Capital is an independent, Botswana-owned investment manager providing local and international investment solutions for pension funds, corporates, charities and private clients since 2012.",
  keywords: [
    "Kgori Capital",
    "Botswana investment manager",
    "unit trusts Botswana",
    "asset management Gaborone",
    "NBFIRA",
    "investment Botswana",
    "pension fund manager",
    "unit trust",
    "Botswana financial services",
  ],
  icons: {
    icon: "/brand/favicon-192.png",
    apple: "/brand/favicon-192.png",
  },
  openGraph: {
    title: "Kgori Capital | Invest with pride",
    description:
      "An independent, Botswana-owned investment manager. Internationally informed, locally invested since 2012.",
    type: "website",
    locale: "en_BW",
    siteName: "Kgori Capital",
    images: [
      {
        url: "/brand/og-card.png",
        width: 1200,
        height: 630,
        alt: "Kgori Capital — Invest with pride.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kgori Capital | Invest with pride",
    description:
      "An independent, Botswana-owned investment manager. Internationally informed, locally invested since 2012.",
    images: [
      {
        url: "/brand/og-card.png",
        width: 1200,
        height: 630,
        alt: "Kgori Capital — Invest with pride.",
      },
    ],
  },
  alternates: {
    types: {
      "application/rss+xml": "/insights/rss.xml",
    },
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: "max-snippet:500, max-image-preview:large, max-video-preview:60",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  viewportFit: "cover",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: company.name,
  legalName: company.legalName,
  url: "https://www.kgoricapital.com",
  foundingDate: "2012",
  description:
    "Independent, Botswana-owned investment manager providing local and international investment solutions for pension funds, corporates, charities and private clients.",
  telephone: company.phone,
  email: company.email,
  areaServed: "BW",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, Exponential Building, Plot 54351, CBD",
    addressLocality: "Gaborone",
    addressCountry: "BW",
  },
  sameAs: [company.linkedin, company.youtube],
  logo: "https://www.kgoricapital.com/brand/favicon-512.png",
  image: "https://www.kgoricapital.com/brand/og-card.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "client enquiries",
    telephone: company.phone,
    email: company.email,
    areaServed: "BW",
    availableLanguage: ["en", "tn"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <LocaleProvider>
          <HashScroll />
          <SkipLink />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <AssistantLoader />
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
