import type { ReactNode } from "react";

/**
 * Bloque modular para páginas profundas: cada instancia puede mapearse
 * luego a CMS o rutas hijas (`/soluciones/alimentacion-institucional`).
 */
export function ContentBlock({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      id={id}
      className={`scroll-mt-28 border-b border-border py-14 last:border-b-0 last:pb-0 ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="prose-cookins mt-6">{children}</div>
    </article>
  );
}
