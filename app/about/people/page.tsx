import type { Metadata } from "next";
import { PeopleView } from "@/components/pages/people-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our people",
  description:
    "Meet the Kgori Capital board of directors and executive team: the people who own and run the firm in Gaborone.",
  path: "/about/people",
});

export default function PeoplePage() {
  return <PeopleView />;
}
