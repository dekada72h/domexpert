import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://domexpert.online"),
  title: {
    default: "Dom Expert — Premium nieruchomości we Wrocławiu",
    template: "%s | Dom Expert",
  },
  description:
    "Dom Expert — agencja nieruchomości premium we Wrocławiu. Sprzedaż i wynajem mieszkań, apartamentów, domów. Stare Miasto, Krzyki, Sępolno, Karłowice i więcej.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Dom Expert — Premium nieruchomości we Wrocławiu",
    description:
      "Sprzedaż i wynajem mieszkań, apartamentów, domów we Wrocławiu. Eksperci od ofert premium.",
    siteName: "Dom Expert",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
