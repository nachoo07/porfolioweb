import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";

export function SobreMi() {
  return (
    <section id="sobre-mi" className="px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px] border-y border-tinta py-8 md:py-10">
        <div className="grid items-center gap-8 md:grid-cols-[240px_1fr] lg:gap-14">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-60 overflow-hidden rounded-[1.5rem] bg-naranja md:mx-0">
              <Image
                src="/mi/sobremi.jpeg"
                alt="Retrato de Ignacio Skibski"
                fill
                sizes="(max-width: 768px) 240px, 240px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-rojo-oscuro">
              04 — Sobre mí
            </p>
            <h2 className="mb-4 max-w-4xl font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.025em] md:text-5xl">
              Pienso como diseñador. Construyo como programador.
            </h2>
            <p className="mb-6 max-w-3xl font-medium leading-relaxed text-tinta/60">
              Soy Ignacio. Diseño y desarrollo soluciones digitales para
              negocios, empezando por entender qué tiene que cambiar para que el
              proyecto realmente valga la pena.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-tinta/25 px-4 py-2 text-sm font-bold">
                Técnico en Programación
              </span>
              <span className="rounded-full border border-tinta/25 px-4 py-2 text-sm font-bold">
                Diseñador UX/UI
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
