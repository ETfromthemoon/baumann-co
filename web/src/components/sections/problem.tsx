"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card } from "@/components/ui/card";
import { PROBLEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section
      id="diagnostico"
      className="section-y relative isolate overflow-hidden"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">El diagnóstico honesto</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Si tu empresa no puede operar sin ti,{" "}
              <span className="text-muted-foreground">
                no tienes una empresa. Tienes un trabajo más exigente.
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              El 73% de los fundadores de empresas medianas trabajan más de 60
              horas semanales. No por falta de equipo. Por falta de estructura.
            </p>
          </BlurFade>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {PROBLEMS.map((problem, i) => (
            <BlurFade key={problem.id} delay={0.3 + i * 0.08}>
              <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-card/60 md:p-10">
                {/* Number watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-primary/[0.06] transition-all duration-500 group-hover:text-primary/[0.10] md:text-[9rem]"
                >
                  {problem.number}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      {problem.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {problem.pillar}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                    {problem.headline}
                  </h3>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                    {problem.body}
                  </p>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.7}>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-balance text-lg text-muted-foreground">
              ¿Te suena familiar? El método ORCA® ataca los cuatro problemas en
              paralelo.
            </p>
            <Link
              href="#metodo"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Ver el método
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
