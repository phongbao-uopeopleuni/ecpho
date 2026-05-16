import { useState, useRef } from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../layouts/shared/SEOHead';
import { restaurantImages, menuGallery } from '../data/gallery';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState(menuGallery[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeSection = menuGallery.find(s => s.id === activeTab)!;

  const handleTabClick = (id: string, el: HTMLButtonElement) => {
    setActiveTab(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <>
      <SEOHead
        title="Gallery"
        description="A visual journey through EC Phở's authentic dishes and warm atmosphere in Greenville, NC."
      />

      {/* ── Page Header ── */}
      <section className="pt-40 pb-20 bg-brand-muted text-brand-dark border-b border-brand-dark/5">
        <Container className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-green mb-4">
            EC Phở · Greenville, NC
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-tighter uppercase">
            Visual Story
          </h1>
          <p className="text-brand-dark/50 max-w-xl mx-auto italic font-light">
            Authentic ingredients, comforting atmosphere, and vibrant flavors — captured in every frame.
          </p>
        </Container>
      </section>

      {/* ── The Restaurant ── */}
      <section className="py-24 bg-brand-dark">
        <Container>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px flex-1 bg-white/10" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              The Restaurant
            </h2>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          {/* 2×2 grid — exterior + interior */}
          <div className="grid grid-cols-2 gap-4">
            {[...restaurantImages.exterior, ...restaurantImages.interior].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[4/3] transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green">
                    {i < restaurantImages.exterior.length ? 'Exterior' : 'Interior'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Menu Gallery ── */}
      <section className="py-24 bg-brand-cream">
        <Container>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px flex-1 bg-brand-dark/10" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark/40">
              From Our Kitchen
            </h2>
            <span className="h-px flex-1 bg-brand-dark/10" />
          </div>

          {/* Tab bar */}
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-10"
          >
            {menuGallery.map(section => (
              <button
                key={section.id}
                onClick={e => handleTabClick(section.id, e.currentTarget)}
                className={`
                  flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest
                  transition-all duration-300
                  ${activeTab === section.id
                    ? 'bg-brand-dark text-brand-cream shadow-lg shadow-brand-dark/10'
                    : 'bg-brand-muted text-brand-dark/50 hover:bg-brand-dark/8 hover:text-brand-dark'
                  }
                `}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {activeSection.images.length === 0 ? (
                <p className="text-center text-brand-dark/30 py-24 italic">
                  Photos coming soon.
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {activeSection.images.map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(i * 0.04, 0.4),
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      className="group relative overflow-hidden rounded-2xl bg-brand-muted aspect-square"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white text-xs font-serif italic leading-tight line-clamp-2">
                          {img.alt}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
};
