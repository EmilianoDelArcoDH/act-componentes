import type { ReactNode } from "react";
import type { ValidationResult, Validator } from "@/types/activity";
import {
  validateComponentesActividad1,
  validateComponentesActividad2,
  validateComponentesActividad3,
} from "@/lib/validators/componentes";
import {
  validateIncludesHtmlActividad1,
  validateIncludesHtmlActividad2,
  validateIncludesHtmlActividad3,
} from "@/lib/validators/includesHtml";
import {
  validateInsertarPlantillasActividad1,
  validateInsertarPlantillasActividad2,
  validateInsertarPlantillasActividad3,
} from "@/lib/validators/insertarPlantillas";
import {
  validateTemplateHtmlActividad1,
  validateTemplateHtmlActividad2,
  validateTemplateHtmlActividad3,
} from "@/lib/validators/templateHtml";
import {
  validateUiReutilizableActividad1,
  validateUiReutilizableActividad2,
  validateUiReutilizableActividad3,
} from "@/lib/validators/uiReutilizable";
import {
  validateUtilidadesCssActividad1,
  validateUtilidadesCssActividad2,
  validateUtilidadesCssActividad3,
} from "@/lib/validators/utilidadesCss";

export type ActivityContent = {
  subtitle: string;
  instructions: string;
  initialCode: string;
  preview: ReactNode;
  validate: Validator;
  successMessage: string;
  errorMessages: string[];
};

function MiniPreview({
  label,
  cards = ["Neon Runner", "Codigo Lunar", "Pixel Noir"],
  footer = "StreamFlix Originals",
}: {
  label: string;
  cards?: string[];
  footer?: string;
}) {
  return (
    <div className="streamPreview">
      <div className="streamTopbar">
        <strong>StreamFlix</strong>
        <span>{label}</span>
      </div>
      <div className="streamGrid">
        {cards.map((card, index) => (
          <div className="streamCard" key={`${card}-${index}`}>
            <strong>{card}</strong>
            <small>2026 - 8.8/10</small>
            <span className="streamButton">Ver ahora</span>
          </div>
        ))}
      </div>
      <div className="streamFooter">{footer}</div>
    </div>
  );
}

function StructurePreview() {
  return (
    <div className="previewDiagram">
      <div className="diagramBlock wide">header + nav</div>
      <div className="diagramBlock active">main</div>
      <div className="diagramBlock nested">section.movies</div>
      <div className="diagramBlock wide">footer</div>
    </div>
  );
}

function ManualCardsPreview() {
  return (
    <div className="streamPreview">
      <div className="streamTopbar">
        <strong>3 cards manuales</strong>
        <span>codigo repetido</span>
      </div>
      <div className="streamGrid">
        {["Neon Runner", "Codigo Lunar", "Pixel Noir"].map((movie) => (
          <div className="streamCard" key={movie}>
            <strong>{movie}</strong>
            <small>titulo + rating/anio + boton</small>
            <span className="streamButton">Ver ahora</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResponsibilityPreview() {
  return (
    <div className="previewColumns">
      {["HTML: estructura", "CSS: estilos", "JS: comportamiento"].map((label) => (
        <div className="previewColumn" key={label}>
          <strong>{label}</strong>
          <span>responsabilidad separada</span>
        </div>
      ))}
    </div>
  );
}

function TemplatePreview({ mode }: { mode: "mold" | "hidden" | "ready" }) {
  const copy = {
    mold: ["template#movie-card-template", "article.movie-card", "title/rating/button"],
    hidden: ["header visible", "movies-grid vacio", "template oculto"],
    ready: ["movie-title", "movie-rating", "movie-year"],
  }[mode];

  return (
    <div className="previewDiagram">
      {copy.map((item, index) => (
        <div className={index === copy.length - 1 ? "diagramBlock active" : "diagramBlock"} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

function IncludesPreview({ mode }: { mode: "detect" | "split" | "placeholders" }) {
  const items = {
    detect: ["index.html repite header/footer", "peliculas.html repite header/footer", "analizar mantenimiento"],
    split: ["index.html sin header directo", "components/header.html", "components/footer.html"],
    placeholders: ["#header-placeholder", "main con contenido", "#footer-placeholder + app.js"],
  }[mode];

  return (
    <div className="previewFileStack">
      {items.map((item) => (
        <div className="previewFile" key={item}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function UtilityPreview({ mode }: { mode: "spacing" | "visual" | "applied" }) {
  const items = {
    spacing: [".m-1", ".m-2", ".m-3", ".p-1", ".p-2", ".p-3"],
    visual: [".bg-primary", ".bg-dark", ".text-white", ".text-center", ".bold", ".rounded"],
    applied: ["header con utilidades", "movie-card compuesta", "button reutilizable"],
  }[mode];

  return (
    <div className="utilityPreview">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function JsFlowPreview({ mode }: { mode: "include" | "clone" | "data" }) {
  const items = {
    include: ["loadInclude()", "fetch(path)", "placeholder.innerHTML"],
    clone: ["querySelector(template)", "cloneNode(true)", "appendChild(grid)"],
    data: ["movies[]", "forEach(movie)", "createMovieCard(...)"],
  }[mode];

  return (
    <div className="previewFlow">
      {items.map((item, index) => (
        <div className="flowStep" key={item}>
          <span>{index + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

function FinalPreview({ mode }: { mode: "architecture" | "improvements" | "portfolio" }) {
  if (mode === "architecture") {
    return <IncludesPreview mode="placeholders" />;
  }

  if (mode === "improvements") {
    return (
      <div className="utilityPreview">
        {["5 peliculas", "Series", ".shadow", ":hover", "colores", "peliculas.html"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="streamPreview">
      <div className="streamTopbar">
        <strong>Portfolio</strong>
        <span>proyectos + contacto</span>
      </div>
      <div className="streamGrid">
        {["Proyecto web", "Dashboard", "App JS"].map((project) => (
          <div className="streamCard" key={project}>
            <strong>{project}</strong>
            <small>card reutilizada</small>
            <span className="streamButton">Ver proyecto</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const activityContent: Record<string, ActivityContent> = {
  "componentes-actividad-1": {
    subtitle: "Reconoce las piezas principales antes de repetirlas.",
    instructions:
      "Completa un HTML base con header, main, section de peliculas y footer. Agrega el texto StreamFlix y una navegacion con al menos 2 enlaces.",
    initialCode: `<header>
  <h1>StreamFlix</h1>
</header>

<main>
  <h2>Peliculas destacadas</h2>
</main>`,
    preview: <StructurePreview />,
    validate: validateComponentesActividad1,
    successMessage: "La interfaz ya tiene las piezas principales identificadas.",
    errorMessages: ["Crea header, main, section dentro de main y footer.", "Agrega StreamFlix y 2 enlaces de navegacion."],
  },
  "componentes-actividad-2": {
    subtitle: "Repite cards a mano para encontrar el dolor de mantenimiento.",
    instructions:
      "Crea 3 cards de peliculas copiando manualmente la estructura. Cada card debe tener clase movie-card, titulo, anio o rating, y boton Ver ahora.",
    initialCode: `<main>
  <section class="movies-grid">
    <article class="movie-card">
      <h3>Neon Runner</h3>
      <p>2026 - 8.8/10</p>
      <button>Ver ahora</button>
    </article>
  </section>
</main>`,
    preview: <ManualCardsPreview />,
    validate: validateComponentesActividad2,
    successMessage: "Las cards manuales estan completas y muestran por que conviene reutilizar.",
    errorMessages: ["Crea 3 .movie-card.", "Cada card debe tener titulo, datos distintos y boton Ver ahora.", "No uses template todavia."],
  },
  "componentes-actividad-3": {
    subtitle: "Ordena responsabilidades entre HTML, CSS y JS.",
    instructions:
      "Completa tres bloques: HTML para estructura, CSS para estilo y JS para comportamiento simple de boton.",
    initialCode: `<!-- HTML -->
<header><h1>StreamFlix</h1></header>
<main>
  <article class="movie-card">
    <h3>Neon Runner</h3>
    <button class="play-button">Ver ahora</button>
  </article>
</main>

/* CSS */
/* Escribe aqui el estilo de .movie-card */

// JS
// Escribe aqui el comportamiento del boton`,
    preview: <ResponsibilityPreview />,
    validate: validateComponentesActividad3,
    successMessage: "La estructura, el estilo y el comportamiento quedaron separados.",
    errorMessages: ["HTML debe tener header, main y footer.", "CSS debe incluir .movie-card.", "JS debe tener funcion o addEventListener."],
  },
  "template-html-actividad-1": {
    subtitle: "Crea un molde oculto para una card.",
    instructions:
      "Crea un template con id movie-card-template que contenga una card con .movie-card, .movie-title, .movie-rating o .movie-year y button.",
    initialCode: `<template id="movie-card-template">
  <!-- Crea aqui una article.movie-card con titulo, dato y boton -->
</template>`,
    preview: <TemplatePreview mode="mold" />,
    validate: validateTemplateHtmlActividad1,
    successMessage: "El molde de card esta listo.",
    errorMessages: ["Agrega template#movie-card-template.", "Incluye .movie-card, .movie-title, rating/anio y button."],
  },
  "template-html-actividad-2": {
    subtitle: "Deja visible solo el contenedor donde luego apareceran las cards.",
    instructions:
      "Mueve una card dentro del template, deja .movies-grid visible vacio y conserva header y footer.",
    initialCode: `<header><h1>StreamFlix</h1></header>
<main>
  <section class="movies-grid">
    <article class="movie-card">
      <h3>Neon Runner</h3>
      <button>Ver ahora</button>
    </article>
  </section>
</main>`,
    preview: <TemplatePreview mode="hidden" />,
    validate: validateTemplateHtmlActividad2,
    successMessage: "El template queda oculto y el grid visible queda preparado.",
    errorMessages: ["El template debe estar dentro de main.", ".movies-grid debe estar fuera del template y sin cards manuales.", "Conserva header y footer."],
  },
  "template-html-actividad-3": {
    subtitle: "Agrega placeholders que JS podra completar despues.",
    instructions:
      "Crea template con placeholders .movie-title, .movie-rating y .movie-year, contenedor .movies-grid y un comentario indicando que JS clonara el template. No uses cloneNode todavia.",
    initialCode: `<main>
  <section class="movies-grid"></section>
  <template id="movie-card-template">
    <article class="movie-card">
      <h3 class="movie-title"></h3>
      <button>Ver ahora</button>
    </article>
  </template>
</main>`,
    preview: <TemplatePreview mode="ready" />,
    validate: validateTemplateHtmlActividad3,
    successMessage: "La estructura queda lista para ser clonada por JS.",
    errorMessages: ["Usa movie-title, movie-rating y movie-year.", "Agrega .movies-grid.", "Incluye comentario sobre clonar/template sin usar cloneNode."],
  },
  "includes-html-actividad-1": {
    subtitle: "Encuentra lo que se repite antes de extraerlo.",
    instructions:
      "Muestra index.html y peliculas.html con header/footer duplicados. Marca o escribe que header y footer se repiten y que duplicar dificulta mantener.",
    initialCode: `<!-- index.html -->
<header>StreamFlix nav</header>
<main>Inicio</main>
<footer>Contacto</footer>

<!-- peliculas.html -->
<header>StreamFlix nav</header>
<main>Peliculas</main>
<footer>Contacto</footer>

<!-- Analisis -->
Escribe aqui que partes se repiten y por que eso trae problemas.`,
    preview: <IncludesPreview mode="detect" />,
    validate: validateIncludesHtmlActividad1,
    successMessage: "Detectaste las partes repetidas y el problema de mantenimiento.",
    errorMessages: ["Identifica header y footer como repetidos.", "Menciona que duplicar dificulta mantener.", "Incluye index.html y peliculas.html."],
  },
  "includes-html-actividad-2": {
    subtitle: "Extrae header y footer como fragmentos simulados.",
    instructions:
      "Completa index.html, components/header.html y components/footer.html. Los fragmentos deben contener solo header/footer, sin html, head ni body.",
    initialCode: `<!-- index.html -->
<header class="site-header">
  <h1>StreamFlix</h1>
</header>
<main>
  <section class="movies-grid"></section>
</main>

<!-- components/header.html -->
<!-- Mueve aqui el header sin html/head/body -->

<!-- components/footer.html -->
<footer class="site-footer">
  <p>Contacto StreamFlix</p>
</footer>`,
    preview: <IncludesPreview mode="split" />,
    validate: validateIncludesHtmlActividad2,
    successMessage: "Header y footer quedaron separados como componentes externos simulados.",
    errorMessages: ["header.html debe contener solo header.", "footer.html debe contener solo footer.", "index.html no debe duplicar header directo."],
  },
  "includes-html-actividad-3": {
    subtitle: "Prepara los puntos de montaje para cargar includes.",
    instructions:
      "En index.html agrega #header-placeholder, main con contenido, #footer-placeholder y script src=\"app.js\".",
    initialCode: `<!-- index.html -->
<div id="header-placeholder"></div>
<main>
  <section class="movies-grid"></section>
</main>
<!-- Falta footer-placeholder y script app.js -->`,
    preview: <IncludesPreview mode="placeholders" />,
    validate: validateIncludesHtmlActividad3,
    successMessage: "index.html quedo listo para cargar includes mas adelante.",
    errorMessages: ["Agrega #header-placeholder y #footer-placeholder.", "Incluye script src=\"app.js\".", "Mantiene main sin header/footer directos."],
  },
  "utilidades-css-actividad-1": {
    subtitle: "Define una escala minima de espacio.",
    instructions: "Crea las clases .m-1, .m-2, .m-3, .p-1, .p-2 y .p-3 usando margin o padding con valores rem o px.",
    initialCode: `.m-1 { margin: 0.25rem; }
.p-1 { padding: 0.25rem; }

/* Completa la escala m-2, m-3, p-2 y p-3 */`,
    preview: <UtilityPreview mode="spacing" />,
    validate: validateUtilidadesCssActividad1,
    successMessage: "La escala de espaciado esta definida con utilidades simples.",
    errorMessages: ["Crea todas las clases m-* y p-*.", "Usa margin o padding.", "Evita mezclar muchas propiedades."],
  },
  "utilidades-css-actividad-2": {
    subtitle: "Crea utilidades visuales pequenas.",
    instructions: "Crea .bg-primary, .bg-dark, .text-white, .text-center, .bold y .rounded.",
    initialCode: `.bg-primary { background-color: #ff4757; }
.text-white { color: white; }

/* Completa bg-dark, text-center, bold y rounded */`,
    preview: <UtilityPreview mode="visual" />,
    validate: validateUtilidadesCssActividad2,
    successMessage: "Las utilidades visuales tienen responsabilidades claras.",
    errorMessages: ["Crea todas las clases visuales.", "Usa propiedades correctas: background, color, text-align, font-weight y border-radius."],
  },
  "utilidades-css-actividad-3": {
    subtitle: "Compone la UI aplicando utilidades en el HTML.",
    instructions:
      "Modifica header, movie-card, boton y titulo para usar clases utilitarias. Usa al menos 5 utilidades, button con bg-primary y text-white, y conserva la estructura principal.",
    initialCode: `<header>
  <h1>StreamFlix</h1>
</header>
<main>
  <section class="movies-grid">
    <article class="movie-card">
      <h3>Neon Runner</h3>
      <button>Ver ahora</button>
    </article>
  </section>
</main>
<footer>StreamFlix Originals</footer>`,
    preview: <UtilityPreview mode="applied" />,
    validate: validateUtilidadesCssActividad3,
    successMessage: "Las utilidades se aplican para componer la interfaz.",
    errorMessages: ["Usa al menos 5 utilidades en HTML.", "movie-card debe usar p-*, rounded o bg-*.", "button debe usar bg-primary y text-white."],
  },
  "insertar-plantillas-actividad-1": {
    subtitle: "Carga fragmentos externos con fetch.",
    instructions:
      "Crea loadInclude(path, placeholderId) usando fetch, .then, res.text(), querySelector e innerHTML. Llama a la funcion para header y footer.",
    initialCode: `function loadInclude(path, placeholderId) {
  // Carga el archivo con fetch y coloca el HTML en el placeholder
}

// Llama a loadInclude para header y footer`,
    preview: <JsFlowPreview mode="include" />,
    validate: validateInsertarPlantillasActividad1,
    successMessage: "loadInclude puede cargar header y footer.",
    errorMessages: ["Crea loadInclude.", "Usa fetch, .then, text(), querySelector e innerHTML.", "Llama a loadInclude para header y footer."],
  },
  "insertar-plantillas-actividad-2": {
    subtitle: "Clona una card desde el template.",
    instructions:
      "Crea createMovieCard(title, rating, year): selecciona #movie-card-template, clona template.content con cloneNode(true), modifica title/rating/year e inserta en .movies-grid.",
    initialCode: `function createMovieCard(title, rating, year) {
  const template = document.querySelector("#movie-card-template");
  // Clona template.content y completa title, rating y year
}`,
    preview: <JsFlowPreview mode="clone" />,
    validate: validateInsertarPlantillasActividad2,
    successMessage: "La funcion crea una card desde el template.",
    errorMessages: ["Usa document.querySelector.", "Usa template.content.cloneNode(true).", "Modifica textContent e inserta con appendChild."],
  },
  "insertar-plantillas-actividad-3": {
    subtitle: "Separa datos de estructura.",
    instructions:
      "Crea un array movies con al menos 3 objetos { title, rating, year } y recorrelos con forEach o loop para llamar createMovieCard.",
    initialCode: `const movies = [
  { title: "Neon Runner", rating: "8.8/10", year: "2026" },
];

// Recorre movies y llama createMovieCard con cada objeto`,
    preview: <JsFlowPreview mode="data" />,
    validate: validateInsertarPlantillasActividad3,
    successMessage: "Las cards se generan desde datos, sin duplicar HTML.",
    errorMessages: ["Crea array movies con 3 objetos.", "Cada objeto debe tener title, rating y year.", "Recorre el array y llama createMovieCard."],
  },
  "ui-reutilizable-actividad-1": {
    subtitle: "Revisa que la arquitectura final tenga todas sus piezas.",
    instructions:
      "Completa una estructura con placeholders de header/footer, template#movie-card-template, .movies-grid, referencia a app.js y utilities.css, sin duplicar cards.",
    initialCode: `<div id="header-placeholder"></div>
<main>
  <section class="movies-grid"></section>
  <!-- Agrega aqui template#movie-card-template -->
</main>
<!-- Falta footer-placeholder, utilities.css y app.js -->`,
    preview: <FinalPreview mode="architecture" />,
    validate: validateUiReutilizableActividad1,
    successMessage: "La arquitectura reutilizable tiene todas las piezas clave.",
    errorMessages: ["Incluye placeholders, template, movies-grid, app.js y utilities.css.", "Evita cards visibles duplicadas."],
  },
  "ui-reutilizable-actividad-2": {
    subtitle: "Personaliza sin romper la arquitectura.",
    instructions:
      "Elige al menos 3 mejoras: 5 peliculas, seccion Series, utilidad .shadow, hover en cards, colores personalizados o pagina peliculas.html simulada.",
    initialCode: `<section class="series">
  <h2>Series</h2>
</section>

<script>
const movies = [
  { title: "Neon Runner", rating: "8.8/10", year: "2026" },
];
</script>`,
    preview: <FinalPreview mode="improvements" />,
    validate: validateUiReutilizableActividad2,
    successMessage: "Las mejoras aparecen sin romper la idea reutilizable.",
    errorMessages: ["Agrega al menos 3 mejoras.", "Si agregas peliculas, usa minimo 5 datos/cards.", "Evita duplicar cards manuales en exceso."],
  },
  "ui-reutilizable-actividad-3": {
    subtitle: "Reutiliza la misma arquitectura para otro producto.",
    instructions:
      "Transforma StreamFlix en un portfolio: peliculas pasan a proyectos, header muestra nombre personal, cards muestran proyectos, footer redes/contacto y mantiene template/includes/utilidades.",
    initialCode: `<div id="header-placeholder"></div>
<main class="p-3">
  <h1>StreamFlix</h1>
  <section class="movies-grid">
    <!-- Transforma esta arquitectura en portfolio -->
  </section>
</main>
<div id="footer-placeholder"></div>`,
    preview: <FinalPreview mode="portfolio" />,
    validate: validateUiReutilizableActividad3,
    successMessage: "La arquitectura se reutilizo correctamente para un portfolio.",
    errorMessages: ["Debe aparecer portfolio/proyectos.", "Mantiene template, includes/placeholders y utilidades.", "Incluye al menos 3 cards o proyectos."],
  },
};

export function getActivityContent(id: string): ActivityContent {
  const content = activityContent[id];
  if (!content) {
    return {
      subtitle: "Actividad no encontrada",
      instructions: "No hay contenido disponible para esta actividad.",
      initialCode: "",
      preview: <MiniPreview label="sin contenido" cards={["Sin datos"]} />,
      validate: (): ValidationResult => ({ success: false, messages: ["No hay validador configurado."] }),
      successMessage: "",
      errorMessages: ["No hay contenido disponible."],
    };
  }
  return content;
}
