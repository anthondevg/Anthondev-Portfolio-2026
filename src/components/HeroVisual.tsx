"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

const subscribe = () => () => {};

export function HeroVisual() {
  const webgl = useSyncExternalStore(subscribe, supportsWebGL, () => false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-visual">
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-halo" aria-hidden="true" />
      {webgl && !reduceMotion ? <Scene3D /> : null}
      <div className="portrait-frame">
        <div className="portrait-image">
          <Image
            src="/anthony-gonzalez-portrait.jpg"
            alt="Anthony Gonzalez"
            fill
            sizes="(max-width: 680px) 48vw, (max-width: 900px) 38vw, 42vw"
            priority
          />
        </div>
        <p>
          <span>IMAGE / 01</span>
          ANTHONY GONZALEZ
        </p>
      </div>
      <div className="visual-note" aria-hidden="true">
        <span>INTELLIGENCE</span>
        <i />
        <span>CRAFT</span>
      </div>
    </div>
  );
}
