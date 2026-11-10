import Image from "next/image";

import { site } from "@/lib/site";

type LogoProps = {
  /** "oscuro" usa la versión del logo pensada para fondos oscuros. */
  tono?: "claro" | "oscuro";
  /** Muestra solo el isotipo (ideal para mobile). */
  soloMarca?: boolean;
  className?: string;
};

export function Logo({
  tono = "claro",
  soloMarca = false,
  className = "",
}: LogoProps) {
  if (soloMarca) {
    return (
      <Image
        src="/brand/brand-mark.svg"
        alt={site.nombre}
        width={36}
        height={36}
        className={`h-9 w-9 ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src={tono === "oscuro" ? "/brand/logo-horizontal-dark.svg" : "/brand/logo-horizontal.svg"}
      alt={site.nombre}
      width={171}
      height={30}
      className={`w-auto ${className}`}
      priority
    />
  );
}
