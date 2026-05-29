import { SEOHead } from '../layouts/shared/SEOHead';
import { Container } from '../components/ui/Container';
import { motion } from 'motion/react';

export const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy"
        description="Privacy policy for EC Phở Vietnamese Noodle House in Greenville, NC."
      />
      <section className="pt-40 pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase leading-none">
              Privacy <br />
              <span className="italic text-brand-green">Policy</span>
            </h1>
            
            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-brand-dark">
              <p className="text-xl text-brand-dark/50 leading-relaxed font-light italic">
                At EC Phở, we value your trust and are committed to protecting your personal information.
              </p>
              
              <div className="space-y-8 pt-12">
                <section>
                  <h2 className="text-lg font-bold">Information We Collect</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We collect information you provide directly to us, such as when you contact us via our website, sign up for our newsletter, or make an inquiry about our catering services.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">How We Use Information</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We use the information we collect to communicate with you, provide customer support, and improve our services. We do not sell your personal information to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Third-Party Services</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We may use third-party services like DoorDash for delivery or Google Analytics for website traffic analysis. These services have their own privacy policies.
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
