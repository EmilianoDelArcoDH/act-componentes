import type { ActivityMeta, GuideMeta, GuideSlug } from "@/types/activity";

export const guides: GuideMeta[] = [
  {
    slug: "componentes",
    title: "Pensar la web en componentes",
    description: "Header, cards, secciones y footer como piezas reconocibles de StreamFlix.",
    order: 1,
  },
  {
    slug: "template-html",
    title: "Uso de template en HTML",
    description: "Crear moldes ocultos para evitar duplicacion manual de cards.",
    order: 2,
  },
  {
    slug: "includes-html",
    title: "Includes simples en HTML",
    description: "Organizar header y footer como fragmentos externos simulados.",
    order: 3,
  },
  {
    slug: "utilidades-css",
    title: "Utilidades CSS para diseno reutilizable",
    description: "Crear clases pequenas, combinables y faciles de mantener.",
    order: 4,
  },
  {
    slug: "insertar-plantillas",
    title: "Insertar plantillas con JS minimo",
    description: "Conectar includes, templates y datos usando JavaScript basico.",
    order: 5,
  },
  {
    slug: "ui-reutilizable",
    title: "UI reutilizable: integracion final",
    description: "Integrar todo en una version final y adaptable de StreamFlix.",
    order: 6,
  },
];

export const activities: ActivityMeta[] = [
  {
    id: "componentes-actividad-1",
    guideSlug: "componentes",
    activitySlug: "actividad-1",
    title: "Detectar componentes de StreamFlix",
    objective: "Identificar las partes principales de una interfaz.",
    route: "/actividades/componentes/actividad-1",
    order: 1,
  },
  {
    id: "componentes-actividad-2",
    guideSlug: "componentes",
    activitySlug: "actividad-2",
    title: "Crear cards duplicadas manualmente",
    objective: "Sentir el problema de repetir codigo.",
    route: "/actividades/componentes/actividad-2",
    order: 2,
  },
  {
    id: "componentes-actividad-3",
    guideSlug: "componentes",
    activitySlug: "actividad-3",
    title: "Separar estructura, estilo y comportamiento",
    objective: "Reconocer HTML, CSS y JS como responsabilidades diferentes.",
    route: "/actividades/componentes/actividad-3",
    order: 3,
  },
  {
    id: "template-html-actividad-1",
    guideSlug: "template-html",
    activitySlug: "actividad-1",
    title: "Crear el molde de una card",
    objective: "Crear un template HTML basico.",
    route: "/actividades/template-html/actividad-1",
    order: 4,
  },
  {
    id: "template-html-actividad-2",
    guideSlug: "template-html",
    activitySlug: "actividad-2",
    title: "Comprobar que template no se renderiza",
    objective: "Entender que el contenido del template queda oculto.",
    route: "/actividades/template-html/actividad-2",
    order: 5,
  },
  {
    id: "template-html-actividad-3",
    guideSlug: "template-html",
    activitySlug: "actividad-3",
    title: "Preparar template para clonarlo despues",
    objective: "Dejar la estructura lista para JS.",
    route: "/actividades/template-html/actividad-3",
    order: 6,
  },
  {
    id: "includes-html-actividad-1",
    guideSlug: "includes-html",
    activitySlug: "actividad-1",
    title: "Detectar el problema del header duplicado",
    objective: "Identificar duplicacion en varias paginas.",
    route: "/actividades/includes-html/actividad-1",
    order: 7,
  },
  {
    id: "includes-html-actividad-2",
    guideSlug: "includes-html",
    activitySlug: "actividad-2",
    title: "Separar header y footer",
    objective: "Crear componentes externos simulados.",
    route: "/actividades/includes-html/actividad-2",
    order: 8,
  },
  {
    id: "includes-html-actividad-3",
    guideSlug: "includes-html",
    activitySlug: "actividad-3",
    title: "Preparar placeholders para includes",
    objective: "Dejar index.html listo para cargar header/footer mas adelante.",
    route: "/actividades/includes-html/actividad-3",
    order: 9,
  },
  {
    id: "utilidades-css-actividad-1",
    guideSlug: "utilidades-css",
    activitySlug: "actividad-1",
    title: "Crear utilidades de espaciado",
    objective: "Construir una escala simple de margenes y paddings.",
    route: "/actividades/utilidades-css/actividad-1",
    order: 10,
  },
  {
    id: "utilidades-css-actividad-2",
    guideSlug: "utilidades-css",
    activitySlug: "actividad-2",
    title: "Crear utilidades visuales",
    objective: "Crear clases reutilizables de color, texto y bordes.",
    route: "/actividades/utilidades-css/actividad-2",
    order: 11,
  },
  {
    id: "utilidades-css-actividad-3",
    guideSlug: "utilidades-css",
    activitySlug: "actividad-3",
    title: "Aplicar utilidades en StreamFlix",
    objective: "Usar varias utilidades para disenar cards.",
    route: "/actividades/utilidades-css/actividad-3",
    order: 12,
  },
  {
    id: "insertar-plantillas-actividad-1",
    guideSlug: "insertar-plantillas",
    activitySlug: "actividad-1",
    title: "Crear funcion loadInclude",
    objective: "Cargar header y footer con fetch.",
    route: "/actividades/insertar-plantillas/actividad-1",
    order: 13,
  },
  {
    id: "insertar-plantillas-actividad-2",
    guideSlug: "insertar-plantillas",
    activitySlug: "actividad-2",
    title: "Clonar template de pelicula",
    objective: "Crear una card desde template usando cloneNode.",
    route: "/actividades/insertar-plantillas/actividad-2",
    order: 14,
  },
  {
    id: "insertar-plantillas-actividad-3",
    guideSlug: "insertar-plantillas",
    activitySlug: "actividad-3",
    title: "Generar varias cards desde datos",
    objective: "Separar datos de estructura.",
    route: "/actividades/insertar-plantillas/actividad-3",
    order: 15,
  },
  {
    id: "ui-reutilizable-actividad-1",
    guideSlug: "ui-reutilizable",
    activitySlug: "actividad-1",
    title: "Checklist de arquitectura reutilizable",
    objective: "Validar que el proyecto tiene todas las piezas.",
    route: "/actividades/ui-reutilizable/actividad-1",
    order: 16,
  },
  {
    id: "ui-reutilizable-actividad-2",
    guideSlug: "ui-reutilizable",
    activitySlug: "actividad-2",
    title: "Aplicar tres mejoras",
    objective: "Personalizar el proyecto sin romper la arquitectura.",
    route: "/actividades/ui-reutilizable/actividad-2",
    order: 17,
  },
  {
    id: "ui-reutilizable-actividad-3",
    guideSlug: "ui-reutilizable",
    activitySlug: "actividad-3",
    title: "Convertir StreamFlix en portfolio",
    objective: "Reutilizar la arquitectura para otro contexto.",
    route: "/actividades/ui-reutilizable/actividad-3",
    order: 18,
  },
];

export function getGuide(slug: GuideSlug) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideActivities(slug: GuideSlug) {
  return activities.filter((activity) => activity.guideSlug === slug);
}

export function getActivityById(id: string) {
  return activities.find((activity) => activity.id === id);
}
