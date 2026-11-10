# Kgori Capital — website redesign

A complete redesign of [kgoricapital.com](https://www.kgoricapital.com) built with Next.js 16 (App Router), React 19 and Tailwind CSS v4. Content is drawn from Kgori Capital's published material; no performance figures, fees or guarantees have been invented.

## Run it

Node 22 or newer is required (`engines` in `package.json`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint flat config, eslint-config-next
npm run typecheck  # tsc --noEmit
npm run assets     # regenerate the OG card and 512px icon from the brand SVGs
```

CI (`.github/workflows/ci.yml`) runs lint, typecheck and build on every push and pull request.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#0B0B0C` | Headlines, body text, black bands |
| Burgundy | `#6E1A26` | Brand accent, active states, primary actions |
| Burgundy deep | `#4A0F17` | Hover on dark bands |
| Paper | `#FFFFFF` | Page canvas, reverse type on black |
| Stone | `#F4F3F1` | Quiet panels and section bands |
| Muted | `#5C5C61` | Secondary copy |
| Line | `#E1DEDA` | Hairline rules and borders |

Type: **Manrope** throughout, for headlines and UI alike, with tabular figures for data. All colours are defined once in `app/globals.css` under `@theme`.

The mark is the client's own logo, recoloured burgundy and black. Photography is the client's own library from kgoricapital.com, stored in `public/images`. The layout is a 12-column grid with square controls, hairline rules and generous white space: no cards, gradients, shadows or decorative motion.

Burgundy is used as a type accent, not a decoration: section eyebrows, statistic values, principle and value headings, insight categories and inline links. All other body copy stays ink or muted.

## Photography

All photography is the client's own, taken from the media library at kgoricapital.com and re-cut for the layout. Files live in `public/images` as WebP and are served through `next/image`, so each slot requests only the width it needs.

- `people/` — studio portraits of the executive team and board, cropped to 4:5 and converted to a single monochrome treatment so portraits shot years apart still sit together.
- `team.webp` — the firm, used on the about page and beside the contact details.
- `citizenship.webp`, `stewardship.webp`, `research.webp` — the responsibility and investment pages.
- `insights/` — one editorial cover per article, also used on the home page and related-article lists.

Decorative covers use an empty `alt` because the adjacent heading already names the article; portrait images use the person's name; scenic images carry a description in both languages. Any new photo should stay within the palette (natural, documentary, no gradients or stock chart art) and be cut to the ratio of the slot it fills.

## Pages

Every mega-menu item opens its own route; parent pages stay as overviews with teaser links to the detail pages.

- `/` — photo-led hero, firm facts, fund table, audience selector (individual, institution, corporate, adviser), firm story, Botswana band, values, private clients, philosophy tabs, testimonials, insights
- `/about` — team-photo hero, story, PRIDE values, ownership, and teaser bands for people and governance
- `/about/people` — board of directors first, then the executive team, each with an expandable biography
- `/about/governance` — board, committees and regulator, the four client-facing governance commitments, and an expandable governance Q&A
- `/investments` — philosophy, research photography, implementation essentials, and links to process, capabilities and reporting
- `/investments/process` — the four steps as an expandable walkthrough, plus the equities and fixed income philosophies
- `/investments/capabilities` — five strategies as expandable rows (who each suits, how to access it), then institutional mandates and private clients side by side
- `/investments/reporting` — risk, reporting and stewardship cards, a reporting-cadence table and an expandable reporting Q&A
- `/funds` — three funds, fees and minimums, three-question fund finder, FAQs, KYC, forms and documents
- `/funds/compare` — comparison table, what the funds share, a three-question starting point, and a choosing-a-fund Q&A
- `/funds/[slug]` — one page per fund: mandate, fit, considerations, documents, fund Q&A and next step
- `/insights` and `/insights/[slug]` — filterable library (deep-linkable via `?category=`) and article pages
- `/responsibility`, `/contact`, `/complaints`, `/accessibility`, `/legal/privacy`, `/legal/disclaimer`, 404
- `/complaints` explains how to raise a concern, what happens next, escalation to NBFIRA and links the published complaints-handling procedure
- `/accessibility` states the commitment, what has been done, known limitations and how to request another format

## Language

English and Setswana are available from the `EN | SN` control in the header (desktop utility strip and mobile menu). The choice persists in a `kgori_locale` cookie and updates `<html lang>`.

- `lib/i18n.ts` holds the interface dictionary and cookie helpers; `components/locale-provider.tsx` is the client context and exposes `locale`, `setLocale`, `t`, `copy` and `data`; `components/language-switcher.tsx` is the control.
- `lib/localized/` holds the long-form copy: `pages-en.ts` is the English source and the type shape, `pages-tn.ts` the Setswana mirror, `site-tn.ts` and `funds-tn.ts` the content data, `insights-tn.ts` the six article bodies.
- Translated: every route (home, about, funds, investments, responsibility, insights and articles, contact, privacy, disclaimer, 404), the header, mega menu, footer, forms, fund finder, insights filters, testimonials, FAQs and the assistant interface.
- Each route keeps a thin server `page.tsx` for metadata and static generation and renders a `"use client"` view from `components/pages/`, so switching language never reloads the page.
- Identifiers stay stable across languages: fund slugs, article slugs, `risk`, `category` and `doc.kind` are English, and only their labels are translated, so links and filters survive a language change.
- Client testimonial quotes stay in the language they were given; rewriting a named person's words would misrepresent them.
- Not translated: PDF fund documents. The Setswana copy was drafted in-house and still needs review and sign-off by a native speaker before it is treated as final, especially the regulated disclosure text.
- There is no root `app/loading.tsx`: a root loading boundary streamed a second, stale copy of each route next to the hydrated one, which duplicated the page in the DOM.
- The language choice is client-side only. The server always renders English, so the initial HTML and the canonical URL are English; there are no Setswana URLs or `hreflang` pairs yet. That is the next step if search engines need to index both languages separately.

## Assistant

`components/assistant.tsx` is the chat UI; `lib/assistant.ts` holds the knowledge base, retrieval logic and system prompt; `app/api/chat/route.ts` serves answers.

- Without an API key the assistant answers from a curated knowledge base of roughly 45 intents covering the funds, minimums, applications and KYC, fees, documents, performance, risk, withdrawals, statements, the client portal, contributions, tax, beneficiaries, institutional and corporate mandates, advisers, responsible investing, the investment process, insights, contact, complaints, fraud warnings, privacy, careers and media.
- Retrieval scores each intent on its patterns plus keyword overlap, so paraphrased questions still land on the right answer.
- With `OPENAI_API_KEY` set (see `.env.example`), the route calls the OpenAI-compatible endpoint in `CHAT_API_URL` (defaults to the existing Freebuff proxy) with a model allowlist and falls back to the knowledge base on any failure. Responses are rate limited per IP.
- The panel traps focus, closes on Escape and restores focus to the launcher. It is mounted on idle through `components/assistant-loader.tsx`, so the chat code is not part of the first paint.

## Forms

The enquiry and newsletter forms post to real endpoints instead of opening the visitor's email client.

- `POST /api/contact` and `POST /api/newsletter` live in `app/api/`; validation, rate limiting, storage and delivery are in `lib/forms.ts`.
- Every accepted submission is appended to `.data/enquiries.jsonl` or `.data/subscribers.jsonl` (git ignored), so nothing is lost even with no delivery configured.
- Duplicates, bot submissions (a hidden `website` honeypot) and floods (5 requests per IP per 10 minutes) are dropped or rejected before storage.
- Email delivery is optional: set `RESEND_API_KEY` plus `CONTACT_INBOX` and `CONTACT_FROM` (see `.env.example`) and each accepted enquiry and subscription is emailed through Resend's HTTP API. Without them the endpoints still validate, store and return success.
- A CRM or webhook can be used instead by setting `CONTACT_WEBHOOK_URL`; the JSON payload is posted there as-is.
- The forms show sending, success and error states, and field errors are translated inline.

## Accessibility and performance

Skip link, semantic landmarks and headings, visible focus rings, 44px minimum touch targets, labelled form controls with inline errors, keyboard-operable tabs, carousel, accordion and chat, `prefers-reduced-motion` handling, and no layout shift from media. Photography is served through `next/image` with explicit dimensions; the logo is inline SVG.

The mobile menu uses `inert` while closed, dark and burgundy bands get a white focus ring, and the assistant launcher leaves the tab order when the panel is open. The accessibility statement at `/accessibility` records the target (WCAG 2.2 AA), the known gaps and how to ask for another format.

## Search and social metadata

- `lib/seo.ts` builds one metadata object per route: title, description, canonical URL, Open Graph and Twitter card. The root layout keeps the site-wide defaults.
- `app/robots.ts`, `app/sitemap.ts` and `app/manifest.ts` serve `/robots.txt`, `/sitemap.xml` and `/manifest.webmanifest`; `app/insights/rss.xml/route.ts` serves the article feed, which every route advertises as an alternate.
- `public/brand/og-card.png` is a real 1200×630 share card, generated from the brand SVGs by `npm run assets`. The 512px icon comes from the same script.
- Article pages add `Article` and `BreadcrumbList` JSON-LD, `/funds` adds `FAQPage` JSON-LD, and the root layout describes the organisation, logo, image and contact point.
- The canonical for every page is the English URL, matching the server-rendered HTML.

## Security and reliability

- `next.config.ts` sets a Content Security Policy plus HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`, and removes the `X-Powered-By` header.
- `app/error.tsx` and `app/global-error.tsx` replace the framework error screen with a branded one that offers a retry and the phone number.
- The chat route reads `CHAT_API_URL` from the environment instead of hard-coding a provider, and keeps its per-IP rate limit and model allowlist.
- `.dev.pid` is ignored alongside `.dev.log`; the project is entirely static or server-rendered, so no image domains are configured any more.
