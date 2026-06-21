import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImageGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const images = [
    'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1613962258233-ebad4131fbd3?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2000&auto=format&fit=crop'
  ];

  return (
    <section ref={containerRef} className="relative py-48 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl md:text-8xl font-black text-gradient leading-none">
              THE ART <br /> OF THE <span className="text-apple-green">BITE.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              Every curve, every texture, every molecule is designed to trigger a symphony of dopamine and nutrition.
            </p>
          </div>

          <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">
             {images.map((src, i) => (
               <motion.div
                 key={i}
                 style={{
                   rotate: i === 1 ? rotate : (i === 0 ? -10 : 10),
                   scale,
                   zIndex: i === 1 ? 10 : 5,
                   x: i === 0 ? -100 : (i === 2 ? 100 : 0)
                 }}
                 className="absolute w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
               >
                 <img src={src} alt="Product" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
