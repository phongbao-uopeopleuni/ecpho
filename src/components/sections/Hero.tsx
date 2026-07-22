import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { business } from '../../data/business';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-cream">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-muted/50 -z-10 skew-x-6 translate-x-20" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
              Vietnamese Noodle House
            </div>
            
            <h1 className="text-[40px] sm:text-7xl md:text-8xl xl:text-9xl font-serif mb-8 sm:mb-10 leading-[0.85] tracking-tighter text-brand-dark">
              Soulful <span className="italic block mt-2 text-brand-green">Comfort.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-dark/60 mb-14 leading-relaxed font-light max-w-xl">
              Authentic heritage recipes slow-simmered for 12 hours. A warm embrace in every bowl, crafted with love and tradition.
            </p>
            
            <div className="flex gap-4 items-center">
              <Button 
                as={Link}
                to="/menu"
                size="lg" 
              >
                Explore Our Menu
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 aspect-square overflow-hidden rounded-full border-[1rem] md:border-[2rem] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1600&auto=format&fit=crop" 
                alt="Signature Phở" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="hero-float-up absolute -top-4 -left-4 z-20 bg-brand-paper p-6 shadow-xl border-subtle">
              <div className="text-brand-green font-serif text-3xl mb-1">12h</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">Slow Simmered</div>
            </div>

            <div className="hero-float-down absolute -bottom-4 -right-4 z-20 bg-brand-dark p-6 shadow-xl">
              <div className="text-brand-gold font-serif text-3xl mb-1">100%</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Natural Broth</div>
            </div>

            {/* Artistic accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
