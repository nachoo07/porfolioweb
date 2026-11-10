import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { preguntas } from "@/content";

export function Faq() {
  return (
    <section
      id="faq"
      className="border-y border-tinta px-5 py-20 md:px-10 md:py-18"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rojo-oscuro">
            05 — Sin letra chica
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Preguntas honestas. Respuestas directas.
          </h2>
        </Reveal>

        <Accordion.Root
          type="single"
          collapsible
          className="border-t border-tinta"
        >
          {preguntas.map((faq, index) => (
            <Accordion.Item
              key={faq.pregunta}
              value={`faq-${index}`}
              className="border-b border-tinta"
            >
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl font-extrabold md:text-2xl">
                <span>
                  <span className="mr-4 text-xs text-rojo-oscuro">
                    0{index + 1}
                  </span>
                  {faq.pregunta}
                </span>
                <ChevronDown className="shrink-0 transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="max-w-2xl pb-7 pl-10 font-medium leading-relaxed text-tinta/60">
                  {faq.respuesta}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
