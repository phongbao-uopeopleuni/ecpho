# SEO Refactoring Plan — EC Phở

> **Stack:** React 18 + Vite + Tailwind + react-helmet-async  
> **Domain:** https://www.ecphonoodlehousenc.com  
> **Audit date:** May 29, 2026  
> **Guiding principle:** All legacy Google Sites URLs must continue to resolve (via redirect). Each phase is committed separately for easy rollback.

---

## Phase Overview

| Phase | Name | Scope | Priority | Est. Time | Status |
|-------|------|-------|----------|-----------|--------|
| 1 | Critical fixes | OG image missing · Privacy/Terms 404 | Critical | ~1.5 hrs | ✅ Done |
| 2 | Routing & redirects | Duplicate routes → 301 redirects · Update nav links | High | ~30 min | ✅ Done |
| 3 | SEOHead & canonicals | Trailing slash · Dead code · Meta improvements | High | ~45 min | Pending |
| 4 | Schema & sitemap | Schema.org time format · Closed days · Sitemap rebuild | High | ~1 hr | Pending |
| 5 | Content & metadata | FAQ schema · Blog meta descriptions · Schema array | Medium | ~1 hr | Pending |

---

## Phase 3 — SEOHead & Canonical Fixes

### 3.1 Remove trailing slash from canonical URLs
**File:** `src/layouts/shared/SEOHead.tsx`

```diff
- const canonicalUrl = `${business.canonicalBaseUrl}${path}/`;
+ const canonicalUrl = `${business.canonicalBaseUrl}${path}`;
```

**Why:** Canonical URLs include a trailing slash (`/menu/`) but Vercel serves pages without one (`/menu`). Inconsistency can split link equity.

### 3.2 Delete unused SEO.tsx component
**File:** `src/components/SEO.tsx` → **delete**

**Why:** No page imports it. It duplicates `SEOHead.tsx` with a different default OG image URL — a maintenance hazard.

```bash
# Verify unused before deleting:
grep -r "components/SEO" src/   # should return empty
```

### 3.3 Clean up seo.ts placeholder data
**File:** `src/data/seo.ts`

```diff
+ import { business } from './business';

  openGraph: {
-   url: 'https://ecphognc.com', // Placeholder
+   url: business.canonicalBaseUrl,
  }
```

### 3.4 Improve Menu page title tag
**File:** `src/pages/Menu.tsx`

```diff
- <SEOHead title="Menu" description="..." />
+ <SEOHead title="Vietnamese Menu — Phở, Bánh Mì & More" description="..." />
```

**Why:** Title "Menu | EC Phở" misses local keyword opportunities like "pho menu greenville nc".

---

## Phase 4 — Schema.org & Sitemap

### 4.1 Fix opening hours time format
**File:** `src/utils/schema.ts`

Schema.org requires ISO 8601 24-hour strings (`"11:00"`, `"21:30"`). Current code passes `"11:00 AM"` and `"9:30 PM"`.

```typescript
function to24h(timeStr: string): string {
  if (timeStr === 'Closed') return '00:00';
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
```

### 4.2 Filter closed days from schema
```diff
- openingHoursSpecification: business.hours.map(h => ({
+ openingHoursSpecification: business.hours
+   .filter(h => h.open !== 'Closed')
+   .map(h => ({
```

**Why:** Monday mapped to `opens: "00:00", closes: "00:00"` is invalid — Google reads it as "open midnight to midnight".

### 4.3 Rebuild sitemap.xml
**File:** `public/sitemap.xml`

Changes needed:
- Remove `/home-page/` entry (now a redirect)
- Remove `/blogs/` entry (now a redirect)
- Add all 5 blog post URLs with correct `lastmod`
- Update all `lastmod` dates (currently stuck at `2024-05-16`)
- Remove trailing slashes from `<loc>` to match canonical tags after Phase 3

---

## Phase 5 — Content & Metadata

### 5.1 Add FAQ schema to homepage
**File:** `src/utils/schema.ts` + `src/pages/Home.tsx`

Questions to include:
- Is EC Phở open on Mondays?
- Does EC Phở take reservations?
- Does EC Phở offer delivery?
- Where is EC Phở located?

**Why:** FAQ schema enables People Also Ask SERP feature — high-visibility real estate for local restaurant queries.

### 5.2 Add blog post excerpt as meta description
**File:** `src/pages/BlogPostDetail.tsx`

```diff
  <SEOHead
    title={post.title}
+   description={post.excerpt}
    article={true}
  />
```

### 5.3 Update SEOHead to accept schema array
**File:** `src/layouts/shared/SEOHead.tsx`

Replace single `schema && <script>` with array-aware rendering so Home can pass `[restaurantSchema, faqSchema]`.

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| `/home-page` redirect loses Google index entry | Low | Medium | `<Navigate replace>` passes link equity; GSC monitors drop |
| Trailing slash removal confuses Googlebot | Very Low | Low | Both with/without slash are valid; redirect handles both |
| SEOHead schema array crashes if passed wrong type | Low | High | TypeScript type guard + local dev test before deploy |
| Sitemap changes cause re-crawl delay | Very Low | Very Low | Submit updated sitemap in GSC immediately after deploy |
| Deleting SEO.tsx breaks an import | Very Low | High | `grep -r 'components/SEO' src/` confirms unused before delete |
