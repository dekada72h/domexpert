"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatCounter } from "@/components/stat-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";

const TEAM = [
  {
    name: "Anna Kowalska",
    role: "Senior Property Advisor",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Marek Nowak",
    role: "Inwestycje + flipping",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Joanna Wiśniewska",
    role: "Wynajem długoterminowy",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Tomasz Jankowski",
    role: "Konsultant kredytowy",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
  },
];

const VALUES = [
  { title: "Transparentność", desc: "Zero ukrytych prowizji. Wszystkie koszty na stole od pierwszej rozmowy." },
  { title: "Lokalna ekspertyza", desc: "Znamy Wrocław na pamięć. Wiemy które dzielnice rosną, które stoją." },
  { title: "Pełna opieka", desc: "Od pierwszej oględzin do podpisu aktu — wszystko prowadzimy za Ciebie." },
  { title: "Premium standard", desc: "Tylko sprawdzone oferty. Zero spamu, zero straty czasu na fake listings." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              O nas
            </span>
            <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Wrocławska agencja, która{" "}
              <span className="text-gradient-shimmer">traktuje klienta jak rodzinę</span>
            </h1>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">
              Dom Expert powstał w 2015 roku z prostej obserwacji: pośrednicy traktują klientów jak numery na liście. My postanowiliśmy robić to inaczej. Trzymamy mniej ofert, ale każdej poświęcamy 100% uwagi. Lubimy spokojne rozmowy przy kawie zamiast presji szybkiej finalizacji.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl"
          >
            <StatCounter value={9} suffix="+" label="Lat doświadczenia" />
            <StatCounter value={847} label="Sprzedanych w 2015-2025" />
            <StatCounter value={32} label="Aktywnych ofert" />
            <StatCounter value={98} suffix="%" label="Zadowolonych klientów" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-ink"
          >
            Nasze wartości
          </motion.h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-ink/5 p-7 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-display font-semibold text-xl text-ink mb-2">{v.title}</h3>
                <p className="text-ink/70 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Zespół
            </h2>
            <p className="mt-4 text-ink/65 text-lg">
              Cztery osoby. Każda specjalizuje się w czymś innym, ale wszyscy znamy się jak braterstwo.
            </p>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="text-center group"
              >
                <div className="aspect-square rounded-2xl mb-4 shadow-soft overflow-hidden relative bg-gradient-primary">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${m.photo})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink">{m.name}</h3>
                <p className="text-sm text-ink/60">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-cream text-center">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Chcesz nas poznać osobiście?
          </h2>
          <p className="mt-4 text-cream/70">
            Wpadnij na kawę do naszego biura przy ul. Świdnickiej 38.
          </p>
          <div className="mt-8 inline-block">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-shadow"
              >
                Skontaktuj się
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
