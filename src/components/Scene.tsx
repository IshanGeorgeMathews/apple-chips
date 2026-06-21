import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { useStore } from '../store/useStore';
import AppleModel from './AppleModel';
import Portal from './Portal';
import RoboticHand from './RoboticHand';
import LabEnvironment from './LabEnvironment';
import ChipParticles from './ChipParticles';

const Scene = () => {
  const progress = useStore((state) => state.progress);

  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        {/* The story unfolds inside here */}
        <group>
          <AppleModel progress={progress} />
          <Portal progress={progress} />
          <RoboticHand progress={progress} />
          <LabEnvironment progress={progress} />
          <ChipParticles progress={progress} />
        </group>

        {/* Global effects could go here */}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
