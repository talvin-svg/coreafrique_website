"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Sphere, Octahedron } from "@react-three/drei";
import * as THREE from "three";

export function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = time * 0.02;
  });

  return (
    <group ref={group}>
      {/* Primary color shapes - deep teal green */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron args={[0.4, 0]} position={[-3, 1, -2]}>
          <meshStandardMaterial
            color="#16302B"
            transparent
            opacity={0.3}
            wireframe
          />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[0.3, 16, 16]} position={[3, -1, -1]}>
          <meshStandardMaterial
            color="#16302B"
            transparent
            opacity={0.2}
          />
        </Sphere>
      </Float>

      {/* Secondary color shapes - champagne gold */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Octahedron args={[0.35, 0]} position={[2, 2, -3]}>
          <meshStandardMaterial
            color="#A38560"
            transparent
            opacity={0.3}
            wireframe
          />
        </Octahedron>
      </Float>

      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.4}>
        <Icosahedron args={[0.25, 0]} position={[-2, -2, -2]}>
          <meshStandardMaterial
            color="#A38560"
            transparent
            opacity={0.25}
          />
        </Icosahedron>
      </Float>

      {/* Accent shapes - burgundy */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.7}>
        <Sphere args={[0.2, 12, 12]} position={[0, 2.5, -4]}>
          <meshStandardMaterial
            color="#390517"
            transparent
            opacity={0.15}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <Octahedron args={[0.2, 0]} position={[-1, 0.5, -1.5]}>
          <meshStandardMaterial
            color="#C4A97D"
            transparent
            opacity={0.2}
            wireframe
          />
        </Octahedron>
      </Float>
    </group>
  );
}
