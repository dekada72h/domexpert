"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type Props = {
  width?: number;
  height?: number;
  cr?: number;
  className?: string;
};

export function DotPattern({ width = 24, height = 24, cr = 1.2, className }: Props) {
  const id = useId();
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-gray-300/60",
        className,
      )}
    >
      <defs>
        <pattern id={id} x={0} y={0} width={width} height={height} patternUnits="userSpaceOnUse">
          <circle cx={width / 2} cy={height / 2} r={cr} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
