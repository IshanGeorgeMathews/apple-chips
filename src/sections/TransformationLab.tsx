import { motion } from 'framer-motion';

const TransformationLab = () => {
  return (
    <section className="relative h-[200vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="sticky top-[20vh] z-10 text-center">
        <motion.h2
          className="text-5xl md:text-8xl font-black mb-4"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            color: 'transparent'
          }}
        >
          TRANSFORMATION
        </motion.h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.5em] uppercase">
          Powered by AI. Designed Around You.
        </p>
      </div>

      {/* Decorative Lab UI */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-apple-green rounded-full flex items-center justify-center animate-pulse">
          <div className="w-48 h-48 border border-apple-green/50 rounded-full" />
        </div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-apple-red rounded-full flex items-center justify-center animate-pulse delay-75">
          <div className="w-80 h-80 border border-apple-red/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default TransformationLab;
