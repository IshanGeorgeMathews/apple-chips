import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring, Float } from '@react-three/drei';
import * as THREE from 'three';

const LabEnvironment = ({ progress }: { progress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    if (progress >= 0.2 && progress < 0.4) {
      groupRef.current.visible = true;
      groupRef.current.rotation.y += 0.01;
      const p = (progress - 0.2) / 0.1;
      groupRef.current.scale.setScalar(p);
    } else {
      groupRef.current.visible = false;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Ring args={[1.5, 1.55, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#34c759" emissive="#34c759" emissiveIntensity={2} />
        </Ring>
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <Ring args={[1.8, 1.82, 64]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#ff3b30" emissive="#ff3b30" emissiveIntensity={1} />
        </Ring>
      </Float>
      <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
        <Ring args={[1.2, 1.22, 64]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
        </Ring>
      </Float>

      {/* Grid Floor */}
      <gridHelper args={[20, 20, "#333", "#111"]} position={[0, -2, 0]} />
    </group>
  );
};

export default LabEnvironment;
