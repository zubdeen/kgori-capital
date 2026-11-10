import {
  capabilities,
  faqs,
  funds,
  insights,
  leadership,
  process,
  stats,
  testimonials,
  values,
  type Fund,
  type Insight,
  type Leader,
} from "@/lib/content";
import { fundsTn } from "./funds-tn";
import { insightsTn } from "./insights-tn";
import {
  capabilitiesTn,
  faqsTn,
  leadershipTn,
  processTn,
  statsTn,
  testimonialsTn,
  valuesTn,
} from "./site-tn";
import { pagesEn, type PageCopy } from "./pages-en";
import { pagesTn } from "./pages-tn";
import type { Locale } from "@/lib/i18n";

export type SiteData = {
  stats: readonly { value: string; label: string }[];
  funds: Fund[];
  values: readonly { letter: string; name: string; body: string }[];
  leadership: {
    executives: readonly Leader[];
    board: readonly Leader[];
  };
  capabilities: readonly { name: string; detail: string }[];
  process: readonly { step: string; title: string; body: string }[];
  faqs: readonly { q: string; a: string }[];
  testimonials: readonly { quote: string; name: string; role: string }[];
  insights: Insight[];
};

export const siteData: Record<Locale, SiteData> = {
  en: {
    stats,
    funds,
    values,
    leadership,
    capabilities,
    process,
    faqs,
    testimonials,
    insights,
  },
  tn: {
    stats: statsTn,
    funds: fundsTn,
    values: valuesTn,
    leadership: leadershipTn,
    capabilities: capabilitiesTn,
    process: processTn,
    faqs: faqsTn,
    testimonials: testimonialsTn,
    insights: insightsTn,
  },
};

export const pageCopy: Record<Locale, PageCopy> = {
  en: pagesEn,
  tn: pagesTn,
};

export type { PageCopy };
