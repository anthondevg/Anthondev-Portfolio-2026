"use client";

import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";

function IntelligenceObject() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      state.pointer.y * 0.25,
      3,
      delta,
    );
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      state.pointer.x * 0.45,
      3,
      delta,
    );
    group.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}>
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1, 8]} />
          <MeshDistortMaterial
            color="#6335ff"
            roughness={0.32}
            metalness={0.22}
            distort={0.38}
            speed={1.45}
          />
        </mesh>
        <mesh scale={1.72} rotation={[0.7, 0.3, 0.1]}>
          <torusGeometry args={[1, 0.012, 12, 160]} />
          <meshBasicMaterial color="#d7c9ff" transparent opacity={0.55} />
        </mesh>
        <mesh scale={1.95} rotation={[1.2, -0.4, 1]}>
          <torusGeometry args={[1, 0.008, 12, 160]} />
          <meshBasicMaterial color="#8a65ff" transparent opacity={0.32} />
        </mesh>
      </Float>
      <Sparkles
        count={34}
        scale={5}
        size={1.8}
        speed={0.25}
        color="#ece6ff"
      />
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas
      className="!absolute inset-0 z-1"
      camera={{ position: [0, 0, 5.1], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 4]} intensity={2.3} color="#ddd4ff" />
      <pointLight position={[-3, -2, 2]} intensity={18} color="#a13f72" />
      <IntelligenceObject />
    </Canvas>
  );
}
