"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, Key, TrendingUp, FileSearch, Calculator, Users, ArrowRight, Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const SERVICES = [
  {
    Icon: Home,
    title: "Sprzedaż nieruchomości",
    desc: "Profesjonalne pośrednictwo z A do Z. Przygotowanie nieruchomości, profesjonalne zdjęcia, marketing, oględziny, negocjacje, akt notarialny.",
    bullets: [
      "Bezpłatna wycena rynkowa",
      "Profesjonalna sesja zdjęciowa",
      "Marketing online + offline",
      "Selekcja kupujących",
      "Asysta przy akcie notarialnym",
    ],
    price: "Prowizja 2.5% + VAT",
  },
  {
    Icon: Key,
    title: "Wynajem długoterminowy",
    desc: "Znajdziemy najemcę. Sprawdzamy referencje, podpisujemy umowy, monitorujemy płatności i opiekujemy się nieruchomością przez cały okres najmu.",
    bullets: [
      "Weryfikacja BIK + kredytowa",
      "Umowa najmu + protokół zdawczy",
      "Inkaso czynszu + opłat",
      "24/7 obsługa awarii",
      "Roczny przegląd techniczny",
    ],
    price: "Pierwszy czynsz + 5% miesięcznie",
  },
  {
    Icon: TrendingUp,
    title: "Konsulting inwestycyjny",
    desc: "Doradztwo dla inwestorów. Analiza osiedli, ROI, perspektywy wzrostu cen. Pomożemy zbudować portfolio nieruchomości w Wrocławiu.",
    bullets: [
      "Analiza ROI + Yield",
      "Mapowanie rosnących osiedli",
      "Strategia: flipping vs buy-and-hold",
      "Optymalizacja podatkowa",
      "Współpraca z deweloperami",
    ],
    price: "Od 2 500 zł / projekt",
  },
  {
    Icon: FileSearch,
    title: "Wycena i audyt",
    desc: "Dokładna wycena rynkowa nieruchomości oparta o najnowsze transakcje. Audyt prawny + techniczny przed zakupem.",
    bullets: [
      "Wycena rzeczoznawcy uprawnionego",
      "Sprawdzenie księgi wieczystej",
      "Audyt techniczny budynku",
      "Sprawdzenie stanu prawnego",
      "Raport pisemny dla banku",
    ],
    price: "Od 800 zł",
  },
  {
    Icon: Calculator,
    title: "Pomoc kredytowa",
    desc: "Współpracujemy z 12 bankami. Znajdziemy najlepszy kredyt hipoteczny dla Twojej sytuacji. Bezpłatnie, bez prowizji od Ciebie.",
    bullets: [
      "Porównanie ofert 12 banków",
      "Optymalizacja zdolności",
      "Asysta w wniosku",
      "Negocjacja warunków",
      "Bezpłatnie dla klienta",
    ],
    price: "BEZPŁATNIE (prowizja od banku)",
  },
  {
    Icon: Users,
    title: "Home staging",
    desc: "Przygotujemy Twoją nieruchomość do sprzedaży. Aranżacja wnętrza, profesjonalna sesja, drobne naprawy. Sprzedasz szybciej i drożej.",
    bullets: [
      "Konsultacja stylistki",
      "Wynajem mebli + dodatków",
      "Profesjonalna sesja",
      "Drobne naprawy + malowanie",
      "ROI 5-15% wyższa cena",
    ],
    price: "Od 3 500 zł",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-44">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Usługi
            </span>
            <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Pełna obsługa{" "}
              <span className="text-gradient-shimmer">Twojej nieruchomości</span>
            </h1>
            <p className="mt-5 text-ink/65 text-lg max-w-2xl">
              Od pierwszej rozmowy do podpisu aktu — prowadzimy Cię przez cały proces. Oto wszystko czym możemy się zająć.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ Icon, title, desc, bullets, price }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-white border border-ink/5 p-7 hover:border-primary/30 hover:shadow-card transition-all overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500"
              />
              <span className="relative inline-flex w-12 h-12 rounded-xl bg-gradient-primary text-white items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                <Icon className="w-6 h-6" />
              </span>

              <h3 className="relative mt-5 font-display font-semibold text-xl text-ink">{title}</h3>
              <p className="relative mt-3 text-sm text-ink/65 leading-relaxed">{desc}</p>

              <ul className="relative mt-5 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 pt-5 border-t border-ink/10 text-sm font-semibold text-primary">
                {price}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,120,87,0.18),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Nie wiesz od czego zacząć?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream/70">
            Bezpłatna 30-minutowa konsultacja — porozmawiamy o Twojej sytuacji i wybierzemy razem najlepszy kierunek.
          </p>
          <div className="mt-8 inline-block">
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-shadow"
              >
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
