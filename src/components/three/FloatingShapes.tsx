"use client";

import { Float, Icosahedron, Octahedron, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = time * 0.01;
  });

  return (
    <group ref={group}>
      {/* Teal wireframe icosahedron - top right */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
        <Icosahedron args={[0.5, 0]} position={[3, 1.5, -1]}>
          <meshStandardMaterial
            color="#16302B"
            transparent
            opacity={0.35}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Gold octahedron - left side */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5}>
        <Octahedron args={[0.4, 0]} position={[-3, -0.5, 0]}>
          <meshStandardMaterial
            color="#A38560"
            transparent
            opacity={0.3}
            wireframe
          />
        </Octahedron>
      </Float>

      {/* Teal sphere - bottom right */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.7}>
        <Sphere args={[0.25, 24, 24]} position={[2.5, -2, 0]}>
          <meshStandardMaterial
            color="#16302B"
            transparent
            opacity={0.25}
          />
        </Sphere>
      </Float>

      {/* Small gold icosahedron - top left */}
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.4}>
        <Icosahedron args={[0.3, 0]} position={[-2.5, 2, -0.5]}>
          <meshStandardMaterial
            color="#C4A97D"
            transparent
            opacity={0.3}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Small teal octahedron - center bottom */}
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.6}>
        <Octahedron args={[0.25, 0]} position={[0, -2.5, 0]}>
          <meshStandardMaterial
            color="#16302B"
            transparent
            opacity={0.25}
            wireframe
          />
        </Octahedron>
      </Float>
    </group>
  );
}
