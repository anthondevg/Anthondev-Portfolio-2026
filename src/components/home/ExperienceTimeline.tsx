"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ExperienceTimeline({ children }: { children: React.ReactNode }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 68%", "end 42%"],
  });
  const progress = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 180,
    mass: 0.25,
  });
  const pointY = useTransform(progress, [0, 1], [0, travelDistance]);
  const trailScale = useTransform(progress, [0, 1], [0.015, 1]);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setTravelDistance(Math.max(0, entry.contentRect.height - 24));
    });

    resizeObserver.observe(timeline);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="relative" ref={timelineRef}>
      <div
        className="pointer-events-none absolute top-3 bottom-3 left-3 w-px bg-paper/15"
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-full origin-top bg-violet-light shadow-[0_0_12px_rgba(168,140,255,.95)]"
          style={{ scaleY: prefersReducedMotion ? 1 : trailScale }}
        />
        <motion.div
          className="absolute -left-[11px] top-[-12px] grid h-6 w-6 place-items-center"
          style={{ y: prefersReducedMotion ? travelDistance : pointY }}
        >
          <span className="absolute h-8 w-8 rounded-full bg-violet-light/20 blur-md" />
          <span className="absolute h-5 w-5 rounded-full border border-violet-light/60 bg-violet-light/15" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-paper shadow-[0_0_12px_rgba(240,236,245,.95)]" />
        </motion.div>
      </div>
      {children}
    </div>
  );
}
