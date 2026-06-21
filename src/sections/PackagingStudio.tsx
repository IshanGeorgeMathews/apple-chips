import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Palette, Layout, Type, Upload, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

const PackagingStudio = () => {
  const { customization, setCustomization } = useStore();

  const finishes: Array<'Matte' | 'Satin' | 'Glossy'> = ['Matte', 'Satin', 'Glossy'];

  return (
    <section className="relative min-h-screen py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* Package Preview */}
        <div className="order-2 lg:order-1 flex justify-center relative">
          <div className="absolute inset-0 bg-apple-green/5 blur-[120px] rounded-full" />
          <motion.div
            layoutId="package"
            className="w-72 h-[450px] rounded-[3rem] p-10 flex flex-col justify-between shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden transition-all duration-700"
            style={{
                backgroundColor: customization.bagColor,
                boxShadow: customization.finish === 'Glossy' ? 'inset 0 0 50px rgba(255,255,255,0.2)' : 'none'
            }}
          >
            <div className="z-10">
              <p className="text-[10px] font-black tracking-[0.5em] uppercase mb-2 opacity-40 text-white">Private Reserve</p>
              <h3 className="text-4xl font-black leading-tight text-white mix-blend-difference">
                {customization.target === 'Developer' ? 'CODE' :
                 customization.target === 'Student' ? 'CORE' :
                 customization.target === 'Fitness' ? 'PEAK' : 'PURE'}
                <br />
                BITES
              </h3>
            </div>

            <div className="z-10 space-y-6">
               <div className="w-16 h-[1px] bg-white opacity-30" />
               <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                 {customization.finish} Finish // {customization.flavor}
               </p>
            </div>

            {/* Premium Grain Texture inside the bag */}
            <div className="absolute inset-0 opacity-20 pointer-events-none luxury-grain" />
          </motion.div>
        </div>

        {/* Controls */}
        <div className="order-1 lg:order-2 space-y-12">
          <div>
            <h2 className="text-6xl font-black mb-6 tracking-tighter">FINISHING <br /> <span className="text-apple-green">STUDIO</span></h2>
            <p className="text-xl text-gray-500 max-w-md">Elevate your experience with bespoke material finishes and custom visual identities.</p>
          </div>

          <div className="space-y-10">
            {/* Finish Selection */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-gray-400">
                <Sparkles size={16} />
                <span className="font-bold uppercase tracking-[0.3em] text-[10px]">Material Finish</span>
              </div>
              <div className="flex gap-4">
                {finishes.map((f) => (
                  <button
                    key={f}
                    onClick={() => setCustomization('finish', f)}
                    className={cn(
                      "px-8 py-4 rounded-xl border transition-all text-xs font-black tracking-widest uppercase",
                      customization.finish === f
                        ? "bg-white text-black border-white"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Color & Brand */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Palette size={16} />
                        <span className="font-bold uppercase tracking-[0.3em] text-[10px]">Bespoke Color</span>
                    </div>
                    <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <input
                            type="color"
                            value={customization.bagColor}
                            onChange={(e) => setCustomization('bagColor', e.target.value)}
                            className="w-10 h-10 rounded-full bg-transparent border-none cursor-pointer"
                        />
                        <span className="text-xs font-mono opacity-50">{customization.bagColor.toUpperCase()}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Upload size={16} />
                        <span className="font-bold uppercase tracking-[0.3em] text-[10px]">Digital Assets</span>
                    </div>
                    <button className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Upload Logo
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
                <Layout size={24} />
                <span className="text-[10px] font-black tracking-widest uppercase">Mycelium Base</span>
              </div>
              <div className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
                <Type size={24} />
                <span className="text-[10px] font-black tracking-widest uppercase">Smart Ink</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagingStudio;
