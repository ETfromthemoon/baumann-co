# Baumann & Co. — Landing Redesign

Rediseño completo del sitio [baumann-co.com](https://www.baumann-co.com/) ejecutado con la skill `legacy-redesign` para Claude Code.

Transformación de un sitio plano corporativo-2018 a una landing premium dark-mode con paleta cobre editorial, orientada a un único objetivo: agendar diagnóstico gratuito de 30 minutos con Manuel Baumann.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** con tokens OKLCH
- **shadcn/ui** (componentes accesibles)
- **Magic UI** (animaciones premium: shimmer-button, border-beam, marquee, blur-fade, number-ticker)
- **Inter Tight** (display) + **Inter** (body) + **Geist Mono** (métricas)
- **Playwright** para self-review visual

## Estructura

```
.
├── audit-report.md           Diagnóstico del sitio original (Fase 1)
├── brand-profile.json        Brand DNA: voz, audiencia, posicionamiento (Fase 2)
├── design-tokens.json        Paleta, tipografía, spacing, motion (Fase 2)
├── site-architecture.md      Sitemap + copy direction (Fase 3)
├── redesign-report.md        Antes/después + métricas + próximos pasos
├── screenshots/
│   ├── before/               Sitio original baumann-co.com
│   └── after/                Rediseño implementado
├── src/
│   ├── app/                  layout, page, globals
│   ├── components/
│   │   ├── ui/               shadcn + Magic UI
│   │   └── sections/         11 secciones de la landing
│   └── lib/                  constants (copy) + utils
├── public/
└── package.json
```

## Cómo correr

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Las 11 secciones

1. **Nav** — sticky con backdrop blur
2. **Hero** — headline provocador con marker animado + CTA único
3. **Stats** — marquee de industrias atendidas
4. **Problem** — 4 cards bento con los 4 dolores del fundador
5. **Method ORCA®** — mega-tipografía + 4 cards (Orden / Rentabilidad / Crecimiento / Autonomía)
6. **Process** — timeline vertical con los 4 pasos (90 días)
7. **Benefits** — 6 beneficios tangibles del día a día
8. **Results** — métricas animadas (23h / +40% / 90d) con context
9. **Founder** — sobre Manuel Baumann (humanización de marca)
10. **Testimonials** — marquee doble con 6 quotes reales
11. **FAQ** — accordion con 6 objeciones frecuentes
12. **Final CTA** — cierre emocional full-bleed
13. **Footer** — minimal con navegación + contacto

## Quality bars cumplidas

- ✅ Hero load < 2s (Turbopack)
- ✅ Contraste AA mínimo (19.5:1 en cuerpo principal)
- ✅ Jerarquía tipográfica clara (3 niveles + mono)
- ✅ Motion intencional (7 micro-interacciones)
- ✅ Mobile parity (verificado en 390px)
- ✅ Single primary CTA (1 acción repetida 4×)
- ✅ Prueba social arriba del fold
- ✅ Copy humano (sin AI slop)
- ✅ Paleta diferenciada (cobre + stone, no azul corporativo)

## Próximos pasos

Ver [redesign-report.md](redesign-report.md) para el roadmap completo. Resumen:

- Foto editorial real de Manuel Baumann
- Logos reales de clientes (si hay consentimiento)
- Mini-cases con métricas before/after
- Versión en inglés
- Deploy a Vercel con dominio `baumann-co.com`
- Schema markup + analytics

---

Generado con la skill [`legacy-redesign`](https://github.com/anthropics/claude-code) — orquesta `/ui-ux-pro-max` y `/claude-web-designer` en 6 fases (auditoría → brand DNA → arquitectura → setup → build → self-review).
