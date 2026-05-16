import { business } from '../data/business';

export const generateRestaurantSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": business.name,
    "image": [
      `${business.canonicalBaseUrl}/images/og-image.jpg`
    ],
    "@id": business.canonicalBaseUrl,
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
    })),
    "menu": `${business.canonicalBaseUrl}/menu`,
    "acceptsReservations": "False",
    "orderAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": business.social.doorDash,
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "deliveryMethod": ["http://schema.org/DeliveryModeDirectService"],
      "priceSpecification": {
        "@type": "DeliveryChargeSpecification",
        "appliesToDeliveryMethod": "http://schema.org/DeliveryModeDirectService",
        "priceCurrency": "USD"
      }
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${business.canonicalBaseUrl}${item.item}`
    }))
  };
};
