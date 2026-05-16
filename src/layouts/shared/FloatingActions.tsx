import { Phone, MapPin, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { business } from '../../data/business';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 pointer-events-none sm:bottom-8 sm:right-8 sm:gap-4">
      <AnimatePresence>
        {/* Order Online Button - Primary emphasis */}
        <motion.div
          key="order-online-fab"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <motion.a
            href={business.social.doorDash}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 bg-brand-green text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(101,153,67,0.3)] border-2 border-white group relative overflow-hidden"
          >
            {/* Pulsing Effect Background */}
            <motion.div 
              key="pulse-bg"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white"
            />
            
            <ShoppingBag size={16} className="relative z-10 animate-pulse sm:w-[18px] sm:h-[18px]" />
            <span className="font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase relative z-10">Order Online</span>
          </motion.a>
        </motion.div>

        {/* Call Us Button */}
        <motion.div
          key="call-us-fab"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="pointer-events-auto text-right"
        >
          <motion.a
            href="tel:+12527567272"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 bg-brand-dark text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-2 border-white/20 group relative overflow-hidden"
          >
            {/* Subtle Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
            
            <Phone size={14} className="relative z-10 sm:w-[16px] sm:h-[16px]" fill="white" />
            <span className="font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase relative z-10">Call Us</span>
          </motion.a>
        </motion.div>

        {/* Get Directions Button */}
        <motion.div
          key="directions-fab"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="pointer-events-auto text-right"
        >
          <motion.a
            href={business.location.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 bg-brand-dark text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-2 border-white/20 group relative overflow-hidden"
          >
            {/* Subtle Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />

            <MapPin size={14} className="text-brand-green relative z-10 sm:w-[16px] sm:h-[16px]" />
            <span className="font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase relative z-10">Directions</span>
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
