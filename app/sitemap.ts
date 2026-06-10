import type { MetadataRoute } from "next";
import { contactNavItem, mainNav } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cookins.com.ar";
  const lastModified = new Date();
  const routes = [...mainNav, contactNavItem];

  return routes.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
