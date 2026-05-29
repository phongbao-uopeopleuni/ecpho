import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag, Facebook, Instagram, Search, Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Container } from '../../components/ui/Container';
import { business } from '../../data/business';
import { cn } from '../../utils/format';
import { assetUrl } from '../../utils/assets';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-700 ease-in-out',
        isScrolled
          ? 'bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark/5 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.02)]'
          : 'bg-transparent py-8'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src={assetUrl('/images/logo/logoecpho.png')}
              alt="EC Phở"
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={`desktop-${link.path}`}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => cn(
                    "relative text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-brand-green",
                    isActive ? "text-brand-green" : "text-brand-dark/60"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-green transition-all duration-300",
                    "group-hover:w-full"
                  )} />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-6">
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-dark hover:text-brand-green transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href={business.social.google} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="text-brand-dark hover:text-brand-green transition-all duration-300">
              <Search size={18} />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-brand-dark focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
            className="lg:hidden fixed inset-0 w-full h-screen bg-brand-cream z-[70] flex flex-col p-6 sm:p-10 pt-24"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-brand-dark hover:text-brand-green transition-colors"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col gap-4 sm:gap-6 overflow-y-auto no-scrollbar">
              {navLinks.map((link, i) => (
                <motion.li
                  key={`mobile-${link.path}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => cn(
                      "text-4xl sm:text-5xl font-serif tracking-tighter uppercase transition-all duration-300",
                      isActive ? "text-brand-green italic" : "text-brand-dark opacity-40 hover:opacity-100"
                    )}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-brand-dark/10">
              <div className="flex gap-6 mb-8">
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-dark/60 hover:text-brand-green transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-dark/60 hover:text-brand-green transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={business.social.google} target="_blank" rel="noopener noreferrer" className="text-brand-dark/60 hover:text-brand-green transition-colors">
                  <Search size={20} />
                </a>
              </div>
              <div className="space-y-3 prose prose-invert">
                <a href={`tel:${business.contact.phone}`} className="flex items-center gap-3 text-brand-dark font-bold tracking-[0.15em] uppercase text-[10px] no-underline">
                  <Phone size={16} className="text-brand-green" />
                  {business.contact.displayPhone}
                </a>
                <a href={`mailto:${business.contact.email}`} className="flex items-center gap-3 text-brand-dark font-bold tracking-[0.15em] uppercase text-[10px] no-underline">
                  <Mail size={16} className="text-brand-green" />
                  {business.contact.email}
                </a>
                <p className="text-[9px] uppercase tracking-widest text-brand-dark/40 max-w-[180px] leading-relaxed my-0">
                  {business.location.address}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
