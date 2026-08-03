import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { menuItems, menuCategories, menuDisclaimer } from '../data/menu';
import { menuGallery } from '../data/gallery';
import { formatPrice, cn, slugify, legacySlugify } from '../utils/format';
import { SEOHead } from '../layouts/shared/SEOHead';
import { Info } from 'lucide-react';
import { business } from '../data/business';
import { optimizedImageSrcSet, optimizedImageUrl } from '../utils/assets';

const menuHeroGalleryImages = menuGallery
  .flatMap((section) =>
    section.images.slice(0, 2).map((image) => ({
      ...image,
      label: section.label,
    }))
  )
  .slice(0, 8);

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scrolling to category
  const scrollToCategory = (category: string) => {
    const id = slugify(category);
    const element = document.getElementById(id);
    if (!element) return;

    setActiveCategory(category);

    // Suppress the scroll spy while the smooth scroll runs. A second click
    // restarts that window instead of being dropped.
    isScrollingRef.current = true;
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingRef.current = false;
      scrollTimeoutRef.current = null;
    }, 750);

    // Uses scroll-margin-top defined in CSS (scroll-mt-40)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update URL hash without jumping
    window.history.pushState(null, '', `#${id}`);
  };

  // Sync active category on scroll and handle initial hash
  useEffect(() => {
    // Initial hash scroll
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Accept the legacy slug too, so anchors shared from the old build still land.
        const category = menuCategories.find(c =>
          slugify(c) === hash || legacySlugify(c) === hash
        );
        if (category) {
          setTimeout(() => scrollToCategory(category), 500);
        }
      }
    };

    handleInitialHash();

    const observerOptions = {
      root: null,
      // Focus detection on the top portion of the viewport
      rootMargin: '-160px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      // Find the first intersecting entry (since they are in document order)
      const intersectingEntries = entries
        .filter(entry => entry.isIntersecting)
        // Sort by distance from top of detection area
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (intersectingEntries.length > 0) {
        const topEntry = intersectingEntries[0];
        const categoryId = topEntry.target.id;
        const category = menuCategories.find(c => slugify(c) === categoryId);
        if (category && category !== activeCategory) {
          setActiveCategory(category);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    menuCategories.forEach((category) => {
      const element = document.getElementById(slugify(category));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Auto-scroll the horizontal nav to keep active item in view
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !activeCategory) return;

    const activeElement = nav.querySelector(`[data-category="${activeCategory}"]`);
    if (!activeElement) return;

    // Scroll the nav strip itself rather than using scrollIntoView: the buttons
    // live in a sticky bar, so scrollIntoView also scrolls the window vertically
    // and throws the visitor far down the page.
    const navRect = nav.getBoundingClientRect();
    const itemRect = activeElement.getBoundingClientRect();
    const offset = (itemRect.left - navRect.left) - (navRect.width - itemRect.width) / 2;

    nav.scrollTo({ left: nav.scrollLeft + offset, behavior: 'smooth' });
  }, [activeCategory]);

  return (
    <>
      <SEOHead 
        title="Vietnamese Menu — Phở, Bánh Mì & More"
        description="Explore our full menu: authentic Phở, Bánh Mì, Vermicelli, Rice Plates, and House Specials. Fresh Vietnamese comfort food in Greenville, NC."
      />
      
      {/* Page Header */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-brand-cream border-b border-brand-dark/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <Container className="relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block text-brand-green"
          >
            Traditional Heritage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tighter uppercase text-brand-dark"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/50 max-w-2xl mx-auto font-light text-base sm:text-lg"
          >
            Every dish is prepared using natural ingredients and recipes passed down through generations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative mt-12 sm:mt-14"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-brand-cream via-brand-cream/90 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-brand-cream via-brand-cream/90 to-transparent z-10" />

            <div className="menu-gallery-marquee">
              <div className="menu-gallery-marquee-track">
                {[...menuHeroGalleryImages, ...menuHeroGalleryImages].map((image, index) => (
                  <figure
                    key={`${image.src}-${index}`}
                    className="relative h-[9rem] w-[13rem] sm:h-[11rem] sm:w-[16rem] md:h-[12rem] md:w-[18rem] flex-none overflow-hidden rounded-[1.75rem] border border-brand-dark/8 bg-brand-paper shadow-[0_18px_50px_-24px_rgba(45,36,36,0.28)]"
                  >
                    <img
                      src={optimizedImageUrl(image.src, 480)}
                      srcSet={optimizedImageSrcSet(image.src)}
                      sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-brand-dark/10 to-transparent" />
                    <figcaption className="absolute left-4 bottom-4 text-left">
                      <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                        {image.label}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Menu Navigation Sticky Bar */}
      <div className="sticky top-[72px] sm:top-[80px] z-30 bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5">
        <Container className="relative">
          {/* Fade masks for horizontal scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-brand-cream/80 to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-brand-cream/80 to-transparent z-10 pointer-events-none md:hidden" />
          
          <div 
            ref={navRef}
            className="flex whitespace-nowrap gap-8 py-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {menuCategories.map((category) => (
              <button
                key={category}
                data-category={category}
                onClick={() => scrollToCategory(category)}
                className={cn(
                  "relative text-xs font-bold uppercase tracking-[0.25em] transition-all py-1",
                  activeCategory === category 
                    ? "text-brand-green" 
                    : "text-brand-dark/40 hover:text-brand-dark"
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Content */}
      <section className="py-24 bg-brand-cream min-h-screen">
        <Container>
          {/* Menu Items List */}
          <div className="w-full">
              {menuCategories.map((category) => (
                <div 
                  key={category} 
                  id={slugify(category)}
                  className="mb-32 scroll-mt-40"
                >
                  <div className="mb-12">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-green mb-4 block">Selection</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 uppercase tracking-tighter">{category}</h2>
                    <div className="h-px w-32 bg-brand-green/30" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10">
                    {menuItems
                      .filter(item => item.category === category)
                      .map((item) => (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          className="group bg-brand-paper p-6 sm:p-10 border border-brand-dark/5 transition-all hover:border-brand-green/20 shadow-sm relative overflow-hidden"
                        >
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-6 gap-2 sm:gap-6 relative z-10">
                            <div className="flex flex-col gap-1">
                              {item.code && (
                                <span className="text-xs font-bold text-brand-green tracking-[0.2em]">{item.code}</span>
                              )}
                              <h3 className="text-xl sm:text-2xl font-serif text-brand-dark leading-tight group-hover:text-brand-green transition-colors">{item.name}</h3>
                            </div>
                            <div className="hidden sm:block h-px flex-grow border-t border-brand-dark/10" />
                            <span className="font-serif text-xl sm:text-2xl text-brand-green whitespace-nowrap">{formatPrice(item.price)}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 mb-8">
                            {item.vietnameseName && (
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold border border-brand-gold/20 px-4 py-1.5">{item.vietnameseName}</span>
                            )}
                            {item.tags?.map(tag => (
                              <Badge key={`${item.id}-${tag}`} variant="green" className="text-[10px] uppercase tracking-widest px-4">{tag}</Badge>
                            ))}
                          </div>

                          <p className="text-base text-brand-dark/50 leading-relaxed font-light relative z-10 mb-6">
                            {item.description}
                          </p>

                          {item.variations && (
                            <div className="relative z-10 pt-6 border-t border-brand-dark/5 space-y-3">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/30 mb-2">Options</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {item.variations.map((v, i) => (
                                  <div key={`${item.id}-var-${i}`} className="flex justify-between items-center bg-brand-cream/40 px-4 py-2.5 rounded-sm border border-brand-dark/[0.02]">
                                    <span className="text-xs uppercase tracking-wide text-brand-dark/60">{v.name}</span>
                                    <span className="text-xs font-serif text-brand-green">{formatPrice(v.price)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-14 transition-transform duration-500" />
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          
          {/* Menu Disclaimer & Footer Action */}
          <div className="mt-20 pt-20 border-t border-brand-dark/5 flex flex-col items-center text-center space-y-8">
            <div className="flex items-center gap-4 text-brand-dark/40 max-w-2xl">
              <Info size={16} className="shrink-0 text-brand-gold" />
              <p className="text-xs uppercase tracking-[0.2em] leading-relaxed font-bold">{menuDisclaimer}</p>
            </div>
            <Button 
              as="a" 
              href={business.social.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Order Online for Delivery
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};
