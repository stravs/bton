# SEO Plan: bton.si → #1 for concrete-surface keywords in Slovenia

## Context

bton.si is a Slovenian concrete-surfaces contractor (Bled + Maribor, serves all of Slovenia). Goal: rank #1 nationally for service keywords (tiskan/štokan/metličen/brušen beton). The redesign branch (`new`) has a strong technical base (per-page titles/meta, canonicals, optimized images, fast static Astro site, rich service copy) but is missing sitemap, robots.txt, OG image, FAQ/Service/Breadcrumb schema, a 404 page, and has a JSON-LD image bug. The **live site is a stale older deploy** whose sitemap doesn't even include the service pages.

## Competitive findings (what refines the plan)

1. **Marketplaces own the SERPs**: Mojmojster.net and Omisli.si rank top for nearly every service + "cena" query. They can't be outranked broadly — but bton can (a) get listed and become a top-rated provider *inside* them (leads + citation + reviews), and (b) beat them on specific service/price pages with genuinely deeper dedicated content (tfloor.si proves a small specialist can rank for "štokan beton cena m2" with one dedicated page).
2. **"Cena" is the dominant query modifier.** Every high-ranking page leads with pricing. bton already publishes prices (od 40–60 €/m² in `services.ts`) — competitors like Renova hide them. Transparent price sections are the wedge.
3. **Direct competitors are technically weak.** Renova (strongest specialist): ~450 words/page, no schema, no FAQ, no prices, no testimonials. None found using FAQPage/Service JSON-LD. Structured data + answer-first content is an open lane.
4. **Skatepark niche has an incumbent** (Alliance ASE, content-rich specialist site). Per user decision, skateparks are out of scope — only the 4 services on this branch.
5. **Comparison queries are weakly defended** ("tiskan beton ali tlakovci", "asfalt, tlakovci ali beton na dvorišču") — currently answered by forum threads and thin articles. bton's FAQ data already seeds these.

## Scope constraint (per user)

All work happens **on the `new` branch only**, and only for the **4 services that exist on this branch** (štokan, tiskan, metličen, brušen beton). Do NOT re-add the live site's skatepark / vrtna garnitura services. No merging or deploying as part of this task.

## Phase 1 — Technical foundation (code)

Files and changes:

- **`package.json` / `astro.config.mjs`**: add `@astrojs/sitemap` integration (`site: 'https://bton.si'` already set, works immediately).
- **`public/robots.txt`** (new): allow all, point to `https://bton.si/sitemap-index.xml`. Note: Cloudflare currently injects a managed robots.txt blocking AI crawlers (GPTBot, ClaudeBot…) — flag to user to relax that dashboard setting for AI-search visibility; our static file may be overridden until they do.
- **`src/layouts/Layout.astro`**:
  - Fix JSON-LD `image` bug at line ~63 (`canonical + 'favicon.png'` → `new URL('/favicon.png', Astro.site)`).
  - Enrich `GeneralContractor` schema: `url`, `priceRange`, `geo`, `openingHoursSpecification`, `areaServed`, `sameAs` (GBP/social URLs — ask user for links).
  - Add `og:image` + `twitter:image` (new 1200×630 branded image generated from an existing gallery asset in `src/assets/images/`, placed in `public/og.jpg`).
  - Accept an optional `schema` slot/prop so pages can inject additional JSON-LD blocks.
- **`src/pages/storitve/[id].astro`**: add `Service` + `BreadcrumbList` + per-service `FAQPage` JSON-LD (breadcrumbs already exist visually at lines 33–39).
- **`src/components/Faq.astro`**: emit `FAQPage` JSON-LD from existing `faqs[]` in `src/data/services.ts`.
- **`src/pages/404.astro`** (new): simple branded 404 with links to services.
- **`src/components/Gallery.astro`** line ~37: replace `Projekt BTON ${i+1}` alts with descriptive Slovenian alts (describe finish + setting per photo).
- **`src/components/Hero.astro`**: make the H1 keyword-bearing ("Betonske površine po vsi Sloveniji" concept) while keeping "Domišljiji dajemo obliko" as the visual slogan line — coordinate with existing design (steel blue accent, editorial type; don't break it).

## Phase 2 — Content: win the "cena" and comparison queries

- **Per-service price + FAQ sections** on each `/storitve/*` page: extend `src/data/services.ts` with 3–5 service-specific FAQs (answer-first, 1–2 sentence direct answers — this is what AI Overviews cite) and a clear "Okvirna cena" block with the €/m² ranges and what affects price. Targets "štokan beton cena m2"-style queries where tfloor/omisli rank now.
- **Comparison guide page(s)**: start with one — "Tiskan beton ali tlakovci?" (weakest competition, seeds exist in FAQ #7). Static Astro page, answer-first structure, table comparison, internal links to service pages.
- Internal linking: services ↔ comparison guide ↔ homepage FAQ.

## Phase 3 — Off-site checklist (user actions; I prep materials)

1. **Get listed on Mojmojster.net and Omisli.si** (biggest single lever — they hold the #1 spots; be the top-rated provider inside them). Collect reviews there and on Google.
2. **GBP**: primary category "Concrete contractor", all services listed, weekly photo posts, NAP identical to site footer, link GBP URL into `sameAs` schema.
3. **Citations**: bizi.si, zlatestrani.si, Facebook/Instagram profiles linked both ways.
4. **Google Search Console**: verify domain, submit sitemap, monitor queries. Bing Webmaster Tools too.
5. **Cloudflare**: reconsider the managed AI-crawler block (currently blocks GPTBot/ClaudeBot → invisible to ChatGPT/Claude recommendations).
6. Photograph every finished project with location → feeds future reference pages and GBP posts.

## Verification

- `npm run build` — confirm `dist/sitemap-index.xml` includes all routes (7 existing + new pages), robots.txt copied, 404.html emitted.
- Validate JSON-LD: paste rendered HTML into Google Rich Results Test / schema.org validator (or lint the JSON blocks locally with `node`).
- `npm run preview` + check each page: OG tags (og:image resolves), breadcrumbs schema, FAQ schema present.
- Lighthouse run on preview (target ≥95 performance/SEO/accessibility).
- After deploy: fetch live `https://bton.si/sitemap-index.xml` and robots.txt; submit in GSC.

## Expectations

Slovenian market is small: top-3 for "štokan/metličen beton" plausible within weeks of deploy + GSC submission; "tiskan beton" (most contested) 3–6 months and depends heavily on Phase 3 reviews/citations; "cena" long-tail queries are the fastest wins.
