# Cookins — Arquitectura del sitio, contenidos e interlinking

Documento orientado a **estrategia de contenidos**, **arquitectura de información** e **hipervínculos internos**. Refleja el estado del proyecto en el repositorio actual (Next.js, rutas en `app/`).

---

## 1. Sitemap actual y jerarquía

### 1.1 Nivel 1 — Páginas principales (existentes en código)

Todas viven bajo la raíz del sitio y coinciden con la **navegación principal** (`lib/navigation.ts`).

| Ruta | Nombre en UI |
|------|----------------|
| `/` | Inicio |
| `/compania` | Compañía |
| `/soluciones` | Soluciones |
| `/sectores` | Sectores |
| `/calidad-operacion` | Calidad y operación |
| `/impacto` | Impacto |
| `/insights` | Insights |
| `/contacto` | Contacto |

**Infra SEO (técnicas, no son “páginas” de contenido):** `sitemap.xml`, `robots.txt` (generados por Next.js en `app/sitemap.ts` y `app/robots.ts`).

### 1.2 Nivel 2 — Anclas dentro de páginas (URLs reales hoy)

Estas **no son rutas independientes** pero sí destinos de enlaces internos y futuros deep links.

**`/soluciones`** (bloques detallados en la misma página):

| Ancla | Tema |
|-------|------|
| `#alimentacion` | Alimentación institucional |
| `#soporte` | Servicios de soporte |
| `#remotos` | Operación en sitios remotos |
| `#a-medida` | Soluciones a medida |
| `#bienestar` | Bienestar y experiencia cotidiana |

**`/sectores`**:

| Ancla | Tema |
|-------|------|
| `#mineria` | Minería |
| `#industria` | Industria |
| `#empresas` | Empresas |
| `#sitios-remotos` | Sitios remotos |

**`/compania`**, **`/calidad-operacion`**, **`/impacto`**: bloques con `id` en HTML (p. ej. `#quienes-somos`, `#calidad-seguridad`, `#sustentabilidad`) — útiles para enlaces profundos y futuras tablas de contenido.

### 1.3 Nivel 2+ — Subpáginas previstas (no implementadas aún)

Alineado a comentarios en código y a la lógica editorial sugerida en **Insights**:

- `/insights/[slug]` — artículo individual (ej. `/insights/pliego-servicios-alimentacion`).
- `/insights/[categoria]` — archivo por categoría (ej. `/insights/operacion`), mencionado como idea en la página Insights.
- Subpáginas bajo **Soluciones** (ej. `/soluciones/alimentacion-institucional`) — el patrón `ContentBlock` + anclas está preparado para migrar a rutas hijas sin cambiar el menú principal.
- Subpáginas bajo **Sectores** (ej. `/sectores/mineria`) — la página Sectores ya anticipa “próximos contenidos” por sector.

### 1.4 Árbol jerárquico resumido

```text
Cookins (sitio)
├── Inicio (/)
├── Compañía (/compania)
│   └── [anclas: quienes-somos, trayectoria, forma-de-trabajo, …]
├── Soluciones (/soluciones)
│   └── [anclas: alimentacion, soporte, remotos, a-medida, bienestar]
├── Sectores (/sectores)
│   └── [anclas: mineria, industria, empresas, sitios-remotos]
├── Calidad y operación (/calidad-operacion)
│   └── [anclas: calidad-seguridad, procesos, logistica, …]
├── Impacto (/impacto)
│   └── [anclas: sustentabilidad, valor-compartido, …]
├── Insights (/insights)
│   └── [futuro: /insights/{slug}, /insights/{categoria}]
└── Contacto (/contacto)
```

---

## 2. Detalle por página principal

Para cada una: **objetivo**, **bloques**, **resumen de contenido**, **CTA principal sugerido**, **enlaces relacionados recomendados** (más allá de los que ya existen en el código).

---

### Inicio (`/`)

**Objetivo:** Sintetizar propuesta de valor, credibilidad operativa y rutas hacia Soluciones, Sectores, Calidad, Impacto, Insights y Contacto; funcionar como **hub** de la arquitectura.

**Bloques actuales (orden aproximado):**

1. **Hero** (`HomeHero`): idea madre, tagline, propuesta de valor, CTAs a contacto y soluciones, métricas (+50 años, integral, Argentina), panel lateral “Capacidad y método”.
2. **Presentación** (`#presentacion`): statement “Una compañía que sostiene operaciones”, microindicadores, texto de profundidad, CTA a Compañía.
3. **Soluciones integrales** (`#soluciones-integrales`): encabezado + tres tarjetas hacia anclas en `/soluciones` (alimentación, soporte, remotos).
4. **Sectores y entornos** (`#sectores`): encabezado contextual + cuatro tarjetas sectoriales hacia anclas en `/sectores`.
5. **Por qué Cookins** (`#diferenciales`): bento con argumento principal + cinco diferenciales.
6. **Calidad y operación** (`#calidad`): mitad texto/lista + mitad cita institucional, CTA a `/calidad-operacion`.
7. **Impacto** (`#impacto`): tesis + lista/fichas, CTA a `/impacto`.
8. **Insights** (`#insights`): cabecera editorial + nota destacada + dos notas compactas, CTA a `/insights`.
9. **Cierre comercial** (`#cierre`): pregunta + aside con datos de contacto + CTAs a contacto y soluciones.

**CTA principal:** Contacto comercial / formulario (`/contacto`).

**Enlaces relacionados recomendados:** reforzar en copy o módulos futuros enlaces explícitos a **Calidad y operación** desde diferenciales; considerar enlace a **Sectores** desde el hero o presentación; enlazar **Insights** desde bloques de compras/HSE cuando existan artículos reales.

---

### Compañía (`/compania`)

**Objetivo:** Construir **confianza institucional**: quiénes son, cómo trabajan, dirección (propósito/misión/visión), personas e infraestructura.

**Bloques:**

| Bloque | ID (ancla) | Contenido actual (resumen) |
|--------|------------|------------------------------|
| Hero | — | Título Compañía, lead institucional, CTAs contacto + soluciones |
| Quiénes somos | `#quienes-somos` | Rol en el sistema productivo del cliente; mirada argentina/regional |
| Trayectoria | `#trayectoria` | +50 años, continuidad, aprendizaje en sectores exigentes |
| Forma de trabajo | `#forma-de-trabajo` | Diagnóstico, plan escrito, seguimiento y mejora continua |
| Propósito / misión / visión | `#proposito-mision-vision` | Tres párrafos definitorios |
| Personas y cultura | `#personas-cultura` | Equipos, cultura, vínculo con calidad percibida |
| Infraestructura | `#infraestructura` | Capacidad física y operativa, gobierno del servicio |
| Cierre | — | Tagline + texto + CTA “Solicitar reunión” → contacto |

**CTA principal:** Contacto comercial / solicitar reunión.

**Enlaces relacionados recomendados:** **Soluciones** (traducción de capacidad en oferta), **Calidad y operación** (respaldar afirmaciones con método), **Sectores** (contexto de aplicación), **Impacto** (si hay programas publicables).

---

### Soluciones (`/soluciones`)

**Objetivo:** Explicar **qué se ofrece**, por ejes, con profundidad suficiente para SEO y para conversación comercial; anclar el “mapa” y el detalle en una sola URL (por ahora).

**Bloques:**

| Bloque | Contenido actual (resumen) |
|--------|------------------------------|
| Hero | Oferta integral, CTAs a contacto y calidad-operación |
| Mapa de soluciones | Cinco `LinkCard` con extracto + salto a `#` en la misma página |
| Detalle por eje | Cinco artículos anclados: alimentación, soporte, remotos, a medida, bienestar (dos párrafos cada uno) |
| Cierre | Pregunta por multi-ubicación + CTA solicitar propuesta → contacto |

**CTA principal:** Hablar con comercial / solicitar propuesta.

**Enlaces relacionados recomendados:** **Sectores** (por eje: “cómo se aplica en minería/industria…”), **Calidad y operación** (estándares que sostienen cada solución), **Insights** (guías de compras, pliegos), **Compañía** (trayectoria y método).

**Nota de alineación Home ↔ Soluciones:** En la Home, las tres tarjetas principales enlazan solo a `#alimentacion`, `#soporte` y `#remotos`. Los ejes **a medida** y **bienestar** existen en `/soluciones` pero **no tienen tarjeta dedicada en la Home**; conviene o bien añadir cards en Home o enlazar desde otros bloques.

---

### Sectores (`/sectores`)

**Objetivo:** Posicionar **expertise por contexto** (minería, industria, empresas, remotos) y orientar a contacto comercial.

**Bloques:**

| Bloque | ID | Contenido actual (resumen) |
|--------|-----|------------------------------|
| Hero | — | Operación intensa, turnos, normativa; CTA contacto |
| Minería | `#mineria` | Campamentos, HSE; placeholder “próximos contenidos” |
| Industria | `#industria` | Plantas, HSE/RRHH; placeholder |
| Empresas | `#empresas` | Sedes, dotaciones; placeholder |
| Sitios remotos | `#sitios-remotos` | Logística, autonomía; placeholder |

**CTA principal:** Contacto comercial.

**Enlaces relacionados recomendados:** **Soluciones** (qué servicios se combinan por sector), **Calidad y operación** (protocolos en faena/planta), **Impacto** (comunidad/proveedores en zonas de influencia), **Insights** (notas sectoriales).

---

### Calidad y operación (`/calidad-operacion`)

**Objetivo:** Demostrar **método, estándares y gobierno operativo** (eje de confianza B2B).

**Bloques (ContentBlock):**

| ID | Título | Resumen |
|----|--------|---------|
| `#calidad-seguridad` | Calidad y seguridad alimentaria | Proveedores, cadena de frío, registros |
| `#procesos` | Procesos y estándares | Documentación, checklists, alineación con auditorías del cliente |
| `#logistica` | Logística e infraestructura | Rutas, SLA, criticidad por ubicación |
| `#protocolos` | Protocolos y operación | Contingencias, roles, continuidad |
| `#capacitacion` | Capacitación y mejora continua | Formación, incidentes, mejora sistémica |

**CTA principal:** Hoy el hero **no incluye CTAs** en el código; el usuario llega por menú o desde Home/Soluciones. **Recomendación:** añadir CTAs a **Contacto** y/o **Soluciones** en el hero.

**Enlaces relacionados recomendados:** **Soluciones** (cada eje “asegurado” por estos pilares), **Sectores** (riesgos típicos por contexto), **Compañía** (cultura y personas), **Insights** (artículos técnicos).

---

### Impacto (`/impacto`)

**Objetivo:** Integrar **sustentabilidad, valor compartido y compromisos** como parte del posicionamiento (no como apéndice liviano).

**Bloques (ContentBlock):**

| ID | Título | Resumen |
|----|--------|---------|
| `#sustentabilidad` | Sustentabilidad | Recursos, mermas, indicadores con cliente |
| `#valor-compartido` | Valor compartido | Viabilidad + impacto |
| `#comunidad` | Comunidad y educación | Iniciativas medibles |
| `#proveedores` | Desarrollo de proveedores | Auditorías, locales |
| `#programas` | Programas e iniciativas | Placeholder de ampliación |
| `#pacto-global` | Pacto Global y compromisos | Marco en preparación editorial |

**CTA principal:** Hoy **sin CTAs en hero**; conviene sumar enlace a **Contacto** o a documentación descargable cuando exista.

**Enlaces relacionados recomendados:** **Compañía** (propósito), **Calidad** (eficiencia y riesgo), **Sectores** (impacto territorial), **Insights** (reportes y transparencia).

---

### Insights (`/insights`)

**Objetivo:** **Autoridad temática** y soporte a compras, operaciones y HSE; base para SEO editorial y búsquedas asistidas.

**Bloques:**

| Bloque | Contenido actual (resumen) |
|--------|------------------------------|
| Hero | Rol editorial, ampliación futura (autores, descargables) |
| Próximas publicaciones | Tres teasers tipo plantilla enlazando a `/insights` (sin artículo propio aún) |
| Arquitectura editorial sugerida | Lista de ideas: rutas por categoría, schema Article, series enlazadas desde Soluciones |

**CTA principal:** Explorar archivo / leer notas (hoy los enlaces van a la misma página Insights).

**Enlaces relacionados recomendados:** **Soluciones** y **Sectores** (contextualizar artículos), **Calidad** (profundizar normas y procesos), **Contacto** (conversión desde guías).

---

### Contacto (`/contacto`)

**Objetivo:** **Conversión comercial** y canal directo (formulario + datos).

**Bloques:**

| Bloque | Contenido actual (resumen) |
|--------|------------------------------|
| Hero | Invitación a evaluar esquema integral |
| Datos + formulario | Mail, teléfono, ubicación, horario; formulario (envío simulado en MVP) + CTA comercial en copy |

**CTA principal:** Enviar consulta / contacto por mail o teléfono.

**Enlaces relacionados recomendados:** **Soluciones** (qué pedir en el mensaje), **Sectores** (contexto del proyecto), PDF o one-pager futuro.

---

## 3. Sistema de enlaces internos sugerido

### 3.1 Principios

- **Home** debe seguir siendo el mayor distribuidor de enlaces hacia pilares (Soluciones, Sectores, Calidad, Impacto, Insights, Contacto).
- **Soluciones ↔ Sectores:** cruce sistemático (“esta solución en este sector”).
- **Calidad y operación** como **eje transversal de confianza** desde Soluciones, Sectores y Compañía.
- **Insights** enlazado desde preguntas concretas de compra/operación (pliegos, KPIs, remotos).
- **Contacto** accesible desde todo hero de segundo nivel y cierres de sección.

### 3.2 Matriz de relación (sugerida / parcialmente implementada)

| Desde → Hacia | Home | Compañía | Soluciones | Sectores | Calidad | Impacto | Insights | Contacto |
|---------------|------|----------|------------|----------|---------|---------|----------|----------|
| **Home** | — | ✓ | ✓ (#) | ✓ (#) | ✓ | ✓ | ✓ | ✓ |
| **Compañía** | — | — | ✓ | ○ | ○ | ○ | ○ | ✓ |
| **Soluciones** | — | ○ | — | ○ | ✓ | ○ | ○ | ✓ |
| **Sectores** | — | ○ | ○ | — | ○ | ○ | ○ | ✓ |
| **Calidad** | — | ○ | ✓ | ○ | — | ○ | ✓ | ✓ |
| **Impacto** | — | ✓ | ○ | ○ | ○ | — | ○ | ○ |
| **Insights** | — | ○ | ✓ | ○ | ✓ | ○ | — | ○ |
| **Contacto** | — | ○ | ✓ | ○ | ○ | ○ | ○ | — |

Leyenda: **✓** = ya hay enlaces explícitos en el código en al menos un sentido útil; **○** = recomendado estratégicamente y aún débil o ausente.

### 3.3 Flujos típicos de usuario B2B

1. **Decisor comercial:** Home → Soluciones → Contacto (o Home → Contacto).
2. **Operaciones / HSE:** Home → Calidad → Soluciones / Sectores → Insights.
3. **Compras:** Insights (guías) → Soluciones → Contacto.
4. **Institucional / RRHH:** Compañía → Impacto → Contacto.

---

## 4. Estado actual del proyecto

### 4.1 Desarrolladas con alto nivel de contenido y diseño

- **`/` (Inicio):** contenido amplio, segunda iteración visual, muchos enlaces internos.
- **`/compania`:** página larga, bloques completos con copy sólido.

### 4.2 Desarrolladas con contenido medio (estructura + texto base)

- **`/soluciones`:** mapa + cinco ejes desarrollados en página única con anclas; cierre comercial.

### 4.3 Desarrolladas de forma principalmente estructural

- **`/sectores`:** un párrafo por sector + líneas “próximos contenidos”.
- **`/calidad-operacion`:** un párrafo por bloque; sin CTAs en hero.
- **`/impacto`:** similar; Pacto Global y programas como placeholder explícito.
- **`/insights`:** teasers plantilla; sin artículos reales ni rutas `[slug]`.
- **`/contacto`:** formulario funcional en modo simulación (sin backend); datos de `lib/site.ts`.

### 4.4 Contenidos que faltan profundizar (prioridad sugerida)

1. **Sectores:** casos de aplicación, requisitos típicos, glosario por sector (sin convertirlo en storytelling liviano).
2. **Calidad y operación:** evidencias, diagramas de proceso, descargables, FAQs técnicas.
3. **Impacto:** programas medibles, Pacto Global con datos publicables.
4. **Insights:** primeras notas reales, autores, categorías y enlaces contextuales.
5. **Contacto:** integración CRM/email y, si aplica, política de privacidad / tratamiento de datos.

---

## 5. Componentes y módulos reutilizables

| Componente / módulo | Ubicación en código | Uso actual | Reutilización sugerida |
|---------------------|---------------------|------------|-------------------------|
| `SiteHeader` | `components/layout/SiteHeader.tsx` | Todas las páginas vía `layout.tsx` | Global |
| `SiteFooter` | `components/layout/SiteFooter.tsx` | Idem | Global |
| `PageHero` | `components/sections/PageHero.tsx` | Páginas internas (no Home) | Cualquier landing de segundo nivel |
| `Section` | `components/sections/Section.tsx` | Home + páginas internas | Contenedores de ritmo vertical; prop `wide` |
| `SectionHeading` | `components/sections/SectionHeading.tsx` | Secciones con título/subtítulo/eyebrow | Listados, hubs de categoría |
| `ContentBlock` | `components/modules/ContentBlock.tsx` | Compañía, Sectores, Calidad, Impacto | Futuras subpáginas y CMS |
| `ButtonLink` | `components/ui/ButtonLink.tsx` | CTAs en todo el sitio | Consistencia de conversión |
| `LinkCard` | `components/cards/LinkCard.tsx` | Home (soluciones), Soluciones (mapa) | Hubs temáticos, relacionados al final de artículos |
| `SectorCard` | `components/cards/SectorCard.tsx` | Solo Home (sectores) | Página Sectores podría adoptar el mismo patrón |
| `InsightTeaser` | `components/cards/InsightTeaser.tsx` | Home + Insights | Archivo, sidebar, “leer también” |
| `ContactForm` | `components/contact/ContactForm.tsx` | Contacto | Repetir en landings de campaña si se crean |
| `HomeHero` + `HomePage` | `components/home/*` | Solo Inicio | — |

**Configuración centralizada:** `lib/site.ts` (marca, contacto), `lib/navigation.ts` (menú y footer), `lib/metadata.ts` (SEO por página).

---

## 6. Oportunidades de expansión

### 6.1 Páginas o hubs a desarrollar más

- **Sectores** como hub con **subpáginas** (`/sectores/mineria`, etc.) cuando el volumen de contenido lo justifique.
- **Soluciones** con **subpáginas** por eje para SEO de cola larga y para anuncios segmentados.
- **Recursos / Documentación** (opcional): PDFs, estándares, brochures (se enlaza desde Calidad, Insights y Contacto).

### 6.2 Subpáginas futuras (prioridad editorial)

1. Artículos bajo `/insights/[slug]`.
2. Categorías bajo `/insights/[categoria]` o query estable.
3. Fichas “**Servicio + sector**” (matriz) para interlinking masivo sin duplicar narrativa.

### 6.3 Oportunidades de contenido

- Glosario B2B (SLA, dotación, continuidad, faena).
- Preguntas frecuentes de **compras** alineadas a Insights.
- Marco de **sostenibilidad** con indicadores cuando haya datos auditables.

### 6.4 Oportunidades de interlinking

- Desde **cada ancla de Soluciones** hacia **Sectores** relevantes y viceversa.
- Desde **Calidad** hacia **párrafos concretos de Soluciones** (anclas).
- Desde **Insights** hacia **Contacto** con CTA contextual (“Evaluar pliego”).
- Añadir **Impacto** y **Insights** en **Compañía** donde hoy son “○” en la matriz.

### 6.5 Vacíos actuales en la arquitectura

- **Sin artículos reales** en Insights (todo apunta a listado o a la misma URL).
- **Sin página legal** (privacidad, términos) si el formulario pasa a captar datos personales.
- **Sin “Área de clientes” o intranet** (no solicitado; solo anotar si el negocio lo requiere más adelante).
- **Home:** ausencia de cards hacia `#a-medida` y `#bienestar` en Soluciones (desalineación menor con el mapa completo de cinco ejes).

---

*Documento generado para el equipo de Cookins. Actualizar cuando se incorporen rutas nuevas o cambios en `lib/navigation.ts`.*
