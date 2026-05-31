# Site Architecture — Baumann & Co. (Redesign)

**Objetivo primario:** Que el fundador atrapado agende un diagnóstico gratis con Manuel Baumann.
**CTA primario:** "Agenda tu diagnóstico gratuito" → `https://meetings.hubspot.com/manuel-baumann`
**CTA secundario:** "Toma el test ORCA®" → `/test-fundador-quiz`

**Métrica de éxito:** Tasa de agendamiento > 4% sobre tráfico calificado.

---

## Estructura general

11 secciones en la home. Una sola página, single objective. CTA primario repetido 4 veces (hero / post-metodo / post-resultados / final).

```
┌─ Nav (sticky, minimal) ─────────────────────────────┐
├─ 01. Hero ──────────────────────────────────────────┤
├─ 02. Stats / Prueba social agregada ────────────────┤
├─ 03. El Problema (eres el cuello de botella) ──────┤
├─ 04. Método ORCA® (4 pilares visualizados) ────────┤
├─ 05. Proceso (4 pasos del engagement de 90 días) ──┤
├─ 06. Beneficios tangibles (qué cambia en tu día) ──┤
├─ 07. Resultados promedio (métricas + mini-cases) ──┤
├─ 08. Sobre Manuel Baumann (humanizar la marca) ────┤
├─ 09. Testimonios (marquee) ────────────────────────┤
├─ 10. FAQ (top 5 objeciones) ───────────────────────┤
├─ 11. CTA final + Footer ────────────────────────────┤
└─────────────────────────────────────────────────────┘
```

---

## 00. Nav (sticky)

**Componentes:** shadcn `navigation-menu` minimal · logo · 3-4 links · 1 botón CTA

```
[Baumann&Co.]            Método · Resultados · Quién soy · ES/EN     [Agendar diagnóstico →]
```

**Behavior:** Sticky con backdrop-blur al hacer scroll. Background `surface.base/80` con blur 12px.

---

## 01. HERO

**Función:** Comunicar dolor + valor + agendar en 5 segundos.

### Copy

**Eyebrow (mono uppercase):**
> CONSULTORÍA PARA FUNDADORES · MÉTODO ORCA®

**Headline (display, 2 líneas, ~80-96px desktop):**
> Tu empresa depende de ti.
> Y eso te está [matando]{.highlight}.

(la palabra "matando" con underline marker amber-400 + leve animación entrada)

**Subhead (1.25rem, max-width 640px):**
> Recupera 23 horas a la semana en 90 días. Sin que tu empresa pierda velocidad. Sin que tengas que aprender otro framework empresarial. Sin promesas vacías.

**CTA primario (shimmer-button Magic UI):**
> Agenda tu diagnóstico gratuito →

**Microcopy bajo CTA:**
> 30 min · Sin costo · Sin compromiso

**Visual lateral (right side desktop, below copy mobile):**
- Retrato editorial b&w/sepia de Manuel Baumann (no posado, leyendo o pensando en oficina real)
- O composición tipográfica gigante con "ORCA" en mono mono-spaced
- Con border-beam Magic UI sutil alrededor

**Trust signal bar (debajo del CTA, antes del scroll):**
> +200 fundadores han recuperado el control de su empresa con el método ORCA®.
> [Logos faded de 4-6 empresas representativas si están disponibles, sino sustituir por mini-stats]

### Componentes
- Magic UI: `border-beam` (en el visual), `shimmer-button` (CTA primario), `text-reveal` (headline word-by-word on load)
- shadcn: `button` (CTA), `badge` (eyebrow)
- Background: `radial-gradient` `heroBackground` (glow cobre sutil top center) + `dot-pattern` muy sutil

### Anti-patterns
- ❌ Stock photo handshake corporativo
- ❌ 2 botones CTA compitiendo (mantén UNO en el hero)
- ❌ Headline sin tensión emocional

---

## 02. STATS / PRUEBA SOCIAL

**Función:** Validación inmediata después del hero.

### Copy

**Section header:** (oculto visualmente, presente para a11y)
> Por qué los fundadores eligen Baumann

**3 stats grandes (display mono):**

```
+200          23h           90 días
─────────     ───────       ──────────
EMPRESAS      RECUPERADAS   PARA EQUIPO
TRANSFORMADAS A LA SEMANA   AUTÓNOMO
DESDE 2018    EN PROMEDIO   EN PROMEDIO
```

(Cada métrica con `number-ticker` Magic UI animando from 0 cuando entra en viewport)

**Logos row (debajo):**
- Marquee de 8-12 logos de clientes (Magic UI `marquee`)
- Fade horizontal en bordes
- Si no hay 8 logos reales: sustituir por "Clientes en [12] industrias: SaaS, Manufactura, Retail, Servicios, Construcción, Salud..."

### Componentes
- Magic UI: `number-ticker`, `marquee`
- Background: `surface.base` (oscuro)

---

## 03. EL PROBLEMA

**Función:** Validar el dolor en su propio idioma + agitarlo lo suficiente para empujar acción.

### Copy

**Eyebrow:**
> EL DIAGNÓSTICO HONESTO

**Section headline (h2):**
> Si tu empresa no puede operar sin ti, no tienes una empresa.
> Tienes un trabajo más exigente.

**Lead paragraph (max-width 640px, body-lead):**
> El 73% de los fundadores de empresas medianas trabajan más de 60 horas a la semana. No por falta de equipo. Por falta de estructura.

**4 cards en bento grid (2x2 desktop, stack mobile):**

```
┌────────────────────────────┐  ┌────────────────────────────┐
│ 01 / ORDEN                 │  │ 02 / RENTABILIDAD          │
│                            │  │                            │
│ No puedes mejorar lo que   │  │ Vender más no arregla un   │
│ no ves.                    │  │ negocio que pierde valor.  │
│                            │  │                            │
│ Procesos en la cabeza del  │  │ Márgenes que se diluyen,   │
│ dueño. Roles ambiguos.     │  │ caja imprevisible, costos  │
│ Decisiones que dependen    │  │ que crecen sin control.    │
│ de quién esté disponible.  │  │                            │
└────────────────────────────┘  └────────────────────────────┘

┌────────────────────────────┐  ┌────────────────────────────┐
│ 03 / CRECIMIENTO           │  │ 04 / AUTONOMÍA             │
│                            │  │                            │
│ Crecimiento sin foco       │  │ Una empresa que depende    │
│ genera estrés, no escala.  │  │ del dueño es frágil.       │
│                            │  │                            │
│ Cada cliente nuevo suma    │  │ Cuando te enfermas, el     │
│ problemas operativos en    │  │ negocio se detiene.        │
│ vez de rentabilidad.       │  │ Cuando viajas, todo se     │
│                            │  │ rompe.                     │
└────────────────────────────┘  └────────────────────────────┘
```

**Cards:**
- Background: `surface.elevated` con border `surface.border.subtle`
- Número grande en mono (`01 / ORDEN`) con primary copper color
- Headline en display semibold
- Body en body-default neutral-300

**CTA inline (centered debajo de las cards):**
> ¿Te suena familiar? El método ORCA® ataca los cuatro problemas en paralelo.
> [Ver el método →]
(Link suave al ancla #metodo)

### Componentes
- shadcn: `card`
- Magic UI: `blur-fade` (entrada secuencial de las 4 cards al scrollear)
- Background: `surface.base`

---

## 04. MÉTODO ORCA® (4 PILARES VISUALIZADOS)

**Función:** Mostrar visualmente que el método es estructurado, no improvisado.

### Copy

**Eyebrow:**
> EL MÉTODO

**Section headline:**
> ORCA®. Cuatro pilares, una transformación.

**Lead:**
> No es una metodología más. Es la operación quirúrgica de los cuatro sistemas que sostienen una empresa mediana: cómo se organiza, cuánto rinde, cómo crece, y cuánto te necesita.

### Layout: stepper horizontal con animated-beam

```
   [O]  ─────beam─────  [R]  ─────beam─────  [C]  ─────beam─────  [A]
   Orden               Rentabilidad           Crecimiento            Autonomía
```

(Magic UI `animated-beam` conecta los 4 nodos con pulse animation)

**4 secciones acordeón/expandible (shadcn `accordion`):**

#### O — Orden
**Headline:** Procesos que sostienen la operación sin ti.
**Body:** Mapeamos los procesos críticos (los que si fallan, fallan ingresos), los documentamos en formato accesible para tu equipo, y definimos roles que evitan ambigüedad. Implementamos tableros con métricas operativas reales: producción, calidad, tiempos, no vanity metrics.
**Outcome (callout):** Sabes en 5 minutos cómo está tu empresa, no en una reunión de 2 horas.

#### R — Rentabilidad
**Headline:** Vender más no arregla un negocio que pierde valor.
**Body:** Auditamos margen unitario por producto/servicio, costos ocultos (re-trabajo, devoluciones, descuentos no autorizados), flujo de caja real vs. proyectado. Optimizamos la cadena de captura de valor antes de hablar de crecer.
**Outcome (callout):** +40% mejora en márgenes operativos promedio a los 6 meses.

#### C — Crecimiento
**Headline:** Sistemas predecibles, no esfuerzos heroicos.
**Body:** Construimos un sistema de adquisición de clientes que no dependa de tu agenda: canal por canal con métricas de CAC, ciclo y LTV. El crecimiento se vuelve replicable, no épico.
**Outcome (callout):** Cada cliente nuevo suma rentabilidad. No problemas operativos.

#### A — Autonomía
**Headline:** Tu equipo decide. Tú diriges.
**Body:** Definimos el sistema operativo del equipo: cómo se toman decisiones sin tu presencia, qué métricas miran, qué reuniones existen y para qué. Tu equipo opera con tableros claros. Tú vuelves a estrategia.
**Outcome (callout):** De 60+ horas en operación a 20 horas en estrategia.

### Componentes
- Magic UI: `animated-beam` (conexión entre pilares), `blur-fade`
- shadcn: `accordion` (para detalles), `badge` (etiquetas O/R/C/A)
- Background: `surface.base`

---

## 05. PROCESO (4 PASOS DEL ENGAGEMENT)

**Función:** Mostrar que el proceso es claro, definido, sin sorpresas.

### Copy

**Eyebrow:**
> CÓMO TRABAJAMOS

**Section headline:**
> 90 días. Cuatro pasos. Cero improvisación.

**Lead:**
> No vendemos retainer indefinidos. Vendemos una intervención con principio, medio y fin. Si en 90 días tu empresa no opera sin ti, no cumplimos.

### 4 pasos como timeline vertical (desktop: vertical, mobile: vertical)

```
Día 1                    ●  Diagnóstico (30 min)
                         │  Identificamos el cuello de botella real.
                         │  Llamada con Manuel. Sin venta.
                         │
Día 7                    ●  Plan (1 semana)
                         │  Documentamos procesos, definimos roles
                         │  y métricas. Te entregamos un mapa.
                         │
Día 8-90                 ●  Implementación (12 semanas)
                         │  Ejecutamos juntos. Tu equipo adopta
                         │  los nuevos sistemas con acompañamiento.
                         │
Día 90+                  ●  Autonomía (continuo)
                            Tu empresa opera con tableros claros.
                            Tomas decisiones estratégicas.
```

**CTA inline:**
> El paso 1 es gratis. Solo 30 minutos.
> [Agenda tu diagnóstico →]

### Componentes
- Custom timeline con CSS grid + dots + connecting line
- Magic UI: `blur-fade` por step
- shadcn: `button` (CTA inline)

---

## 06. BENEFICIOS TANGIBLES

**Función:** Traducir el método a beneficios diarios concretos del fundador.

### Copy

**Eyebrow:**
> QUÉ CAMBIA EN TU DÍA A DÍA

**Section headline:**
> No es teoría. Es lo que vas a sentir en tu primera semana sin ser indispensable.

**6 beneficios en grid 3x2 (desktop) / 1x6 (mobile):**

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ ⏱            │  │ 📊           │  │ 🎯           │
│ Recuperas    │  │ Control      │  │ Crecimiento  │
│ tu tiempo    │  │ total        │  │ sin estrés   │
│              │  │              │  │              │
│ De 60+ horas │  │ Tableros con │  │ Cada cliente │
│ en operación │  │ el estado    │  │ nuevo suma   │
│ a 20 horas   │  │ real de tu   │  │ rentabilidad │
│ en estrategia│  │ empresa en 5 │  │ no problemas │
│              │  │ minutos.     │  │ operativos.  │
└──────────────┘  └──────────────┘  └──────────────┘
[...3 más: Visibilidad financiera / Delegación / Escalabilidad]
```

**Iconos:** Phosphor Icons regular (líneas finas custom, NO emoji ni Material). Cada uno en `primary.subtle` background con `primary.DEFAULT` foreground.

### Componentes
- shadcn: `card` (variant: bordered minimal)
- Magic UI: `blur-fade` en stagger

---

## 07. RESULTADOS PROMEDIO + MINI-CASES

**Función:** Cuantificar el outcome + dar 2-3 mini-historias para verosimilitud.

### Copy

**Eyebrow:**
> RESULTADOS

**Section headline:**
> No prometemos. Mostramos.

**Lead:**
> Estas son las métricas agregadas de fundadores que completaron el programa ORCA® entre 2022 y 2025.

**3 métricas grandes con context (display mono):**

```
   23 horas              +40%                90 días
   ─────────────         ─────────────       ─────────────
   recuperadas a la      mejora en           para implementar
   semana en promedio    márgenes operativos sistemas de autonomía
   tras el día 90        a los 6 meses
```

(`number-ticker` Magic UI on viewport enter)

**Debajo: 3 mini-cases en cards (Magic UI `bento-grid`):**

```
┌─────────────────────────────────────┐
│ "[Quote corto de 1-2 líneas]"       │
│                                     │
│ [Industria · Tamaño empresa]        │
│ Antes: [métrica] → Después: [métrica]│
│                                     │
│ — [Nombre], [Rol]                   │
└─────────────────────────────────────┘
```

(Si NO hay casos reales documentables, sustituir esta subsección por logos de clientes con consentimiento + quote agregado de Manuel sobre el resultado promedio)

### Componentes
- Magic UI: `number-ticker`, `bento-grid`, `blur-fade`
- shadcn: `card`

---

## 08. SOBRE MANUEL BAUMANN

**Función:** Humanizar la marca. Una consultoría premium se compra por la persona, no por el logo.

### Copy

**Eyebrow:**
> QUIÉN ESTÁ DEL OTRO LADO

**Section headline:**
> Hola. Soy Manuel Baumann.

**Layout: foto editorial b&w/sepia (50%) + copy (50%)**

**Body (max 480px):**
> He trabajado con +200 fundadores en los últimos 7 años. Antes de Baumann&Co., dirigí operaciones en [empresa relevante] y vi de cerca cómo las empresas medianas se rompen no por falta de talento, sino por falta de estructura.
>
> Cuando hablamos en el diagnóstico, no vas a recibir un PowerPoint. Vas a recibir mi lectura honesta de tu empresa en 30 minutos. Si tiene sentido seguir, te lo digo. Si no, te lo digo también.

**CTA inline:**
> [Agenda 30 minutos conmigo →]

**Trust signals (debajo, en row):**
- LinkedIn (icono)
- Publicaciones en [medios relevantes si aplica]
- [Credencial / certificación / asociación si existe]

### Componentes
- Magic UI: `blur-fade`
- shadcn: `button`, `separator`
- Layout: CSS grid 2 columnas desktop, stack mobile

### Anti-patterns
- ❌ Foto posada en camisa azul mirando a cámara
- ❌ Foto en escenario hablando con micrófono (gurú)
- ❌ Bio en tercera persona ("Manuel es...")

---

## 09. TESTIMONIOS

**Función:** Prueba social distribuida con voces reales.

### Copy

**Eyebrow:**
> LO QUE DICEN OTROS FUNDADORES

**Section headline:**
> No te tomes nuestra palabra. Toma la de ellos.

### Layout: dos marquees verticales (Magic UI `marquee` vertical, direcciones opuestas)

```
[Columna 1 ↑]            [Columna 2 ↓]
┌────────────┐           ┌────────────┐
│ Quote 1    │           │ Quote 2    │
│ — Nombre   │           │ — Nombre   │
└────────────┘           └────────────┘
┌────────────┐           ┌────────────┐
│ Quote 3    │           │ Quote 4    │
│ — Nombre   │           │ — Nombre   │
└────────────┘           └────────────┘
[...]                    [...]
```

**Mínimo:** 6 testimonios distintos.
**Formato de cada uno:** Quote 2-3 líneas + Nombre + Rol/Empresa + Industria.

**Si no hay 6 testimonios reales:** sustituir por sección "Lo que hemos escuchado" con quotes agregados consentidos.

### Componentes
- Magic UI: `marquee` (vertical, pausa on hover)
- shadcn: `card` (testimonial variant)

---

## 10. FAQ

**Función:** Responder objeciones reales antes de que las tengan.

### Copy

**Eyebrow:**
> LO QUE TODOS PREGUNTAN

**Section headline:**
> Preguntas frecuentes.

### 6 preguntas en accordion (shadcn)

1. **¿Cuánto cuesta el programa ORCA®?**
   El diagnóstico de 30 minutos es gratuito. El programa completo se cotiza en función del tamaño de tu empresa y la complejidad de la intervención. Te damos el rango exacto en el diagnóstico, sin sorpresas.

2. **¿En cuánto tiempo veo resultados?**
   Los primeros cambios operativos se notan en las primeras 4 semanas. La autonomía real del equipo se consolida hacia el día 90. No es un proceso rápido — es un proceso definido.

3. **¿Esto sirve para mi industria?**
   El método ORCA® aplica a empresas medianas con 15-80 empleados, sin importar la industria. Hemos trabajado en SaaS, manufactura, retail, servicios profesionales, construcción y salud. El cuello de botella del fundador es el mismo en todas.

4. **¿Y si no funciona?**
   Tenemos garantía de progreso medible a los 90 días. Si tu empresa no reduce tu carga operativa de forma cuantificable, devolvemos el último mes. Hasta hoy no hemos tenido que aplicar la cláusula.

5. **¿Tengo que ser yo quien lidere la implementación?**
   No. Tu rol cambia de operador a supervisor. Trabajamos directamente con tu equipo operativo. Tú participas en revisiones quincenales y decisiones estratégicas.

6. **¿Trabajan presencial o remoto?**
   Híbrido. Diagnóstico y revisiones por video. Implementación on-site según el tamaño y geografía. Tenemos clientes en LATAM y mercado angloparlante.

### Componentes
- shadcn: `accordion`
- Magic UI: `blur-fade` en entrada de la sección

---

## 11. CTA FINAL + FOOTER

### Función CTA
Cierre emocional + repetición del CTA primario en formato grande.

### Copy

**Section background:** Full-bleed `surface.base` con `radial-gradient copperGlow` centrado.

**Headline (display, ~80px desktop):**
> Recupera el control de tu empresa.
> En 90 días.

**Subhead:**
> Empieza con un diagnóstico de 30 minutos. Sin costo. Sin compromiso. Sin PowerPoint.

**CTA (shimmer-button extra grande):**
> Agenda tu diagnóstico gratuito →

**Trust signals (debajo):**
> ✓ 30 minutos · ✓ Sin costo · ✓ Sin compromiso

### Footer

**Layout:** 3 columnas desktop, stack mobile.

```
[Col 1: Brand]              [Col 2: Navegación]         [Col 3: Contacto]
Baumann&Co.                  Método ORCA                  info@baumann-co.com
Consultoría para fundadores  Resultados                   LinkedIn
de empresas medianas         Quién soy                    [English version →]
                             Test ORCA                    
─────────────────────────────────────────────────────────────────────
® 2026 Baumann&Co.   ·   Privacidad   ·   Términos   ·   Cookies
```

### Componentes
- Magic UI: `shimmer-button` (CTA final, variant: extra large)
- shadcn: `separator`, `button`

---

## Resumen de componentes a usar

### Magic UI (instalar vía MCP)
- `border-beam` (hero visual frame)
- `shimmer-button` (CTAs primarios)
- `marquee` (logos clientes, testimonios)
- `animated-beam` (método ORCA visualization)
- `blur-fade` (section reveals)
- `number-ticker` (métricas)
- `text-reveal` (hero headline)
- `bento-grid` (mini-cases / problema cards)
- `dot-pattern` o `grid-pattern` (backgrounds sutiles)

### shadcn/ui (instalar vía CLI)
- `button`
- `card`
- `accordion`
- `badge`
- `separator`
- `navigation-menu`
- `tooltip`

---

## Copy direction (resumen)

### Voice
- **Serio · Confiado · Cálido**
- Tutear, no usted (LATAM B2B moderno)
- Frases cortas, párrafos breves
- Verbos accionables: "recupera", "libera", "construye"
- Números concretos siempre que sea posible

### Vocabulario clave (usar)
"Atrapado", "cuello de botella", "operación", "estructura", "delegar", "autonomía", "tableros", "márgenes", "flujo de caja", "sistemas", "predecible", "diagnóstico"

### Vocabulario prohibido
"Transforma", "potencia", "descubre cómo", "soluciones integrales", "lleva al siguiente nivel", "eleva tu negocio", "sinergia", "paradigma", "disruptivo", "revolucionario", "soluciones a medida"

### Tono por sección
- **Hero:** Provocador-empático
- **Problema:** Diagnóstico honesto, sin endulzar
- **Método:** Técnico-claro, mostrar dominio
- **Beneficios:** Concreto-emocional
- **Resultados:** Frío-númerico, prueba
- **Sobre Manuel:** Humano-cercano
- **Testimonios:** Voz del cliente, sin edición
- **FAQ:** Directo, sin marketing-speak
- **CTA final:** Emocional-decisivo

---

## Próximos pasos

- [x] Fase 3 — Architecture completa
- [ ] **Fase 4 — Setup Next.js + Tailwind + shadcn + Magic UI**
- [ ] Fase 5 — Build de cada sección
- [ ] Fase 6 — Self-review + polish
