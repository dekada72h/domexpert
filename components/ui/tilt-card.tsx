"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  glareOpacity?: number;
};

export function TiltCard({
  children, className, intensity = 7, glare = true, glareOpacity = 0.18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);
  const sRX = useSpring(rotateX, { stiffness: 240, damping: 22 });
  const sRY = useSpring(rotateY, { stiffness: 240, damping: 22 });

  const gx = useTransform(x, [-0.5, 0.5], [0, 100]);
  const gy = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBg = useTransform([gx, gy], ([a, b]) =>
    `radial-gradient(circle at ${a}% ${b}%, rgba(255,255,255,${glareOpacity}), transparent 55%)`,
  );

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => { x.set(0); y.set(0); setHover(false); }}
      style={{
        rotateX: reduce ? 0 : sRX,
        rotateY: reduce ? 0 : sRY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={cn("relative", className)}
    >
      {children}
      {glare && !reduce && (
        <motion.div
          aria-hidden
          style={{ background: glareBg, opacity: hover ? 1 : 0, transition: "opacity 0.25s ease" }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none mix-blend-overlay"
        />
      )}
    </motion.div>
  );
}
