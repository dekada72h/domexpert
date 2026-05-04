"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DotPattern } from "@/components/ui/dot-pattern";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-primary text-white p-10 lg:p-16 overflow-hidden shadow-glow"
        >
          <DotPattern
            className="text-white/15 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)]"
            width={28}
            cr={1.3}
          />
          <motion.div
            aria-hidden
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Gotowy znaleźć swój nowy dom?
            </h2>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Bezpłatna konsultacja. Powiedz nam czego szukasz, a my znajdziemy idealne dopasowanie wśród naszych ofert lub szybko sprzedamy Twoją nieruchomość.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton strength={0.3}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-ink font-medium hover:bg-ink hover:text-white transition-colors"
                >
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href="tel:+48715551234"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +48 71 555 12 34
                </a>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
