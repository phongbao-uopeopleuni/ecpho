import { useCallback, useEffect, useRef, useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { menuItems, menuCategories, menuDisclaimer } from '../data/menu';
import { menuGallery } from '../data/gallery';
import { formatPrice, slugify, legacySlugify } from '../utils/format';
import { SEOHead } from '../layouts/shared/SEOHead';
import { Info } from 'lucide-react';
import { business } from '../data/business';
import { optimizedImageSrcSet, optimizedImageUrl } from '../utils/assets';
import './Menu.css';

const menuHeroGalleryImages = menuGallery
  .flatMap((section) => section.images.slice(0, 2).map((image) => ({
    ...image,
    label: section.label,
  })))
  .slice(0, 8);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const pageRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const trackingFrameRef = useRef<number | null>(null);
  const sectionPositionsRef = useRef<{ category: string; top: number }[]>([]);
  const headerRef = useRef<HTMLElement | null>(null);
  const scrollInsetRef = useRef(96);

  const getScrollInset = useCallback(() => scrollInsetRef.current, []);

  const syncActiveCategory = useCallback(() => {
    if (scrollFrameRef.current !== null) return;
    // A small reading zone also covers the site's header settling after the first jump.
    const readingPosition = window.scrollY + getScrollInset() + 48;
    let currentCategory = menuCategories[0];
    for (const section of sectionPositionsRef.current) {
      if (section.top > readingPosition) break;
      currentCategory = section.category;
    }
    setActiveCategory(currentCategory);
  }, [getScrollInset]);

  const cancelCategoryScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }
  }, []);

  const revealCategory = useCallback((category: string) => {
    const nav = mobileNavRef.current;
    const item = nav?.querySelector<HTMLElement>(`[href="#${slugify(category)}"]`);
    if (!nav?.clientWidth || !item) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    // Lead with the selected category on phones, leaving room for the next one.
    const offset = window.matchMedia('(width < 640px)').matches
      ? itemRect.left - navRect.left - 16
      : itemRect.left < navRect.left + 16
        ? itemRect.left - navRect.left - 16
        : itemRect.right > navRect.right - 16 ? itemRect.right - navRect.right + 16 : 0;
    if (offset) nav.scrollTo({ left: nav.scrollLeft + offset, behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
  }, []);

  const scrollToCategory = useCallback((category: string, updateHash = true, immediate = false) => {
    const id = slugify(category);
    const element = document.getElementById(id);
    if (!element) return;

    cancelCategoryScroll();
    setActiveCategory(category);
    revealCategory(category);

    const startY = window.scrollY;
    const sectionTop = element.getBoundingClientRect().top + startY;
    const destination = () => Math.max(0, Math.min(
      sectionTop - getScrollInset(),
      document.documentElement.scrollHeight - window.innerHeight,
    ));

    if (prefersReducedMotion() || immediate) {
      window.scrollTo({ top: destination(), behavior: 'instant' });
    } else {
      const startTime = performance.now();
      const animateScroll = (time: number) => {
        const progress = Math.min((time - startTime) / 240, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        window.scrollTo({ top: startY + (destination() - startY) * eased, behavior: 'instant' });
        if (progress < 1) {
          scrollFrameRef.current = window.requestAnimationFrame(animateScroll);
        } else {
          scrollFrameRef.current = null;
          syncActiveCategory();
        }
      };
      scrollFrameRef.current = window.requestAnimationFrame(animateScroll);
    }

    if (updateHash && window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`);
    }
  }, [cancelCategoryScroll, getScrollInset, revealCategory, syncActiveCategory]);

  useEffect(() => {
    headerRef.current = document.querySelector('header');
    const sections = menuCategories.map((category) => ({
      category,
      element: document.getElementById(slugify(category)),
    }));

    // Cache document positions on layout changes; scrolling only reads scrollY.
    const measure = () => {
      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 80;
      scrollInsetRef.current = headerHeight + (mobileNavRef.current?.getBoundingClientRect().height ?? 0) + 16;
      pageRef.current?.style.setProperty('--menu-header-height', `${headerHeight}px`);
      sectionPositionsRef.current = sections.flatMap(({ category, element }) => element
        ? [{ category, top: element.getBoundingClientRect().top + window.scrollY }]
        : []);
      syncActiveCategory();
    };
    const onScroll = () => {
      if (trackingFrameRef.current !== null) return;
      trackingFrameRef.current = window.requestAnimationFrame(() => {
        trackingFrameRef.current = null;
        syncActiveCategory();
      });
    };
    const interruptScroll = () => {
      cancelCategoryScroll();
      onScroll();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
        interruptScroll();
      }
    };
    const followHash = () => {
      const hash = window.location.hash.slice(1);
      const category = menuCategories.find((item) => slugify(item) === hash || legacySlugify(item) === hash);
      if (category) scrollToCategory(category, false, true);
    };

    const resizeObserver = new ResizeObserver(measure);
    [headerRef.current, mobileNavRef.current, contentRef.current, ...sections.map(({ element }) => element)]
      .forEach((element) => { if (element) resizeObserver.observe(element, { box: 'border-box' }); });
    measure();
    const initialHashFrame = window.requestAnimationFrame(followHash);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('wheel', interruptScroll, { passive: true });
    window.addEventListener('touchstart', interruptScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', followHash);
    window.addEventListener('popstate', followHash);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(initialHashFrame);
      cancelCategoryScroll();
      if (trackingFrameRef.current !== null) {
        window.cancelAnimationFrame(trackingFrameRef.current);
        trackingFrameRef.current = null;
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      window.removeEventListener('wheel', interruptScroll);
      window.removeEventListener('touchstart', interruptScroll);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('hashchange', followHash);
      window.removeEventListener('popstate', followHash);
    };
  }, [cancelCategoryScroll, scrollToCategory, syncActiveCategory]);

  useEffect(() => {
    const nav = mobileNavRef.current;
    if (!nav) return;
    const revealActiveCategory = () => revealCategory(activeCategory);
    revealActiveCategory();
    const resizeObserver = new ResizeObserver(revealActiveCategory);
    resizeObserver.observe(nav);
    return () => resizeObserver.disconnect();
  }, [activeCategory, revealCategory]);

  const categoryLinks = (mobile = false) => menuCategories.map((category, index) => (
    <a
      key={category}
      href={`#${slugify(category)}`}
      aria-current={activeCategory === category ? 'location' : undefined}
      className="ec-menu-category"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        scrollToCategory(category);
      }}
    >
      {!mobile && <span className="ec-menu-category-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
      <span>{category}</span>
    </a>
  ));

  return (
    <div className="ec-menu" ref={pageRef}>
      <SEOHead
        title="EC Phở Menu"
        appendBrand={false}
        description="Explore our full menu: authentic Phở, Bánh Mì, Vermicelli, Rice Plates, and House Specials. Fresh Vietnamese comfort food in Greenville, NC."
      />

      <section className="ec-menu-hero">
        <Container className="text-center">
          <p className="ec-menu-eyebrow">Traditional Heritage</p>
          <h1>EC Phở Menu</h1>
          <p className="ec-menu-intro">Every dish is prepared using natural ingredients and recipes passed down through generations.</p>
          <div className="ec-menu-actions">
            <a href={business.social.doorDash} target="_blank" rel="noopener noreferrer">Order online</a>
            <a href={`tel:${business.contact.phone}`}>Call us</a>
            <a href={business.location.googleMapsLink} target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
          <div className="ec-menu-photos menu-gallery-marquee">
            <div className="menu-gallery-marquee-track">
              {[0, 1].map((copy) => (
                <div className="ec-menu-photo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {menuHeroGalleryImages.map((image) => (
                    <figure key={image.src}>
                      <img
                        src={optimizedImageUrl(image.src, 480)}
                        srcSet={optimizedImageSrcSet(image.src)}
                        sizes="(max-width: 640px) 184px, 280px"
                        alt={image.alt}
                        loading="eager"
                        decoding="async"
                      />
                      <figcaption>{image.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <nav className="ec-menu-mobile-nav" aria-label="Menu categories" ref={mobileNavRef}>
        {categoryLinks(true)}
      </nav>

      <Container className="ec-menu-content">
        <div className="ec-menu-layout">
          <aside className="ec-menu-sidebar">
            <p className="ec-menu-eyebrow">Browse menu</p>
            <nav aria-label="Menu categories">{categoryLinks()}</nav>
          </aside>

          <div className="ec-menu-sections" ref={contentRef}>
            {menuCategories.map((category) => (
              <section
                key={category}
                id={slugify(category)}
                aria-labelledby={`${slugify(category)}-heading`}
                className="ec-menu-section"
              >
                <h2 id={`${slugify(category)}-heading`}>{category}</h2>
                <div className="ec-menu-items">
                  {menuItems.filter((item) => item.category === category).map((item) => (
                    <article key={item.id} className="ec-menu-item">
                      <div className="ec-menu-item-header">
                        <div className="ec-menu-item-title">
                          {item.code && <span className="ec-menu-item-code">{item.code}</span>}
                          <h3>{item.name}</h3>
                        </div>
                        <span className="ec-menu-price">{formatPrice(item.price)}</span>
                      </div>

                      {(item.vietnameseName || Boolean(item.tags?.length)) && (
                        <div className="ec-menu-labels">
                          {item.vietnameseName && <span className="ec-menu-vietnamese">{item.vietnameseName}</span>}
                          {item.tags?.map((tag) => <span className="ec-menu-tag" key={`${item.id}-${tag}`}>{tag}</span>)}
                        </div>
                      )}
                      <p className="ec-menu-description">{item.description}</p>

                      {item.variations && (
                        <div className="ec-menu-options">
                          <p>Options</p>
                          <dl>
                            {item.variations.map((variation, index) => (
                              <div key={`${item.id}-var-${index}`}>
                                <dt>{variation.name}</dt>
                                <dd>{formatPrice(variation.price)}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="ec-menu-note">
          <div>
            <Info size={18} aria-hidden="true" />
            <p>{menuDisclaimer}</p>
          </div>
          <Button as="a" href={business.social.doorDash} target="_blank" rel="noopener noreferrer" size="lg">
            Order Online for Delivery
          </Button>
        </div>
      </Container>
    </div>
  );
};
