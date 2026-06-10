import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { ContentBlock } from "@/components/modules/ContentBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impacto",
  description:
    "Sustentabilidad, valor compartido, comunidad, proveedores e iniciativas institucionales. Cookins y su compromiso con el entorno.",
  path: "/impacto",
});

export default function ImpactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Compromiso"
        title="Impacto"
        lead="La sustentabilidad y el valor compartido se integran a la forma en que operamos: eficiencia, riesgo reducido y relación responsable con proveedores y comunidades. Para Cookins, impacto es una decisión de gestión conectada con continuidad operativa."
      >
        <ButtonLink href="/contacto">Hablar con comercial</ButtonLink>
        <ButtonLink href="/insights" variant="secondary">
          Ver insights relacionados
        </ButtonLink>
      </PageHero>

      <Section>
        <ContentBlock id="sustentabilidad" title="Sustentabilidad">
          <p>
            <strong className="text-foreground">Definición.</strong> Sustentabilidad aplicada a
            operación diaria: eficiencia de recursos, reducción de mermas y decisiones de
            compra con criterio técnico y trazable.
          </p>
          <p>
            <strong className="text-foreground">Relevancia para Cookins.</strong> Mejora
            desempeño operativo y reduce exposición a costos y desvíos, especialmente en
            contratos de largo plazo.
          </p>
          <p>
            <strong className="text-foreground">Conexión con la operación.</strong> Se
            integra a planificación, producción y logística de{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#alimentacion">
              alimentación institucional
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#remotos">
              sitios remotos
            </a>
            .
          </p>
        </ContentBlock>

        <ContentBlock id="valor-compartido" title="Valor compartido">
          <p>
            <strong className="text-foreground">Definición.</strong> Diseñar acciones que
            generen mejoras para cliente, personas usuarias y entorno sin perder foco en la
            operación central del servicio.
          </p>
          <p>
            <strong className="text-foreground">Valor que genera.</strong> Fortalece vínculos
            institucionales, mejora licencia social para operar y aporta estabilidad en la
            relación contractual.
          </p>
          <p>
            <strong className="text-foreground">Mirada de largo plazo.</strong> El valor
            compartido se evalúa por continuidad y resultados, no por acciones aisladas.
          </p>
        </ContentBlock>

        <ContentBlock id="comunidad" title="Comunidad y educación">
          <p>
            <strong className="text-foreground">Definición.</strong> Iniciativas comunitarias y
            educativas de alcance acotado, con objetivos medibles y gobernanza definida.
          </p>
          <p>
            <strong className="text-foreground">Conexión con la operación.</strong> En
            territorios donde operamos, la educación en hábitos, seguridad y convivencia
            refuerza prácticas internas y relación con el entorno.
          </p>
          <p>
            <strong className="text-foreground">Aplicación.</strong> Es especialmente relevante
            en{" "}
            <a className="underline-offset-4 hover:underline" href="/sectores#sitios-remotos">
              sitios remotos
            </a>{" "}
            y contextos con alta interacción comunitaria.
          </p>
        </ContentBlock>

        <ContentBlock id="proveedores" title="Desarrollo de proveedores">
          <p>
            <strong className="text-foreground">Definición.</strong> Evaluación, auditoría y
            acompañamiento de proveedores con foco en calidad, cumplimiento y consistencia
            de abastecimiento.
          </p>
          <p>
            <strong className="text-foreground">Por qué es relevante.</strong> Una red de
            proveedores confiable reduce riesgos logísticos, mejora tiempos de respuesta y
            fortalece la continuidad operativa.
          </p>
          <p>
            <strong className="text-foreground">Vínculo técnico.</strong> Se conecta con{" "}
            <a className="underline-offset-4 hover:underline" href="/calidad-operacion#logistica">
              logística e infraestructura
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/calidad-operacion#calidad-seguridad">
              calidad y seguridad alimentaria
            </a>
            .
          </p>
        </ContentBlock>

        <ContentBlock id="programas" title="Programas e iniciativas">
          <p>
            <strong className="text-foreground">Enfoque actual.</strong> Programas definidos
            por prioridad operativa, alcance territorial y capacidad de seguimiento.
          </p>
          <p>
            <strong className="text-foreground">Cómo se evalúan.</strong> Cada iniciativa debe
            tener objetivo, indicador, responsable y revisión periódica para asegurar
            trazabilidad institucional.
          </p>
          <p>
            <strong className="text-foreground">Próximo paso editorial.</strong> Publicar
            fichas resumidas por programa con alcance, resultados y aprendizajes.
          </p>
        </ContentBlock>

        <ContentBlock id="pacto-global" title="Pacto Global y compromisos">
          <p>
            <strong className="text-foreground">Marco institucional.</strong> Cookins avanza en
            alineamiento con buenas prácticas y criterios de reporte coherentes con marcos
            reconocidos internacionalmente.
          </p>
          <p>
            <strong className="text-foreground">Qué expresa.</strong> Una mirada de largo
            plazo sobre transparencia, mejora de gestión y compromiso con estándares de
            cumplimiento.
          </p>
          <p>
            <strong className="text-foreground">Relación con autoridad temática.</strong> Este
            eje se profundizará con publicaciones en{" "}
            <a className="underline-offset-4 hover:underline" href="/insights">
              Insights
            </a>{" "}
            para sostener trazabilidad pública de avances y criterios.
          </p>
        </ContentBlock>
      </Section>
    </>
  );
}
