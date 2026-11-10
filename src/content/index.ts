// Contenido del sitio, separado de los componentes.

/** Claves de ícono; se mapean a lucide-react en los componentes. */
export type IconoServicio =
  | "globo"
  | "carrito"
  | "panel"
  | "bot"
  | "flujo"
  | "lapiz"
  | "llave";

export type Servicio = {
  icono: IconoServicio;
  titulo: string;
  resumen: string;
  detalle: string;
  index: string;
  incluye: string[];
  /** Columnas en la grilla lg (Tailwind). */
  layout: string;
  /** Tarjeta con acento naranja. */
  destacado: boolean;
  /** Si entra en la grilla de tarjetas (los dos últimos solo van en el marquee). */
  tarjeta: boolean;
};

export type Proyecto = {
  tipo: string;
  titulo: string;
  cliente: string;
  problema: string;
  resultado: string;
  tags: string[];
  code: string;
  /** Captura en /public/images/proyectos. Sin imagen se muestra un placeholder. */
  imagen?: string;
};

export type Paso = {
  num: string;
  titulo: string;
  texto: string;
};

export type Pregunta = {
  pregunta: string;
  respuesta: string;
};

export const servicios: Servicio[] = [
  {
    icono: "globo",
    titulo: "Web & landing page",
    resumen: "Una presencia digital que genera confianza y consultas",
    detalle:
      "Diseño y desarrollo una web clara, rápida y enfocada en que te encuentren, entiendan tu propuesta y te contacten.",
    index: "01",
    incluye: ["Diseño responsive", "Mensaje y estructura", "Contacto directo"],
    layout: "lg:col-span-8",
    destacado: false,
    tarjeta: true,
  },
  {
    icono: "carrito",
    titulo: "Tienda online",
    resumen: "Tu negocio abierto 24/7",
    detalle:
      "Catálogo, carrito y cobros online en una tienda que vos mismo podés administrar.",
    index: "02",
    incluye: ["Catálogo", "Medios de pago", "Autogestión"],
    layout: "lg:col-span-4",
    destacado: true,
    tarjeta: true,
  },
  {
    icono: "panel",
    titulo: "Sistema de gestión",
    resumen: "Todo el negocio en un lugar",
    detalle:
      "Clientes, stock, cuotas, ventas y reportes en una herramienta construida para tu forma de trabajar.",
    index: "03",
    incluye: ["Panel a medida", "Base de datos", "Reportes"],
    layout: "lg:col-span-4",
    destacado: false,
    tarjeta: true,
  },
  {
    icono: "bot",
    titulo: "WhatsApp + IA",
    resumen: "Respuestas incluso cuando no estás",
    detalle:
      "Asistentes que atienden, clasifican consultas y derivan a una persona cuando hace falta.",
    index: "04",
    incluye: ["Respuestas automáticas", "Derivación", "Atención 24/7"],
    layout: "lg:col-span-4",
    destacado: true,
    tarjeta: true,
  },
  {
    icono: "flujo",
    titulo: "Automatizaciones",
    resumen: "Que lo repetitivo trabaje solo",
    detalle:
      "Conecto las herramientas que ya usás y elimino tareas manuales que te hacen perder tiempo.",
    index: "05",
    incluye: ["Integraciones", "Flujos automáticos", "Menos carga manual"],
    layout: "lg:col-span-4",
    destacado: false,
    tarjeta: true,
  },
  {
    icono: "lapiz",
    titulo: "Diseño UX/UI",
    resumen: "Diseñar antes de construir",
    detalle:
      "Interfaces y recorridos claros en Figma para validar la experiencia antes de programarla.",
    index: "06",
    incluye: ["Flujos", "Prototipo", "Diseño en Figma"],
    layout: "",
    destacado: false,
    tarjeta: false,
  },
  {
    icono: "llave",
    titulo: "Soporte",
    resumen: "Tu producto siempre al día",
    detalle:
      "Mejoras, seguridad y mantenimiento para que lo que construimos siga funcionando bien.",
    index: "07",
    incluye: ["Actualizaciones", "Seguridad", "Rendimiento"],
    layout: "",
    destacado: false,
    tarjeta: false,
  },
];

export const proyectos: Proyecto[] = [
  {
    tipo: "Producto digital · 2026",
    titulo: "Una escuela sin cuadernos ni planillas.",
    imagen: "/images/proyectos/xentrago.png",
    cliente: "Escuela de fútbol",
    problema:
      "Alumnos, cuotas, pagos y asistencias estaban repartidos entre Excel, papel y mensajes.",
    resultado:
      "Diseñé un sistema único para gestionar la operación y comunicarse con las familias.",
    tags: ["UX/UI", "Sistema web", "Automatización"],
    code: "01",
  },
  {
    tipo: "Web institucional · 2026",
    titulo: "Confianza para una empresa que trabaja la tierra.",
    imagen: "/images/proyectos/bioservice.png",
    cliente: "Empresa agropecuaria",
    problema:
      "Necesitaban explicar sus servicios con claridad y generar una primera impresión profesional.",
    resultado:
      "Construí una landing directa, visual y enfocada en iniciar conversaciones comerciales.",
    tags: ["Estrategia", "Diseño web", "Landing"],
    code: "02",
  },
  {
    tipo: "Landing comercial · 2026",
    titulo: "Una propuesta de marketing difícil de ignorar.",
    imagen: "/images/proyectos/domika.png",
    cliente: "Empresa de marketing",
    problema:
      "Su oferta era potente, pero no se entendía rápido ni llevaba al visitante a consultar.",
    resultado:
      "Organicé el mensaje y diseñé una experiencia con ritmo, jerarquía y foco en conversión.",
    tags: ["Copy", "UX/UI", "Conversión"],
    code: "03",
  },
];

export const pasos: Paso[] = [
  {
    num: "01",
    titulo: "Entender",
    texto: "Primero hablamos del negocio, no de tecnología.",
  },
  {
    num: "02",
    titulo: "Definir",
    texto: "Una propuesta con alcance, tiempos y presupuesto claros.",
  },
  {
    num: "03",
    titulo: "Construir",
    texto: "Ves avances reales y participás de cada decisión.",
  },
  {
    num: "04",
    titulo: "Lanzar",
    texto: "Publicamos, medimos y sigo cerca después de entregar.",
  },
];

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Depende de lo que necesites: una landing no cuesta lo mismo que un sistema de gestión. Después de una primera charla sin costo te paso un presupuesto cerrado, por escrito y sin sorpresas.",
  },
  {
    pregunta:
      "No sé bien qué necesito, solo tengo un problema. ¿Te puedo escribir igual?",
    respuesta:
      "Sí, es lo más común. Contame qué te quita tiempo o qué te cuesta resolver, y te propongo qué conviene.",
  },
  {
    pregunta: "¿Cuánto tarda?",
    respuesta:
      "Una landing, alrededor de una semana; un sitio completo, entre 3 y 4 semanas. En sistemas, bots y automatizaciones te doy un plazo cerrado en la propuesta. El tiempo cuenta desde que tengo tu información.",
  },
  {
    pregunta: "¿Trabajás con las herramientas que ya uso?",
    respuesta:
      "Sí. Conecto lo que ya tenés —planillas, WhatsApp o mail— en lugar de pedirte que cambies todo.",
  },
  {
    pregunta: "¿El bot de WhatsApp reemplaza a una persona?",
    respuesta:
      "No. Responde lo repetitivo y deriva a una persona cuando hace falta.",
  },
  {
    pregunta: "¿Qué pasa después de la entrega?",
    respuesta:
      "Te acompaño para corregir errores y hacer ajustes. Después podés seguir con mantenimiento mensual o escribirme solo cuando lo necesites.",
  },
];
