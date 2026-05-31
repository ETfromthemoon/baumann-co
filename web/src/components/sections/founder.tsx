"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Founder() {
  return (
    <section
      id="sobre-manuel"
      className="section-y relative isolate border-t border-border/60 bg-card/20"
    >
      <div className="container-x">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Portrait */}
          <BlurFade>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-card">
              <BorderBeam
                size={300}
                duration={14}
                colorFrom="oklch(0.555 0.163 48.998)"
                colorTo="oklch(0.828 0.189 84.429)"
              />
              {/* Placeholder editorial visual — no stock photo */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card via-card to-background">
                <div className="text-center">
                  <p className="font-display text-7xl font-bold leading-none tracking-tighter text-primary/80 md:text-8xl">
                    MB
                  </p>
                  <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Manuel Baumann
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Founder · Baumann&Co.
                  </p>
                </div>
              </div>
              {/* Subtle grain overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>\")",
                }}
              />
            </div>
          </BlurFade>

          {/* Copy */}
          <div>
            <BlurFade delay={0.15}>
              <p className="eyebrow mb-5">Quién está del otro lado</p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Hola. Soy Manuel Baumann.
              </h2>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                <p>
                  He trabajado con más de 200 fundadores en los últimos 7 años.
                  Antes de Baumann&Co. dirigí operaciones en empresas medianas
                  y vi de cerca cómo se rompen no por falta de talento, sino
                  por falta de estructura.
                </p>
                <p>
                  Cuando hablamos en el diagnóstico, no vas a recibir un
                  PowerPoint. Vas a recibir mi lectura honesta de tu empresa
                  en 30 minutos. Si tiene sentido seguir, te lo digo. Si no,
                  te lo digo también.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href={SITE.primaryCTA.href}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-5"
                  )}
                >
                  Agenda 30 minutos conmigo
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                  <ExternalLink className="size-3.5" />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
