"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type Metric =
  | {
      kind: "counter";
      value: number;
      prefix?: string;
      suffix?: string;
      label: string;
    }
  | {
      kind: "static";
      display: string;
      label: string;
    };

const metrics: Metric[] = [
  { kind: "counter", value: 50, prefix: "+", label: "años de experiencia" },
  { kind: "static", display: "100%", label: "Empresa 100% argentina" },
  { kind: "counter", value: 2500, prefix: "+", label: "colaboradores" },
  { kind: "counter", value: 40, prefix: "+", label: "clientes a nivel nacional" },
  {
    kind: "counter",
    value: 25,
    label: "años promedio de relación con nuestros clientes",
  },
  {
    kind: "counter",
    value: 90,
    prefix: "+",
    suffix: "%",
    label: "de contratación local en comunidades donde operamos",
  },
  { kind: "counter", value: 3, label: "centros de transferencia" },
  { kind: "counter", value: 4, label: "bases operativas" },
];

export function TrustMetrics() {
  return (
    <div className="mt-14 rounded-md border border-border bg-ink p-8 text-hero-fg shadow-[var(--shadow-card)] sm:p-10 lg:p-12">
      <h3 className="max-w-2xl font-serif text-2xl font-medium tracking-tight text-hero-fg sm:text-3xl">
        Una trayectoria construida sobre la confianza
      </h3>
      <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
        {metrics.map((metric) => (
          <div key={metric.label} className="border-t border-white/12 pt-6">
            <dt className="font-serif text-3xl font-medium tracking-tight text-hero-fg sm:text-4xl">
              {metric.kind === "counter" ? (
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              ) : (
                metric.display
              )}
            </dt>
            <dd className="mt-2 text-sm leading-snug text-hero-fg-muted">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
