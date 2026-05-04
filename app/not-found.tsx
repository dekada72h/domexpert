import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="font-display font-bold text-[8rem] md:text-[12rem] leading-none text-gradient-shimmer">
          404
        </div>
        <h1 className="mt-2 font-display font-bold text-3xl md:text-4xl text-ink">
          Tej strony nie ma — albo już ją sprzedaliśmy
        </h1>
        <p className="mt-4 text-ink/65 text-lg">
          Adres, którego szukasz, nie istnieje. Może oferta została wycofana, albo wpisałeś coś źle.
          Sprawdź naszą listę aktualnych ofert lub wróć na stronę główną.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-white font-medium shadow-soft hover:shadow-glow transition-shadow"
          >
            <Home className="w-4 h-4" />
            Strona główna
          </Link>
          <Link
            href="/properties/"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-ink/10 text-ink font-medium hover:border-primary/40 transition-colors"
          >
            <Search className="w-4 h-4" />
            Aktualne oferty
          </Link>
        </div>
      </div>
    </section>
  );
}
