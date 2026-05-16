import { Container } from '../components/ui/Container';
import { SEOHead } from '../layouts/shared/SEOHead';
import { business } from '../data/business';
import { Button } from '../components/ui/Button';
import { Phone, MapPin, Clock, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact & Location" 
        description="Visit EC Phở Vietnamese Noodle House in Greenville, NC. Find our address, phone number, hours, and directions." 
      />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-[#FAF9F6] relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80')] bg-cover bg-center" 
        />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tighter leading-[0.9] uppercase">
              Let's <span className="italic text-brand-green">Connect.</span>
            </h1>
            <p className="text-brand-dark/50 max-w-2xl mx-auto font-light text-lg">
              Whether it's a question about our menu or finding our home in Greenville, we're here to help.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-[#FAF9F6] p-12 rounded-[40px] border border-brand-dark/[0.03] space-y-12">
                <div>
                  <h2 className="text-[10px] font-bold text-brand-green uppercase tracking-[0.3em] mb-8">Location</h2>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                      <MapPin size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-serif text-2xl mb-2 text-brand-dark">{business.location.address}</p>
                      <p className="text-brand-dark/50 text-sm mb-6 leading-relaxed">
                        {business.location.city}, {business.location.state} {business.location.zip}
                      </p>
                      <Button 
                        href={business.location.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        className="rounded-full border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white"
                      >
                        Get Directions <ExternalLink size={14} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-dark/[0.05] pt-12">
                  <h2 className="text-[10px] font-bold text-brand-green uppercase tracking-[0.3em] mb-8">Talk To Us</h2>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 rounded-2xl">
                      <Phone size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-brand-dark/40 uppercase font-bold tracking-widest mb-1">Phone</p>
                      <a 
                        href={`tel:${business.contact.phone}`}
                        className="font-serif text-3xl text-brand-dark hover:text-brand-green transition-colors"
                      >
                        {business.contact.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-dark/[0.05] pt-12">
                  <h2 className="text-[10px] font-bold text-brand-green uppercase tracking-[0.3em] mb-8">Hours</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {business.hours.map((h, i) => (
                      <div key={h.day} className="flex justify-between items-center text-sm group">
                        <span className="font-bold text-[10px] uppercase tracking-widest text-brand-dark/40 group-hover:text-brand-green transition-colors">{h.day}</span>
                        <span className="h-px bg-brand-dark/[0.05] flex-grow mx-4"></span>
                        <span className="font-medium text-brand-dark/70">
                          {h.open === "Closed" ? "Closed" : `${h.open} – ${h.close}`}
                        </span>
                      </div>
                    ))}
                    <p className="mt-4 text-[10px] text-brand-dark/30 italic">Hours may change on holidays</p>
                  </div>
                </div>
              </div>

              {/* Delivery CTA */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-dark p-10 rounded-[40px] text-white overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-green/20 transition-all duration-700" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif mb-4 uppercase tracking-tight">Comfort Delivered.</h3>
                  <p className="mb-8 text-white/60 font-light leading-relaxed text-sm max-w-xs">Not in the mood to go out? We'll bring the phở to you.</p>
                  <Button 
                    as="a" 
                    href={business.social.doorDash} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full justify-center bg-white text-brand-dark hover:bg-brand-green hover:text-white"
                  >
                    Order on DoorDash
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-full min-h-[500px] flex flex-col gap-4"
            >
              <div className="flex-grow rounded-[40px] overflow-hidden border border-brand-dark/[0.03]">
                <iframe
                  title="EC Phở Location"
                  src="https://maps.google.com/maps?q=109+Greenville+Blvd+SE+%23100,+Greenville,+NC+27858&t=m&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '460px', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={business.location.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark/40 hover:text-brand-green transition-colors py-2"
              >
                <ExternalLink size={12} /> Open in Google Maps
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

