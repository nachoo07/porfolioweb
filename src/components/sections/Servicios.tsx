"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { RoundLink } from "@/components/ui/RoundLink";
import { iconosServicio } from "@/components/ui/iconos";
import { servicios } from "@/content";
import { linkWhatsapp } from "@/lib/site";

export function Servicios() {
  const tarjetas = servicios.filter((s) => s.tarjeta);

  return (
    <section id="capacidades" className="bg-tinta py-20 text-beige md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-14 grid gap-7 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
              01 — Servicios
            </p>
            <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] md:text-7xl">
              Qué puedo hacer por tu negocio.
            </h2>
          </div>
          <p className="max-w-lg text-lg font-medium leading-relaxed text-beige/60 md:justify-self-end">
            Desde una landing para conseguir consultas hasta un sistema que
            ordene toda tu operación. Diseño y desarrollo la solución completa,
            sin que tengas que coordinar varios proveedores.
          </p>
        </Reveal>

        <div className="capability-marquee mb-10 -mx-5 overflow-hidden border-y border-beige/15 py-4 md:-mx-10">
          <div className="capability-marquee-track flex w-max gap-3 px-3">
            {[...servicios, ...servicios].map((servicio, index) => {
              const Icon = iconosServicio[servicio.icono];
              return (
                <div
                  key={`${servicio.titulo}-${index}`}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-beige/25 px-5 py-3 text-sm font-bold"
                >
                  <Icon size={18} />
                  {servicio.titulo}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {tarjetas.map((servicio, index) => {
            const Icon = iconosServicio[servicio.icono];
            return (
              <motion.article
                key={servicio.titulo}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className={`${servicio.layout} group flex min-h-[300px] flex-col overflow-hidden rounded-[2rem] p-6 md:p-7 ${
                  servicio.destacado
                    ? "bg-naranja text-tinta"
                    : "bg-beige text-tinta"
                }`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-tinta ${
                      servicio.destacado ? "text-naranja" : "text-beige"
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="font-display text-sm font-extrabold">
                    {servicio.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] opacity-50">
                    {servicio.titulo}
                  </p>
                  <h3 className="mb-3 max-w-2xl font-display text-3xl font-extrabold leading-[0.95] tracking-[-0.035em]">
                    {servicio.resumen}
                  </h3>
                  <p className="mb-5 max-w-2xl text-sm font-medium leading-relaxed opacity-60">
                    {servicio.detalle}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {servicio.incluye.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-current/25 px-3 py-1.5 text-xs font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={linkWhatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 border-b border-current pb-1 text-sm font-bold"
                    aria-label={`Consultar por ${servicio.titulo}`}
                  >
                    Consultar este servicio
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <Reveal className="mt-12 flex flex-col justify-between gap-6 rounded-[2rem] border border-beige/20 p-7 md:flex-row md:items-center md:p-9">
          <div>
            <p className="mb-2 font-display text-2xl font-extrabold">
              ¿No sabés cuál de estas opciones necesitás?
            </p>
            <p className="font-medium text-beige/55">
              Contame el problema. La solución la definimos juntos.
            </p>
          </div>
          <RoundLink href={linkWhatsapp}>Contame qué querés resolver</RoundLink>
        </Reveal>
      </div>
    </section>
  );
}
