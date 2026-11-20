"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import { useRef, type ReactNode } from "react";

// A vertical rail that draws itself as the wrapped content scrolls past.
export function ScrollLine({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
      <motion.div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent"
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
      />
      {children}
    </div>
  );
}
