import { SEOHead } from '../layouts/shared/SEOHead';
import { Container } from '../components/ui/Container';
import { motion } from 'motion/react';

export const Terms = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service - EC Phở" 
        description="Terms of service for EC Phở Vietnamese Noodle House."
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
                By using our website, you agree to the following terms and conditions.
              </p>
              
              <div className="space-y-8 pt-12">
                <section>
                  <h2 className="text-lg font-bold">Use of Site</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Intellectual Property</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">External Links</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).
                  </p>
                </section>

                <section className="pt-12 border-t border-brand-dark/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
                    Last updated: May 16, 2026
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
