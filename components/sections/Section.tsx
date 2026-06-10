import type { ReactNode } from "react";

type Tone = "default" | "wash" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-background",
  wash: "bg-wash",
  /** Cierre comercial / bloques de conversión: mismo lenguaje cromático que hero y footer */
  dark: "bg-ink text-hero-fg",
};

export function Section({
  id,
  children,
  tone = "default",
  wide = false,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  /** Contenedor más ancho para bloques “hero de sección” y grillas institucionales */
  wide?: boolean;
  className?: string;
  containerClassName?: string;
}) {
  const maxW = wide ? "max-w-7xl" : "max-w-6xl";

  return (
    <section
      id={id}
      className={`py-[var(--spacing-section)] ${tones[tone]} ${className}`}
    >
      <div
        className={`mx-auto w-full ${maxW} px-5 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
