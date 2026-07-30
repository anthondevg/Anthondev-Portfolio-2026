"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  InstancedMesh,
  Matrix4,
  Vector3,
} from "three";

type Point = [number, number, number];
type Connection = [Point, Point];

function createNetwork() {
  const layerCounts = [4, 7, 10, 7, 4];
  const layers: Point[][] = layerCounts.map((count, layerIndex) => {
    const x = -4.2 + layerIndex * 2.1;

    return Array.from({ length: count }, (_, nodeIndex) => {
      const normalized = count === 1 ? 0 : nodeIndex / (count - 1);
      const y =
        (normalized - 0.5) * 4.7 +
        Math.sin((layerIndex + 1) * (nodeIndex + 2)) * 0.13;
      const z =
        Math.cos(nodeIndex * 1.7 + layerIndex * 0.9) * 0.78 +
        Math.sin(nodeIndex * 0.6) * 0.18;
      return [x, y, z] as Point;
    });
  });

  const nodes = layers.flat();
  const connections: Connection[] = [];

  for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex += 1) {
    const current = layers[layerIndex];
    const next = layers[layerIndex + 1];

    current.forEach((start, startIndex) => {
      next.forEach((end, endIndex) => {
        const startPosition =
          current.length === 1 ? 0.5 : startIndex / (current.length - 1);
        const endPosition =
          next.length === 1 ? 0.5 : endIndex / (next.length - 1);
        const close = Math.abs(startPosition - endPosition) < 0.28;
        const crossSignal = (startIndex * 3 + endIndex + layerIndex) % 7 === 0;

        if (close || crossSignal) connections.push([start, end]);
      });
    });
  }

  return { connections, nodes };
}

function NeuralGraph() {
  const graph = useMemo(() => createNetwork(), []);
  const group = useRef<Group>(null);
  const nodes = useRef<InstancedMesh>(null);
  const pulses = useRef<InstancedMesh>(null);

  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(graph.connections.length * 6);

    graph.connections.forEach(([start, end], index) => {
      positions.set(start, index * 6);
      positions.set(end, index * 6 + 3);
    });

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }, [graph.connections]);

  const pulsePaths = useMemo(
    () =>
      graph.connections
        .filter((_, index) => index % 3 === 0)
        .slice(0, 24)
        .map(([start, end]) => [
          new Vector3(...start),
          new Vector3(...end),
        ] as const),
    [graph.connections],
  );

  useEffect(() => {
    if (!nodes.current) return;

    const matrix = new Matrix4();
    graph.nodes.forEach(([x, y, z], index) => {
      const centrality = 1 - Math.min(Math.abs(x) / 5, 0.72);
      const scale = 0.055 + centrality * 0.035;
      matrix.makeScale(scale, scale, scale);
      matrix.setPosition(x, y, z);
      nodes.current?.setMatrixAt(index, matrix);
    });
    nodes.current.instanceMatrix.needsUpdate = true;

    return () => lineGeometry.dispose();
  }, [graph.nodes, lineGeometry]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = Math.sin(time * 0.16) * 0.18;
      group.current.rotation.x = Math.cos(time * 0.12) * 0.045;
      group.current.position.y = Math.sin(time * 0.25) * 0.08;
    }

    if (!pulses.current) return;

    const matrix = new Matrix4();
    const position = new Vector3();

    pulsePaths.forEach(([start, end], index) => {
      const progress = (time * 0.2 + index / pulsePaths.length) % 1;
      position.lerpVectors(start, end, progress);
      const glow = 0.045 + Math.sin(progress * Math.PI) * 0.045;
      matrix.makeScale(glow, glow, glow);
      matrix.setPosition(position);
      pulses.current?.setMatrixAt(index, matrix);
    });
    pulses.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={group} rotation={[0.08, -0.08, -0.04]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#8d70ff"
          transparent
          opacity={0.24}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      <instancedMesh
        ref={nodes}
        args={[undefined, undefined, graph.nodes.length]}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#d7ccff"
          transparent
          opacity={0.9}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </instancedMesh>

      <instancedMesh
        ref={pulses}
        args={[undefined, undefined, pulsePaths.length]}
      >
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial
          color="#78f0bd"
          transparent
          opacity={0.95}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </instancedMesh>

      <mesh>
        <icosahedronGeometry args={[0.56, 2]} />
        <meshBasicMaterial
          color="#9f83ff"
          transparent
          opacity={0.22}
          wireframe
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export function NeuralNetwork3D() {
  return (
    <Canvas
      className="pointer-events-none !absolute inset-0"
      camera={{ position: [0, 0, 10.6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={["#090711", 8.5, 14]} />
      <NeuralGraph />
      <Sparkles
        count={96}
        scale={[10, 6.5, 3]}
        size={0.8}
        speed={0.12}
        opacity={0.36}
        color="#baa8ff"
      />
    </Canvas>
  );
}
