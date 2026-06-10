import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.cookins.com.ar/sitemap.xml",
    host: "https://www.cookins.com.ar",
  };
}
