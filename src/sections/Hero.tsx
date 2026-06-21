import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[150vh] flex flex-col items-center justify-start pt-[20vh] px-4 text-center z-20 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          APPLE BITES
        </h1>
        <p className="text-2xl md:text-4xl font-light tracking-tight text-apple-green mb-8">
          Build Your Perfect Crunch
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          AI-Powered Personalized Sustainable Snacking. The evolution of the bite starts here.
        </p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-apple-green to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
