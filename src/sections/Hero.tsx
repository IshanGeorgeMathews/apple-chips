import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image Parallax (Simulated with blurred elements) */}
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-20">
         <motion.div
           animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="w-full h-full bg-[url('https://images.unsplash.com/photo-1613962258233-ebad4131fbd3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
         />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass p-12 md:p-20 rounded-[4rem] max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-apple-green font-bold uppercase mb-6 block text-sm"
        >
          The Future of Gastronomy
        </motion.span>

        <h1 className="text-7xl md:text-[10rem] font-black leading-none mb-8 text-gradient tracking-tighter">
          APPLE BITES
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          AI-Powered Personalized Sustainable Snacking. <br className="hidden md:block" />
          The evolution of the bite starts here.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Scroll to Initiate</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-apple-green" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
