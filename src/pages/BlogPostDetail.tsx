import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../layouts/shared/SEOHead';
import { blogPosts } from '../data/blog';
import { assetUrl } from '../utils/assets';
import { ArrowLeft, Clock3, CalendarDays, User } from 'lucide-react';

type ContentBlock =
  | { type: 'quote'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'paragraph'; content: string };

const parseContent = (content: string): ContentBlock[] =>
  content
    .split(/\n\s*\n/)
    .map(block => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      const lines = block.split('\n').map(line => line.trim()).filter(Boolean);

      if (index === 0 && lines.length === 1 && /^".*"$/.test(lines[0])) {
        return { type: 'quote', content: lines[0] };
      }

      if (lines.length > 1 && lines.every(line => line.startsWith('• '))) {
        return { type: 'list', items: lines.map(line => line.replace(/^•\s*/, '')) };
      }

      if (lines.length === 1) {
        const line = lines[0];
        const isHeading =
          line.length <= 72 &&
          (/^(PART \d+|Part \d+)/.test(line) ||
            /^[0-9]+\.\s/.test(line) ||
            /^[A-Z][A-Za-z0-9'"():&,\-\s]+$/.test(line) ||
            /^[A-Z][a-z]+(?:\s+[A-Z][A-Za-z"'&-]+){0,8}:?$/.test(line));

        if (isHeading) {
          return { type: 'heading', content: line };
        }
      }

      return { type: 'paragraph', content: block };
    });

export const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  const blocks = parseContent(post.content);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        image={post.image}
        article={true}
      />

      <section className="relative overflow-hidden bg-brand-cream pt-40 pb-16">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.16),transparent_48%),radial-gradient(circle_at_top_right,rgba(177,75,58,0.12),transparent_42%)] pointer-events-none" />
        <Container>
          <Link
            to="/blog"
            className="relative z-10 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-red hover:text-brand-dark transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" /> Back to Stories
          </Link>

          <div className="relative z-10 max-w-6xl">
            <span className="inline-flex items-center border border-brand-red/15 bg-brand-paper/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-red mb-8">
              The Story Behind the Bowl
            </span>
            <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-serif text-brand-dark mb-8 tracking-[-0.04em] leading-[0.92]">
              {post.title}
            </h1>
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-brand-dark/68 font-light">
              {post.excerpt}
            </p>

            <div className="mt-10 grid border border-brand-dark/8 bg-brand-paper/88 shadow-[0_20px_60px_rgba(45,36,36,0.04)] sm:grid-cols-3">
              <div className="p-5 md:p-6 sm:border-r border-brand-dark/8">
                <div className="flex items-center gap-3 text-brand-red mb-4">
                  <User size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em]">Written by</span>
                </div>
                <p className="font-serif text-2xl md:text-[2rem] text-brand-dark leading-none">{post.author}</p>
              </div>
              <div className="p-5 md:p-6 border-t sm:border-t-0 sm:border-r border-brand-dark/8">
                <div className="flex items-center gap-3 text-brand-red mb-4">
                  <CalendarDays size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em]">Published</span>
                </div>
                <p className="font-serif text-2xl md:text-[2rem] text-brand-dark leading-none">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="p-5 md:p-6 border-t sm:border-t-0 border-brand-dark/8">
                <div className="flex items-center gap-3 text-brand-red mb-4">
                  <Clock3 size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em]">Reading time</span>
                </div>
                <p className="font-serif text-2xl md:text-[2rem] text-brand-dark leading-none">{post.readTime}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream pb-32">
        <Container>
          <div className="grid gap-14 xl:grid-cols-[minmax(0,1.75fr)_360px]">
            <div className="min-w-0">
              <div className="mb-10 border border-brand-dark/8 bg-brand-paper p-4 md:p-5 shadow-[0_20px_60px_rgba(45,36,36,0.06)]">
                <div className="overflow-hidden aspect-[16/9] bg-brand-muted">
                  <img src={assetUrl(post.image)} alt={post.title} className="w-full h-full object-cover" />
                </div>
                {post.imageCredit ? (
                  <p className="mt-4 text-sm text-brand-dark/45 font-light">
                    Photo by{' '}
                    <a
                      href={post.imageCredit.photographerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red hover:text-brand-dark transition-colors underline underline-offset-4"
                    >
                      {post.imageCredit.photographerName}
                    </a>{' '}
                    on{' '}
                    <a
                      href={post.imageCredit.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red hover:text-brand-dark transition-colors underline underline-offset-4"
                    >
                      {post.imageCredit.sourceName}
                    </a>
                  </p>
                ) : null}
              </div>

              <article className="border border-brand-dark/8 bg-brand-paper px-6 py-8 md:px-12 md:py-12 shadow-[0_20px_60px_rgba(45,36,36,0.05)]">
                <div className="space-y-8">
                  {blocks.map((block, index) => {
                    if (block.type === 'quote') {
                      return (
                        <blockquote key={index} className="border-l-2 border-brand-gold pl-6 md:pl-8">
                          <p className="font-serif text-3xl md:text-4xl leading-tight text-brand-dark italic">
                            {block.content}
                          </p>
                        </blockquote>
                      );
                    }

                    if (block.type === 'heading') {
                      const isKicker = /^(PART \d+|Part \d+)/.test(block.content);

                      if (isKicker) {
                        return (
                          <p key={index} className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red pt-2">
                            {block.content}
                          </p>
                        );
                      }

                      return (
                        <h2 key={index} className="font-serif text-3xl md:text-4xl text-brand-dark tracking-tight leading-[1.05] pt-4">
                          {block.content}
                        </h2>
                      );
                    }

                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="space-y-4 border-l border-brand-gold/30 pl-6 text-brand-dark/74 text-lg leading-8 font-light">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="relative">
                              <span className="absolute -left-5 top-[0.72rem] h-2 w-2 rounded-full bg-brand-red/70" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p key={index} className="whitespace-pre-line text-lg md:text-[1.15rem] leading-9 text-brand-dark/72 font-light">
                        {block.content}
                      </p>
                    );
                  })}
                </div>
              </article>

            </div>

            <div className="space-y-8 xl:pt-4">
              <div className="xl:sticky xl:top-24 space-y-8">
                <div className="border border-brand-dark/8 bg-brand-paper p-8 shadow-[0_20px_60px_rgba(45,36,36,0.05)]">
                  <div className="flex items-center justify-between gap-6 mb-8 border-b border-brand-dark/8 pb-5">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">
                      More Stories
                    </h4>
                    <Link to="/blog" className="text-brand-dark/45 hover:text-brand-red transition-colors text-[10px] uppercase tracking-[0.24em] font-bold">
                      Browse All
                    </Link>
                  </div>

                  <div className="space-y-8">
                    {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex gap-5">
                        <div className="w-24 h-24 shrink-0 overflow-hidden bg-brand-muted border border-brand-dark/8">
                          <img src={assetUrl(p.image)} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="min-w-0 flex flex-col justify-center">
                          <h5 className="font-serif text-brand-dark group-hover:text-brand-red transition-colors text-xl leading-tight tracking-tight mb-2">
                            {p.title}
                          </h5>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/35 font-bold">
                            {new Date(p.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
