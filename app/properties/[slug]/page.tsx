import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bed, Bath, Maximize2, MapPin, Calendar, Phone, Mail, ArrowLeft, Sparkles } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import { formatPLN, formatRent } from "@/lib/utils";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = PROPERTIES.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description.slice(0, 160),
    openGraph: {
      title: p.title,
      description: p.description.slice(0, 160),
      images: [p.images[0]],
      locale: "pl_PL",
      type: "article",
    },
  };
}

const TYPE_LABEL: Record<string, string> = {
  mieszkanie: "Mieszkanie",
  dom: "Dom",
  apartament: "Apartament",
  loft: "Loft",
  kamienica: "Kamienica",
  kawalerka: "Kawalerka",
  penthouse: "Penthouse",
};

export default async function PropertyDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property) notFound();

  const isRent = property.listing === "rent";
  const priceText = isRent ? formatRent(property.price) : formatPLN(property.price);

  const schema = {
    "@context": "https://schema.org",
    "@type": isRent ? "RentAction" : "Product",
    name: property.title,
    description: property.description,
    image: property.images,
    ...(isRent
      ? {
          object: {
            "@type": "Apartment",
            name: property.title,
            numberOfBedrooms: property.beds,
            numberOfBathroomsTotal: property.baths,
            floorSize: { "@type": "QuantitativeValue", unitCode: "MTK", value: property.area_m2 },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Wrocław",
              addressRegion: property.district,
              addressCountry: "PL",
            },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: property.price,
            priceCurrency: "PLN",
            unitCode: "MON",
          },
        }
      : {
          offers: {
            "@type": "Offer",
            price: property.price,
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
            seller: { "@type": "RealEstateAgent", name: "Dom Expert", url: "https://domexpert.online" },
          },
          additionalProperty: [
            { "@type": "PropertyValue", name: "beds",       value: property.beds },
            { "@type": "PropertyValue", name: "baths",      value: property.baths },
            { "@type": "PropertyValue", name: "area_m2",    value: property.area_m2 },
            { "@type": "PropertyValue", name: "year_built", value: property.year_built },
            { "@type": "PropertyValue", name: "district",   value: property.district },
          ],
        }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="pt-28 pb-6 lg:pt-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do listy ofert
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-3 rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${property.images[0]})` }}
            />
            {property.images[1] && (
              <div
                className="bg-cover bg-center hidden lg:block"
                style={{ backgroundImage: `url(${property.images[1]})` }}
              />
            )}
            {property.images[2] && (
              <div
                className="bg-cover bg-center hidden lg:block"
                style={{ backgroundImage: `url(${property.images[2]})` }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  isRent ? "bg-secondary-light/20 text-secondary-dark" : "bg-primary-light/20 text-primary-dark"
                }`}
              >
                {isRent ? "Na wynajem" : "Na sprzedaż"}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-ink/5 text-ink/70">
                {TYPE_LABEL[property.type]}
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 mt-3 text-ink/70">
              <MapPin className="w-4 h-4" />
              <span>{property.district}, Wrocław</span>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-ink/5 shadow-soft">
              {property.beds > 0 && (
                <Stat icon={<Bed className="w-5 h-5" />} value={String(property.beds)} label="Pokoje" />
              )}
              <Stat icon={<Bath className="w-5 h-5" />} value={String(property.baths)} label="Łazienki" />
              <Stat icon={<Maximize2 className="w-5 h-5" />} value={`${property.area_m2} m²`} label="Powierzchnia" />
              <Stat icon={<Calendar className="w-5 h-5" />} value={String(property.year_built)} label="Rok budowy" />
            </div>

            <div className="mt-12">
              <h2 className="font-display font-semibold text-2xl text-ink mb-4">Opis</h2>
              <p className="text-ink/75 leading-[1.8] text-[1.05rem]">{property.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display font-semibold text-2xl text-ink mb-4">Cechy nieruchomości</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {property.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-ink/5"
                  >
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-ink/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 self-start">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white p-7 shadow-glow">
              <div className="text-xs uppercase tracking-wider font-medium text-white/70">
                {isRent ? "Cena wynajmu" : "Cena sprzedaży"}
              </div>
              <div className="font-display font-bold text-3xl mt-2">{priceText}</div>
              {!isRent && (
                <div className="mt-1 text-white/70 text-sm">
                  ~ {Math.round(property.price / property.area_m2).toLocaleString("pl-PL")} zł/m²
                </div>
              )}

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+48715551234"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-white text-primary-dark font-medium hover:bg-cream transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +48 71 555 12 34
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-white/15 backdrop-blur-sm text-white font-medium hover:bg-white/25 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Umów oględziny
                </Link>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-white border border-ink/5">
              <h3 className="font-display font-semibold text-lg text-ink mb-3">Twój agent</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center font-display font-bold text-lg">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-ink">Anna Kowalska</div>
                  <div className="text-sm text-ink/60">Senior Property Advisor</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-primary">{icon}</span>
      <span className="font-display font-bold text-xl text-ink">{value}</span>
      <span className="text-xs text-ink/55">{label}</span>
    </div>
  );
}
