import type { Metadata } from "next";
import { defaultDescription, site } from "./site";

const baseUrl = "https://www.cookins.com.ar";

export const rootMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    url: baseUrl,
    title: site.name,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
};

export function pageMetadata({
  title,
  description = defaultDescription,
  path,
}: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const url = `${baseUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url,
    },
    twitter: {
      title: `${title} · ${site.name}`,
      description,
    },
  };
}
