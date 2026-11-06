import { SEOHead } from '../layouts/shared/SEOHead';
import { Container } from '../components/ui/Container';
import { motion } from 'motion/react';
import { business } from '../data/business';

export const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy"
        description="Privacy policy for EC Phở Vietnamese Noodle House in Greenville, NC. This website has no forms, no accounts, and sets no cookies of its own."
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
                This website does not ask you for personal information. There are no forms, no accounts, and no mailing list.
              </p>
              
              <div className="space-y-8 pt-12">
                <section>
                  <h2 className="text-lg font-bold">Information We Collect</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    None through this website. We do not operate contact forms, reservation forms, customer accounts, or a newsletter. If you call us or send us an email, we receive whatever you choose to tell us, and we use it only to answer you.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Website Analytics</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We use Vercel Web Analytics to count page views, so we can tell which pages people find useful. It reports visits in aggregate, does not use cookies, and does not follow you to other websites. We cannot identify individual visitors from it.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Cookies</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    This website sets no cookies of its own. The only cookies you may receive are from the Google Maps panel embedded on our Contact page, which your browser loads directly from Google.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Content Loaded From Other Companies</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Our pages load typefaces from Google Fonts, some photographs from Unsplash and DoorDash, a background texture from Transparent Textures, and the map on our Contact page from Google Maps. When your browser requests those files, those companies receive your IP address and the address of the page you were viewing. We do not send them anything else about you.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Ordering and Outside Links</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Online orders are placed on DoorDash, not here. Once you follow that link, or a link to Facebook, Instagram, or Google, you are on their website under their privacy policy. We never see your payment details.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">What We Do Not Do</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    We do not sell or rent personal information. We do not run advertising on this website, build visitor profiles, or share information with data brokers.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Questions</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    Call {business.contact.displayPhone}, email {business.contact.email}, or speak with us at {business.location.address}, {business.location.city}, {business.location.state} {business.location.zip}.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold">Changes to This Policy</h2>
                  <p className="text-brand-dark/60 leading-relaxed">
                    If we add anything to this website that collects information, we will update this page and change the date below before that goes live.
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
