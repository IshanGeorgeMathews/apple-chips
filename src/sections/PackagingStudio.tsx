import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Palette, Layout, Type } from 'lucide-react';
import { cn } from '../utils/cn';

const PackagingStudio = () => {
  const { customization, setCustomization } = useStore();

  const themes = [
    { id: 'Student Edition', color: 'bg-blue-500' },
    { id: 'Developer Edition', color: 'bg-purple-600' },
    { id: 'Corporate Edition', color: 'bg-gray-700' },
    { id: 'Fitness Edition', color: 'bg-orange-500' },
    { id: 'Eco Edition', color: 'bg-green-500' },
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 bg-dark-surface">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Package Preview */}
        <div className="order-2 lg:order-1 flex justify-center">
          <motion.div
            layoutId="package"
            className={cn(
              "w-64 h-96 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-colors duration-500",
              customization.theme === 'Student Edition' && 'bg-blue-600',
              customization.theme === 'Developer Edition' && 'bg-zinc-900 border border-apple-green/50',
              customization.theme === 'Corporate Edition' && 'bg-slate-200 text-black',
              customization.theme === 'Fitness Edition' && 'bg-orange-500',
              customization.theme === 'Eco Edition' && 'bg-apple-green text-black',
            )}
          >
            <div className="z-10">
              <p className="text-xs font-black tracking-widest uppercase mb-1 opacity-60">Apple Bites</p>
              <h3 className="text-3xl font-black leading-tight">
                {customization.target === 'Developer' ? 'CODE CRUNCH' :
                 customization.target === 'Student' ? 'STUDY FUEL' :
                 customization.target === 'Fitness' ? 'PEAK PERFORMANCE' : 'FOCUS FUEL'}
              </h3>
            </div>

            <div className="z-10 space-y-4">
               <div className="w-12 h-1 bg-current opacity-20 rounded-full" />
               <p className="text-sm font-medium leading-relaxed italic">
                 {customization.target === 'Developer' ? '"Optimized for long nights and clean code."' :
                  customization.target === 'Student' ? '"Focus better, crunch harder."' :
                  customization.target === 'Fitness' ? '"Clean energy for every rep."' : '"Professional grade nutrition."'}
               </p>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black opacity-10 pointer-events-none whitespace-nowrap">
               BITES
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl font-black mb-6">CUSTOM PACKAGING <span className="text-apple-green">STUDIO</span></h2>
          <p className="text-xl text-gray-400 mb-12">Your snack, your brand. Our AI generates the visual identity based on your performance goals and target persona.</p>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-300">
                <Palette size={18} />
                <span className="font-bold uppercase tracking-widest text-sm">Design Theme</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setCustomization('theme', theme.id)}
                    className={cn(
                      "px-6 py-3 rounded-full border transition-all",
                      customization.theme === theme.id
                        ? "bg-white text-black border-white"
                        : "bg-transparent border-white/20 hover:border-white/50"
                    )}
                  >
                    {theme.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Layout className="mb-4 text-apple-green" />
                <h4 className="font-bold mb-1">Sustainable Materials</h4>
                <p className="text-sm text-gray-500">100% compostable mycelium-based packaging.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Type className="mb-4 text-apple-red" />
                <h4 className="font-bold mb-1">Smart Labels</h4>
                <p className="text-sm text-gray-500">Dynamic NFC-enabled nutritional updates.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagingStudio;
