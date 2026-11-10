import { ArrowRight, Mail, MessageCircle } from "lucide-react";

import { Instagram } from "@/components/ui/iconos";
import { Reveal } from "@/components/ui/Reveal";
import { linkInstagram, linkMail, linkWhatsapp } from "@/lib/site";

export function Contacto() {
  return (
    <section id="contacto" className="bg-naranja px-5 py-20 md:px-10 md:py-18">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-10 text-xs font-bold uppercase tracking-[0.18em]">
            06 — Tu turno
          </p>
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="group block border-y border-tinta py-8 md:py-12"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-[clamp(3.1rem,9vw,9rem)] font-extrabold leading-[0.86] tracking-[-0.04em]">
                HAGAMOS ALGO
                <br />
                QUE IMPORTE.
              </h2>
              <ArrowRight
                className="hidden transition-transform duration-500 group-hover:translate-x-4 md:block"
                size={70}
              />
            </div>
          </a>
        </Reveal>

        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md font-semibold leading-relaxed">
            Contame qué necesitás. Te respondo con una propuesta clara y una
            primera charla sin costo.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center gap-3 rounded-full bg-tinta px-6 font-bold text-beige transition-transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Escribime por WhatsApp
            </a>
            <a
              href={linkInstagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-tinta transition-colors hover:bg-tinta hover:text-naranja"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={linkMail}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-tinta transition-colors hover:bg-tinta hover:text-naranja"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
