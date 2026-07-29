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
        "group relative inline-block text-white transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(91,51,190,.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-light",
        className,
      ].join(" ")}
      href={href}
      onPointerMove={updateGlow}
    >
      <span
        aria-hidden="true"
        className="absolute -top-[.42em] -left-[.28em] z-10 font-sans text-[clamp(1.05rem,1.5vw,1.35rem)] font-light leading-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute -right-[.28em] -bottom-[.42em] z-10 font-sans text-[clamp(1.05rem,1.5vw,1.35rem)] font-light leading-none"
      >
        +
      </span>
      <span
        className="flex min-h-[2.85rem] items-center px-[clamp(1.2rem,2vw,1.75rem)] py-2 font-cta text-[clamp(1.05rem,1.45vw,1.3rem)] font-normal leading-none tracking-[-.025em] transition-[background] duration-150"
        style={{
          background:
            "radial-gradient(170px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(103, 61, 205, .2), transparent 68%), #0c0c0d",
        }}
      >
        {label}
        {accent ? <em className="ml-[.24em] not-italic text-[#9a4267]">{accent}</em> : null}
      </span>
    </Link>
  );
}
