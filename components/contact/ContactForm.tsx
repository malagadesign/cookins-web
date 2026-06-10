"use client";

import { type FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-sm border border-border bg-wash p-8 text-sm text-muted"
        role="status"
      >
        <p className="font-medium text-foreground">Solicitud registrada (simulación).</p>
        <p className="mt-2">
          En esta etapa del MVP el formulario no envía datos a un servidor. Podemos
          conectar luego un endpoint, integración CRM o mail transaccional conservando la
          misma estructura de campos.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-sm border border-border bg-surface p-8 sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Nombre y apellido</span>
          <input
            required
            name="nombre"
            autoComplete="name"
            className="focus-ring rounded-sm border border-border bg-background px-3 py-2.5 text-foreground"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Empresa</span>
          <input
            required
            name="empresa"
            autoComplete="organization"
            className="focus-ring rounded-sm border border-border bg-background px-3 py-2.5 text-foreground"
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Correo electrónico</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="focus-ring rounded-sm border border-border bg-background px-3 py-2.5 text-foreground"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Teléfono</span>
          <input
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="focus-ring rounded-sm border border-border bg-background px-3 py-2.5 text-foreground"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-foreground">Motivo del contacto</span>
        <select
          name="motivo"
          className="focus-ring rounded-sm border border-border bg-background px-3 py-2.5 text-foreground"
          defaultValue="comercial"
        >
          <option value="comercial">Consulta comercial / propuesta</option>
          <option value="operacion">Consulta operativa o técnica</option>
          <option value="prensa">Prensa e institucional</option>
          <option value="otro">Otro</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-foreground">Mensaje</span>
        <textarea
          required
          name="mensaje"
          rows={5}
          className="focus-ring resize-y rounded-sm border border-border bg-background px-3 py-2.5 text-foreground"
          placeholder="Contexto de la operación, ubicaciones aproximadas, volumetría y plazo deseado."
        />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">
          Al enviar, acepta ser contactado/a con fines comerciales vinculados a su consulta.
        </p>
        <button
          type="submit"
          className="focus-ring rounded-sm bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-muted"
        >
          Enviar consulta
        </button>
      </div>
    </form>
  );
}
