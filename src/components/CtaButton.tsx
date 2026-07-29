"use client";

import Link from "next/link";
import type { PointerEvent } from "react";

type CtaButtonProps = {
  href: string;
  label: string;
  accent?: string;
  className?: string;
};

function updateGlow(event: PointerEvent<HTMLAnchorElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--glow-x",
    String(event.clientX - bounds.left) + "px",
  );
  event.currentTarget.style.setProperty(
    "--glow-y",
    String(event.clientY - bounds.top) + "px",
  );
}

export function CtaButton({
  href,
  label,
  accent,
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      className={[
        "group relative inline-block p-px text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-light",
        className,
      ].join(" ")}
      href={href}
      onPointerMove={updateGlow}
      style={{
        background:
          "radial-gradient(110px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(158, 119, 255, .9), rgba(93, 55, 181, .42) 34%, transparent 70%), rgba(255, 255, 255, .12)",
      }}
    >
     
      <span
        aria-hidden="true"
        className="absolute -right-[.28em] -bottom-[.42em] z-10 font-sans text-[clamp(1.05rem,1.5vw,1.35rem)] font-light leading-none"
      >
        +
      </span>
      <span
        className="relative isolate flex min-h-[2.85rem] items-center overflow-hidden px-[clamp(1.2rem,2vw,1.75rem)] py-2 font-sans text-[clamp(1.05rem,1.45vw,1.3rem)] font-bold leading-none tracking-[-.025em] transition-[background] duration-150"
        style={{
          background:
            "radial-gradient(170px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(103, 61, 205, .2), transparent 68%), #0c0c0d",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 font-sans text-[.66rem] font-light text-white"
        >
          <i className="absolute top-[18%] left-[12%] not-italic opacity-[.13]">+</i>
          <i className="absolute bottom-[16%] left-[38%] not-italic opacity-[.1]">+</i>
          <i className="absolute top-[22%] right-[28%] not-italic opacity-[.11]">+</i>
          <i className="absolute right-[9%] bottom-[20%] not-italic opacity-[.14]">+</i>

          <i className="absolute top-[54%] left-[20%] -translate-x-2 not-italic opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-[.21]">+</i>
          <i className="absolute top-[16%] left-[46%] -translate-x-2 not-italic opacity-0 transition-[opacity,transform] delay-75 duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-[.18]">+</i>
          <i className="absolute right-[31%] bottom-[14%] -translate-x-2 not-italic opacity-0 transition-[opacity,transform] delay-150 duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-[.19]">+</i>
          <i className="absolute top-[28%] right-[14%] -translate-x-2 not-italic opacity-0 transition-[opacity,transform] delay-200 duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-[.22]">+</i>
        </span>

        <span className="relative z-10">{label}</span>
        {accent ? (
          <em className="relative z-10 ml-[.24em] not-italic text-purple-300">
            {accent}
          </em>
        ) : null}
      </span>
    </Link>
  );
}
