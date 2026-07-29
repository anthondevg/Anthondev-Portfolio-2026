"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Mesh, PlaneGeometry } from "three";

function BentMesh() {
  const mesh = useRef<Mesh>(null);
  const geometry = useMemo(() => {
    const plane = new PlaneGeometry(11.5, 7.2, 26, 16);
    const positions = plane.attributes.position;

    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index);
      const y = positions.getY(index);
      const bend = Math.sin(x * 0.72) * 0.18 + Math.cos(y * 1.15) * 0.1;
      positions.setZ(index, bend - x * x * 0.012);
    }

    positions.needsUpdate = true;
    plane.computeVertexNormals();
    return plane;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    const time = clock.getElapsedTime();
    mesh.current.rotation.x = -1.02 + Math.sin(time * 0.18) * 0.018;
    mesh.current.rotation.z = -0.32 + Math.sin(time * 0.15) * 0.035;
    mesh.current.rotation.y = 0.28 + Math.cos(time * 0.13) * 0.05;
    mesh.current.position.x = 1.5 + Math.cos(time * 0.16) * 0.08;
    mesh.current.position.y = -0.35 + Math.sin(time * 0.22) * 0.12;
    mesh.current.position.z = -2.1 + Math.cos(time * 0.14) * 0.1;
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      position={[1.5, -0.35, -2.1]}
      rotation={[-1.02, 0.28, -0.32]}
    >
      <meshBasicMaterial
        color="#9b7cff"
        transparent
        opacity={0.085}
        wireframe
        depthWrite={false}
      />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <Canvas
      className="pointer-events-none !absolute inset-0 z-0"
      camera={{ position: [0, 0, 5.1], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <BentMesh />
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
