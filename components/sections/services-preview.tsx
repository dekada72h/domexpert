"use client";

import { motion } from "motion/react";
import { Home, Key, TrendingUp, FileSearch } from "lucide-react";

const SERVICES = [
  {
    Icon: Home,
    title: "Sprzedaż nieruchomości",
    desc: "Profesjonalne pośrednictwo przy sprzedaży mieszkań, domów i apartamentów. Wycena, marketing, negocjacje.",
  },
  {
    Icon: Key,
    title: "Wynajem długoterminowy",
    desc: "Wynajem mieszkań i apartamentów. Sprawdzeni najemcy, opieka nad nieruchomością, rozliczenia czynszu.",
  },
  {
    Icon: TrendingUp,
    title: "Konsulting inwestycyjny",
    desc: "ROI, lokalizacja, perspektywy osiedli. Pomożemy wybrać nieruchomość pod inwestycję długoterminową.",
  },
  {
    Icon: FileSearch,
    title: "Wycena i audyt",
    desc: "Wycena rzeczoznawcy, weryfikacja stanu prawnego, audyt techniczny. Pełne due diligence przed zakupem.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(4,120,87,0.18),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(180,83,9,0.12),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary-light">
            Nasze usługi
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-cream">
            Pełna opieka nad{" "}
            <span className="text-gradient-shimmer">Twoją nieruchomością</span>
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            Od wyszukania perfekcyjnej oferty, przez negocjacje, aż po finalizację transakcji.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-cream/[0.04] border border-cream/10 p-7 backdrop-blur-sm hover:border-primary-light/40 transition-colors overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500"
              />
              <span className="relative inline-flex w-12 h-12 rounded-xl bg-gradient-primary text-white items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="relative mt-5 font-display font-semibold text-xl text-cream">
                {title}
              </h3>
              <p className="relative mt-3 text-sm text-cream/65 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
