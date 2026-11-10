import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type RoundLinkProps = {
  href: string;
  children: ReactNode;
  /** Variante oscura (fondo tinta) vs. clara (fondo beige). */
  dark?: boolean;
  className?: string;
};

/** Enlace tipo píldora con flecha, usado en los CTA del sitio. */
export function RoundLink({
  href,
  children,
  dark = false,
  className = "",
}: RoundLinkProps) {
  const externo = href.startsWith("http");

  return (
    <a
      href={href}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noreferrer" : undefined}
      className={`group inline-flex min-h-14 items-center justify-between gap-6 rounded-full px-6 text-sm font-bold transition-all hover:-translate-y-1 ${
        dark
          ? "bg-tinta text-beige hover:bg-naranja"
          : "bg-beige text-tinta hover:bg-white"
      } ${className}`}
    >
      {children}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-current/10">
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}
