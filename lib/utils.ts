import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPLN(value: number): string {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł";
}

export function formatRent(value: number): string {
  return new Intl.NumberFormat("pl-PL").format(value) + " zł/mies.";
}
