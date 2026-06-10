export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  id,
  size = "default",
  className = "",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  id?: string;
  size?: "default" | "xl";
  className?: string;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const titleMax = size === "xl" ? "max-w-4xl" : "max-w-2xl";
  const titleSize =
    size === "xl"
      ? "text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
      : "text-3xl font-medium tracking-tight text-foreground sm:text-4xl";

  return (
    <div className={`mb-12 ${titleMax} ${alignClass} ${className}`} id={id}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif ${titleSize} ${eyebrow ? "mt-2" : ""}`}>{title}</h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
