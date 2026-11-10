# porfolioweb

Portfolio de Ignacio Skibski — desarrollo web y software a medida para pymes y emprendedores.

## Stack

- Next.js (App Router) con static export (`output: "export"`)
- TypeScript + Tailwind CSS v4
- Sin backend: contacto vía WhatsApp y mailto

## Comandos

```bash
npm run dev     # desarrollo
npm run build   # genera el sitio estático en ./out
npm run lint
```

El deploy es manual: subir el contenido de `out/` por FTP a Hostinger.

## Estructura

```
src/app                  layout, page y estilos globales
src/components/layout    Header, Footer
src/components/sections  una sección por archivo (Hero, Servicios, ...)
src/components/ui        componentes reutilizables
src/content              datos del sitio (servicios, planes, proyectos, FAQ)
src/lib/site.ts          datos de contacto y navegación
public/images/proyectos  capturas de los trabajos
```
