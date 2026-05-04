import type { MetadataRoute } from "next";
import { PROPERTIES } from "@/data/properties";

export const dynamic = "force-static";

const BASE_URL = "https://domexpert.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,             lastModified: today, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/properties/`,  lastModified: today, changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE_URL}/services/`,    lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/`,       lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact/`,     lastModified: today, changeFrequency: "yearly",  priority: 0.5 },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = PROPERTIES.map((p) => ({
    url: `${BASE_URL}/properties/${p.slug}/`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
