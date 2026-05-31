"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="section-y relative isolate border-t border-border/60 bg-card/20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade>
            <p className="eyebrow mb-5">Lo que todos preguntan</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Preguntas frecuentes.
            </h2>
          </BlurFade>
        </div>

        <BlurFade delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl">
            <Accordion className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold tracking-tight hover:text-primary md:text-xl">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 text-pretty text-base leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
