import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Float } from '@react-three/drei';
import * as THREE from 'three';

const Portal = ({ progress }: { progress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    // Appears at Newton Moment impact (around 0.18)
    if (progress >= 0.15 && progress < 0.3) {
      const p = (progress - 0.15) / 0.15;
      meshRef.current.visible = true;
      meshRef.current.scale.setScalar(p * 2.5);
      meshRef.current.rotation.z += 0.1;
      meshRef.current.position.y = -2;
    } else {
      meshRef.current.visible = false;
    }
  });

  return (
    <Float speed={10} rotationIntensity={0} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[1, 0.02, 16, 100]}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={10}
          transparent
          opacity={0.9}
        />
      </Torus>
    </Float>
  );
};

export default Portal;
