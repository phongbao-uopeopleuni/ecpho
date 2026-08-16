import { Heart, Leaf, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { FeaturedDishes } from '../components/sections/FeaturedDishes';
import { Hero } from '../components/sections/Hero';
import { ReviewMarquee } from '../components/sections/ReviewMarquee';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../layouts/shared/SEOHead';
import { generateFAQSchema, generateRestaurantSchema } from '../utils/schema';

const ValuePropositions = () => (
  <section className="relative z-10 border-b border-brand-dark/5 bg-transparent pb-20 pt-2 sm:pb-32 sm:pt-4">
    <Container>
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group space-y-8 rounded-[40px] border border-brand-dark/[0.03] bg-white p-8 transition-all duration-500 hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/[0.05] sm:p-12"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/[0.05] text-brand-green transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green/10 sm:h-20 sm:w-20">
            <Leaf size={28} strokeWidth={1.5} className="sm:h-[32px] sm:w-[32px]" />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-tight text-brand-dark sm:text-2xl">Fresh Ingredients</h3>
            <p className="text-xs font-light leading-relaxed text-brand-dark/60 sm:text-sm">
              We use premium meats and fresh herbs daily to ensure every bowl of Phở is rich, aromatic, and authentic.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="group space-y-8 rounded-[40px] border border-brand-dark/[0.03] bg-white p-8 transition-all duration-500 hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/[0.05] sm:p-12"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/[0.05] text-brand-green transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green/10 sm:h-20 sm:w-20">
            <Heart size={28} strokeWidth={1.5} className="sm:h-[32px] sm:w-[32px]" />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-tight text-brand-dark sm:text-2xl">Warm Hospitality</h3>
            <p className="text-xs font-light leading-relaxed text-brand-dark/60 sm:text-sm">
              At EC Phở, you are family. We pride ourselves on friendly service that makes you feel right at home.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="group space-y-8 rounded-[40px] border border-brand-dark/[0.03] bg-white p-8 transition-all duration-500 hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/[0.05] sm:p-12"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/[0.05] text-brand-green transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green/10 sm:h-20 sm:w-20">
            <Users size={28} strokeWidth={1.5} className="sm:h-[32px] sm:w-[32px]" />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-tight text-brand-dark sm:text-2xl">Cozy Atmosphere</h3>
            <p className="text-xs font-light leading-relaxed text-brand-dark/60 sm:text-sm">
              A warm, Vietnamese-inspired setting perfect for family dinners, dates, or catching up with friends.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);

export const Home = () => {
  const schemas = [generateRestaurantSchema(), generateFAQSchema()];

  return (
    <>
      <SEOHead schema={schemas} />
      <Hero />
      <FeaturedDishes />

      <div className="relative overflow-hidden bg-brand-paper">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-green/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/5 blur-[120px]" />

        {/* CTA Section */}
        <section className="relative z-10 border-t border-brand-dark/5 bg-transparent pb-12 pt-20 text-brand-dark sm:pb-16 sm:pt-32">
          <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green sm:mb-8">Experience the Tradition</span>
            <h2 className="mb-8 font-serif text-4xl uppercase leading-[0.9] tracking-tighter sm:mb-12 sm:text-5xl md:text-7xl">
              Taste the <span className="mt-2 block italic text-brand-green sm:mt-4">Legacy.</span>
            </h2>
            <p className="mx-auto mb-4 max-w-2xl px-4 text-lg font-light text-brand-dark/50 sm:text-xl">
              Whether you're looking for a quick lunch or a celebratory dinner with family, we're here to serve you the finest heritage phở in Greenville.
            </p>

            <ReviewMarquee />

            <a
              href="https://www.google.com/search?q=ec+pho+vietnamese+noodle+house+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block border-b border-brand-green/30 pb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green transition-all hover:border-brand-green"
            >
              Read More Google Reviews
            </a>
          </motion.div>
          </Container>
        </section>

        <ValuePropositions />
      </div>
    </>
  );
};
