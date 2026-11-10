import type { Metadata } from "next";
import { ContactView } from "@/components/pages/contact-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Speak to Kgori Capital in Gaborone. Call +267 3915990, email info@kgoricapital.com, or send an enquiry about unit trusts and institutional mandates.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactView />;
}
