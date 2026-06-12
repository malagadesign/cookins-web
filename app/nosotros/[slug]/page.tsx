import { notFound } from "next/navigation";
import { CulturaCookinsContent } from "@/components/nosotros/CulturaCookinsContent";
import { InfraestructuraContent } from "@/components/nosotros/InfraestructuraContent";
import { InstitucionalContent } from "@/components/nosotros/InstitucionalContent";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";
import { getNosotrosPage, nosotrosPages } from "@/lib/nosotros-pages";

type Props = { params: Promise<{ slug: string }> };

const contentBySlug = {
  institucional: InstitucionalContent,
  "cultura-cookins": CulturaCookinsContent,
  infraestructura: InfraestructuraContent,
} as const;

export function generateStaticParams() {
  return nosotrosPages.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getNosotrosPage(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/nosotros/${slug}`,
  });
}

export default async function NosotrosChildPage({ params }: Props) {
  const { slug } = await params;
  const page = getNosotrosPage(slug);
  const Content = contentBySlug[slug as keyof typeof contentBySlug];

  if (!page || !Content) notFound();

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.description}
        breadcrumb={{ parent: { href: "/nosotros", label: "Nosotros" }, current: page.title }}
      >
        <ButtonLink href="/contacto">Contacto</ButtonLink>
        <ButtonLink href="/nosotros" variant="secondary">
          Ver nosotros
        </ButtonLink>
      </PageHero>
      <Content />
    </>
  );
}
