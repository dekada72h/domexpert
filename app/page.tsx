import { Hero } from "@/components/sections/hero";
import { FeaturedProperties } from "@/components/sections/featured";
import { ServicesPreview } from "@/components/sections/services-preview";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <ServicesPreview />
      <CtaSection />
    </>
  );
}
