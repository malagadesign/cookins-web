import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacto comercial Cookins. Soluciones integrales de alimentación y servicios de soporte para empresas, industrias y sitios remotos en Argentina.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Comercial"
        title="Contacto"
        lead="Si necesita evaluar un esquema integral para su organización, complete el formulario o utilice los canales directos. Respondemos con foco en claridad y siguiente paso concreto."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <aside className="space-y-8 text-sm text-muted">
            <div>
              <h2 className="font-serif text-xl font-medium text-foreground">
                Datos de contacto
              </h2>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Correo
                  </dt>
                  <dd>
                    <a
                      className="focus-ring rounded-sm text-accent underline-offset-4 hover:underline"
                      href={`mailto:${site.contact.email}`}
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Teléfono
                  </dt>
                  <dd>
                    <a
                      className="focus-ring rounded-sm text-accent underline-offset-4 hover:underline"
                      href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Ubicación
                  </dt>
                  <dd>{site.contact.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-foreground uppercase">
                    Horario
                  </dt>
                  <dd>{site.contact.hours}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-sm border border-border bg-wash p-6">
              <h3 className="text-sm font-semibold text-foreground">CTA comercial</h3>
              <p className="mt-2 leading-relaxed">
                Indique volumetría aproximada, rubro y ubicaciones. Si el proyecto es
                sensible, puede limitarse a un alcance inicial; acordamos confidencialidad
                en la primera reunión.
              </p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
