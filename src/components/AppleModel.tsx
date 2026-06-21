import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const AppleModel = ({ progress }: { progress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    // SECTION 1: HERO (0 - 0.1)
    if (progress < 0.1) {
      meshRef.current.position.y = 1.5;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.scale.setScalar(1);
    }

    // SECTION 2: NEWTON MOMENT (0.1 - 0.2)
    // The apple falls
    if (progress >= 0.1 && progress < 0.2) {
      const p = (progress - 0.1) / 0.1;
      meshRef.current.position.y = 1.5 - p * 3.5; // Falls from 1.5 to -2
      meshRef.current.rotation.x = p * Math.PI * 2;
    }

    // SECTION 3: TRANSFORMATION LAB (0.2 - 0.35)
    if (progress >= 0.2 && progress < 0.35) {
      const p = (progress - 0.2) / 0.15;
      meshRef.current.position.y = -2 + p * 2; // Lift up to center (0)
      meshRef.current.scale.setScalar(1 + p * 0.5);
    }

    if (progress > 0.35) {
      meshRef.current.visible = false;
    } else {
      meshRef.current.visible = true;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#ff3b30"
          roughness={0.1}
          metalness={0.5}
          distort={0.4}
          speed={4}
        />
      </Sphere>
    </Float>
  );
};

export default AppleModel;
