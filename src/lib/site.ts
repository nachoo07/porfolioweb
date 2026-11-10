export const site = {
  nombre: "Mate & Código",
  titulo: "Diseño y desarrollo de productos digitales para negocios",
  descripcion:
    "Páginas, sistemas, automatizaciones y productos digitales para negocios que quieren avanzar en serio.",
  url: "https://iskibski.dev",
  email: "nanoskibski@gmail.com",
  whatsapp: "5493816573754",
  mensajeWhatsapp:
    "Hola, te escribo desde tu web. Quiero consultarte por un proyecto.",
  // TODO: reemplazar por el perfil real de Instagram.
  instagram: "https://instagram.com/pendiente",
} as const;

export const linkWhatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.mensajeWhatsapp,
)}`;

export const linkMail = `mailto:${site.email}?subject=${encodeURIComponent(
  "Consulta por un proyecto",
)}`;

export const linkInstagram = site.instagram;

export const secciones = [
  { id: "inicio", label: "Inicio" },
  { id: "capacidades", label: "Capacidades" },
  { id: "trabajos", label: "Trabajo" },
  { id: "proceso", label: "Proceso" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" },
] as const;

/** Links del navbar: Inicio va en el logo; Sobre mí entra, FAQ y Contacto quedan fuera. */
export const navLinks = secciones.filter(
  (s) => !["inicio", "faq", "contacto"].includes(s.id),
);
