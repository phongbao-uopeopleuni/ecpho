import React from 'react';
import { Helmet } from 'react-helmet-async';
import { business } from '../data/business';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'restaurant' | 'website' | 'article';
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalPath = '', 
  type = 'website',
  image = 'https://www.ecphonoodlehousenc.com/images/og-image.jpg'
}) => {
  const fullTitle = title ? `${title} | ${business.name}` : business.name;
  const metaDescription = description || business.description;
  const url = `${business.canonicalBaseUrl}${canonicalPath}`;

  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": business.name,
    "image": image,
    "url": business.canonicalBaseUrl,
    "telephone": business.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.location.address,
      "addressLocality": business.location.city,
      "addressRegion": business.location.state,
      "postalCode": business.location.zip,
      "addressCountry": business.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.location.latitude,
      "longitude": business.location.longitude
    },
    "servesCuisine": business.cuisine,
    "priceRange": "$$",
    "openingHoursSpecification": business.hours.map(h => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.day,
      "opens": h.open === "Closed" ? "00:00" : h.open,
      "closes": h.close === "Closed" ? "00:00" : h.close
    }))
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={business.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
    </Helmet>
  );
};
