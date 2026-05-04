"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";

const links = [
  { href: "/", label: "Główna" },
  { href: "/properties", label: "Oferty" },
  { href: "/services", label: "Usługi" },
  { href: "/about", label: "O nas" },
  { href: "/contact", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 30));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/85 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 font-display font-bold text-2xl">
          <span className="text-ink">Dom</span>
          <span className="text-gradient-primary">Expert</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+48715551234"
            className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-primary"
          >
            <Phone className="w-4 h-4" />
            +48 71 555 12 34
          </a>
          <MagneticButton strength={0.25}>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-primary text-white font-medium text-sm shadow-soft hover:shadow-glow transition-shadow"
            >
              Bezpłatna konsultacja
            </Link>
          </MagneticButton>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg hover:bg-ink/5"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-cream border-t border-ink/10 shadow-card"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-ink hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:+48715551234"
                className="flex items-center gap-2 text-base text-ink/70 mt-2"
              >
                <Phone className="w-4 h-4" />
                +48 71 555 12 34
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-full bg-gradient-primary text-white font-medium text-center shadow-soft"
              >
                Bezpłatna konsultacja
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
