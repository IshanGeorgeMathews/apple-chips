import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

const AIOptimization = () => {
  const { customization } = useStore();
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    setIsAnalyzing(true);
    const timer = setTimeout(() => setIsAnalyzing(false), 2000);
    return () => clearTimeout(timer);
  }, [customization]);

  return (
    <section className="relative min-h-screen py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-apple-green/20 rounded-2xl">
            <Brain className="text-apple-green" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">AI Optimization Engine</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Analysis Card */}
          <div className="bg-dark-surface p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Search size={80} />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-400 uppercase tracking-widest">Neural Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Metabolic Rate</span>
                <span className="text-apple-green">Optimized</span>
              </div>
              <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isAnalyzing ? '100%' : '85%' }}
                  className="bg-apple-green h-full"
                />
              </div>
              <div className="flex justify-between items-center pt-2">
                <span>Flavor Density</span>
                <span className="text-apple-red">High</span>
              </div>
              <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isAnalyzing ? '100%' : '92%' }}
                  className="bg-apple-red h-full"
                />
              </div>
            </div>
          </div>

          {/* AI Decision Output */}
          <div className="md:col-span-2 bg-gradient-to-br from-apple-green/10 to-transparent p-8 rounded-3xl border border-apple-green/20">
            <div className="flex items-center justify-between mb-8">
              <span className="bg-apple-green/20 text-apple-green px-4 py-1 rounded-full text-sm font-bold uppercase tracking-tighter">
                {isAnalyzing ? 'Processing...' : 'Ready for Production'}
              </span>
              <Cpu className="text-apple-green animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              {!isAnalyzing ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                  <ResultItem label="Custom Flavor" value={`${customization.target} Spice`} />
                  <ResultItem label="Rec. Oil" value="Avocado Blend" />
                  <ResultItem label="Method" value="Cryo-Baked" />
                  <ResultItem label="Productivity" value={`${customization.productivity + 15}%`} />
                  <ResultItem label="Sustainability" value="9.8/10" />
                  <ResultItem label="Eco Impact" value="-2.4kg CO2" />
                </motion.div>
              ) : (
                <motion.div
                  key="loading"
                  className="flex flex-col items-center justify-center h-48 space-y-4"
                >
                  <div className="w-12 h-12 border-4 border-apple-green border-t-transparent rounded-full animate-spin" />
                  <p className="text-gray-500 animate-pulse uppercase tracking-[0.3em]">Synthesizing Perfect Crunch</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultItem = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-1">
    <p className="text-xs text-gray-500 uppercase tracking-widest">{label}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
);

export default AIOptimization;
