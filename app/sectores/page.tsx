import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContentBlock } from "@/components/modules/ContentBlock";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sectores",
  description:
    "Minería, industria, empresas y sitios remotos. Cookins adapta servicios integrales de alimentación y soporte a cada entorno operativo en Argentina.",
  path: "/sectores",
});

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Enfoque"
        title="Sectores y entornos"
        lead="Trabajamos donde la operación es intensa, los turnos estructuran la vida cotidiana y el servicio debe convivir con normativas de seguridad, higiene y producción. Cada sector exige decisiones distintas en alimentación, soporte, logística y control operativo."
      >
        <ButtonLink href="/contacto">Contacto comercial</ButtonLink>
        <ButtonLink href="/soluciones" variant="secondary">
          Ver soluciones
        </ButtonLink>
      </PageHero>

      <Section>
        <ContentBlock
          id="mineria"
          eyebrow="Sector"
          title="Minería"
        >
          <p>
            <strong className="text-foreground">Contexto operativo.</strong> La minería combina
            campamentos, turnos extensos y exigencias estrictas de seguridad e higiene.
            El servicio de alimentación y soporte convive con una operación donde la
            continuidad no es opcional.
          </p>
          <p>
            <strong className="text-foreground">Desafíos clave.</strong> Ventanas de servicio
            ajustadas, lejanía de centros de abastecimiento, variación de dotación y alta
            coordinación con contratistas en faena.
          </p>
          <p>
            <strong className="text-foreground">Cómo responde Cookins.</strong> Integramos{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#remotos">
              operación en sitios remotos
            </a>
            ,{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#alimentacion">
              alimentación institucional
            </a>{" "}
            y esquemas de{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#a-medida">
              solución a medida
            </a>
            . Priorizamos logística, stock de seguridad y protocolos de contingencia.
          </p>
          <p>
            <strong className="text-foreground">Aspectos sensibles.</strong> Inocuidad,
            trazabilidad y comando operativo en contingencias, en línea con{" "}
            <a
              className="underline-offset-4 hover:underline"
              href="/calidad-operacion#calidad-seguridad"
            >
              calidad y seguridad alimentaria
            </a>{" "}
            y{" "}
            <a
              className="underline-offset-4 hover:underline"
              href="/calidad-operacion#protocolos"
            >
              protocolos de operación
            </a>
            .
          </p>
          <p>
            <strong className="text-foreground">Dimensión humana y territorial.</strong>{" "}
            En faena, el bienestar cotidiano sostiene ánimo, descanso y adherencia a la
            rutina de trabajo. También es relevante el vínculo con proveedores y comunidad
            local, abordado en{" "}
            <a className="underline-offset-4 hover:underline" href="/impacto#proveedores">
              desarrollo de proveedores
            </a>
            .
          </p>
        </ContentBlock>

        <ContentBlock id="industria" eyebrow="Sector" title="Industria">
          <p>
            <strong className="text-foreground">Contexto operativo.</strong> Plantas con ritmos
            continuos, picos de producción y coordinación permanente con mantenimiento,
            HSE, RR. HH. y compras.
          </p>
          <p>
            <strong className="text-foreground">Desafíos clave.</strong> Puntualidad en cambios
            de turno, capacidad para absorber variaciones de demanda y control de
            cumplimiento en ambientes regulados.
          </p>
          <p>
            <strong className="text-foreground">Cómo responde Cookins.</strong> Combinamos{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#alimentacion">
              alimentación institucional
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#soporte">
              servicios de soporte
            </a>{" "}
            con un gobierno de servicio orientado a continuidad y coordinación
            interáreas.
          </p>
          <p>
            <strong className="text-foreground">Aspectos sensibles.</strong> Procesos
            estandarizados, controles en punto de servicio y logística interna, en línea
            con{" "}
            <a className="underline-offset-4 hover:underline" href="/calidad-operacion#procesos">
              procesos y estándares
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/calidad-operacion#logistica">
              logística e infraestructura
            </a>
            .
          </p>
          <p>
            <strong className="text-foreground">Dimensión humana.</strong> En industria, la
            experiencia cotidiana impacta en clima de planta y percepción de orden
            organizacional. Ver también{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#bienestar">
              bienestar y experiencia cotidiana
            </a>
            .
          </p>
        </ContentBlock>

        <ContentBlock id="empresas" eyebrow="Sector" title="Empresas">
          <p>
            <strong className="text-foreground">Contexto operativo.</strong> Sedes corporativas
            y campus con alta densidad de personas, múltiples perfiles de consumo y foco en
            experiencia diaria.
          </p>
          <p>
            <strong className="text-foreground">Desafíos clave.</strong> Equilibrar calidad
            percibida, eficiencia de servicio y coordinación con áreas corporativas sin
            perder orden operativo.
          </p>
          <p>
            <strong className="text-foreground">Cómo responde Cookins.</strong> Aplicamos{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#alimentacion">
              alimentación institucional
            </a>
            ,{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#soporte">
              soporte
            </a>{" "}
            y enfoque de{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#bienestar">
              experiencia cotidiana
            </a>{" "}
            para sostener consistencia de punta a punta.
          </p>
          <p>
            <strong className="text-foreground">Aspectos sensibles.</strong> Estándares de
            atención, protocolos de servicio, capacitación de equipos y seguimiento de
            indicadores de satisfacción y cumplimiento.
          </p>
          <p>
            <strong className="text-foreground">Dimensión de impacto.</strong> En entornos
            urbanos, cobran relevancia compras responsables y trazabilidad de proveedores,
            desarrolladas en{" "}
            <a className="underline-offset-4 hover:underline" href="/impacto#sustentabilidad">
              sustentabilidad
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/impacto#proveedores">
              desarrollo de proveedores
            </a>
            .
          </p>
        </ContentBlock>

        <ContentBlock
          id="sitios-remotos"
          eyebrow="Sector"
          title="Sitios remotos"
        >
          <p>
            <strong className="text-foreground">Contexto operativo.</strong> Sitios alejados,
            rutas complejas, infraestructura variable y fuerte dependencia de una cadena de
            suministro estable.
          </p>
          <p>
            <strong className="text-foreground">Desafíos clave.</strong> Mantener continuidad
            en contextos de clima adverso, acceso restringido y baja tolerancia al quiebre
            de servicio.
          </p>
          <p>
            <strong className="text-foreground">Cómo responde Cookins.</strong> Diseñamos
            servicios con enfoque de{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#remotos">
              operación remota
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/soluciones#a-medida">
              soluciones a medida
            </a>
            , con protocolos de comando y acuerdos operativos claros.
          </p>
          <p>
            <strong className="text-foreground">Aspectos sensibles.</strong> Redundancia
            logística, stock de seguridad, comunicación ante contingencias y desempeño de
            equipos en terreno. Ver{" "}
            <a className="underline-offset-4 hover:underline" href="/calidad-operacion#logistica">
              logística e infraestructura
            </a>{" "}
            y{" "}
            <a className="underline-offset-4 hover:underline" href="/calidad-operacion#protocolos">
              protocolos y operación
            </a>
            .
          </p>
          <p>
            <strong className="text-foreground">Dimensión humana y de comunidad.</strong>{" "}
            La continuidad del servicio impacta directamente en bienestar y en la relación
            cotidiana con el territorio. Para profundizar, ver{" "}
            <a className="underline-offset-4 hover:underline" href="/impacto#comunidad">
              comunidad y educación
            </a>
            .
          </p>
        </ContentBlock>
      </Section>
    </>
  );
}
