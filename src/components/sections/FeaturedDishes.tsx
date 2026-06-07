import { motion } from 'motion/react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { menuItems } from '../../data/menu';
import { formatPrice } from '../../utils/format';
import { optimizedImageSrcSet, optimizedImageUrl } from '../../utils/assets';

export const FeaturedDishes = () => {
  const featured = menuItems.filter(item => item.tags?.includes('Popular') || item.tags?.includes('Signature'));

  return (
    <section className="py-20 sm:py-32 bg-[#FAF9F6]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-24 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-bold text-brand-green uppercase tracking-[0.4em] mb-4 sm:mb-6">Our Favorites</h2>
              <p className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-dark leading-[0.85] tracking-tighter uppercase">
                Signature <br />
                <span className="italic text-brand-green">Masterpieces</span>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="group bg-white rounded-[32px] sm:rounded-[40px] overflow-hidden border border-brand-dark/[0.03] hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-700 flex flex-col w-full">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img 
                    src={item.image ? optimizedImageUrl(item.image, 480) : "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop"}
                    srcSet={item.image ? optimizedImageSrcSet(item.image) : undefined}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={item.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-green shadow-sm">
                      {item.tags?.[0] || 'Signature'}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-brand-dark leading-tight tracking-tight group-hover:text-brand-green transition-colors">{item.name}</h3>
                      {item.vietnameseName && (
                        <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 mt-2">{item.vietnameseName}</p>
                      )}
                    </div>
                    <span className="font-serif text-xl sm:text-2xl text-brand-green whitespace-nowrap">{formatPrice(item.price)}</span>
                  </div>
                  
                  <p className="text-brand-dark/50 text-xs sm:text-sm leading-relaxed font-light mt-2 sm:mt-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-6 sm:pt-8 flex items-center">
                    <span className="w-8 h-px bg-brand-dark/10 group-hover:w-16 group-hover:bg-brand-green transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
