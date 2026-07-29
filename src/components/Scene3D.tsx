"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Scene3D() {
  return (
    <Canvas
      className="pointer-events-none !absolute inset-0 z-0"
      camera={{ position: [0, 0, 5.1], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Sparkles
        count={72}
        scale={[9, 6.5, 2]}
        size={0.65}
        speed={0.08}
        opacity={0.28}
        color="#c8bde0"
      />
    </Canvas>
  );
}
