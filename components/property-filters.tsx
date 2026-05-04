"use client";

import { motion } from "motion/react";
import { Search, X } from "lucide-react";
import { DISTRICTS, PROPERTY_TYPES, type Listing, type PropertyType } from "@/data/properties";

export type Filters = {
  q: string;
  listing: "all" | Listing;
  type: "all" | PropertyType;
  district: "all" | string;
  minPrice: number | null;
  maxPrice: number | null;
  beds: number | null;
};

export const EMPTY_FILTERS: Filters = {
  q: "",
  listing: "all",
  type: "all",
  district: "all",
  minPrice: null,
  maxPrice: null,
  beds: null,
};

const TYPE_LABEL: Record<PropertyType, string> = {
  mieszkanie: "Mieszkanie",
  dom: "Dom",
  apartament: "Apartament",
  loft: "Loft",
  kamienica: "Kamienica",
  kawalerka: "Kawalerka",
  penthouse: "Penthouse",
};

export function PropertyFilters({
  filters, onChange, totalResults,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  totalResults: number;
}) {
  const hasActiveFilters =
    filters.q !== "" ||
    filters.listing !== "all" ||
    filters.type !== "all" ||
    filters.district !== "all" ||
    filters.minPrice !== null ||
    filters.maxPrice !== null ||
    filters.beds !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-20 z-30 bg-cream/85 backdrop-blur-lg border-y border-ink/10 py-5"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto_auto_auto] items-stretch">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
            <input
              type="search"
              value={filters.q}
              onChange={(e) => onChange({ ...filters, q: e.target.value })}
              placeholder="Szukaj po dzielnicy, tytule, opisie..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-ink/10 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </label>

          <Select
            value={filters.listing}
            onChange={(v) => onChange({ ...filters, listing: v as Filters["listing"] })}
            options={[
              { value: "all", label: "Wszystko" },
              { value: "sale", label: "Na sprzedaż" },
              { value: "rent", label: "Na wynajem" },
            ]}
          />

          <Select
            value={filters.type}
            onChange={(v) => onChange({ ...filters, type: v as Filters["type"] })}
            options={[
              { value: "all", label: "Każdy typ" },
              ...PROPERTY_TYPES.map((t) => ({ value: t, label: TYPE_LABEL[t] })),
            ]}
          />

          <Select
            value={filters.district}
            onChange={(v) => onChange({ ...filters, district: v })}
            options={[
              { value: "all", label: "Każda dzielnica" },
              ...DISTRICTS.map((d) => ({ value: d, label: d })),
            ]}
          />

          <Select
            value={filters.beds === null ? "any" : String(filters.beds)}
            onChange={(v) => onChange({ ...filters, beds: v === "any" ? null : Number(v) })}
            options={[
              { value: "any", label: "Pokoje (dow.)" },
              { value: "0", label: "0 (kawalerka)" },
              { value: "1", label: "1+" },
              { value: "2", label: "2+" },
              { value: "3", label: "3+" },
              { value: "4", label: "4+" },
            ]}
          />
        </div>

        <div className="flex items-center justify-between gap-4 mt-3 text-sm">
          <motion.span layout className="text-ink/60">
            Znaleziono <strong className="text-ink tabular-nums">{totalResults}</strong> nieruchomości
          </motion.span>
          {hasActiveFilters && (
            <button
              onClick={() => onChange(EMPTY_FILTERS)}
              className="flex items-center gap-1.5 text-ink/60 hover:text-primary transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Wyczyść filtry
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Select({
  value, onChange, options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 rounded-full bg-white border border-ink/10 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer min-w-[140px]"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
