"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { useReducedMotion } from "motion/react";

const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((module) => module.Scene3D),
  { ssr: false },
);

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

const subscribe = () => () => {};

export function HeroBackdrop() {
  const webgl = useSyncExternalStore(subscribe, supportsWebGL, () => false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden" aria-hidden="true">
      {webgl && !reduceMotion ? <Scene3D /> : null}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_19%_24%,rgba(28,10,80,.26),transparent_34%),radial-gradient(ellipse_at_82%_63%,rgba(71,30,109,.18),transparent_42%),linear-gradient(90deg,rgba(8,7,13,.3),transparent_48%,rgba(8,7,13,.16))]" />
      <div className="hero-noise absolute inset-0 z-2" />
    </div>
  );
}
