import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { ContentBlock } from "@/components/modules/ContentBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";
import { serviceHref } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Calidad",
  description:
    "Calidad y seguridad alimentaria, procesos, logística, protocolos, capacitación y mejora continua. Cookins, operación B2B en Argentina.",
  path: "/calidad",
});

export default function CalidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Operación"
        title="Calidad"
        lead="La confiabilidad del servicio se apoya en estándares, trazabilidad y disciplina de ejecución. Esta sección concentra cómo gobernamos la operación día a día."
      >
        <ButtonLink href="/contacto">Hablar con comercial</ButtonLink>
        <ButtonLink href="/servicios" variant="secondary">
          Ver servicios
        </ButtonLink>
      </PageHero>

      <Section>
        <ContentBlock id="calidad-seguridad" title="Calidad y seguridad alimentaria">
          <p>
            <strong className="text-foreground">Qué implica.</strong> Definición de
            especificaciones, homologación de proveedores, control de cadena de frío cuando
            aplica, registros auditables y verificación de puntos críticos de inocuidad.
          </p>
          <p>
            <strong className="text-foreground">Por qué importa.</strong> Reduce riesgos
            sanitarios y reputacionales, y sostiene la confianza del cliente en contextos de
            alta exposición operativa.
          </p>
          <p>
            <strong className="text-foreground">Relación con continuidad.</strong> Un sistema
            de seguridad alimentaria robusto evita interrupciones en{" "}
            <a
              className="underline-offset-4 hover:underline"
              href={serviceHref("alimentacion-institucional")}
            >
              alimentación institucional
            </a>{" "}
            y en operaciones industriales y remotas.
          </p>
        </ContentBlock>

        <ContentBlock id="procesos" title="Procesos y estándares">
          <p>
            <strong className="text-foreground">Qué implica.</strong> Procedimientos
            documentados, checklists por turno, supervisión de campo, indicadores acordados y
            ciclos de revisión con cliente.
          </p>
          <p>
            <strong className="text-foreground">Por qué importa.</strong> Estandarizar reduce
            variabilidad entre sedes y turnos, mejora consistencia y facilita auditorías
            internas y externas.
          </p>
          <p>
            <strong className="text-foreground">Relación con servicios.</strong> Es la base de{" "}
            <a className="underline-offset-4 hover:underline" href={serviceHref("facility-services")}>
              Facility Services
            </a>{" "}
            y de la operación en grandes dotaciones.
          </p>
        </ContentBlock>

        <ContentBlock id="logistica" title="Logística e infraestructura">
          <p>
            <strong className="text-foreground">Qué implica.</strong> Planificación de rutas,
            almacenamiento, abastecimiento, equipamiento y dimensionamiento de
            infraestructura según criticidad y SLA.
          </p>
          <p>
            <strong className="text-foreground">Por qué importa.</strong> La logística es el
            puente entre diseño y ejecución: si falla, se afecta la continuidad operativa y
            la percepción de calidad.
          </p>
          <p>
            <strong className="text-foreground">Relación con riesgo y continuidad.</strong> En{" "}
            <a
              className="underline-offset-4 hover:underline"
              href={serviceHref("sitios-remotos-infraestructura")}
            >
              sitios remotos e infraestructura
            </a>
            , una planificación robusta reduce quiebres de suministro y exposición a
            contingencias.
          </p>
        </ContentBlock>

        <ContentBlock id="protocolos" title="Protocolos y operación">
          <p>
            <strong className="text-foreground">Qué implica.</strong> Protocolos de arranque,
            operación normal y contingencias, con roles de comando y canales de escalamiento
            explícitos.
          </p>
          <p>
            <strong className="text-foreground">Por qué importa.</strong> Permite responder
            rápido ante incidentes operativos sin perder coordinación entre cliente, equipos
            en sitio y soporte central.
          </p>
          <p>
            <strong className="text-foreground">Relación con traslados.</strong> Es crítico en{" "}
            <a className="underline-offset-4 hover:underline" href={serviceHref("traslado-personal")}>
              traslado de personal
            </a>{" "}
            y en faenas con tolerancia mínima a desvíos.
          </p>
        </ContentBlock>

        <ContentBlock id="capacitacion" title="Capacitación y mejora continua">
          <p>
            <strong className="text-foreground">Qué implica.</strong> Inducción por rol,
            formación continua, observación en campo y análisis de incidentes con enfoque en
            mejora sistémica.
          </p>
          <p>
            <strong className="text-foreground">Por qué importa.</strong> Equipos mejor
            entrenados reducen desvíos, sostienen estándares y mejoran la experiencia diaria
            del usuario final.
          </p>
          <p>
            <strong className="text-foreground">Relación con RSE.</strong> Se conecta con{" "}
            <a className="underline-offset-4 hover:underline" href="/rse/formacion-desarrollo">
              formación y desarrollo
            </a>{" "}
            como eje de personas y mejora sostenida.
          </p>
        </ContentBlock>
      </Section>

      <Section tone="wash">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Preguntas frecuentes de áreas de operación y compras
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-sm border border-border bg-surface p-5">
            <h3 className="font-medium text-foreground">
              ¿Qué indicadores conviene acordar al inicio del contrato?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Recomendamos combinar KPIs de cumplimiento operativo, seguridad alimentaria,
              tiempos de respuesta y percepción de servicio por sede o turno.
            </p>
          </article>
          <article className="rounded-sm border border-border bg-surface p-5">
            <h3 className="font-medium text-foreground">
              ¿Cómo se gestionan contingencias logísticas en sitios alejados?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Con stock de seguridad, rutas alternativas y un protocolo de comando con roles
              definidos entre cliente y proveedor.
            </p>
          </article>
          <article className="rounded-sm border border-border bg-surface p-5">
            <h3 className="font-medium text-foreground">
              ¿Cómo se audita la consistencia entre distintas ubicaciones?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Mediante estándares comunes, checklists comparables y revisiones periódicas con
              trazabilidad de hallazgos y acciones correctivas.
            </p>
          </article>
          <article className="rounded-sm border border-border bg-surface p-5">
            <h3 className="font-medium text-foreground">
              ¿Qué rol juega la capacitación en la continuidad del servicio?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Es central: equipos entrenados reducen errores, sostienen protocolos y mejoran
              la experiencia cotidiana incluso en contextos de alta rotación o cambio.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
