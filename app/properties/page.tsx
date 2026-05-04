"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { PropertyFilters, EMPTY_FILTERS, type Filters } from "@/components/property-filters";

export default function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return PROPERTIES.filter((p) => {
      if (q) {
        const hay =
          (p.title + " " + p.district + " " + p.description + " " + p.type + " " + p.features.join(" "))
            .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.listing !== "all" && p.listing !== filters.listing) return false;
      if (filters.type !== "all" && p.type !== filters.type) return false;
      if (filters.district !== "all" && p.district !== filters.district) return false;
      if (filters.beds !== null && p.beds < filters.beds) return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Oferty
            </span>
            <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              <span className="text-gradient-shimmer">{PROPERTIES.length}</span> nieruchomości we Wrocławiu
            </h1>
            <p className="mt-4 max-w-2xl text-ink/65 text-lg">
              Mieszkania, apartamenty, domy, lofty — na sprzedaż i wynajem. Filtruj po dzielnicy, typie i liczbie pokoi.
            </p>
          </motion.div>
        </div>
      </section>

      <PropertyFilters
        filters={filters}
        onChange={setFilters}
        totalResults={filtered.length}
      />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display font-semibold text-2xl text-ink mb-2">
                Brak ofert dla podanych kryteriów
              </h3>
              <p className="text-ink/60">
                Spróbuj usunąć część filtrów lub szukaj szerzej.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
