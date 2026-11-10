import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-tinta px-5 py-7 text-beige md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 text-xs font-bold uppercase tracking-[0.14em] md:flex-row md:items-center">
        <a href="#inicio" aria-label="Ir al inicio">
          <Logo tono="oscuro" className="h-7" />
        </a>
        <span className="text-beige/40">
          © {new Date().getFullYear()} {site.nombre} · Argentina
        </span>
      </div>
    </footer>
  );
}
