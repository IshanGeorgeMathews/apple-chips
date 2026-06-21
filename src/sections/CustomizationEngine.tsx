import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Zap, Utensils, Leaf, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const CustomizationEngine = () => {
  const { customization, setCustomization, setAppState } = useStore();

  const handleSliderChange = (key: string, value: number) => {
    setCustomization(key, value);
  };

  const flavors = [
    { name: 'Sea Salt & Lime', color: '#34c759' },
    { name: 'Spicy Chili', color: '#ff3b30' },
    { name: 'Wild Honey', color: '#ffcc00' },
    { name: 'Truffle Black', color: '#1c1c1e' }
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-transparent to-dark-surface/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-20 relative">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            BUILD YOUR <br />
            <span className="text-apple-green">PERFECT CRUNCH</span>
          </h2>

          <div className="space-y-12 max-w-md">
            {/* Flavor Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-apple-green">
                <Leaf size={20} />
                <span className="font-bold uppercase tracking-wider">Natural Flavors</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {flavors.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setCustomization('flavor', f.name)}
                    className={cn(
                      "p-3 rounded-lg border text-sm transition-all duration-300",
                      customization.flavor === f.name
                        ? "bg-white text-black border-white"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Productivity */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-blue-400">
                  <Zap size={20} />
                  <span className="font-bold uppercase tracking-wider">Productivity</span>
                </div>
                <span className="text-2xl font-mono">{customization.productivity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={customization.productivity}
                onChange={(e) => handleSliderChange('productivity', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Taste */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-apple-red">
                  <Utensils size={20} />
                  <span className="font-bold uppercase tracking-wider">Taste Intensity</span>
                </div>
                <span className="text-2xl font-mono">{customization.taste}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={customization.taste}
                onChange={(e) => handleSliderChange('taste', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-apple-red"
              />
            </div>

            <button
               onClick={() => setAppState('builder')}
               className="group flex items-center gap-4 bg-apple-green text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              CUSTOM CHIPS BUILDER
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative aspect-square rounded-full p-8 border border-white/10 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-50">
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-full h-full border border-dashed border-apple-green/30 rounded-full flex items-center justify-center"
             >
                <div className="w-4/5 h-4/5 border border-dashed border-apple-green/20 rounded-full" />
             </motion.div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
             {['Student', 'Developer', 'Fitness', 'Traveler'].map((target) => (
               <button
                 key={target}
                 onClick={() => setCustomization('target', target)}
                 className={cn(
                   "p-4 rounded-xl border transition-all duration-300 backdrop-blur-md",
                   customization.target === target
                     ? "bg-apple-green text-black border-apple-green"
                     : "bg-white/5 border-white/10 hover:border-white/30"
                 )}
               >
                 {target}
               </button>
             ))}
          </div>
          <p className="mt-8 text-gray-400 text-sm uppercase tracking-widest font-bold">Target Persona</p>
        </div>
      </div>
    </section>
  );
};

export default CustomizationEngine;
