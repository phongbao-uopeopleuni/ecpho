import { SEOHead } from '../layouts/shared/SEOHead';
import { Container } from '../components/ui/Container';
import { motion } from 'motion/react';
import { business } from '../data/business';

export const Terms = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service"
        description="Terms of service for EC Phở Vietnamese Noodle House in Greenville, NC, covering menu prices, allergy information, and online ordering."
      />
      <section className="pt-40 pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase leading-none">
              Terms of <br />
              <span className="italic text-brand-green">Service</span>
            </h1>
            
            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-brand-dark">
              <p className="text-xl text-brand-dark/50 leading-relaxed font-light italic">
                This website tells you about our restaurant and our menu. It does not take orders, bookings, or payments.
              </p>
              
              <div className="space-y-8 pt-12">
                <section>
                  <h2 className="text-lg font-bold">Use of This Site</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Everything here is published for general information and may change without notice. You are welcome to read it, print it, and share links to it.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Menu, Prices, and Availability</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Prices and availability may change, and a $0.70 to-go fee applies to takeout orders. Dishes sell out and the kitchen occasionally rests an item. For what is actually on today, call {business.contact.displayPhone} or check our DoorDash page.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Allergies and Dietary Information</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Dish descriptions on this website are a general guide, not a complete ingredient list. Our kitchen handles common allergens, among them fish sauce, shellfish, peanuts, soy, egg, and wheat, and we cannot guarantee that any dish is free of a given allergen. If you have a food allergy or a dietary requirement, please tell us before you order so we can advise you properly.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Ordering Through DoorDash</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Online ordering and delivery are handled by DoorDash. When you order there, your agreement is with DoorDash, under their terms, their pricing, and their delivery service. Menu prices, fees, and delivery times shown on DoorDash are set on their platform and may differ from the prices listed here.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Intellectual Property</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    The design, text, and photographs of our food are owned by or licensed to us. Some stock photographs are used under licence from their photographers. Please do not reuse them commercially without asking us first.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Links to Other Websites</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We link to DoorDash, Google Maps, and our social media pages for your convenience. We do not control those websites and are not responsible for their content.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Accuracy</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We keep this website as accurate as we can, but we cannot promise it is free of errors or always current. Hours, prices, and dishes are confirmed by calling the restaurant.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Governing Law</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    These terms are governed by the laws of the State of North Carolina.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Contact</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    {business.name}, {business.location.address}, {business.location.city}, {business.location.state} {business.location.zip}. Call {business.contact.displayPhone} or email {business.contact.email}.
                  </p>
                </section>

                <section className="pt-12 border-t border-brand-dark/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
                    Last updated: November 6, 2026
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
