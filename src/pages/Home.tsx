import { Hero } from '../components/sections/Hero';
import { FeaturedDishes } from '../components/sections/FeaturedDishes';
import { Container } from '../components/ui/Container';
import { ReviewMarquee } from '../components/sections/ReviewMarquee';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Users, Star } from 'lucide-react';
import { business } from '../data/business';
import { SEOHead } from '../layouts/shared/SEOHead';
import { generateRestaurantSchema } from '../utils/schema';
import { motion } from 'motion/react';

export const Home = () => {
  const schema = generateRestaurantSchema();

  return (
    <>
      <SEOHead schema={schema} />
      <Hero />

      
      {/* Short Value Prop */}
      <section className="py-20 sm:py-32 bg-[#FAF9F6] border-y border-brand-dark/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 group bg-white p-8 sm:p-12 rounded-[40px] border border-brand-dark/[0.03] hover:border-brand-green/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-green/[0.05]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/[0.05] rounded-full flex items-center justify-center mx-auto text-brand-green transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green/10">
                <Leaf size={28} strokeWidth={1.5} className="sm:w-[32px] sm:h-[32px]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark tracking-tight">Fresh Ingredients</h3>
                <p className="text-brand-dark/60 text-xs sm:text-sm leading-relaxed font-light">We use premium meats and fresh herbs daily to ensure every bowl of Phở is rich, aromatic, and authentic.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8 group bg-white p-8 sm:p-12 rounded-[40px] border border-brand-dark/[0.03] hover:border-brand-green/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-green/[0.05]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/[0.05] rounded-full flex items-center justify-center mx-auto text-brand-green transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green/10">
                <Heart size={28} strokeWidth={1.5} className="sm:w-[32px] sm:h-[32px]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark tracking-tight">Warm Hospitality</h3>
                <p className="text-brand-dark/60 text-xs sm:text-sm leading-relaxed font-light">At EC Phở, you are family. We pride ourselves on friendly service that makes you feel right at home.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 group bg-white p-8 sm:p-12 rounded-[40px] border border-brand-dark/[0.03] hover:border-brand-green/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-green/[0.05]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green/[0.05] rounded-full flex items-center justify-center mx-auto text-brand-green transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-green/10">
                <Users size={28} strokeWidth={1.5} className="sm:w-[32px] sm:h-[32px]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark tracking-tight">Cozy Atmosphere</h3>
                <p className="text-brand-dark/60 text-xs sm:text-sm leading-relaxed font-light">A warm, Vietnamese-inspired setting perfect for family dinners, dates, or catching up with friends.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <FeaturedDishes />
      
      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-brand-paper text-brand-dark overflow-hidden relative border-t border-brand-dark/5">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green mb-6 sm:mb-8 block">Experience the Tradition</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-8 sm:mb-12 tracking-tighter leading-[0.9] uppercase">
              Taste the <span className="italic block mt-2 sm:mt-4 text-brand-green">Legacy.</span>
            </h2>
            <p className="text-lg sm:text-xl text-brand-dark/50 mb-4 font-light max-w-2xl mx-auto px-4">
              Whether you're looking for a quick lunch or a celebratory dinner with family, we're here to serve you the finest heritage phở in Greenville.
            </p>
            
            <ReviewMarquee />
            
            <a 
              href="https://www.google.com/search?q=ec+pho+vietnamese+noodle+house+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green border-b border-brand-green/30 pb-1 hover:border-brand-green transition-all"
            >
              Read More Google Reviews
            </a>
          </motion.div>
        </Container>
        
        {/* Artistic accent */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </>
  );
};
