import { business } from '../data/business';

/**
 * Converts a 12-hour time string (e.g. "11:00 AM", "9:30 PM")
 * to ISO 8601 24-hour format required by Schema.org ("11:00", "21:30").
 */
function to24h(timeStr: string): string {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

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
    "openingHoursSpecification": business.hours
      .filter(h => h.open !== 'Closed')
      .map(h => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": h.day,
        "opens":  to24h(h.open),
        "closes": to24h(h.close),
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

/**
 * FAQ schema for the homepage.
 * Enables "People Also Ask" rich results in Google search.
 * All answers use live data from business.ts — update business.ts to keep in sync.
 */
export const generateFAQSchema = () => {
  const openDays   = business.hours.filter(h => h.open !== 'Closed');
  const closedDays = business.hours.filter(h => h.open === 'Closed').map(h => h.day).join(', ');
  const firstOpen  = openDays[0]?.day ?? 'Tuesday';
  const lastOpen   = openDays[openDays.length - 1]?.day ?? 'Sunday';
  const hoursStr   = openDays[0] ? `${openDays[0].open} – ${openDays[0].close}` : '';

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is ${business.brandName} open on Mondays?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No, ${business.brandName} is closed on ${closedDays}. We are open ${firstOpen} through ${lastOpen}, ${hoursStr}.`,
        },
      },
      {
        "@type": "Question",
        "name": `Does ${business.brandName} take reservations?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${business.brandName} does not take reservations. We welcome walk-ins — come as you are!`,
        },
      },
      {
        "@type": "Question",
        "name": `Does ${business.brandName} offer delivery?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! You can order delivery from ${business.brandName} through DoorDash. Visit our DoorDash page to place an order.`,
        },
      },
      {
        "@type": "Question",
        "name": `Where is ${business.brandName} located?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${business.name} is located at ${business.location.address}, ${business.location.city}, ${business.location.state} ${business.location.zip}. Call us at ${business.contact.displayPhone}.`,
        },
      },
      {
        "@type": "Question",
        "name": `What Vietnamese dishes does ${business.brandName} serve?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${business.name} serves authentic Vietnamese cuisine including Phở (noodle soup), Bánh Mì, Bún Bò Huế, Vermicelli bowls, Rice Plates, Fried Rice, and House Specials — all made with fresh ingredients and traditional family recipes.`,
        },
      },
      {
        "@type": "Question",
        "name": `How can I contact ${business.brandName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can reach ${business.brandName} by phone at ${business.contact.displayPhone} or by email at ${business.contact.email}. We are located at ${business.location.address}, ${business.location.city}, NC.`,
        },
      },
    ],
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
