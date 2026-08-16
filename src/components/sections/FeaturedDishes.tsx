import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { assetUrl } from '../../utils/assets';

interface SignaturePiece {
  id: string;
  title: string;
  category: string;
}

const signaturePieces: SignaturePiece[] = [
  { id: 'food_3_A2', title: 'Eye Round Steak & Brisket Pho', category: 'Pho' },
  { id: 'food_28_A2', title: 'Oxtail Beef Pho', category: 'Pho' },
  { id: 'food_27_A2', title: 'Rib Beef Pho', category: 'Pho' },
  { id: 'food_16_A2', title: 'Seafood Pho', category: 'Pho' },
  { id: 'food_11_A2', title: 'Shaking Beef with Steamed Rice', category: 'House Special' },
  { id: 'food_2_A2', title: 'Banh Mi Viet Nam', category: 'Vietnamese Classic' },
  { id: 'food_14_A2', title: 'House Special Fried Rice', category: 'Rice' },
  { id: 'food_9_A2', title: 'Chicken Pad Thai', category: 'Noodles' },
  { id: 'food_1_A2', title: 'Crispy Egg Noodles', category: 'Noodles' },
  { id: 'food_10_A2', title: 'Clay Pot', category: 'House Special' },
  { id: 'food_12_A2', title: 'Egg Rolls & Fresh Shrimp Spring Rolls', category: 'Appetizers' },
  { id: 'food_13_A2', title: 'Chow Fun Noodle', category: 'Noodles' },
  { id: 'food_15_A2', title: 'Beef Stew with Bread', category: 'House Special' },
  { id: 'food_17_A2', title: 'Shaking Tofu with Steamed Rice', category: 'Vegetarian' },
  { id: 'food_18_A2', title: 'Vegetable Pho', category: 'Vegetarian' },
  { id: 'food_19_A2', title: 'Vermicelli with Lemongrass Beef', category: 'Vermicelli' },
  { id: 'food_20_A2', title: 'Vermicelli with Grilled Chicken & Egg Roll', category: 'Vermicelli' },
  { id: 'food_21_A2', title: 'Chicken Noodle Soup', category: 'Noodle Soup' },
  { id: 'food_22_A2', title: 'Wonton with Egg Noodle Soup', category: 'Noodle Soup' },
  { id: 'food_23_A2', title: 'Spicy Beef Noodle Soup', category: 'Noodle Soup' },
  { id: 'food_25_A2', title: 'Appetizer Favorites', category: 'Appetizers' },
  { id: 'food_26_A2', title: "Orange Chicken & General Tso's Chicken", category: 'Chicken' },
  { id: 'food_4_A2', title: 'Sesame Chicken with Steamed Rice', category: 'Chicken' },
  { id: 'food_5_A2', title: 'Papaya Salad', category: 'Salad' },
  { id: 'food_6_A2', title: 'Grilled Beef & Shrimp with Steamed Rice', category: 'Rice' },
  { id: 'food_7_A2', title: 'Grilled Pork Chop & Eggs with Steamed Rice', category: 'Rice' },
  { id: 'food_8_A2', title: 'Five Spice Chicken with Garlic Rice', category: 'Rice' },
  { id: 'drink_1_A2', title: 'Vietnamese Drinks', category: 'Drinks' },
  { id: 'drink_2_A2', title: 'Fresh Smoothies', category: 'Drinks' },
];

const signatureImage = (id: string, width: 480 | 960) =>
  assetUrl(`/images/signature-masterpieces/${width}/${id}.webp`);

export const FeaturedDishes = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  useEffect(() => {
    if (isAutoPaused || prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const scrollStep = Math.min(gallery.clientWidth * 0.82, 920);
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      const hasReachedEnd = gallery.scrollLeft >= maxScroll - 12;

      gallery.scrollTo({
        left: hasReachedEnd ? 0 : Math.min(gallery.scrollLeft + scrollStep, maxScroll),
        behavior: 'smooth',
      });
    }, 10_000);

    return () => window.clearInterval(intervalId);
  }, [isAutoPaused, prefersReducedMotion]);

  const scrollGallery = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollBy({
      left: direction * Math.min(gallery.clientWidth * 0.82, 920),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="signature-masterpieces"
      className="relative overflow-hidden bg-[#211915] py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(123,161,80,0.18),transparent_32%),radial-gradient(circle_at_88%_72%,rgba(197,160,89,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute -left-28 top-28 h-64 w-64 rounded-full border border-white/[0.04] sm:h-96 sm:w-96" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-brand-gold">
                Our New Collection
              </span>
            </div>
            <h2 className="font-serif text-5xl uppercase leading-[0.84] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              Signature
              <span className="mt-2 block font-serif italic text-brand-green sm:mt-3">
                Masterpieces
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="max-w-lg lg:justify-self-end"
          >
            <p className="text-sm font-light leading-7 text-white/58 sm:text-base">
              From slow-simmered pho to sizzling house favorites, discover the dishes that define the EC Pho table.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-green px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#8cad62]"
              >
                View Full Menu
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <span className="w-full text-[10px] font-bold uppercase tracking-[0.24em] text-white/35 sm:w-auto">
                29 favorites
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-end border-t border-white/10 pt-5 sm:mt-20 sm:pt-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              aria-label="Previous signature dishes"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-brand-green hover:bg-brand-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:flex"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => setIsAutoPaused(current => !current)}
              aria-label={isAutoPaused ? 'Resume automatic gallery scrolling' : 'Pause automatic gallery scrolling'}
              aria-pressed={isAutoPaused}
              title={isAutoPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-brand-green hover:bg-brand-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:h-11 sm:w-11"
            >
              {isAutoPaused ? <Play size={15} /> : <Pause size={15} />}
            </button>
            <button
              type="button"
              onClick={() => scrollGallery(1)}
              aria-label="Next signature dishes"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-brand-green hover:bg-brand-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:flex"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="no-scrollbar -mr-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 pr-4 pt-7 sm:-mr-6 sm:gap-6 sm:pb-14 sm:pr-6 sm:pt-9 lg:-mr-8 lg:pr-8"
          aria-label="Signature dishes gallery"
        >
          {signaturePieces.map((piece, index) => (
            <motion.article
              key={piece.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: Math.min(index, 5) * 0.06 }}
              className={`group w-[78vw] max-w-[310px] flex-none snap-start ${index % 2 === 1 ? 'sm:mt-12' : ''} sm:w-[310px] lg:w-[330px] lg:max-w-[330px]`}
            >
              <div className="relative aspect-[210/297] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:rounded-[34px]">
                <img
                  src={signatureImage(piece.id, 480)}
                  srcSet={`${signatureImage(piece.id, 480)} 480w, ${signatureImage(piece.id, 960)} 960w`}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 310px, 330px"
                  alt={piece.title}
                  loading="lazy"
                  decoding="async"
                  width="960"
                  height="1358"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
              </div>

              <div className="flex items-start justify-between gap-4 px-1 pt-5">
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.26em] text-brand-gold/75">
                    {piece.category}
                  </p>
                  <h3 className="font-serif text-lg leading-snug tracking-tight text-white/88 transition-colors group-hover:text-brand-green">
                    {piece.title}
                  </h3>
                </div>
                <span className="font-serif text-sm italic text-white/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
