import { business } from './business';

/**
 * Default SEO configuration.
 *
 * Fields ACTIVELY rendered by SEOHead.tsx:
 *   - title       → <title> and og:title / twitter:title fallback
 *   - description → <meta name="description"> fallback
 *   - keywords    → <meta name="keywords"> (low Google impact but kept for reference)
 *
 * Fields NOT rendered (reference / future use only):
 *   - openGraph, twitter → SEOHead.tsx builds these tags directly from business.ts
 */
export const defaultSEO = {
  title: "EC Phở Vietnamese Noodle House | Authentic Vietnamese in Greenville, NC",
  description: "Experience the best Phở, Bánh Mì, and Vietnamese favorites in Greenville, NC. Authentic family recipes, fresh ingredients, and warm hospitality at EC Phở.",

  // ── Reference data (not rendered by SEOHead.tsx) ──────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.canonicalBaseUrl,
    site_name: business.brandName,
    images: [
      {
        url: `${business.canonicalBaseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${business.name}`,
      },
    ],
  },
  twitter: {
    // Update handle when official X/Twitter account is created
    handle: '@ecphognc',
    site: '@ecphognc',
    cardType: 'summary_large_image',
  },

  // ── Actively used by SEOHead.tsx ──────────────────────────────
  keywords: [
    "Vietnamese restaurant Greenville NC",
    "pho Greenville NC",
    "authentic Vietnamese food Greenville NC",
    "banh mi Greenville NC",
    "bun bo hue Greenville NC",
    "Vietnamese noodle house Greenville NC",
    "Vietnamese restaurant near ECU",
    "best pho Greenville NC",
  ]
};
