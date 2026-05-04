"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate, useReducedMotion } from "motion/react";

export function StatCounter({
  value, suffix = "", prefix = "", duration = 1.6, label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setDisplay(value); return; }
    const ctrl = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, reduce, value, mv, duration]);

  return (
    <div ref={ref}>
      <motion.div className="font-display font-bold text-4xl md:text-5xl text-gradient-primary tabular-nums">
        {prefix}{display}{suffix}
      </motion.div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ink/60 font-medium">
        {label}
      </div>
    </div>
  );
}
