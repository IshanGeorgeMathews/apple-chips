import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe, TreeDeciduous } from 'lucide-react';

const Sustainability = () => {
  return (
    <section className="relative min-h-screen py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          CIRCULAR <span className="text-apple-green">ECONOMY</span>
        </motion.h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
          Every Apple Bite is a commitment to the planet. We've closed the loop from seed to snack to soil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <SDGCard
          icon={<Leaf className="text-emerald-400" />}
          number="3"
          title="Good Health"
          desc="Optimized nutrition for human longevity and peak performance."
        />
        <SDGCard
          icon={<Recycle className="text-apple-green" />}
          number="12"
          title="Responsible Consumption"
          desc="Zero-waste manufacturing and fully biodegradable packaging."
        />
        <SDGCard
          icon={<Globe className="text-blue-400" />}
          number="13"
          title="Climate Action"
          desc="Carbon-negative supply chain powered by renewable energy."
        />
      </div>

      {/* Visual Loop */}
      <div className="mt-24 relative h-64 max-w-4xl mx-auto flex items-center justify-between px-12">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-apple-green/50 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-4 bg-black p-4">
           <div className="p-4 rounded-full bg-apple-green/10 border border-apple-green/30">
              <TreeDeciduous className="text-apple-green" />
           </div>
           <span className="text-xs font-bold uppercase tracking-widest">Orchard</span>
        </div>

        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center gap-4 bg-black p-4"
        >
           <div className="p-4 rounded-full bg-apple-red/10 border border-apple-red/30">
              <div className="w-6 h-6 rounded-full bg-apple-red shadow-[0_0_15px_rgba(255,59,48,0.5)]" />
           </div>
           <span className="text-xs font-bold uppercase tracking-widest">Apple Bite</span>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center gap-4 bg-black p-4">
           <div className="p-4 rounded-full bg-white/10 border border-white/30">
              <Recycle className="text-white" />
           </div>
           <span className="text-xs font-bold uppercase tracking-widest">Soil</span>
        </div>
      </div>
    </section>
  );
};

const SDGCard = ({ icon, number, title, desc }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 bg-dark-surface border border-white/5 rounded-3xl text-left"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="p-3 bg-white/5 rounded-2xl">{icon}</div>
      <span className="text-4xl font-black opacity-10">SDG {number}</span>
    </div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default Sustainability;
