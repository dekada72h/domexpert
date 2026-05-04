"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  repeat?: number;
};

export function Marquee({ children, className, pauseOnHover = false, repeat = 4 }: Props) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:50s] [--gap:2.5rem] gap-[var(--gap)]",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)] motion-reduce:!animate-none",
            "animate-[marquee_var(--duration)_linear_infinite] flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
