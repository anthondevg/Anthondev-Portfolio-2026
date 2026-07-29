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
    <div className="relative z-2 h-[min(65vw,670px)] min-h-[500px] max-h-[68svh] max-md:h-[min(110vw,690px)] max-md:max-h-none max-sm:h-[118vw] max-sm:min-h-[430px]">
      <div className="absolute top-[12%] right-[3%] bottom-[8%] left-[3%] rounded-full border border-white/5 opacity-45 [background-image:radial-gradient(rgba(231,225,244,.35)_.75px,transparent_.75px)] [background-size:17px_17px] [mask-image:radial-gradient(circle,black,transparent_65%)]" aria-hidden="true" />
      <div className="absolute z-0 top-[15%] left-[6%] w-[85%] aspect-square rounded-full bg-[radial-gradient(circle_at_48%_42%,transparent_0_32%,rgba(112,71,255,.28)_32.5%,transparent_34%),radial-gradient(circle_at_50%_50%,rgba(49,26,103,.34),transparent_64%)]" aria-hidden="true" />
      {webgl && !reduceMotion ? <Scene3D /> : null}
      <div className="absolute right-[2%] bottom-[8%] z-3 w-[42%] max-md:right-[4%] max-md:w-[38%] max-sm:right-[3%] max-sm:bottom-[5%] max-sm:w-[48%]">
        <div className="relative aspect-square w-full overflow-hidden rounded-full border border-paper/30 shadow-[0_34px_90px_rgba(0,0,0,.46)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(145deg,rgba(112,71,255,.2),transparent_46%)]">
          <Image
            src="/anthony-gonzalez-portrait.jpg"
            alt="Anthony Gonzalez"
            className="scale-[1.12] object-cover object-[center_28%]"
            fill
            sizes="(max-width: 680px) 48vw, (max-width: 900px) 38vw, 42vw"
            priority
          />
        </div>
        <p className="mt-3.5 mb-0 flex justify-between text-[.47rem] font-bold tracking-[.1em] text-[#8d849a]">
          <span>IMAGE / 01</span>
          ANTHONY GONZALEZ
        </p>
      </div>
      <div className="absolute top-[20%] -right-2 z-4 flex flex-col items-center gap-3 text-[.45rem] font-bold tracking-[.18em] text-[#84798f] [writing-mode:vertical-rl] max-sm:right-0" aria-hidden="true">
        <span>INTELLIGENCE</span>
        <i className="h-14 w-px bg-[linear-gradient(#7047ff,transparent)]" />
        <span>CRAFT</span>
      </div>
    </div>
  );
}
