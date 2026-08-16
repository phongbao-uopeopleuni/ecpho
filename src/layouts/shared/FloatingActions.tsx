import { Phone, MapPin, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { business } from '../../data/business';

export const FloatingActions = () => {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex flex-col gap-2 sm:bottom-8 sm:right-8 sm:gap-4">
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
            aria-label="Order online"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-brand-green p-0 text-white shadow-[0_10px_30px_rgba(101,153,67,0.3)] sm:h-auto sm:w-auto sm:gap-2.5 sm:px-5 sm:py-3.5"
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
            <span className="relative z-10 hidden text-[10px] font-bold uppercase tracking-[0.15em] sm:inline sm:text-[11px]">Order Online</span>
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
            aria-label="Call us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-brand-dark p-0 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:h-auto sm:w-auto sm:gap-2.5 sm:px-5 sm:py-3.5"
          >
            {/* Subtle Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
            
            <Phone size={14} className="relative z-10 sm:w-[16px] sm:h-[16px]" fill="white" />
            <span className="relative z-10 hidden text-[10px] font-bold uppercase tracking-[0.15em] sm:inline sm:text-[11px]">Call Us</span>
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
            aria-label="Get directions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-brand-dark p-0 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:h-auto sm:w-auto sm:gap-2.5 sm:px-5 sm:py-3.5"
          >
            {/* Subtle Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />

            <MapPin size={14} className="text-brand-green relative z-10 sm:w-[16px] sm:h-[16px]" />
            <span className="relative z-10 hidden text-[10px] font-bold uppercase tracking-[0.15em] sm:inline sm:text-[11px]">Directions</span>
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
