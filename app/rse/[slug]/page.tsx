import { notFound } from "next/navigation";
import { FormacionDesarrolloContent } from "@/components/rse/FormacionDesarrolloContent";
import { SustentabilidadContent } from "@/components/rse/SustentabilidadContent";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";
import { getRsePage, rsePages } from "@/lib/rse-pages";
import { nosotrosHref } from "@/lib/nosotros-pages";

type Props = { params: Promise<{ slug: string }> };

const contentBySlug = {
  sustentabilidad: SustentabilidadContent,
  "formacion-desarrollo": FormacionDesarrolloContent,
} as const;

export function generateStaticParams() {
  return rsePages.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getRsePage(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/rse/${slug}`,
  });
}

export default async function RseChildPage({ params }: Props) {
  const { slug } = await params;
  const page = getRsePage(slug);
  const Content = contentBySlug[slug as keyof typeof contentBySlug];

  if (!page || !Content) notFound();

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.description}
        breadcrumb={{ parent: { href: "/rse", label: "RSE" }, current: page.title }}
      >
        <ButtonLink href="/contacto">Hablar con comercial</ButtonLink>
        <ButtonLink href={nosotrosHref("cultura-cookins")} variant="secondary">
          Cultura Cookins
        </ButtonLink>
      </PageHero>
      <Content />
    </>
  );
}
