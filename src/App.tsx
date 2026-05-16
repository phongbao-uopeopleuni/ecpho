import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BaseLayout } from './layouts/BaseLayout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { Contact } from './pages/Contact';
import { CompatibilityPage } from './components/CompatibilityPage';
import { Link } from 'react-router-dom';

const NotFoundPatch = () => (
  <div className="py-40 text-center flex flex-col items-center justify-center min-h-[60vh] bg-brand-cream">
    <h1 className="text-8xl font-serif text-brand-green mb-4 tracking-tighter italic">404</h1>
    <p className="text-xl text-brand-dark/60 mb-10 font-light">Oops! This bowl seems to be empty.</p>
    <Link to="/home-page" className="px-8 py-3 bg-brand-green text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-dark transition-all">
      Return to Warmth
    </Link>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home-page" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/appetizers" 
              element={<CompatibilityPage categoryName="Appetizers" targetAnchor="appetizers" />} 
            />
            <Route 
              path="/salads" 
              element={<CompatibilityPage categoryName="Salads" targetAnchor="salads" />} 
            />
            <Route 
              path="/pho" 
              element={<CompatibilityPage categoryName="Phở" targetAnchor="noodle-soups-pho" />} 
            />
            <Route 
              path="/bun" 
              element={<CompatibilityPage categoryName="Vermicelli" targetAnchor="vermicelli-bun" />} 
            />
            <Route 
              path="/rice-plates" 
              element={<CompatibilityPage categoryName="Rice Plates" targetAnchor="rice-plates" />} 
            />
            <Route 
              path="/fried-rice" 
              element={<CompatibilityPage categoryName="Fried Rice" targetAnchor="fried-rice" />} 
            />
            <Route 
              path="/drinks" 
              element={<CompatibilityPage categoryName="Drinks" targetAnchor="drinks" />} 
            />
            <Route 
              path="/specials" 
              element={<CompatibilityPage categoryName="Specials" targetAnchor="house-specials" />} 
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPatch />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
