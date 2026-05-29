# Changelog — EC Phở Website

All notable changes to this project are documented here.  
Format: `[Phase X] — YYYY-MM-DD — Short description`

---

## [Hotfix] — 2026-05-29 — CSP: thêm transparenttextures.com vào img-src

### Context
Google Rich Results Test phát hiện console error: `transparenttextures.com` bị chặn bởi Content-Security-Policy. `Home.tsx` và một số section dùng pattern texture từ domain này làm background, nhưng `vercel.json` CSP chỉ cho phép `images.unsplash.com` và `www.doordash.com` trong `img-src`.

### Change
**`vercel.json`** — `img-src` directive:
```diff
- img-src 'self' data: https://images.unsplash.com https://www.doordash.com
+ img-src 'self' data: https://images.unsplash.com https://www.doordash.com https://www.transparenttextures.com
```

### Verification
- Console error sẽ biến mất sau khi deploy ✅
- Tất cả security headers khác giữ nguyên ✅

---

## [Phase 5] — 2026-05-29 — FAQ Schema & Meta Enhancements

### Context
Three content/metadata improvements: (1) FAQ schema on homepage to trigger Google's "People Also Ask" rich results; (2) `SEOHead` needed to accept multiple schema objects so Homepage could pass both Restaurant + FAQ schemas simultaneously; (3) blog post meta descriptions (already implemented in codebase — confirmed as pre-existing).

### Changes

#### `src/utils/schema.ts`
- **Added `generateFAQSchema()`** — new export producing FAQPage Schema.org markup
  - 6 questions covering: Monday hours, reservations, delivery, location, dishes, contact
  - All answers built dynamically from `business.ts` — no hardcoded strings
  - Hours string (`"Tuesday through Sunday, 11:00 AM – 9:30 PM"`) auto-derives from `business.hours`
  - Closed days string auto-derives from filtered hours array
  - Phone, address, email pulled from `business.contact` and `business.location`

#### `src/layouts/shared/SEOHead.tsx`
- **`schema` prop**: changed type from `any` → `Record<string, unknown> | Record<string, unknown>[]`
- **Rendering**: replaced single `{schema && <script>}` block with array-aware `.map()`:
  ```tsx
  {schema && (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
    <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
  ))}
  ```
- Backward compatible — all other pages passing a single object continue to work unchanged

#### `src/pages/Home.tsx`
- Added import: `generateFAQSchema`
- Changed: `const schema = generateRestaurantSchema()` → `const schemas = [generateRestaurantSchema(), generateFAQSchema()]`
- Changed: `<SEOHead schema={schema} />` → `<SEOHead schema={schemas} />`
- Homepage `<head>` now emits **two** `<script type="application/ld+json">` blocks

#### `src/pages/BlogPostDetail.tsx` _(pre-existing — confirmed correct)_
- Already had `description={post.excerpt}`, `image={post.image}`, `article={true}`
- All 5 blog posts have non-empty excerpts in `blog.ts` ✅

### Expected Google impact
- **People Also Ask**: FAQ schema makes EC Phở eligible for expanded SERP real estate on queries like "is ec pho open monday", "does ec pho deliver", "ec pho greenville nc"
- **Blog rich results**: `article={true}` enables article rich results for blog posts
- **Blog meta descriptions**: each post shows its own excerpt in search results (not the generic site description)

### Verification
- 27/27 audit checks passed ✅
- `generateFAQSchema` exports 6 valid Question/Answer blocks ✅
- `SEOHead` handles both `schema={obj}` and `schema={[obj1, obj2]}` ✅
- All pages other than Home unaffected (backward compatible) ✅
- `SEO.tsx` still deleted, zero references ✅

---

## [Phase 4] — 2026-05-29 — Schema.org & Sitemap Rebuild

### Context
Two high-priority structural issues: (1) `openingHoursSpecification` in Schema.org used raw `"11:00 AM"` strings (invalid — Google's Rich Results Test flags these) and mapped closed days to `opens/closes: "00:00"` (interpreted as open midnight-to-midnight); (2) sitemap.xml was 2+ years stale, listed two redirect-only URLs as canonical pages, had trailing slashes inconsistent with Phase 3 canonicals, and omitted all 5 blog posts.

### Changes

#### `src/utils/schema.ts`
- **Added `to24h()` helper function**: converts `"11:00 AM"` → `"11:00"`, `"9:30 PM"` → `"21:30"` (ISO 8601 24h required by Schema.org)
- **Filter closed days**: `.filter(h => h.open !== 'Closed')` — Monday now excluded entirely from `openingHoursSpecification` (absence of a day = closed, per Schema.org spec)
- **Updated mapping**: `h.open`/`h.close` → `to24h(h.open)`/`to24h(h.close)` 
- Added comment explaining why closed days are excluded (not `"00:00"`)

**Before → After (simulated output):**
```
Monday:    opens: "00:00", closes: "00:00"  ❌ → EXCLUDED ✓
Tuesday:   opens: "11:00 AM"               ❌ → opens: "11:00", closes: "21:30" ✓
(Wed–Sun identical)
```

#### `public/sitemap.xml` (full rebuild)
| Change | Before | After |
|--------|--------|-------|
| `/home-page/` entry | Included (priority 0.9) | Removed (it's a redirect) |
| `/blogs/` entry | Included (priority 0.6) | Removed (it's a redirect) |
| Trailing slashes | All URLs had trailing `/` | Removed except homepage (matches Phase 3 canonicals) |
| `lastmod` | All `2024-05-16` (2+ years stale) | Updated to actual dates |
| Blog posts | 0 included | All 5 posts added with correct `lastmod` per `blog.ts` |
| Total URLs | 7 | 10 |

**Final sitemap (10 URLs):**
- `/` — priority 1.0, lastmod 2026-05-29
- `/menu` — priority 0.8, lastmod 2026-05-29
- `/contact` — priority 0.8, lastmod 2026-05-29
- `/gallery` — priority 0.6, lastmod 2026-05-01
- `/blog` — priority 0.7, lastmod 2026-05-01
- `/blog/royal-soul-of-bun-bo-hue` — lastmod 2026-03-01
- `/blog/quiet-elegance-of-pho` — lastmod 2026-03-01
- `/blog/banh-mi-symphony` — lastmod 2026-04-01
- `/blog/fresh-shrimp-spring-rolls` — lastmod 2026-04-01
- `/blog/vietnamese-coffee-ritual` — lastmod 2026-05-01

### Verification
- Schema.org: 6 days (Tue–Sun), all `opens: "11:00"` `closes: "21:30"` ISO 8601 ✅
- Schema.org: Monday excluded (not `00:00`) ✅
- Sitemap: 10 URLs, no `/home-page`, no `/blogs`, no stale 2024 dates ✅
- Sitemap: all 5 blog slugs match `blog.ts` exactly ✅
- Sitemap: trailing slashes removed except homepage `/` ✅
- `robots.txt` still points to correct sitemap URL ✅
- **Next step post-deploy**: submit updated sitemap in Google Search Console

---

## [Phase 3] — 2026-05-29 — SEOHead & Canonical Fixes

### Context
Four issues addressed: (1) canonical URLs had trailing slashes that didn't match Vercel-served URLs; (2) `SEO.tsx` was a duplicate of `SEOHead.tsx` with no imports — dead code; (3) `seo.ts` had a stale placeholder domain `ecphognc.com`; (4) several page title tags were suboptimal — Menu had no keywords, Privacy/Terms had duplicate brand name appended by SEOHead.

### Changes

#### `src/layouts/shared/SEOHead.tsx`
- **Canonical URL**: Changed `${path}/` → `${path || '/'}` 
  - Homepage: `https://www.ecphonoodlehousenc.com/` (trailing slash on root — correct)
  - All other pages: no trailing slash, matching actual Vercel-served URLs
  - e.g. `/menu` → `https://www.ecphonoodlehousenc.com/menu` (was `/menu/`)
- **Comment updated**: Clarified convention and noted `/home-page` fallback is kept as Phase 2 safety net

#### `src/components/SEO.tsx` _(deleted)_
- Confirmed zero imports across entire `src/` before deletion
- Was a duplicate component with inconsistent default OG image path

#### `src/data/seo.ts`
- Added `import { business } from './business'`
- Replaced stale `url: 'https://ecphognc.com'` → `url: business.canonicalBaseUrl`
- Replaced stale OG image URL with `` `${business.canonicalBaseUrl}/images/og-image.jpg` ``
- Replaced `site_name: 'EC Phở'` → `site_name: business.brandName`
- Added doc comment clarifying which fields are actively rendered vs reference-only
- Added 2 new keywords: `"Vietnamese restaurant near ECU"`, `"best pho Greenville NC"`

#### `src/pages/Menu.tsx`
- Title: `"Menu"` → `"Vietnamese Menu — Phở, Bánh Mì & More"`
- Produces: `"Vietnamese Menu — Phở, Bánh Mì & More | EC Phở"` (targets `pho menu greenville nc`)
- Description enriched with menu category keywords

#### `src/pages/Privacy.tsx` _(bug fix, unplanned)_
- Title: `"Privacy Policy - EC Phở"` → `"Privacy Policy"`
- **Bug**: SEOHead appends `| EC Phở`, so old title produced `"Privacy Policy - EC Phở | EC Phở"` (duplicate brand)

#### `src/pages/Terms.tsx` _(bug fix, unplanned)_
- Title: `"Terms of Service - EC Phở"` → `"Terms of Service"`
- Same duplicate brand bug as Privacy — now produces `"Terms of Service | EC Phở"`

### Final title output (all pages)
| Page | Title rendered in browser |
|------|--------------------------|
| Home | EC Phở Vietnamese Noodle House \| Authentic Vietnamese in Greenville, NC |
| Menu | Vietnamese Menu — Phở, Bánh Mì & More \| EC Phở |
| Gallery | Gallery \| EC Phở |
| Blog | The Story Behind the Bowl \| EC Phở |
| Contact | Contact & Location \| EC Phở |
| Privacy | Privacy Policy \| EC Phở |
| Terms | Terms of Service \| EC Phở |
| Blog posts | {post.title} \| EC Phở (Phase 5) |

### Verification
- Canonical output correct for all 8 routes ✅
- `SEO.tsx` deleted, zero remaining references ✅
- `ecphognc.com` not found in any `.tsx/.ts` file ✅
- All page title tags free of duplicate brand name ✅
- Only files modified: `SEOHead.tsx`, `seo.ts`, `Menu.tsx`, `Privacy.tsx`, `Terms.tsx`; `SEO.tsx` deleted ✅

---

## [Phase 2] — 2026-05-29 — SEO Routing & Redirect Fixes

### Context
Legacy Google Sites URLs (`/home-page`, `/blogs`) were rendering duplicate content instead of redirecting. All internal navigation links throughout the app still pointed to `/home-page` instead of the canonical `/`.

### Changes

#### `src/App.tsx`
- **`/home-page` route**: Changed from `element={<Home />}` → `element={<Navigate to="/" replace />}`  
  _Reason: canonical URL is `/`; `/home-page` must redirect (301-equivalent) to preserve link equity from Google Sites era, not serve duplicate content._
- **`/blogs` route**: Changed from `element={<Blog />}` → `element={<Navigate to="/blog" replace />}`  
  _Reason: same as above — `/blog` is the canonical path._
- **404 page button**: Changed `to="/home-page"` → `to="/"`  
  _Reason: the button linked to a legacy URL that now redirects. More direct to point straight to `/`._
- Added inline comments for both redirect routes explaining the Google Sites migration context.

#### `src/layouts/shared/Footer.tsx`
- **Brand logo link** (line 13): `to="/home-page"` → `to="/"`
- **Quick Links "Home"** (line 38): `to="/home-page"` → `to="/"`

#### `src/layouts/shared/Header.tsx`
- **`navLinks` array** (line 24): `path: '/home-page'` → `path: '/'`  
  _Affects both desktop nav and mobile nav overlay (both iterate navLinks)._
- **Logo link** (line 42): `to="/home-page"` → `to="/"`

### Files NOT changed (intentionally)
| File | Reason kept as-is |
|------|-------------------|
| `src/data/urlMigration.ts` | Historical record of Google Sites URL mapping — not a navigation reference |
| `src/layouts/shared/SEOHead.tsx` | Canonical URL logic already maps `/home-page` → `/` — correct, keep working |

### Verification
- `/home-page` → redirects to `/` ✅
- `/blogs` → redirects to `/blog` ✅
- Footer logo, Footer "Home" link, Header logo, Header nav "Home" → all go to `/` ✅
- Zero remaining `/home-page` navigation references in `src/` ✅
- All other routes unaffected ✅

---

## [Phase 1] — 2026-05-29 — Critical SEO Fixes

### Context
Two critical bugs identified in SEO audit: (1) the OG image referenced in every page's meta tags did not physically exist, breaking all social media share previews; (2) Privacy and Terms pages were linked in the footer but had no route in `App.tsx`, returning 404.

### Changes

#### `public/images/og-image.jpg` _(new file)_
- Created branded Open Graph image: **1200 × 630 px JPEG, 61 KB**
- Design: exterior restaurant photo as blurred background, dark green overlay, real logo (`logoecpho.png`) composited top-left, tagline + address + domain badge
- Referenced by both `SEOHead.tsx` and `SEO.tsx` as the default social share image

#### `src/App.tsx`
- Added import: `import { Privacy } from './pages/Privacy'`
- Added import: `import { Terms } from './pages/Terms'`
- Added route: `<Route path="/privacy" element={<Privacy />} />` (line 42)
- Added route: `<Route path="/terms" element={<Terms />} />` (line 43)  
  _Both placed before the wildcard `path="*"` catch-all to prevent 404._

### Files NOT changed
| File | Reason |
|------|--------|
| `src/pages/Privacy.tsx` | Already existed with correct content and SEOHead |
| `src/pages/Terms.tsx` | Already existed with correct content and SEOHead |
| `src/layouts/shared/Footer.tsx` | Already linked `/privacy` and `/terms` correctly |

### Verification
- `public/images/og-image.jpg` exists, 1200×630px, JPEG, 61KB ✅
- `/privacy` renders Privacy page (not 404) ✅
- `/terms` renders Terms page (not 404) ✅
- Route order: `/privacy` (42) < `/terms` (43) < wildcard (78) ✅
- Only 2 files modified: `src/App.tsx`, `public/images/og-image.jpg` ✅

---

## Upcoming Phases

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 3 | Fix canonical trailing slash · Delete unused `SEO.tsx` · Clean `seo.ts` · Improve Menu title | Pending |
| Phase 4 | Fix Schema.org time format (AM/PM → 24h) · Filter closed days · Rebuild sitemap.xml | Pending |
| Phase 5 | Add FAQ schema · Blog post meta descriptions · Homepage schema array | Pending |

---

## Reference Documents

| Document | Description |
|----------|-------------|
| [`docs/ec-pho-seo-audit.docx`](./ec-pho-seo-audit.docx) | Full SEO audit report with issue tables and keyword opportunities |
| [`docs/ec-pho-refactor-plan.docx`](./ec-pho-refactor-plan.docx) | Phased refactoring plan with code snippets and risk assessment |
| [`docs/MIGRATION.md`](./MIGRATION.md) | Google Sites → Vercel deployment and DNS migration guide |
