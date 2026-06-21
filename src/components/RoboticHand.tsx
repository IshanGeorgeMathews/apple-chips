import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const RoboticHand = ({ progress }: { progress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Emerges from portal to catch apple (around 0.18 - 0.3)
    if (progress >= 0.18 && progress < 0.4) {
      const p = (progress - 0.18) / 0.15;
      meshRef.current.visible = true;
      meshRef.current.position.y = -3.5 + p * 1.5;
      meshRef.current.rotation.y = Math.PI / 4 + Math.sin(state.clock.getElapsedTime()) * 0.2;
    } else {
      meshRef.current.visible = false;
    }
  });

  return (
    <group>
      <Box ref={meshRef} args={[0.6, 1.2, 0.6]}>
        <meshStandardMaterial color="#222" metalness={1} roughness={0.1} />
      </Box>
      <pointLight position={[0, -1, 0]} intensity={2} color="#00ffff" />
    </group>
  );
};

export default RoboticHand;
