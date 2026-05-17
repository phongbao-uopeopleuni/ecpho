import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../layouts/shared/SEOHead';
import { blogPosts } from '../data/blog';
import { assetUrl } from '../utils/assets';
import { business } from '../data/business';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Clock, Calendar, User, ShoppingBag, ChevronRight } from 'lucide-react';

export const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <SEOHead 
        title={post.title} 
        description={post.excerpt} 
        image={post.image}
        article={true}
      />
      
      {/* Blog Hero */}
      <section className="pt-48 pb-0 bg-brand-cream">
        <Container>
          <Link to="/blog" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold hover:text-white transition-all mb-16 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Stories
          </Link>
          
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-12 tracking-tighter leading-[0.95] uppercase">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-12 text-[10px] text-white/40 mb-16 border-y border-white/5 py-10 font-bold uppercase tracking-[0.3em]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/30">
                  <User size={16} />
                </div>
                <span className="text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-gold">Published on</span>
                <span className="text-white">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white">{post.readTime} read</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-32 bg-brand-cream">
        <Container>
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-2/3">
              <div className="overflow-hidden mb-20 aspect-[16/9] bg-brand-muted border border-white/5">
                <img src={assetUrl(post.image)} alt={post.title} className="w-full h-full object-cover opacity-80" />
              </div>
              
              <article className="max-w-none">
                <div className="whitespace-pre-line text-white/60 leading-[2] space-y-10 font-light text-xl">
                  {post.content}
                </div>
              </article>

              <div className="mt-24 p-16 bg-brand-muted border border-white/5 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-4xl font-serif text-white mb-8 uppercase tracking-tight leading-none">Taste the <span className="italic text-brand-red">Tradition</span></h3>
                  <p className="text-white/40 mb-12 font-light leading-relaxed max-w-xl text-lg">
                    Experience the soul-stirring flavors for yourself at EC Phở in Greenville.
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <Button as={Link} to="/menu" variant="primary">Full Menu</Button>
                    <Button as="a" href={business.social.doorDash} target="_blank" rel="noopener noreferrer" variant="outline">Order Delivery</Button>
                  </div>
                </div>
                {/* Decoration */}
                <div className="absolute -right-16 -bottom-16 opacity-[0.02] pointer-events-none text-white">
                   <ShoppingBag size={350} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-20">
              {/* Order CTA */}
              <div className="bg-brand-red p-12 text-white sticky top-32 shadow-[0_0_50px_rgba(254,44,44,0.1)]">
                <ShoppingBag size={48} className="text-white/40 mb-10 stroke-1" />
                <h3 className="text-4xl font-serif mb-8 leading-none uppercase tracking-tighter">Comfort Delivered</h3>
                <p className="text-white/70 mb-12 font-light leading-relaxed">
                  The authentic warmth of our broths delivered fast to your door.
                </p>
                <Button 
                  as="a" 
                  href={business.social.doorDash} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="secondary" 
                  className="w-full"
                >
                  Start Order
                </Button>
              </div>

              {/* Other Posts */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-12 flex items-center justify-between border-b border-white/5 pb-6">
                  Latest Stories
                  <Link to="/blog" className="text-brand-red hover:text-white transition-all underline decoration-brand-red/30 underline-offset-8">Browse All</Link>
                </h4>
                <div className="space-y-12">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
                    <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex gap-8">
                      <div className="w-28 h-28 shrink-0 overflow-hidden bg-brand-muted border border-white/10 transition-all group-hover:border-brand-red/50">
                        <img src={assetUrl(p.image)} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h5 className="font-serif text-white group-hover:text-brand-red transition-colors line-clamp-2 text-xl leading-tight mb-4 tracking-tight">{p.title}</h5>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">{p.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
