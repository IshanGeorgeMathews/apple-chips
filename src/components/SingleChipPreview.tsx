import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useStore, FLAVOR_PROFILES } from '../store/useStore';

const SingleChipPreview = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const sprinkleRef = useRef<THREE.Points>(null);
  const { customization } = useStore();
  const profile = FLAVOR_PROFILES[customization.flavor];

  // Generate random sprinkles
  const sprinkles = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.55;
      positions[i * 3 + 1] = 0.05; // Slightly above the surface
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
    if (sprinkleRef.current) {
        sprinkleRef.current.rotation.copy(meshRef.current!.rotation);
    }
  });

  return (
    <group scale={2.5}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box ref={meshRef} args={[0.6, 0.08, 0.4]}>
          <meshStandardMaterial
            color={profile.color}
            roughness={0.4}
            metalness={0.1}
          />
        </Box>

        <Points ref={sprinkleRef} positions={sprinkles} stride={3}>
          <PointMaterial
            transparent
            color={profile.sprinkleColor}
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </Float>
    </group>
  );
};

export default SingleChipPreview;
