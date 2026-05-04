"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({ children, className, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 220, damping: 18 });
  const y = useSpring(mvY, { stiffness: 220, damping: 18 });

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        mvX.set((e.clientX - cx) * strength);
        mvY.set((e.clientY - cy) * strength);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => { mvX.set(0); mvY.set(0); setHover(false); }}
      style={{ x: reduce ? 0 : x, y: reduce ? 0 : y }}
      className={className}
      data-hover={hover}
    >
      {children}
    </motion.div>
  );
}
