import { useState } from 'react';
import { Pause, Play, Star } from 'lucide-react';

const reviewsData = [
  { text: "The best pho I've had in ages. The broth is incredibly deep and flavorful. Highly recommend the rare beef pho!", author: "Sarah J." },
  { text: "Amazing service and even better food. The Banh Mi is a must-try. Authentic Vietnamese gem in Greenville.", author: "Michael R." },
  { text: "Clean, fresh, and consistent. EC Phở never disappoints. The summer rolls are the perfect starter.", author: "David K." },
  { text: "The oxtail phở is a game changer. Meltingly tender meat and the richest broth in town.", author: "Emily L." },
  { text: "Best Vietnamese food in NC. Everything is so fresh and authentic. Love the atmosphere too!", author: "James T." },
  { text: "Their spicy beef noodle soup (Bun Bo Hue) has the perfect kick. Authentic flavors through and through.", author: "Linda H." },
  { text: "Friendly staff and quick service even when busy. The pork banh mi is my go-to lunch.", author: "Robert P." },
  { text: "A hidden gem! The spring rolls are so fresh and the peanut sauce is addictive.", author: "Jessica W." },
  { text: "I've been coming here for years and the quality is always top-notch. Truly the soul of Vietnamese food.", author: "Kevin M." },
  { text: "The beef balls are homemade and delicious. Great place for a family dinner.", author: "Amanda C." },
  { text: "Refreshing iced coffee and perfect phở. Exactly what you need on a rainy day.", author: "Brian S." },
  { text: "Top tier service. They really make you feel welcome. The eye round steak phở is excellent.", author: "Chris B." },
  { text: "Cleanest restaurant in town with the most flavorful soup. 10/10 would recommend to anyone.", author: "Rachel G." },
  { text: "Best Bun Bo Hue I've had outside of Vietnam. The broth is complex and aromatic.", author: "Tuan N." },
  { text: "Consistently great. You can tell they put a lot of heart into their recipes.", author: "Sophie V." },
  { text: "Great portions for the price. The combination rice plate is my absolute favorite.", author: "John D." },
  { text: "Everything from the appetizers to the dessert was incredible. Highly recommend the 3-bean dessert too!", author: "Maria G." },
  { text: "As close to authentic as you can get in North Carolina. Broth is spot on.", author: "Viet H." },
  { text: "I dream about their grilled pork vermicelli. Perfect balance of sweet and savory.", author: "Laura S." },
  { text: "The shaking beef is so tender and flavorful. My family loves coming here every weekend.", author: "Daniel W." },
  { text: "Quick service for takeout but the atmosphere inside is lovely too. Great decor.", author: "Stacy F." }
];

export const ReviewMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="review-marquee relative w-full overflow-hidden py-12" aria-label="Customer reviews">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-brand-paper to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-brand-paper to-transparent z-10 pointer-events-none" />

      <button
        type="button"
        className="review-marquee-control absolute right-2 top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-dark/10 bg-white/90 text-brand-dark/60 shadow-sm transition-colors hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50"
        aria-label={isPaused ? 'Play customer reviews' : 'Pause customer reviews'}
        aria-controls="customer-review-track"
        aria-pressed={isPaused}
        title={isPaused ? 'Play customer reviews' : 'Pause customer reviews'}
        onClick={() => setIsPaused((paused) => !paused)}
      >
        {isPaused ? <Play size={16} fill="currentColor" aria-hidden="true" /> : <Pause size={16} fill="currentColor" aria-hidden="true" />}
      </button>

      <div
        id="customer-review-track"
        className={`review-marquee-track${isPaused ? ' is-paused' : ''}`}
      >
        {[false, true].map((isClone, groupIndex) => (
          <ul
            key={isClone ? 'review-clones' : 'review-originals'}
            className="review-marquee-group m-0 list-none p-0"
            aria-hidden={isClone ? true : undefined}
          >
            {reviewsData.map((review, reviewIndex) => (
              <li
                key={`${review.author}-${groupIndex}-${reviewIndex}`}
                className="w-[280px] sm:w-[350px] flex-shrink-0 bg-white p-6 sm:p-8 rounded-[30px] border border-brand-dark/[0.03] shadow-sm hover:shadow-md transition-shadow duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-brand-gold" aria-hidden="true">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={`star-${groupIndex}-${reviewIndex}-${starIndex}`} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm font-light leading-relaxed mb-6 italic text-brand-dark/70">
                    "{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}"
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-brand-dark/5 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green">{review.author}</span>
                  <span className="text-[8px] text-brand-dark/20 uppercase font-bold tracking-tighter">
                    Verified Review
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
