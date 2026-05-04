"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function FeaturedProperties() {
  const featured = PROPERTIES.slice(0, 6);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Wybrane oferty
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink">
              Najnowsze nieruchomości
            </h2>
            <p className="mt-4 text-ink/65 text-lg">
              Ręcznie wybrane oferty premium w najbardziej pożądanych osiedlach Wrocławia.
            </p>
          </div>

          <MagneticButton strength={0.25}>
            <Link
              href="/properties"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-white font-medium hover:bg-ink-soft transition-colors whitespace-nowrap"
            >
              Wszystkie {PROPERTIES.length} ofert
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
