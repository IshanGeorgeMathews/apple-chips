import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { useStore } from '../store/useStore';
import AppleModel from './AppleModel';
import Portal from './Portal';
import RoboticHand from './RoboticHand';
import LabEnvironment from './LabEnvironment';
import ChipParticles from './ChipParticles';
import BagModel from './BagModel';
import * as THREE from 'three';

const Scene = () => {
  const progress = useStore((state) => state.progress);

  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
      <color attach="background" args={['#020202']} />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#34c759" />
        <spotLight
          position={[-10, 20, 10]}
          angle={0.12}
          penumbra={1}
          intensity={2}
          castShadow
          color="#ff2d55"
        />

        <group>
          <AppleModel progress={progress} />
          <Portal progress={progress} />
          <RoboticHand progress={progress} />
          <LabEnvironment progress={progress} />
          <ChipParticles progress={progress} />
          <BagModel progress={progress} />
        </group>

        <EffectComposer>
          <Bloom
            luminanceThreshold={1}
            mipmapBlur
            intensity={0.5}
            radius={0.4}
          />
          <Noise opacity={0.05} />
          <Vignette offset={0.1} darkness={1.1} />
          <ChromaticAberration
            offset={new THREE.Vector2(0.001, 0.001)}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
