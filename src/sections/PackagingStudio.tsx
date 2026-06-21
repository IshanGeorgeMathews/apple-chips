import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Palette, Layout, Type, Upload } from 'lucide-react';
import { cn } from '../utils/cn';

const PackagingStudio = () => {
  const { customization, setCustomization } = useStore();

  const themes = [
    { id: 'Student Edition', color: '#3b82f6' },
    { id: 'Developer Edition', color: '#1c1c1e' },
    { id: 'Corporate Edition', color: '#64748b' },
    { id: 'Fitness Edition', color: '#f97316' },
    { id: 'Eco Edition', color: '#34c759' },
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
            style={{ backgroundColor: customization.theme === 'Custom' ? customization.bagColor : undefined }}
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

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-300">
                <Palette size={18} />
                <span className="font-bold uppercase tracking-widest text-sm">Design Theme & Color</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                        setCustomization('theme', theme.id);
                        setCustomization('bagColor', theme.color);
                    }}
                    className={cn(
                      "px-6 py-2 rounded-full border transition-all text-sm",
                      customization.theme === theme.id
                        ? "bg-white text-black border-white"
                        : "bg-transparent border-white/20 hover:border-white/50"
                    )}
                  >
                    {theme.id}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                 <input
                   type="color"
                   value={customization.bagColor}
                   onChange={(e) => {
                       setCustomization('bagColor', e.target.value);
                       setCustomization('theme', 'Custom');
                   }}
                   className="w-12 h-12 rounded-lg bg-transparent border-none cursor-pointer"
                 />
                 <span className="text-sm text-gray-400 font-mono">{customization.bagColor}</span>
              </div>
            </div>

            <div>
               <div className="flex items-center gap-2 mb-4 text-gray-300">
                <Upload size={18} />
                <span className="font-bold uppercase tracking-widest text-sm">Brand Image Upload</span>
              </div>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:border-apple-green transition-colors bg-white/5">
                 <Upload className="text-gray-500 mb-2" />
                 <span className="text-xs text-gray-500">Upload your logo or artwork</span>
                 <input type="file" className="hidden" />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Layout className="mb-4 text-apple-green" />
                <h4 className="font-bold mb-1 text-sm">Sustainable Materials</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Compostable Mycelium</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <Type className="mb-4 text-apple-red" />
                <h4 className="font-bold mb-1 text-sm">Smart Labels</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">NFC-Enabled</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagingStudio;
