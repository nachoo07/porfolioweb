import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { RoundLink } from "@/components/ui/RoundLink";
import { linkWhatsapp } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen px-5 pb-10 pt-28 md:px-10 md:pb-12 md:pt-25"
    >
      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1400px] flex-col justify-between">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-naranja" /> Diseño +
              desarrollo independiente
            </p>
          </Reveal>
          <Reveal delay={0.1} className="max-w-xs md:text-right">
            <p className="text-sm font-medium leading-relaxed text-tinta/60">
              Transformo ideas de negocio en experiencias digitales que
              funcionan, se entienden y se sienten distintas.
            </p>
          </Reveal>
        </div>

        <div className="py-14 md:py-10">
          <Reveal>
            <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.82] tracking-[-0.04em]">
              HAGO QUE
              <br />
              LO DIGITAL
            </h1>
          </Reveal>
          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mt-1">
            <Reveal delay={0.08}>
              <div className="inline-flex items-center gap-3 rounded-full bg-naranja px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                <span className="h-2 w-2 rounded-full bg-tinta" />
                Disponible para nuevos proyectos
              </div>
            </Reveal>
            <Reveal delay={0.12} className="self-end text-right">
              <h1 className="font-display text-[clamp(3.2rem,11.5vw,11rem)] font-extrabold leading-[0.82] tracking-[-0.04em] text-naranja">
                IMPORTE.
              </h1>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 border-t border-tinta pt-6 md:grid-cols-[1fr_auto_1fr] md:items-end">
          <p className="max-w-sm text-sm font-semibold leading-relaxed">
            Páginas, sistemas, automatizaciones y productos digitales para
            negocios que quieren avanzar en serio.
          </p>
          <a
            href="#capacidades"
            className="mx-auto hidden flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] md:flex"
          >
            Explorar <ArrowDownRight />
          </a>
          <div className="md:justify-self-end">
            <RoundLink href={linkWhatsapp} dark>
              Contame tu idea
            </RoundLink>
          </div>
        </div>
      </div>
    </section>
  );
}
