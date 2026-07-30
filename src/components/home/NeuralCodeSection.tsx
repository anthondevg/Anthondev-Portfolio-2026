"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
import { sectionShell } from "./styles";

const NeuralNetwork3D = dynamic(
  () =>
    import("@/components/NeuralNetwork3D").then(
      (module) => module.NeuralNetwork3D,
    ),
  { ssr: false },
);

const codeSignals = [
  {
    code: "const product = compose(ui, api, intelligence);",
    position: "top-[17%] left-[4%]",
    delay: "0s",
  },
  {
    code: "01001101 01001111 01000100 01000101 01001100",
    position: "top-[29%] right-[3%]",
    delay: "-4s",
  },
  {
    code: "await agent.route({ context, tools, intent });",
    position: "bottom-[24%] left-[7%]",
    delay: "-7s",
  },
  {
    code: "type System = Interface & Data & Model;",
    position: "right-[6%] bottom-[12%]",
    delay: "-10s",
  },
];

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

export function NeuralCodeSection() {
  const webgl = useSyncExternalStore(subscribe, supportsWebGL, () => false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden border-t border-paper/15 bg-[#090711]"
      aria-label="AI and full-stack systems"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(168,140,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,140,255,.08)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(112,71,255,.22),transparent_36%),radial-gradient(circle_at_50%_50%,transparent_32%,#090711_82%)]"
        aria-hidden="true"
      />

      <div className={`${sectionShell} relative`}>
        <div className="flex items-center justify-between border-x border-paper/10 px-5 py-4 text-[.52rem] font-bold uppercase tracking-[.16em] text-[#81778e] max-sm:px-3">
          <span>AI / Full-stack systems</span>
          <span className="flex items-center gap-2">
            <i className="h-1.5 w-1.5 rounded-full bg-[#78f0bd] shadow-[0_0_10px_rgba(120,240,189,.8)]" />
            Signal online
          </span>
        </div>

        <div
          className="relative h-[clamp(31rem,58vw,44rem)] overflow-hidden border border-paper/10 bg-[linear-gradient(180deg,rgba(20,12,39,.42),rgba(7,6,12,.28))]"
          aria-hidden="true"
        >
          {webgl && !reduceMotion ? <NeuralNetwork3D /> : null}

          <div className="absolute top-1/2 left-1/2 h-[34%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-light/15 shadow-[0_0_80px_rgba(112,71,255,.16),inset_0_0_50px_rgba(112,71,255,.08)]" />
          <div className="absolute top-1/2 left-1/2 h-[48%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-light/10 neural-orbit" />

          {codeSignals.map((signal) => (
            <code
              className={`neural-code-signal absolute hidden max-w-[28rem] whitespace-nowrap border-l border-violet-light/40 bg-[#090711]/55 px-3 py-2 font-mono text-[clamp(.5rem,.7vw,.67rem)] tracking-[.04em] text-[#afa0d6] backdrop-blur-sm sm:block ${signal.position}`}
              key={signal.code}
              style={{
                animationDelay: reduceMotion ? "0s" : signal.delay,
                animationPlayState: reduceMotion ? "paused" : "running",
              }}
            >
              {signal.code}
            </code>
          ))}

          <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-5 text-[.5rem] font-bold uppercase tracking-[.14em] text-[#6f667b] max-sm:right-3 max-sm:left-3">
            <span>Interface</span>
            <span>API / Data</span>
            <span>Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
