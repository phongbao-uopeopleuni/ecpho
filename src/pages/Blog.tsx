import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { SEOHead } from '../layouts/shared/SEOHead';
import { blogPosts } from '../data/blog';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const Blog = () => {
  return (
    <>
      <SEOHead 
        title="The Story Behind the Bowl" 
        description="Learn about the history, ingredients, and soul of Vietnamese cuisine. Articles on Phở, Bún Bò Huế, Bánh Mì, and more." 
      />
      
      {/* Page Header */}
      <section className="pt-48 pb-24 bg-brand-cream border-b border-brand-dark/5">
        <Container className="text-center">
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Stories</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter text-brand-dark uppercase">The Soul <span className="italic text-brand-green">Behind</span> The Bowl</h1>
          <p className="text-brand-dark/50 max-w-2xl mx-auto italic font-light text-xl">
            Exploring the rich culinary heritage of Vietnam, one story at a time.
          </p>
        </Container>
      </section>

      <section className="py-32 bg-brand-cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group h-full">
                <Card className="h-full flex flex-col border border-brand-dark/5 bg-brand-paper rounded-none transition-all duration-500 group-hover:border-brand-green/30 shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image || "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1000&auto=format&fit=crop"} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-6 text-[10px] text-brand-dark/30 mb-8 font-bold uppercase tracking-[0.3em]">
                      <span className="flex items-center gap-2 border-b border-brand-green pb-1">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-serif text-brand-dark mb-6 leading-tight group-hover:text-brand-green transition-colors uppercase tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-brand-dark/50 text-sm line-clamp-3 mb-10 flex-grow leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-green font-bold text-[10px] uppercase tracking-[0.3em] pt-8 border-t border-brand-dark/5 mt-auto">
                      Read Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
