"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { Reveal } from "@/components/ui/Reveal";
import { proyectos } from "@/content";

export function Trabajos() {
  const [activo, setActivo] = useState(0);
  const proyecto = proyectos[activo];

  return (
    <section id="trabajos" className="px-5 py-20 md:px-10 md:py-18">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rojo-oscuro">
              02 — Trabajo seleccionado
            </p>
            <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] md:text-7xl">
              No son muestras.
              <br />
              Son soluciones.
            </h2>
          </div>
          <p className="max-w-md font-medium leading-relaxed text-tinta/55 md:justify-self-end">
            Tres problemas concretos, pensados desde el negocio y resueltos de
            punta a punta.
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[0.42fr_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {proyectos.map((item, index) => (
              <button
                key={item.cliente}
                type="button"
                onClick={() => setActivo(index)}
                className={`min-w-48 rounded-2xl border p-5 text-left transition-all lg:min-w-0 ${
                  activo === index
                    ? "border-tinta bg-tinta text-beige"
                    : "border-tinta/15 hover:border-tinta"
                }`}
              >
                <span
                  className={`mb-8 block text-xs font-bold ${
                    activo === index ? "text-naranja" : "text-rojo-oscuro"
                  }`}
                >
                  {item.code}
                </span>
                <span className="font-display text-lg font-extrabold">
                  {item.cliente}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={proyecto.cliente}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2rem] bg-naranja"
            >
              <div className="grid min-h-[620px] md:grid-rows-[1.15fr_0.85fr]">
                <div className="relative flex items-center justify-center overflow-hidden border-b border-tinta/20 p-8">
                  <div className="w-full max-w-2xl rotate-[-2deg] rounded-2xl bg-beige p-3 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-tinta/20" />
                      <span className="h-2 w-2 rounded-full bg-tinta/20" />
                      <span className="h-2 w-2 rounded-full bg-tinta/20" />
                    </div>
                    {proyecto.imagen ? (
                      <div className="relative aspect-[16/8] overflow-hidden rounded-xl bg-tinta">
                        <Image
                          src={proyecto.imagen}
                          alt={`Captura del proyecto para ${proyecto.cliente}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="grid aspect-[16/8] grid-cols-[0.35fr_1fr] gap-3 rounded-xl bg-tinta p-4">
                        <div className="rounded-lg bg-beige/10" />
                        <div className="grid grid-rows-[0.35fr_1fr] gap-3">
                          <div className="rounded-lg bg-naranja" />
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-beige/10" />
                            <div className="rounded-lg bg-beige/10" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid gap-7 p-7 md:grid-cols-[1fr_1fr] md:p-8">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em]">
                      {proyecto.tipo}
                    </p>
                    <h3 className="font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-5xl">
                      {proyecto.titulo}
                    </h3>
                  </div>
                  <div className="space-y-5 text-sm font-semibold leading-relaxed">
                    <p>
                      <span className="mb-1 block text-xs uppercase tracking-[0.14em] opacity-55">
                        El problema
                      </span>
                      {proyecto.problema}
                    </p>
                    <p>
                      <span className="mb-1 block text-xs uppercase tracking-[0.14em] opacity-55">
                        La respuesta
                      </span>
                      {proyecto.resultado}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-tinta/30 px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
