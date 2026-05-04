import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-bold text-2xl text-cream mb-4">
            <span>Dom</span>
            <span className="text-gradient-primary">Expert</span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium nieruchomości we Wrocławiu. Sprzedaż, wynajem, konsultacje.
            Eksperci od ofert ekskluzywnych w Stare Miasto, Krzyki, Sępolno,
            Karłowice i sąsiednich dzielnicach.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream mb-4">Nawigacja</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Główna</Link></li>
            <li><Link href="/properties" className="hover:text-primary-light transition-colors">Oferty</Link></li>
            <li><Link href="/services" className="hover:text-primary-light transition-colors">Usługi</Link></li>
            <li><Link href="/about" className="hover:text-primary-light transition-colors">O nas</Link></li>
            <li><Link href="/contact" className="hover:text-primary-light transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream mb-4">Usługi</h4>
          <ul className="space-y-2 text-sm">
            <li>Sprzedaż nieruchomości</li>
            <li>Wynajem długoterminowy</li>
            <li>Wynajem krótkoterminowy</li>
            <li>Wycena nieruchomości</li>
            <li>Konsulting inwestycyjny</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>ul. Świdnicka 38<br />50-068 Wrocław</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+48715551234" className="hover:text-primary-light">+48 71 555 12 34</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:kontakt@domexpert.online" className="hover:text-primary-light">kontakt@domexpert.online</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Dom Expert. Wszystkie prawa zastrzeżone.</span>
          <span className="flex items-center gap-3">
            <span>Polityka prywatności · Regulamin</span>
            <span className="text-cream/30">·</span>
            <span>
              Strona stworzona przez{" "}
              <a
                href="https://dekada72h.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light hover:text-secondary transition-colors font-medium"
              >
                Dekada72H
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
