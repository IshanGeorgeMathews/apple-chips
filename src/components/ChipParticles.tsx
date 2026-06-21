import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useStore';

const ChipParticles = ({ progress }: { progress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const customization = useStore((state) => state.customization);

  useFrame((state) => {
    if (!groupRef.current) return;

    // SECTION 4: CHIP EXPLOSION & 5: CUSTOMIZATION (0.3 - 0.6)
    if (progress >= 0.3 && progress < 0.6) {
      groupRef.current.visible = true;
      const p = (progress - 0.3) / 0.15;

      // Transition position to the right for the customization engine
      if (progress > 0.45) {
        const p2 = Math.min((progress - 0.45) / 0.05, 1);
        groupRef.current.position.x = THREE.MathUtils.lerp(0, 1.5, p2);
        groupRef.current.position.y = THREE.MathUtils.lerp(0, -0.2, p2);
      } else {
        groupRef.current.position.x = 0;
        groupRef.current.position.y = 0;
      }

      groupRef.current.children.forEach((child, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = progress > 0.45 ? 1.5 : 2.5 + (1 - p) * 2;

        child.position.x = Math.cos(angle + state.clock.getElapsedTime() * 0.2) * radius;
        child.position.z = Math.sin(angle + state.clock.getElapsedTime() * 0.2) * radius;
        child.position.y = Math.sin(state.clock.getElapsedTime() + i) * 0.3;

        child.rotation.x += 0.01;
        child.rotation.y += 0.01;

        // Scale based on taste
        const scale = 0.8 + (customization.taste / 100) * 0.4;
        child.scale.setScalar(scale);
      });
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
        <group key={i}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Box args={[0.6, 0.08, 0.4]}>
              <meshStandardMaterial
                color={i % 2 === 0 ? "#f5d142" : "#34c759"}
                roughness={0.3}
                metalness={0.2}
                transparent
                opacity={0.9}
              />
            </Box>
            <Text
              position={[0, 0.25, 0]}
              fontSize={0.1}
              color="white"
              anchorX="center"
              anchorY="middle"
              maxWidth={0.8}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            >
              {text}
            </Text>
          </Float>
        </group>
      ))}
    </group>
  );
};

export default ChipParticles;
