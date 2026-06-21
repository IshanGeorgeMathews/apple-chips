import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Zap, Utensils, Flame } from 'lucide-react';
import { cn } from '../utils/cn';

const CustomizationEngine = () => {
  const { customization, setCustomization } = useStore();

  const handleSliderChange = (key: string, value: number) => {
    setCustomization(key, value);
  };

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-transparent to-dark-surface/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-20 relative">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            BUILD YOUR <br />
            <span className="text-apple-green">PERFECT CRUNCH</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-lg">
            Adjust the parameters. Our AI handles the rest, calculating the optimal molecular structure for your specific needs.
          </p>

          <div className="space-y-12 max-w-md">
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

            {/* Calories */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-orange-400">
                  <Flame size={20} />
                  <span className="font-bold uppercase tracking-wider">Calorie Target</span>
                </div>
                <span className="text-2xl font-mono">{customization.calories}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={customization.calories}
                onChange={(e) => handleSliderChange('calories', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default CustomizationEngine;
