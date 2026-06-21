import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useStore';

const SingleChip = ({ text, index, progress, customization }: {
  text: string,
  index: number,
  progress: number,
  customization: any
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;

    const i = index;
    const angle = (i / 10) * Math.PI * 2;
    const p = (progress - 0.3) / 0.15;
    const radius = progress > 0.45 ? 1.5 : 2.5 + (1 - Math.min(p, 1)) * 2;

    const targetX = Math.cos(angle + state.clock.getElapsedTime() * 0.2) * radius;
    const targetZ = Math.sin(angle + state.clock.getElapsedTime() * 0.2) * radius;
    const targetY = Math.sin(state.clock.getElapsedTime() + i) * 0.3;

    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);

    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      const baseScale = 0.8 + (customization.taste / 100) * 0.4;
      const targetScale = hovered ? baseScale * 1.3 : baseScale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const getFlavorColor = () => {
      switch(customization.flavor) {
          case 'Spicy Chili': return '#ff3b30';
          case 'Wild Honey': return '#ffcc00';
          case 'Truffle Black': return '#1c1c1e';
          default: return index % 2 === 0 ? "#f5d142" : "#34c759";
      }
  };

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Box
          ref={meshRef}
          args={[0.6, 0.08, 0.4]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? "#ffffff" : getFlavorColor()}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </Box>
        <Text
          position={[0, 0.25, 0]}
          fontSize={0.12}
          fontWeight="bold"
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={0.8}
        >
          {text}
        </Text>
        {hovered && (
          <Html distanceFactor={10} position={[0, 0.5, 0]}>
            <div className="bg-black/80 backdrop-blur-md border border-white/20 p-2 rounded text-white text-[10px] whitespace-nowrap">
              {customization.flavor} Optimized: {text}
            </div>
          </Html>
        )}
      </Float>
    </group>
  );
};

const ChipParticles = ({ progress }: { progress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const customization = useStore((state) => state.customization);

  useFrame(() => {
    if (!groupRef.current) return;

    if (progress >= 0.3 && progress < 0.6) {
      groupRef.current.visible = true;
      if (progress > 0.45) {
        const p2 = Math.min((progress - 0.45) / 0.05, 1);
        groupRef.current.position.x = THREE.MathUtils.lerp(0, 1.5, p2);
        groupRef.current.position.y = THREE.MathUtils.lerp(0, -0.2, p2);
      } else {
        groupRef.current.position.x = 0;
        groupRef.current.position.y = 0;
      }
    } else {
      groupRef.current.visible = false;
    }
  });

  const features = [
    "Productivity", "Taste", "Calories", "Sustainability",
    "SDG 3", "SDG 12", "SDG 13", "Biodegradable", "Custom Flavors", "AI Optimized"
  ];

  return (
    <group ref={groupRef}>
      {features.map((text, i) => (
        <SingleChip
          key={i}
          text={text}
          index={i}
          progress={progress}
          customization={customization}
        />
      ))}
    </group>
  );
};

export default ChipParticles;
