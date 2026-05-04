"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { StatCounter } from "@/components/stat-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { PROPERTIES, DISTRICTS } from "@/data/properties";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <DotPattern
        className="text-primary/10 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]"
        width={32}
        height={32}
        cr={1.4}
      />
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-32 w-[42rem] h-[42rem] rounded-full bg-primary/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -left-32 w-[36rem] h-[36rem] rounded-full bg-secondary/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 left-1/3 w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            ✨ Premium nieruchomości we Wrocławiu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-ink leading-[1.05]"
          >
            Znajdź swój{" "}
            <span className="text-gradient-shimmer">idealny</span>
            <br />
            dom we Wrocławiu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-xl text-lg text-ink/70 leading-relaxed"
          >
            Sprzedaż i wynajem mieszkań, apartamentów i domów we Wrocławiu —
            Stare Miasto, Krzyki, Sępolno, Karłowice. Eksperci, którzy znają
            każde osiedle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton strength={0.3}>
              <Link
                href="/properties"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-shadow"
              >
                <Search className="w-5 h-5" />
                Przeglądaj {PROPERTIES.length} ofert
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ink/15 bg-white text-ink font-medium hover:border-primary/30 transition-colors"
            >
              Bezpłatna konsultacja
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            <StatCounter value={PROPERTIES.length} label="Aktualnych ofert" />
            <StatCounter value={DISTRICTS.length} label="Osiedli Wrocławia" />
            <StatCounter value={98} suffix="%" label="Zadowolonych klientów" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/15" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="absolute -left-3 lg:-left-10 top-12 bg-white rounded-2xl shadow-card p-4 pr-6 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-primary text-white inline-flex items-center justify-center text-lg">
              ✨
            </span>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-ink/60">
                Średni czas
              </div>
              <div className="font-display font-bold text-lg text-ink">21 dni</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            className="absolute -right-3 lg:-right-8 bottom-12 bg-white rounded-2xl shadow-card p-4 pr-6 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-xl bg-secondary text-white inline-flex items-center justify-center text-lg">
              🏆
            </span>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-ink/60">
                Sprzedanych w 2025
              </div>
              <div className="font-display font-bold text-lg text-ink">147 ofert</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
