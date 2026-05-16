import React from 'react';
import { Header } from './shared/Header';
import { Footer } from './shared/Footer';
import { FloatingActions } from './shared/FloatingActions';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream selection:bg-brand-red selection:text-white">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
