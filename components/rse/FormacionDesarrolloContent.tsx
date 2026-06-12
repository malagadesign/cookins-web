import { Section } from "@/components/sections/Section";

export function FormacionDesarrolloContent() {
  return (
    <Section>
      <div className="prose-cookins max-w-3xl">
        <p>
          <strong className="text-foreground">Personas y capacitación.</strong> Inducción por
          rol, formación continua y observación en campo como base de un servicio consistente.
          El desarrollo de equipos está ligado a la calidad percibida y a la continuidad
          operativa.
        </p>
        <p>
          <strong className="text-foreground">Comunidad y educación.</strong> Iniciativas
          comunitarias y educativas de alcance acotado, con objetivos medibles y gobernanza
          definida. En territorios donde operamos, la educación en hábitos, seguridad y
          convivencia refuerza prácticas internas y relación con el entorno.
        </p>
        <p>
          <strong className="text-foreground">Proveedores y cadena de valor.</strong> Evaluación,
          auditoría y acompañamiento de proveedores con foco en calidad, cumplimiento y
          consistencia de abastecimiento. Una red confiable reduce riesgos logísticos y
          fortalece la continuidad operativa.
        </p>
        <p>
          <strong className="text-foreground">Vínculo técnico.</strong> Se conecta con{" "}
          <a className="underline-offset-4 hover:underline" href="/calidad#logistica">
            logística e infraestructura
          </a>{" "}
          y{" "}
          <a className="underline-offset-4 hover:underline" href="/calidad#capacitacion">
            capacitación y mejora continua
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
