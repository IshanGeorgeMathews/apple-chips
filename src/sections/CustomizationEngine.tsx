import { useStore, FLAVOR_PROFILES } from '../store/useStore';
import { motion } from 'framer-motion';
import { Zap, Utensils, Leaf, ArrowRight, Activity } from 'lucide-react';
import { cn } from '../utils/cn';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import SingleChipPreview from '../components/SingleChipPreview';
import { Suspense } from 'react';

const ProgressBar = ({ label, value, color, icon: Icon }: any) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
      <div className="flex items-center gap-2" style={{ color }}>
        <Icon size={14} />
        <span>{label}</span>
      </div>
      <span className="font-mono">{value}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 50 }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  </div>
);

const CustomizationEngine = () => {
  const { customization, setFlavor, setAppState } = useStore();

  const flavors = Object.keys(FLAVOR_PROFILES) as Array<keyof typeof FLAVOR_PROFILES>;

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-transparent to-dark-surface/50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full">

        {/* Left: Menu selection */}
        <div className="z-20 relative space-y-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              THE <br />
              <span className="text-apple-green">MENU</span>
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Select your base profile</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {flavors.map((fname) => (
              <button
                key={fname}
                onClick={() => setFlavor(fname)}
                className={cn(
                  "group relative p-6 rounded-2xl border text-left transition-all duration-500 overflow-hidden",
                  customization.flavor === fname
                    ? "bg-white text-black border-white"
                    : "bg-white/5 border-white/10 hover:border-white/30"
                )}
              >
                <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-tighter opacity-50 block mb-1">
                        Flavor Case #{flavors.indexOf(fname) + 1}
                    </span>
                    <h3 className="text-2xl font-black">{fname}</h3>
                </div>
                {/* Visual indicator of color on hover/active */}
                <div
                   className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity translate-x-8 translate-y-8"
                   style={{ backgroundColor: FLAVOR_PROFILES[fname].color, borderRadius: '50%' }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Center: 3D Preview */}
        <div className="relative h-[600px] lg:h-full flex flex-col items-center justify-center pointer-events-none lg:pointer-events-auto">
           <div className="absolute inset-0 z-0">
             <Canvas>
               <PerspectiveCamera makeDefault position={[0, 0, 3]} />
               <Suspense fallback={null}>
                 <Environment preset="city" />
                 <ambientLight intensity={0.5} />
                 <SingleChipPreview />
               </Suspense>
             </Canvas>
           </div>

           <div className="relative z-10 mt-auto pb-12 text-center">
              <motion.div
                key={customization.flavor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-6 py-2 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
              >
                 {customization.flavor} // READY
              </motion.div>
           </div>
        </div>

        {/* Right: Metrics Display */}
        <div className="z-20 relative bg-black/40 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 space-y-10">
          <div>
            <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                <Activity className="text-apple-green" />
                ANALYSIS
            </h3>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Molecular Breakdown</p>
          </div>

          <div className="space-y-8">
            <ProgressBar
               label="Productivity"
               value={customization.productivity}
               color="#3b82f6"
               icon={Zap}
            />
            <ProgressBar
               label="Taste Intensity"
               value={customization.taste}
               color="#ff2d55"
               icon={Utensils}
            />
            <ProgressBar
               label="Eco-Calorie"
               value={customization.calories}
               color="#34c759"
               icon={Leaf}
            />
          </div>

          <div className="pt-8 border-t border-white/10">
             <button
                onClick={() => setAppState('builder')}
                className="w-full flex items-center justify-center gap-4 bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-apple-green transition-all transform hover:-translate-y-1 active:scale-95"
             >
                PROCEED TO LAB
                <ArrowRight size={20} />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomizationEngine;
