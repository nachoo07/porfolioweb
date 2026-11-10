import { Reveal } from "@/components/ui/Reveal";
import { pasos } from "@/content";

export function Proceso() {
  return (
    <section
      id="proceso"
      className="bg-tinta px-5 py-20 text-beige md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            03 — Cómo trabajo
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Claridad antes que humo. Avances antes que promesas.
          </h2>
        </Reveal>
        <div className="grid border-t border-beige/25 md:grid-cols-4">
          {pasos.map((paso, index) => (
            <Reveal
              key={paso.num}
              delay={index * 0.08}
              className="border-b border-beige/25 py-8 first:pl-0 last:border-r-0 md:border-b-0 md:border-r md:px-7"
            >
              <p className="mb-14 font-display text-5xl font-extrabold text-naranja">
                {paso.num}
              </p>
              <h3 className="mb-3 font-display text-2xl font-extrabold">
                {paso.titulo}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-beige/55">
                {paso.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
