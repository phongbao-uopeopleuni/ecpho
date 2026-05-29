import { Helmet } from 'react-helmet-async';
import { defaultSEO } from '../../data/seo';
import { business } from '../../data/business';
import { useLocation } from 'react-router-dom';
import { absoluteAssetUrl } from '../../utils/assets';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  /** Single schema object or array of schema objects (e.g. [restaurantSchema, faqSchema]) */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEOHead = ({ title, description, image, article, schema }: SEOHeadProps) => {
  const location = useLocation();
  const seoTitle = title ? `${title} | ${business.brandName}` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoImage = image ? absoluteAssetUrl(image) : `${business.canonicalBaseUrl}/images/og-image.jpg`;

  // Canonical URL convention:
  //   - Homepage (/) → https://www.ecphonoodlehousenc.com/   (trailing slash on root only)
  //   - All other pages → no trailing slash (matches Vercel served URL)
  // /home-page is a redirect (Phase 2) so it never renders SEOHead in practice;
  // kept here as a safety fallback so canonical still points to root if it ever does.
  const path = (location.pathname === '/' || location.pathname === '/home-page' || location.pathname === '/home-page/') ? '' : location.pathname;
  const canonicalUrl = `${business.canonicalBaseUrl}${path || '/'}`;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={defaultSEO.keywords.join(', ')} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Render one <script> per schema — supports both single object and array */}
      {schema && (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
