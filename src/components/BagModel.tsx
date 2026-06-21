import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Decal } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useStore';

const BagModel = ({ progress }: { progress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { customization } = useStore();

  useFrame((state) => {
    if (!meshRef.current) return;

    // Visible during Packaging section (0.6 - 0.75)
    if (progress >= 0.6 && progress < 0.8) {
      meshRef.current.visible = true;
      meshRef.current.position.y = THREE.MathUtils.lerp(-5, 0, (progress - 0.6) / 0.1);
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    } else if (progress >= 0.8) {
        // Move to city background or stay floating
        meshRef.current.visible = true;
        meshRef.current.position.y = 0;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    } else {
      meshRef.current.visible = false;
    }
  });

  return (
    <group>
      <RoundedBox
        ref={meshRef}
        args={[1.5, 2.2, 0.4]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color={customization.bagColor}
          roughness={0.2}
          metalness={0.5}
        />

        {/* Placeholder for "Brand" text or logo */}
        <Decal
          position={[0, 0.5, 0.21]}
          rotation={[0, 0, 0]}
          scale={[1, 0.5, 1]}
        >
          <meshBasicMaterial
            transparent
            opacity={0.8}
            onBeforeCompile={() => {
               // Custom shader to simulate text/logo if needed
            }}
          />
        </Decal>
      </RoundedBox>
    </group>
  );
};

export default BagModel;
