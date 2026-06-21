import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, ContactShadows, Float, Box } from '@react-three/drei';
import * as THREE from 'three';

const AppleModel = ({ progress }: { progress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!meshRef.current || !coreRef.current) return;

    // SECTION 1: HERO (0 - 0.1)
    if (progress < 0.1) {
      coreRef.current.position.y = 0;
      coreRef.current.scale.setScalar(1.5);
      meshRef.current.rotation.y += 0.01;
    }
    // SECTION 2: NEWTON (0.1 - 0.2) - Falling
    else if (progress < 0.2) {
      const p = (progress - 0.1) / 0.1;
      coreRef.current.position.y = -p * 10;
      coreRef.current.scale.setScalar(1.5 - p * 0.5);
    }
    // SECTION 3: LAB (0.2 - 0.3) - Inside Portal/Lab
    else if (progress < 0.3) {
      coreRef.current.position.y = 0;
      coreRef.current.scale.setScalar(1);
    }
    // Fade out or move away for chip explosion
    else {
      coreRef.current.position.y = -20;
    }
  });

  return (
    <>
      <group ref={coreRef}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere ref={meshRef} args={[1, 64, 64]}>
            <MeshDistortMaterial
              color="#ff2d55"
              speed={2}
              distort={0.2}
              radius={1}
              roughness={0.05}
              metalness={0.9}
              clearcoat={1}
              clearcoatRoughness={0.1}
              envMapIntensity={2}
            />
          </Sphere>
          {/* Stem */}
          <Box args={[0.08, 0.4, 0.08]} position={[0, 1, 0]}>
            <meshStandardMaterial color="#222" roughness={0.1} metalness={1} />
          </Box>
        </Float>
      </group>
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.6}
        scale={10}
        blur={3}
        far={4.5}
      />
    </>
  );
};

export default AppleModel;
