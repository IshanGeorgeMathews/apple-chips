import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const FinalCTA = () => {
  const { customization } = useStore();

  const handleOrder = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#34c759', '#ff3b30', '#ffffff']
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 bg-gradient-to-t from-dark-surface to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-apple-green font-bold tracking-[0.3em] uppercase mb-4 block">Your Goals. Your Bite.</span>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">READY TO <br /> EVOLVE?</h2>

          <div className="inline-flex items-center gap-4 p-2 bg-white/5 border border-white/10 rounded-full pr-8">
             <div className="w-12 h-12 rounded-full bg-apple-green flex items-center justify-center text-black font-bold">
                {customization.target[0]}
             </div>
             <p className="text-sm font-medium">Your {customization.theme} is ready for production.</p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
           <button
             onClick={handleOrder}
             className="px-12 py-6 bg-white text-black font-black text-xl rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 group"
           >
              BUILD YOUR PERFECT CRUNCH
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
           </button>

           <button className="px-12 py-6 bg-transparent border-2 border-white/20 text-white font-black text-xl rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              <ShoppingCart />
              ORDER NOW
           </button>
        </div>

        <p className="mt-12 text-gray-500 text-sm italic">
          * AI-optimized production takes 48 hours. Sustainable delivery via electric drone included.
        </p>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-apple-red" />
              <span className="font-black text-xl tracking-tighter">APPLE BITES</span>
           </div>
           <div className="flex gap-8 text-gray-500 text-sm font-medium uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="hover:text-white transition-colors">Lab Reports</a>
           </div>
           <p className="text-gray-600 text-xs uppercase tracking-widest">© 2026 Apple Bites Food-Tech Corp.</p>
        </footer>
      </div>
    </section>
  );
};

export default FinalCTA;
