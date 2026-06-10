import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentBlock } from "@/components/modules/ContentBlock";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Compañía",
  description:
    "Quiénes somos, trayectoria, propósito y cultura de Cookins. Compañía argentina de soluciones integrales de alimentación y soporte para operaciones exigentes.",
  path: "/compania",
});

export default function CompaniaPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Compañía"
        lead="Somos una compañía argentina especializada en soluciones integrales de alimentación y soporte para empresas, industrias y sitios remotos. Con más de cinco décadas de trayectoria, acompañamos operaciones complejas con servicios diseñados para aportar calidad, orden, confianza y bienestar en el día a día."
      >
        <ButtonLink href="/contacto">Contacto comercial</ButtonLink>
        <ButtonLink href="/soluciones" variant="secondary">
          Soluciones
        </ButtonLink>
      </PageHero>

      <Section>
        <ContentBlock id="quienes-somos" eyebrow="Identidad" title="Quiénes somos">
          <p>
            Cookins trabaja en la intersección entre alimentación institucional, servicios
            de soporte y la realidad operativa de organizaciones que producen de forma
            continua. Entendemos el servicio como una pieza del sistema productivo: cuando
            funciona bien, ordena el día a día, libera foco para el negocio y mejora la
            experiencia de las personas en el lugar de trabajo.
          </p>
          <p>
            Nuestra mirada es regional y nuestro arraigo es argentino. Eso implica
            resolver logística, variabilidad macroeconómica y contextos heterogéneos con
            criterio profesional, sin perder de vista estándares de calidad y seguridad.
          </p>
        </ContentBlock>

        <ContentBlock id="trayectoria" eyebrow="Historia" title="Trayectoria">
          <p>
            Con más de cincuenta años en el mercado, Cookins consolidó equipos, procesos
            y relaciones comerciales de largo plazo. Esa continuidad no es un dato
            publicitario: es capacidad acumulada en planificación, respuesta ante picos de
            demanda y aprendizaje en sectores con regulaciones y protocolos exigentes.
          </p>
          <p>
            La trayectoria se traduce en criterio para dimensionar inversiones,
            infraestructura y dotaciones, y en una cultura interna orientada a la
            ejecución responsable.
          </p>
        </ContentBlock>

        <ContentBlock
          id="forma-de-trabajo"
          eyebrow="Metodología"
          title="Nuestra forma de trabajar"
        >
          <p>
            Trabajamos con diagnóstico previo, interlocutores claros y plan de servicio
            escrito. Alinear expectativas con la operación del cliente —turnos, flujos,
            normativas y volumetrías— es el punto de partida para un contrato sostenible.
          </p>
          <p>
            Durante la ejecución, priorizamos comunicación operativa, indicadores acordados
            y reuniones de seguimiento con foco en mejora continua. El objetivo es reducir
            fricción y sostener el estándar en el tiempo, no solo en las semanas de puesta
            en marcha.
          </p>
        </ContentBlock>

        <ContentBlock
          id="proposito-mision-vision"
          eyebrow="Dirección"
          title="Propósito, misión y visión"
        >
          <p>
            <strong className="text-foreground">Propósito.</strong> Sostener la operación y
            el bienestar cotidiano de las personas en entornos exigentes, con servicios
            integrales serios y medibles.
          </p>
          <p>
            <strong className="text-foreground">Misión.</strong> Diseñar y gestionar
            soluciones de alimentación y soporte que integren planificación, logística,
            calidad y equipos comprometidos, garantizando continuidad y altos estándares.
          </p>
          <p>
            <strong className="text-foreground">Visión.</strong> Ser referente en
            Argentina en servicios integrales para operaciones complejas, reconocidos por
            confiabilidad operativa, cultura de calidad y relación comercial transparente.
          </p>
        </ContentBlock>

        <ContentBlock id="personas-cultura" eyebrow="Organización" title="Personas y cultura">
          <p>
            Detrás de cada servicio hay equipos de campo, supervisión, producción,
            abastecimiento y soporte administrativo. La cultura de Cookins apuesta al
            respeto por el trabajo, la seguridad y la mejora constante en pequeños
            incrementos: procesos más claros, capacitación recurrente y liderazgo cercano
            a la operación.
          </p>
          <p>
            Cuidamos las condiciones laborales y la formación porque están directamente
            ligadas a la calidad del servicio percibida por el cliente final.
          </p>
        </ContentBlock>

        <ContentBlock
          id="infraestructura"
          eyebrow="Capacidad"
          title="Infraestructura y capacidad operativa"
        >
          <p>
            Contamos con infraestructura y dotaciones acordes a la escala de los proyectos
            que abordamos: espacios de producción y distribución, cadena de frío cuando
            aplica, flotas y esquemas logísticos coordinados con proveedores auditados.
          </p>
          <p>
            La capacidad operativa no se declara: se demuestra en planes de contingencia,
            tiempos de respuesta y gobierno del servicio con roles y responsabilidades
            explícitas.
          </p>
        </ContentBlock>
      </Section>

      <Section tone="wash">
        <div className="flex flex-col justify-between gap-8 rounded-sm border border-border bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              {site.tagline}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              Si busca un interlocutor integral con foco en ejecución y continuidad,
              podemos avanzar en una conversación técnica y comercial acotada a su
              contexto.
            </p>
            <p className="mt-4 text-sm text-muted">
              Para profundizar criterios de gestión, puede recorrer{" "}
              <a className="underline-offset-4 hover:underline" href="/impacto">
                Impacto
              </a>{" "}
              e{" "}
              <a className="underline-offset-4 hover:underline" href="/insights">
                Insights
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contacto">Solicitar reunión</ButtonLink>
            <ButtonLink href="/insights" variant="secondary">
              Ver insights
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
