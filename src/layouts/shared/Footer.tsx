import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, ShoppingBag, Search, Mail } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { business } from '../../data/business';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-stone-400 pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8 lg:col-span-1">
            <Link to="/home-page" className="inline-block">
              <span className="text-4xl font-serif tracking-tighter text-white">
                EC <span className="italic text-brand-gold">Phở</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-light">
              Crafting authentic Vietnamese stories through slow-simmered broths and traditional heritage since 2015 in Greenville, NC.
            </p>
            <div className="flex gap-4 pt-4">
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href={business.social.google} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-green transition-colors">
                <Search size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-10">Quick Links</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/home-page" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Stories</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-10">Legal</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-10">Visit Us</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <div className="flex flex-col gap-4">
                  <span className="font-light">{business.location.address}<br />{business.location.city}, NC {business.location.zip}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-brand-green shrink-0" />
                <a href={`mailto:${business.contact.email}`} className="font-light hover:text-white transition-colors">
                  {business.contact.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <a href={`tel:${business.contact.phone}`} className="font-light hover:text-white transition-colors">
                  {business.contact.displayPhone}
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href={business.social.doorDash} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
                >
                  <ShoppingBag size={18} className="text-brand-gold" />
                  Order Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-10">Hours</h3>
            <ul className="space-y-4 text-xs uppercase tracking-widest">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="opacity-60">Monday</span>
                <span className="text-white">Closed</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="opacity-60">Tue – Sun</span>
                <span className="text-white">11:00 AM – 9:30 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-[10px] text-stone-500 italic">Hours may change on holidays</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p className="opacity-40">© {new Date().getFullYear()} {business.name}. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
