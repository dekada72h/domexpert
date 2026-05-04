"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Bed, Bath, Maximize2, Heart, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";
import { TiltCard } from "@/components/ui/tilt-card";
import { formatPLN, formatRent } from "@/lib/utils";

const TYPE_LABEL: Record<string, string> = {
  mieszkanie: "Mieszkanie",
  dom: "Dom",
  apartament: "Apartament",
  loft: "Loft",
  kamienica: "Kamienica",
  kawalerka: "Kawalerka",
  penthouse: "Penthouse",
};

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const isRent = property.listing === "rent";
  const priceText = isRent ? formatRent(property.price) : formatPLN(property.price);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/properties/${property.slug}`} className="block group">
        <TiltCard
          intensity={5}
          glareOpacity={0.15}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink-soft shadow-card group-hover:shadow-glow transition-shadow duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${property.images[0]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md ${
                isRent ? "bg-secondary-light/90 text-ink" : "bg-primary-light/90 text-ink"
              }`}
            >
              {isRent ? "Na wynajem" : "Na sprzedaż"}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/15">
              {TYPE_LABEL[property.type] ?? property.type}
            </span>
          </div>

          <button
            aria-label="Zapisz do ulubionych"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>

          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="font-display font-semibold text-xl text-white leading-tight mb-2 line-clamp-2">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 text-white/70 text-sm mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.district}, Wrocław</span>
            </div>
            <div className="font-display font-bold text-2xl text-white mb-3">
              {priceText}
            </div>
            <div className="flex items-center gap-4 text-white/85 text-xs font-medium">
              {property.beds > 0 && (
                <span className="flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5" />
                  {property.beds} {property.beds === 1 ? "pokój" : property.beds < 5 ? "pokoje" : "pokoi"}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" />
                {property.baths} {property.baths === 1 ? "łaz." : "łaz."}
              </span>
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5" />
                {property.area_m2} m²
              </span>
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
