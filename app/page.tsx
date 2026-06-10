import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { defaultDescription, site } from "@/lib/site";

const baseUrl = "https://www.cookins.com.ar";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: `${site.valueProposition} ${defaultDescription}`,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: `${site.valueProposition} ${defaultDescription}`,
    url: baseUrl,
  },
  twitter: {
    title: site.name,
    description: `${site.valueProposition} ${defaultDescription}`,
  },
};

export default function Page() {
  return <HomePage />;
}
