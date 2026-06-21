import { motion } from 'framer-motion';

const ChipExplosion = () => {
  return (
    <section className="relative h-[150vh] flex items-center justify-center pointer-events-none">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-black/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">The DNA of Crunch</h2>
          <p className="text-xl text-gray-400">Every component intelligently balanced for your lifestyle.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChipExplosion;
