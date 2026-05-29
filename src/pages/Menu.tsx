import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { menuItems, menuCategories, menuDisclaimer } from '../data/menu';
import { formatPrice, cn } from '../utils/format';
import { SEOHead } from '../layouts/shared/SEOHead';
import { Info } from 'lucide-react';
import { business } from '../data/business';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const isScrollingRef = useRef(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scrolling to category
  const scrollToCategory = (category: string) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    setActiveCategory(category);
    
    // Generate a safe ID from the category name
    const id = category.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const element = document.getElementById(id);
    
    if (element) {
      // Use scrollIntoView with scroll-margin-top defined in CSS (scroll-mt-40)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);

      // Reset scrolling flag after animation completes
      // Reduced timeout for faster re-interaction
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 750);
    } else {
      isScrollingRef.current = false;
    }
  };

  // Sync active category on scroll and handle initial hash
  useEffect(() => {
    // Initial hash scroll
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const category = menuCategories.find(c => 
          c.toLowerCase().replace(/[^a-z0-9]/g, '-') === hash
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
        const category = menuCategories.find(c => 
          c.toLowerCase().replace(/[^a-z0-9]/g, '-') === categoryId
        );
        if (category && category !== activeCategory) {
          setActiveCategory(category);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    menuCategories.forEach((category) => {
      const id = category.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll the horizontal nav to keep active item in view
  useEffect(() => {
    if (navRef.current && activeCategory) {
      const activeElement = navRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
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
            className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block text-brand-green"
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
                  "relative text-[10px] font-bold uppercase tracking-[0.25em] transition-all py-1",
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
                  id={category.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                  className="mb-32 scroll-mt-40"
                >
                  <div className="mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green mb-4 block">Selection</span>
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
                                <span className="text-[10px] font-bold text-brand-green tracking-[0.2em]">{item.code}</span>
                              )}
                              <h3 className="text-xl sm:text-2xl font-serif text-brand-dark leading-tight group-hover:text-brand-green transition-colors">{item.name}</h3>
                            </div>
                            <div className="hidden sm:block h-px flex-grow border-t border-brand-dark/10" />
                            <span className="font-serif text-xl sm:text-2xl text-brand-green whitespace-nowrap">{formatPrice(item.price)}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 mb-8">
                            {item.vietnameseName && (
                              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gold border border-brand-gold/20 px-4 py-1.5">{item.vietnameseName}</span>
                            )}
                            {item.tags?.map(tag => (
                              <Badge key={`${item.id}-${tag}`} variant="green" className="text-[9px] uppercase tracking-widest px-4">{tag}</Badge>
                            ))}
                          </div>

                          <p className="text-sm text-brand-dark/50 leading-relaxed font-light relative z-10 mb-6">
                            {item.description}
                          </p>

                          {item.variations && (
                            <div className="relative z-10 pt-6 border-t border-brand-dark/5 space-y-3">
                              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-dark/30 mb-2">Options</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {item.variations.map((v, i) => (
                                  <div key={`${item.id}-var-${i}`} className="flex justify-between items-center bg-brand-cream/40 px-4 py-2.5 rounded-sm border border-brand-dark/[0.02]">
                                    <span className="text-[10px] uppercase tracking-wide text-brand-dark/60">{v.name}</span>
                                    <span className="text-[10px] font-serif text-brand-green">{formatPrice(v.price)}</span>
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
              <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed font-bold">{menuDisclaimer}</p>
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