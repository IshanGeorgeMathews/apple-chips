import { useEffect, useRef } from 'react';
import Scene from './components/Scene';
import Hero from './sections/Hero';
import NewtonMoment from './sections/NewtonMoment';
import TransformationLab from './sections/TransformationLab';
import ChipExplosion from './sections/ChipExplosion';
import CustomizationEngine from './sections/CustomizationEngine';
import ImageGallery from './sections/ImageGallery';
import AIOptimization from './sections/AIOptimization';
import PackagingStudio from './sections/PackagingStudio';
import Sustainability from './sections/Sustainability';
import FutureCity from './sections/FutureCity';
import FinalCTA from './sections/FinalCTA';
import { useStore } from './store/useStore';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const setProgress = useStore((state) => state.setProgress);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    });

    return () => ctx.revert();
  }, [setProgress]);

  return (
    <div ref={containerRef} className="relative bg-[#050505]">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* Luxury Overlay */}
      <div className="luxury-grain" />

      {/* Overlay Content */}
      <div className="relative z-10">
        <Hero />
        <NewtonMoment />
        <TransformationLab />
        <ChipExplosion />
        <CustomizationEngine />
        <ImageGallery />
        <AIOptimization />
        <PackagingStudio />
        <Sustainability />
        <FutureCity />
        <FinalCTA />
      </div>
    </div>
  );
}

export default App;
