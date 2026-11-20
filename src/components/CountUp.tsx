"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import type { Metric } from "@/content/work";

const format = (n: number, decimals = 0) =>
  n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// Server HTML shows the final value; the count-up only runs in the browser.
export function CountUp({ value, prefix = "", suffix = "", decimals = 0 }: Omit<Metric, "label">) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = format(v, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span className="tabular-nums">
      {prefix}
      <span ref={ref}>{format(value, decimals)}</span>
      {suffix}
    </span>
  );
}
