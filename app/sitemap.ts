import type { MetadataRoute } from "next";
import { contactNavItem, mainNav } from "@/lib/navigation";
import { nosotrosPages } from "@/lib/nosotros-pages";
import { rsePages } from "@/lib/rse-pages";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cookins.com.ar";
  const lastModified = new Date();
  const routes = [
    ...mainNav,
    contactNavItem,
    ...nosotrosPages.map((p) => ({ href: `/nosotros/${p.id}`, label: p.title })),
    ...services.map((s) => ({ href: `/servicios/${s.id}`, label: s.title })),
    ...rsePages.map((p) => ({ href: `/rse/${p.id}`, label: p.title })),
  ];

  return routes.map((item) => {
    const isChild =
      item.href.startsWith("/nosotros/") ||
      item.href.startsWith("/servicios/") ||
      item.href.startsWith("/rse/");

    return {
      url: `${base}${item.href === "/" ? "" : item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : isChild ? 0.85 : 0.8,
    };
  });
}
