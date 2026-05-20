import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";

const BASE = "https://clivitare.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/ronco-e-apneia`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/sono-infantil`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/atendimento/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...cityRoutes];
}
