# Audit Report — Baumann & Co.

**URL:** https://www.baumann-co.com/
**Fecha:** 2026-05-30
**Auditor:** legacy-redesign skill
**Screenshots:** `screenshots/before/home-desktop.png` + `home-mobile.png`

---

## Resumen ejecutivo

| Dimensión | Score | Veredicto |
|---|---|---|
| **Estética** | 25/70 | Anticuada — paleta corporativa genérica, cero motion, sin imagery custom |
| **Conversión** | 3/10 | Múltiples CTAs compitiendo, sin prueba social above-fold, sin casos visibles |
| **Técnico (estimado)** | 5/10 | Estructura básica, performance OK pero sin optimizaciones modernas |
| **Mensaje/Copy** | 8/10 | El copy es lo más fuerte del sitio — provocador, directo, empático |

**Recomendación:** Rediseño completo. **Mantener el ADN del mensaje** (provocación emocional al fundador, metodología ORCA®, foco en autonomía) pero **reposicionar visualmente** como consultoría B2B premium serio que justifique pricing alto.

---

## 1. Qué hacen y a quién le hablan

**Negocio:** Baumann & Co. — consultoría empresarial para fundadores de medianas empresas en Latinoamérica (con versión inglesa para mercado anglo).

**Propuesta:** Método ORCA® (Orden / Rentabilidad / Crecimiento / Autonomía) en ~90 días para que el fundador deje de ser el cuello de botella operativo.

**Cliente ideal:** Fundador-CEO de empresa mediana ($1M-$50M USD revenue), con 5-50+ empleados, atrapado en operación 60+ horas semanales, sin sistemas documentados, miedo a delegar.

**Diferenciador real:** El método estructurado (4 pilares + 4 pasos), las métricas concretas (23h/sem, +40% márgenes, 90 días), y la voz directa-emocional ("eso te está matando").

**Diferenciador NO comunicado bien:** No vemos quién es Manuel Baumann (fundador del consultora), credenciales, casos reales, ni logos de clientes — todo lo que daría autoridad.

---

## 2. Diagnóstico estético detallado

### Paleta de colores actual
- Azul navy (#1E3A5F aprox) en bloques de fondo
- Amarillo brillante (#FFC600) en acento del headline
- Rojo/naranja (#E84A1B aprox) en botones primarios y números
- Blanco/gris claro como base alterna
- Sin neutros sofisticados, sin paleta de superficies

**Problema:** Combinación azul-rojo-amarillo es genérica corporativa LATAM años 2010. No diferencia ni connota premium.

### Tipografía
- Una sola familia sans-serif (parece Helvetica Neue / Inter / Arial)
- Solo dos pesos: regular + bold
- Sin display type contrastada
- Letter-spacing default, sin tightening en headlines grandes
- Scale típica Tailwind, sin escala intencional

**Problema:** Falta jerarquía visual y personalidad. El sitio podría ser cualquier consultora.

### Layout y spacing
- Block-based, secciones alternadas claro/oscuro
- Padding vertical aceptable (~80px) pero secciones se sienten apretadas internamente
- Cards con bordes finos sin shadow ni radius distintivo
- Sin grid asimétrico, sin bento layouts, sin composición creativa

### Motion
- **Cero animaciones detectadas.**
- Sin scroll triggers
- Sin hover states diferenciados
- Sin micro-interacciones
- Sin transitions

### Imagery
- 4 thumbnails de videos del fundador (talking head, sin estilo unificado)
- Sin ilustraciones custom, sin iconografía propia
- Los números 01-04 son los únicos elementos gráficos secundarios
- Footer sin imagen ni logo destacado

### Visual detail
- Borders genéricos
- Sin shadow systems
- Radius mínimo (4-8px)
- Sin texturas, sin grain, sin gradientes intencionales

**Total estético: 25/70.** El sitio se siente "funcional 2018", no "premium 2026".

---

## 3. Diagnóstico de conversión

### CTAs presentes (problemáticos)

En el hero hay **2 CTAs compitiendo**:
- "AGENDA AQUI!" (botón naranja sólido)
- "Diagnóstico GRATIS" (botón outline)

Más abajo aparecen:
- 4 links a "Análisis ORDEN/RENTABILIDAD/CRECIMIENTO/AUTONOMIA"
- "Agenda tu diagnóstico gratuito" al final
- Link a "Archivos" en nav
- Link a "test-fundador-quiz"

**Problema:** ~8 acciones posibles distintas. Esto **mata conversión** porque diluye foco.

### Prueba social

| Elemento | Presente |
|---|---|
| Logos clientes above fold | ❌ |
| Logos clientes anywhere | ❌ |
| Testimonios | ❌ |
| Casos con métricas | ❌ |
| Número de clientes atendidos | ❌ |
| Reviews/ratings | ❌ |
| Quote del fundador o team | ❌ |
| Foto del fundador | ❌ |

**Las métricas "23h / 40% / 90d" están aisladas sin contexto** — el visitante no sabe de dónde salen (sample size, fuente, metodología).

### Trust signals

- ✓ Privacidad / términos / cookies en footer
- ✓ "Sin costo · Sin compromiso" en CTA final
- ✗ Sin "Años transformando empresas"
- ✗ Sin certificaciones, partnerships
- ✗ Sin medios donde han salido
- ✗ Sin About / quién es Manuel Baumann

### Friction / objeciones

- No hay FAQ
- No se ve precio ni rango
- No se ve duración exacta más allá del "30 días primeros resultados / 90 días autonomía"
- No se ve garantía ni qué pasa si no funciona
- Quiz `/test-fundador-quiz` existe pero no se destaca como path natural

**Score conversión: 3/10.** La estructura empuja al diagnóstico gratis pero pierde el visitante por falta de confianza intermedia.

---

## 4. Lo que el sitio hace BIEN (no romper)

1. **Headline provocador.** "Tu empresa depende de ti. Y eso te está matando." es excelente — habla del dolor real con tensión emocional. Mantener.
2. **Método ORCA® con nombre propio.** Bueno para branding. Mantener y visualizar mejor.
3. **4 pasos claros del proceso.** Estructura ya pensada. Mantener pero rediseñar visualmente.
4. **6 beneficios tangibles del día-a-día.** Copy bueno: "De estar 60+ horas en operación a 20 horas en estrategia." Mantener copy, rediseñar formato.
5. **Métricas concretas.** 23h / 40% / 90d. Mantener pero contextualizar (mostrar de dónde salen).
6. **Versión en inglés** ya disponible. Mantener arquitectura bilingüe.
7. **CTA final con tres garantías** (sin costo / sin compromiso / 30 min). Patrón correcto, mantener.

---

## 5. Top 10 hallazgos críticos para rediseño

1. **Hero sin prueba social arriba del fold.** Agregar logos / métrica agregada / quote.
2. **2 CTAs compitiendo en hero.** Reducir a UNO ("Agenda tu diagnóstico gratuito").
3. **Sin foto/identidad de Manuel Baumann.** La marca depende del fundador — mostrarlo genera trust.
4. **Sin casos reales.** Inventar/recrear 2-3 mini-casos con métricas before/after.
5. **Método ORCA® subexplotado visualmente.** Convertir en stepper animado con `animated-beam` de Magic UI.
6. **Sin testimonios.** Agregar sección con marquee de quotes reales.
7. **Sin FAQ.** Agregar accordion con top 5 objeciones (costo, tiempo, industria, garantía, esfuerzo).
8. **Paleta genérica.** Repensar a paleta premium consultoría (ver brand-profile.json fase 2).
9. **Sin motion.** Implementar scroll triggers + micro-interactions intencionales.
10. **Mobile cramped.** El método toma demasiado scroll en mobile con 4 video thumbnails apilados — repensar.

---

## 6. Stack actual detectado

- CDN imágenes: cloudfront (sitio con builder tipo Webflow / hosted)
- Calendly + HubSpot meetings como destinos de conversión
- HTML estático aparente (no React/Next observable desde fuera)
- Footer con copyright 2026 (sitio mantenido)

**Implicancia:** No hay dependencia técnica con el sitio actual. Podemos rehacer 100% en Next.js sin perder data.

---

## 7. Páginas internas detectadas

| URL | Propósito | Estado |
|---|---|---|
| `/` | Home | Auditada aquí |
| `/english` | Versión inglés | Similar arquitectura |
| `/test-fundador-quiz` | Quiz lead magnet ORCA® (12 preguntas) | Subexplotado — buen lead magnet |
| `/formulario_descarga` | Descarga de recursos | A revisar |
| `/analisis-orden` | Página vertical Orden | A revisar |
| `/analisis-rentabilidad` | Página vertical Rentabilidad | A revisar |
| `/analisis-crecimiento` | Página vertical Crecimiento | A revisar |
| `/analisis-autonomia` | Página vertical Autonomía | A revisar |

**Decisión para rediseño:** Empezar con `/` home rediseñada. Las 4 páginas de análisis y el quiz pueden migrar después.

---

## 8. Identificación de audiencia (buyer persona inferido)

**Nombre:** Diego, 42 años
**Rol:** Fundador-CEO de empresa mediana
**Industria:** Servicios profesionales, manufactura mediana, retail/distribución (LATAM)
**Tamaño empresa:** 15-80 empleados, $2M-$15M USD revenue anual
**Dolor principal:** Trabaja 60-70h/semana, "todo pasa por él", se siente atrapado, no puede vacacionar
**Awareness:** Sabe que tiene problema (problem-aware) pero no conoce el método ORCA® (solution-unaware)
**Objeción principal:** "¿Esto realmente va a funcionar para MI empresa? ¿En cuánto tiempo veo resultados?"
**Lo que necesita ver para convertir:**
1. Que otros fundadores como él (mismo perfil) lograron transformación
2. Prueba concreta de resultados con métricas
3. Que el método es estructurado, no improvisado
4. Que Manuel sabe de qué habla (credenciales)
5. Que es un primer paso de bajo riesgo (diagnóstico gratis)

---

## 9. Plan recomendado para Fase 2

**Mood de marca nueva (3 adjetivos):** Serio · Confiado · Cálido

**Posicionamiento visual:** Consultoría B2B premium estilo "Linear meets McKinsey digital meets una marca con alma latinoamericana". No corporate-aburrido pero tampoco startup-jugado.

**Paleta a explorar:**
- Base oscura editorial: `#0c0a09` (stone-950) o `#0a0a0a` (neutral-950)
- Neutros warm: `#fafaf9` a `#1c1917` (stone scale)
- Acento dorado/cobre profundo: `#a16207` o `#92400e` — premium, evoca rentabilidad/orden
- Acento opcional cálido: `#dc2626` solo para CTAs urgentes

**Tipografía a explorar:**
- Display: **Söhne Display** (paid) o **Inter Tight** (free, casi tan premium)
- Body: **Inter** o **Geist**
- Accent monoespacial opcional: **Geist Mono** para métricas

**Motion principle:** "Invisible cuando funciona". Scroll triggers sutiles, easing curve `cubic-bezier(0.16, 1, 0.3, 1)`, duraciones 300-500ms.

---

## 10. Próximos pasos

- [x] Fase 1 — Auditoría completada
- [ ] **Fase 2 — Generar brand-profile.json y design-tokens.json**
- [ ] Fase 3 — Site architecture con copy direction
- [ ] Fase 4 — Setup Next.js + Tailwind + shadcn + Magic UI
- [ ] Fase 5 — Build de landing
- [ ] Fase 6 — Self-review con Playwright

**Archivos generados en esta fase:**
- `audit-report.md` (este archivo)
- `screenshots/before/home-desktop.png`
- `screenshots/before/home-mobile.png`
