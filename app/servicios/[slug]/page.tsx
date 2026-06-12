import { notFound } from "next/navigation";
import { AlimentacionInstitucionalContent } from "@/components/servicios/AlimentacionInstitucionalContent";
import { ServiceDetail } from "@/components/servicios/ServiceDetail";
import { SitiosRemotosContent } from "@/components/servicios/SitiosRemotosContent";
import { pageMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const editorialContent = {
  "alimentacion-institucional": AlimentacionInstitucionalContent,
  "sitios-remotos-infraestructura": SitiosRemotosContent,
} as const;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/servicios/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Editorial = editorialContent[slug as keyof typeof editorialContent];
  if (Editorial) return <Editorial />;

  return <ServiceDetail service={service} />;
}
