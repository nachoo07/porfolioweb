"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { RoundLink } from "@/components/ui/RoundLink";
import { linkWhatsapp, navLinks } from "@/lib/site";

export function Header() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const cerrarConEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [abierto]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-tinta/10 bg-beige/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
          <Logo className="hidden h-8 md:block" />
          <Logo soloMarca className="md:hidden" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs font-bold uppercase tracking-[0.16em] transition-opacity hover:opacity-45"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-tinta px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-beige transition-colors hover:bg-naranja md:block"
        >
          Hablemos
        </a>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-mobile"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden"
        >
          {abierto ? <X /> : <Menu />}
        </button>
      </div>

      {abierto && (
        <div
          id="menu-mobile"
          className="flex flex-col gap-5 border-t border-tinta/10 bg-beige px-5 py-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setAbierto(false)}
              className="font-display text-2xl font-bold"
            >
              {link.label}
            </a>
          ))}
          <RoundLink href={linkWhatsapp} dark>
            Hablemos por WhatsApp
          </RoundLink>
        </div>
      )}
    </nav>
  );
}
