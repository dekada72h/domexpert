"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
              Kontakt
            </span>
            <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Porozmawiajmy o{" "}
              <span className="text-gradient-shimmer">Twojej nieruchomości</span>
            </h1>
            <p className="mt-5 text-ink/65 text-lg max-w-2xl">
              Bezpłatna 30-minutowa konsultacja. Bez zobowiązań. Pomożemy Ci znaleźć perfekcyjną nieruchomość lub szybko sprzedać Twoją.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactCard
              icon={<MapPin className="w-5 h-5" />}
              title="Biuro"
              lines={["ul. Świdnicka 38", "50-068 Wrocław"]}
            />
            <ContactCard
              icon={<Phone className="w-5 h-5" />}
              title="Telefon"
              lines={["+48 71 555 12 34"]}
              href="tel:+48715551234"
            />
            <ContactCard
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              lines={["kontakt@domexpert.online"]}
              href="mailto:kontakt@domexpert.online"
            />
            <ContactCard
              icon={<Clock className="w-5 h-5" />}
              title="Godziny pracy"
              lines={["Pon-Pt: 9:00 - 19:00", "Sob: 10:00 - 14:00", "Niedziela: zamknięte"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white border border-ink/5 p-8 shadow-soft"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-semibold text-2xl text-ink mb-2">
                  Dziękujemy!
                </h3>
                <p className="text-ink/65">
                  Odezwiemy się w ciągu 24 godzin (zwykle &lt; 2h w godzinach pracy).
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h2 className="font-display font-semibold text-2xl text-ink mb-6">
                  Napisz do nas
                </h2>

                <Field label="Imię i nazwisko" required>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </Field>
                  <Field label="Telefon">
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </Field>
                </div>

                <Field label="W czym możemy pomóc?">
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option>Chcę kupić nieruchomość</option>
                    <option>Chcę sprzedać nieruchomość</option>
                    <option>Szukam najmu</option>
                    <option>Wynajmuję — szukam najemcy</option>
                    <option>Konsulting inwestycyjny</option>
                    <option>Pomoc w kredycie</option>
                    <option>Inne</option>
                  </select>
                </Field>

                <Field label="Wiadomość">
                  <textarea
                    rows={4}
                    placeholder="Napisz nam o swojej sytuacji..."
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </Field>

                <MagneticButton strength={0.2}>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-shadow"
                  >
                    Wyślij wiadomość
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </MagneticButton>

                <p className="text-xs text-ink/50 text-center">
                  Wysyłając akceptujesz politykę prywatności. Odpowiemy &lt; 24h.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon, title, lines, href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <>
      <span className="inline-flex w-12 h-12 rounded-xl bg-primary/10 text-primary items-center justify-center">
        {icon}
      </span>
      <div className="flex-1">
        <div className="font-display font-semibold text-lg text-ink">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-ink/65 text-sm">
            {l}
          </div>
        ))}
      </div>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-ink/5 shadow-soft hover:border-primary/20 transition-colors"
      >
        {inner}
      </a>
    );
  }
  return (
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-ink/5 shadow-soft">
      {inner}
    </div>
  );
}

function Field({
  label, required, children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink/80 mb-1.5">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
