import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '../components/ui/Container';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CompatibilityPageProps {
  categoryName: string;
  targetAnchor: string;
}

export const CompatibilityPage: React.FC<CompatibilityPageProps> = ({ categoryName, targetAnchor }) => {
  const navigate = useNavigate();
  const targetUrl = `/menu/#${targetAnchor}`;

  useEffect(() => {
    // Optional: Auto-redirect after delay
    const timer = setTimeout(() => {
      navigate(targetUrl);
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, targetUrl]);

  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-20">
      <Helmet>
        <title>{categoryName} | EC Phở Vietnamese Noodle House</title>
        <link rel="canonical" href={`https://www.ecphonoodlehousenc.com/menu/#${targetAnchor}`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white p-12 rounded-[40px] shadow-sm text-center border border-brand-dark/5"
        >
          <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.4em] mb-6 block">Migration Update</span>
          <h1 className="text-4xl font-serif text-brand-dark mb-6 tracking-tight">We've Moved Our <br/><span className="italic text-brand-green">{categoryName}</span> Menu</h1>
          
          <p className="text-brand-dark/60 mb-10 leading-relaxed">
            To provide a better browsing experience, our individual category pages have been consolidated into our main digital menu. You are being redirected to the <strong>{categoryName}</strong> section.
          </p>
          
          <Link 
            to={targetUrl}
            className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-dark transition-colors"
          >
            Go to {categoryName} Menu
            <ArrowRight size={16} />
          </Link>
          
          <div className="mt-12 pt-8 border-t border-brand-dark/5">
            <p className="text-[10px] text-brand-dark/30 uppercase tracking-widest">
              Redirecting automatically in 5 seconds...
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
