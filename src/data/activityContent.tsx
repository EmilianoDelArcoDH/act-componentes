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
      "Contexto: antes de reutilizar componentes, primero hay que reconocer las piezas de una pagina.\n\nQue hacer:\n1. Completa index.html con una estructura de StreamFlix.\n2. Dentro de header, conserva o agrega un h1 con el texto StreamFlix.\n3. Dentro de ese mismo header, agrega una navegacion con al menos 2 enlaces.\n4. Agrega un main y, dentro de main, una section para peliculas destacadas.\n5. Dentro de la section, conserva o agrega un h2.\n6. Agrega un footer al final.\n\nResultado esperado: una pagina simple donde se distinguen header, contenido principal, seccion de peliculas y footer.\n\nConexion: en la siguiente actividad vas a crear cards manualmente para ver que parte conviene convertir en componente reutilizable.",
    initialCode: `<header>
  <h1>StreamFlix</h1>
</header>

<main>
  <h2>Peliculas destacadas</h2>
</main>`,
    preview: <StructurePreview />,
    validate: validateComponentesActividad1,
    successMessage: "La interfaz ya tiene sus piezas principales. Ahora puedes detectar que partes se repiten.",
    errorMessages: ["Crea header, main, section dentro de main y footer.", "Agrega StreamFlix y 2 enlaces de navegacion."],
  },
  "componentes-actividad-2": {
    subtitle: "Repite cards a mano para encontrar el dolor de mantenimiento.",
    instructions:
      "Contexto: esta actividad busca que notes el problema de copiar y pegar HTML.\n\nQue hacer:\n1. Dentro de .movies-grid, crea 3 peliculas copiando la misma estructura.\n2. Cada pelicula debe ser un article con class=\"movie-card\".\n3. Cada card debe tener un titulo, un anio o rating, y un boton con el texto Ver ahora.\n4. Cambia los datos de cada card para que no sean identicas.\n5. No uses template todavia: hoy queremos ver el problema de la repeticion manual.\n\nResultado esperado: tres cards visibles, muy parecidas entre si, pero con datos distintos.\n\nConexion: en la clase de template vas a reemplazar esta repeticion por un molde reutilizable.",
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
    successMessage: "Las cards manuales estan completas. Ya se ve por que copiar HTML no escala.",
    errorMessages: ["Crea 3 .movie-card.", "Cada card debe tener titulo, datos distintos y boton Ver ahora.", "No uses template todavia."],
  },
  "componentes-actividad-3": {
    subtitle: "Ordena responsabilidades entre HTML, CSS y JS.",
    instructions:
      "Contexto: una interfaz profesional separa estructura, estilos y comportamiento.\n\nQue hacer:\n1. En el bloque HTML, conserva header, main y footer.\n2. En HTML, deja una card con class=\"movie-card\" y un boton con class=\"play-button\".\n3. En el bloque CSS, agrega al menos una regla para .movie-card.\n4. En el bloque JS, agrega una funcion o addEventListener para el boton.\n5. No mezcles CSS dentro de JS ni JavaScript dentro del HTML.\n\nResultado esperado: el mismo componente se entiende en tres responsabilidades: HTML estructura, CSS apariencia, JS comportamiento.\n\nCierre de clase: ya identificaste componentes, sentiste la repeticion y separaste responsabilidades. La siguiente clase toma ese problema y lo resuelve con template.",
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
    successMessage: "HTML, CSS y JS quedaron separados. La base esta lista para pensar en templates.",
    errorMessages: ["HTML debe tener header, main y footer.", "CSS debe incluir .movie-card.", "JS debe tener funcion o addEventListener."],
  },
  "template-html-actividad-1": {
    subtitle: "Crea un molde oculto para una card.",
    instructions:
      "Contexto: en la clase anterior copiaste cards manualmente. Ahora vas a crear un molde para no repetir la estructura.\n\nQue hacer:\n1. Crea una etiqueta template.\n2. Dale el id movie-card-template.\n3. Dentro del template, agrega una card con class=\"movie-card\".\n4. Dentro de la card, agrega elementos con class=\"movie-title\" y class=\"movie-rating\" o class=\"movie-year\".\n5. Agrega un boton dentro de la card.\n\nResultado esperado: el HTML de una card queda guardado como molde, pero todavia no se genera ninguna card dinamica.\n\nConexion: en la proxima actividad vas a comprobar que el contenido de template queda oculto hasta que JavaScript lo use.",
    initialCode: `<template id="movie-card-template">
  <!-- Crea aqui una article.movie-card con titulo, dato y boton -->
</template>`,
    preview: <TemplatePreview mode="mold" />,
    validate: validateTemplateHtmlActividad1,
    successMessage: "El molde de card esta listo. Ya no dependes de copiar la estructura a mano.",
    errorMessages: ["Agrega template#movie-card-template.", "Incluye .movie-card, .movie-title, rating/anio y button."],
  },
  "template-html-actividad-2": {
    subtitle: "Deja visible solo el contenedor donde luego apareceran las cards.",
    instructions:
      "Contexto: template no muestra su contenido automaticamente. Por eso necesitamos separar el molde del lugar donde se van a insertar las cards.\n\nQue hacer:\n1. Conserva header y footer visibles en la pagina.\n2. Dentro de main, deja una section con class=\"movies-grid\" fuera del template.\n3. Esa .movies-grid debe quedar vacia, sin cards manuales visibles.\n4. Mueve la card al interior de template#movie-card-template.\n5. El template debe estar dentro de main.\n\nResultado esperado: se ve la pagina base, pero no se ven cards porque quedaron guardadas en el template.\n\nConexion: en la siguiente actividad vas a preparar clases placeholder para que JavaScript pueda completar cada clon.",
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
    successMessage: "El template quedo oculto y el grid visible quedo preparado para recibir clones.",
    errorMessages: ["El template debe estar dentro de main.", ".movies-grid debe estar fuera del template y sin cards manuales.", "Conserva header y footer."],
  },
  "template-html-actividad-3": {
    subtitle: "Agrega placeholders que JS podra completar despues.",
    instructions:
      "Contexto: para que JavaScript complete una card clonada, necesita encontrar lugares claros donde poner los datos.\n\nQue hacer:\n1. Mantiene una section con class=\"movies-grid\".\n2. Crea template#movie-card-template.\n3. Dentro del template, agrega una .movie-card.\n4. Dentro de la card, agrega .movie-title, .movie-rating y .movie-year.\n5. Agrega un comentario que indique que JavaScript clonara el template mas adelante.\n6. No uses cloneNode todavia.\n\nResultado esperado: el HTML queda preparado para que JS pueda cambiar titulo, rating y anio en cada copia.\n\nCierre de clase: ya pasaste de cards copiadas a un molde reutilizable. La siguiente clase resuelve otra repeticion: header y footer entre paginas.",
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
    successMessage: "La estructura quedo lista para clonarse con JavaScript en una clase posterior.",
    errorMessages: ["Usa movie-title, movie-rating y movie-year.", "Agrega .movies-grid.", "Incluye comentario sobre clonar/template sin usar cloneNode."],
  },
  "includes-html-actividad-1": {
    subtitle: "Encuentra lo que se repite antes de extraerlo.",
    instructions:
      "Contexto: template ayuda dentro de una pagina. Includes ayudan cuando se repiten partes entre varias paginas.\n\nQue hacer:\n1. Revisa el ejemplo de index.html y peliculas.html.\n2. Escribe en el bloque Analisis que el header esta repetido.\n3. Escribe tambien que el footer esta repetido.\n4. Explica en una frase por que duplicar header/footer dificulta mantener el sitio.\n\nResultado esperado: no estas arreglando codigo todavia; estas diagnosticando el problema de mantenimiento.\n\nConexion: en la siguiente actividad vas a mover esas partes repetidas a archivos separados.",
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
    successMessage: "Detectaste la repeticion entre paginas. Ahora tiene sentido extraer header y footer.",
    errorMessages: ["Identifica header y footer como repetidos.", "Menciona que duplicar dificulta mantener.", "Incluye index.html y peliculas.html."],
  },
  "includes-html-actividad-2": {
    subtitle: "Extrae header y footer como fragmentos simulados.",
    instructions:
      "Contexto: ahora vas a centralizar las partes que se repiten entre paginas.\n\nQue hacer:\n1. Deja index.html sin header directo y sin footer directo.\n2. Mantiene en index.html solo el main con el contenido propio de la pagina.\n3. En components/header.html, deja unicamente la etiqueta header con logo y navegacion.\n4. En components/footer.html, deja unicamente la etiqueta footer.\n5. No agregues html, head ni body dentro de los archivos de components.\n\nResultado esperado: index.html ya no duplica header/footer; esos fragmentos viven en archivos separados.\n\nConexion: todavia no se van a ver cargados. En la siguiente actividad vas a preparar los lugares donde se insertaran.",
    initialCode: `<!-- index.html -->
<main>
  <section class="movies-grid">
    <h2>Peliculas destacadas</h2>
  </section>
</main>

<!-- components/header.html -->
<header class="site-header">
  <div class="container">
    <h1>StreamFlix</h1>
    <nav>
      <a href="index.html">Inicio</a>
      <a href="peliculas.html">Peliculas</a>
    </nav>
  </div>
</header>

<!-- components/footer.html -->
<footer class="site-footer">
  <p>&copy; 2026 StreamFlix</p>
</footer>`,
    preview: <IncludesPreview mode="split" />,
    validate: validateIncludesHtmlActividad2,
    successMessage: "Header y footer quedaron centralizados como fragmentos externos simulados.",
    errorMessages: ["header.html debe contener solo header.", "footer.html debe contener solo footer.", "index.html no debe duplicar header directo."],
  },
  "includes-html-actividad-3": {
    subtitle: "Prepara los puntos de montaje para cargar includes.",
    instructions:
      "Contexto: HTML puro no incluye archivos externos por si solo. Por eso dejamos espacios vacios que JavaScript completara despues.\n\nQue hacer:\n1. En index.html, agrega un div con id=\"header-placeholder\" antes de main.\n2. Conserva main con el contenido propio de la pagina.\n3. Agrega un div con id=\"footer-placeholder\" despues de main.\n4. Agrega script src=\"app.js\" al final.\n5. No vuelvas a escribir header ni footer directos en index.html.\n\nResultado esperado: la pagina queda incompleta visualmente, pero preparada para cargar includes.\n\nCierre de clase: ya separaste archivos y preparaste placeholders. La siguiente clase mejora la consistencia visual con utilidades CSS.",
    initialCode: `<!-- index.html -->
<div id="header-placeholder"></div>
<main>
  <section class="movies-grid">
    <h2>Peliculas destacadas</h2>
  </section>
</main>
<!-- Falta footer-placeholder y script app.js -->`,
    preview: <IncludesPreview mode="placeholders" />,
    validate: validateIncludesHtmlActividad3,
    successMessage: "index.html quedo preparado para cargar includes con JavaScript mas adelante.",
    errorMessages: ["Agrega #header-placeholder y #footer-placeholder.", "Incluye script src=\"app.js\".", "Mantiene main sin header/footer directos."],
  },
  "utilidades-css-actividad-1": {
    subtitle: "Define una escala minima de espacio.",
    instructions:
      "Contexto: ya organizaste estructura. Ahora vas a organizar estilos para no repetir valores de espacio por todo el CSS.\n\nQue hacer:\n1. Trabaja en styles.css.\n2. Crea .m-1, .m-2 y .m-3 para margin.\n3. Crea .p-1, .p-2 y .p-3 para padding.\n4. Usa valores en rem o px.\n5. Cada clase debe tener una responsabilidad principal: margen o padding.\n\nResultado esperado: una escala pequena y consistente de espaciado reutilizable.\n\nConexion: en la siguiente actividad vas a sumar utilidades visuales de color, texto y bordes.",
    initialCode: `.m-1 { margin: 0.25rem; }
.p-1 { padding: 0.25rem; }

/* Completa la escala m-2, m-3, p-2 y p-3 */`,
    preview: <UtilityPreview mode="spacing" />,
    validate: validateUtilidadesCssActividad1,
    successMessage: "La escala de espaciado quedo lista para reutilizarse en cualquier elemento.",
    errorMessages: ["Crea todas las clases m-* y p-*.", "Usa margin o padding.", "Evita mezclar muchas propiedades."],
  },
  "utilidades-css-actividad-2": {
    subtitle: "Crea utilidades visuales pequenas.",
    instructions:
      "Contexto: las utilidades no son solo espacio. Tambien ayudan a repetir colores, alineacion, peso y bordes de forma consistente.\n\nQue hacer:\n1. Trabaja en styles.css.\n2. Crea .bg-primary para el color principal de StreamFlix.\n3. Crea .bg-dark para fondos oscuros.\n4. Crea .text-white para texto blanco.\n5. Crea .text-center para centrar texto.\n6. Crea .bold para texto en negrita.\n7. Crea .rounded para bordes redondeados.\n\nResultado esperado: un set pequeno de clases visuales combinables.\n\nConexion: en la siguiente actividad vas a aplicar estas utilidades en HTML para componer cards y botones.",
    initialCode: `.bg-primary { background-color: #0d9488; }
.text-white { color: white; }

/* Completa bg-dark, text-center, bold y rounded */`,
    preview: <UtilityPreview mode="visual" />,
    validate: validateUtilidadesCssActividad2,
    successMessage: "Las utilidades visuales quedaron definidas con responsabilidades claras.",
    errorMessages: ["Crea todas las clases visuales.", "Usa propiedades correctas: background, color, text-align, font-weight y border-radius."],
  },
  "utilidades-css-actividad-3": {
    subtitle: "Compone la UI aplicando utilidades en el HTML.",
    instructions:
      "Contexto: ahora vas a usar las utilidades como piezas de diseno, combinandolas en el HTML.\n\nQue hacer:\n1. En index.html, agrega clases utilitarias al header.\n2. Agrega clases utilitarias a .movie-card.\n3. Agrega clases utilitarias al titulo de la card.\n4. Agrega clases utilitarias al boton.\n5. Usa al menos 5 utilidades en total.\n6. El boton debe tener bg-primary y text-white.\n7. Conserva header, main y footer.\n\nResultado esperado: la interfaz mantiene buen aspecto usando clases reutilizables, no CSS especifico repetido.\n\nCierre de clase: ya tienes estructura reutilizable y estilos reutilizables. La siguiente clase conecta todo con JavaScript minimo.",
    initialCode: `<!-- index.html -->
<header class="p-3 bg-dark text-white">
  <h1 class="text-center">StreamFlix</h1>
</header>
<main>
  <section class="movies-grid">
    <article class="movie-card">
      <h3>Neon Runner</h3>
      <button>Ver ahora</button>
    </article>
  </section>
</main>
<footer class="p-2 text-center">StreamFlix Originals</footer>

<!-- styles.css -->
.bg-primary { background-color: #0d9488; }
.bg-dark { background-color: #1a1a1a; }
.text-white { color: white; }
.text-center { text-align: center; }
.bold { font-weight: bold; }
.rounded { border-radius: 8px; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }`,
    preview: <UtilityPreview mode="applied" />,
    validate: validateUtilidadesCssActividad3,
    successMessage: "Las utilidades ya componen la interfaz. El sistema visual esta listo para conectarse con JS.",
    errorMessages: ["Usa al menos 5 utilidades en HTML.", "movie-card debe usar p-*, rounded o bg-*.", "button debe usar bg-primary y text-white."],
  },
  "insertar-plantillas-actividad-1": {
    subtitle: "Carga fragmentos externos con fetch.",
    instructions:
      "Contexto: en la clase de includes dejaste placeholders vacios. Ahora vas a cargarlos con JavaScript minimo.\n\nQue hacer:\n1. Trabaja en app.js.\n2. Crea una funcion loadInclude(path, placeholderId).\n3. Dentro de la funcion, usa fetch(path).\n4. Convierte la respuesta con res.text() o response.text().\n5. Selecciona el placeholder con document.querySelector(placeholderId).\n6. Inserta el HTML recibido con innerHTML.\n7. Llama a loadInclude para components/header.html y #header-placeholder.\n8. Llama a loadInclude para components/footer.html y #footer-placeholder.\n\nResultado esperado: una funcion reusable capaz de cargar header y footer.\n\nConexion: en la siguiente actividad vas a usar otra tecnica de JS minimo: clonar el template de peliculas.",
    initialCode: `<!-- index.html -->
<div id="header-placeholder"></div>
<main>
  <section class="movies-grid"></section>
</main>
<div id="footer-placeholder"></div>
<script src="app.js"></script>

<!-- app.js -->
function loadInclude(path, placeholderId) {
  // Carga el archivo con fetch y coloca el HTML en el placeholder
}

// Llama a loadInclude para header y footer`,
    preview: <JsFlowPreview mode="include" />,
    validate: validateInsertarPlantillasActividad1,
    successMessage: "loadInclude quedo listo para cargar includes sin repetir codigo.",
    errorMessages: ["Crea loadInclude.", "Usa fetch, .then, text(), querySelector e innerHTML.", "Llama a loadInclude para header y footer."],
  },
  "insertar-plantillas-actividad-2": {
    subtitle: "Clona una card desde el template.",
    instructions:
      "Contexto: en la clase de template preparaste un molde oculto. Ahora vas a crear una card real clonando ese molde.\n\nQue hacer:\n1. Trabaja en app.js.\n2. Crea createMovieCard(title, rating, year).\n3. Selecciona #movie-card-template con document.querySelector.\n4. Clona template.content usando cloneNode(true).\n5. En el clon, completa .movie-title, .movie-rating y .movie-year con textContent.\n6. Selecciona .movies-grid.\n7. Inserta el clon usando appendChild.\n\nResultado esperado: una funcion que recibe datos y genera una card desde el template.\n\nConexion: en la siguiente actividad vas a separar los datos en un array para generar muchas cards sin repetir llamadas sueltas.",
    initialCode: `<!-- index.html -->
<main>
  <section class="movies-grid"></section>
  <template id="movie-card-template">
    <article class="movie-card">
      <h3 class="movie-title"></h3>
      <p class="movie-rating"></p>
      <p class="movie-year"></p>
      <button>Ver ahora</button>
    </article>
  </template>
</main>

<!-- app.js -->
function createMovieCard(title, rating, year) {
  const template = document.querySelector("#movie-card-template");
  // Clona template.content y completa title, rating y year
}`,
    preview: <JsFlowPreview mode="clone" />,
    validate: validateInsertarPlantillasActividad2,
    successMessage: "createMovieCard ya puede crear una card desde el template.",
    errorMessages: ["Usa document.querySelector.", "Usa template.content.cloneNode(true).", "Modifica textContent e inserta con appendChild."],
  },
  "insertar-plantillas-actividad-3": {
    subtitle: "Separa datos de estructura.",
    instructions:
      "Contexto: una funcion reusable mejora el codigo, pero los datos tambien deben estar organizados.\n\nQue hacer:\n1. En app.js, crea const movies = [...].\n2. Agrega al menos 3 objetos dentro del array.\n3. Cada objeto debe tener title, rating y year.\n4. Recorre movies con forEach o un loop.\n5. En cada vuelta, llama createMovieCard con los datos del objeto.\n6. No copies 3 cards manuales en HTML.\n\nResultado esperado: las cards salen de datos, no de HTML duplicado.\n\nCierre de clase: ya conectaste includes, templates y datos con JS minimo. La siguiente clase integra todo y pide mejoras reales.",
    initialCode: `<!-- app.js -->
function createMovieCard(title, rating, year) {
  // La funcion ya existe en la clase anterior
}

const movies = [
  { title: "Neon Runner", rating: "8.8/10", year: "2026" },
];

// Recorre movies y llama createMovieCard con cada objeto`,
    preview: <JsFlowPreview mode="data" />,
    validate: validateInsertarPlantillasActividad3,
    successMessage: "Las cards se generan desde datos. StreamFlix ya funciona como sistema reutilizable.",
    errorMessages: ["Crea array movies con 3 objetos.", "Cada objeto debe tener title, rating y year.", "Recorre el array y llama createMovieCard."],
  },
  "ui-reutilizable-actividad-1": {
    subtitle: "Revisa que la arquitectura final tenga todas sus piezas.",
    instructions:
      "Contexto: esta clase final revisa si todas las piezas del modulo estan conectadas en una arquitectura coherente.\n\nQue hacer:\n1. En index.html, conserva #header-placeholder.\n2. Agrega #footer-placeholder.\n3. Mantiene una section con class=\"movies-grid\".\n4. Agrega template#movie-card-template para la card reusable.\n5. Referencia utilities.css con link rel=\"stylesheet\".\n6. Referencia app.js con script src=\"app.js\".\n7. No agregues varias .movie-card visibles fuera del template.\n\nResultado esperado: una estructura completa que combina includes, template, utilidades y JavaScript.\n\nConexion: en la siguiente actividad vas a mejorar el producto sin romper esta arquitectura.",
    initialCode: `<!-- index.html -->
<link rel="stylesheet" href="utilities.css">
<div id="header-placeholder"></div>
<main>
  <section class="movies-grid"></section>
  <template id="movie-card-template">
    <!-- Completa la card reutilizable aqui -->
  </template>
</main>
<!-- Falta footer-placeholder y app.js -->`,
    preview: <FinalPreview mode="architecture" />,
    validate: validateUiReutilizableActividad1,
    successMessage: "La arquitectura reutilizable tiene todas las piezas clave del modulo.",
    errorMessages: ["Incluye placeholders, template, movies-grid, app.js y utilities.css.", "Evita cards visibles duplicadas."],
  },
  "ui-reutilizable-actividad-2": {
    subtitle: "Personaliza sin romper la arquitectura.",
    instructions:
      "Contexto: una arquitectura reutilizable sirve si permite crecer sin copiar codigo innecesario.\n\nQue hacer:\n1. Elige al menos 3 mejoras de esta lista.\n2. Opcion A: agregar 5 peliculas usando datos o llamadas a createMovieCard.\n3. Opcion B: agregar una seccion Series.\n4. Opcion C: crear una utilidad .shadow.\n5. Opcion D: mejorar el hover de .movie-card.\n6. Opcion E: personalizar colores con variables, hex o rgb.\n7. Opcion F: simular una pagina peliculas.html.\n8. Mantiene la idea reutilizable: evita copiar muchas cards manuales.\n\nResultado esperado: StreamFlix crece con mejoras concretas, pero sigue organizado.\n\nConexion: en la ultima actividad vas a demostrar que la arquitectura no depende del tema peliculas.",
    initialCode: `<!-- index.html -->
<section class="series">
  <h2>Series</h2>
</section>

<!-- styles.css -->
.movie-card:hover {
  transform: translateY(-4px);
}

<!-- app.js -->
const movies = [
  { title: "Neon Runner", rating: "8.8/10", year: "2026" },
];`,
    preview: <FinalPreview mode="improvements" />,
    validate: validateUiReutilizableActividad2,
    successMessage: "Las mejoras aparecen sin romper la arquitectura reutilizable.",
    errorMessages: ["Agrega al menos 3 mejoras.", "Si agregas peliculas, usa minimo 5 datos/cards.", "Evita duplicar cards manuales en exceso."],
  },
  "ui-reutilizable-actividad-3": {
    subtitle: "Reutiliza la misma arquitectura para otro producto.",
    instructions:
      "Contexto: el objetivo final es demostrar que aprendiste una forma de pensar, no solo un proyecto de peliculas.\n\nQue hacer:\n1. Transforma la idea de StreamFlix en un portfolio personal.\n2. Cambia el enfoque de peliculas a proyectos.\n3. El header debe mostrar un nombre personal o marca personal.\n4. Las cards deben representar al menos 3 proyectos o trabajos.\n5. El footer debe incluir contacto o redes.\n6. Conserva template o una funcion reusable para las cards.\n7. Conserva placeholders/includes para header y footer.\n8. Conserva al menos una utilidad CSS como p-3, rounded, bg-primary, text-white o shadow.\n\nResultado esperado: la misma arquitectura se reutiliza para otro producto.\n\nCierre del modulo: pasaste de copiar HTML a construir un sistema simple, mantenible y adaptable.",
    initialCode: `<!-- index.html -->
<div id="header-placeholder"></div>
<main class="p-3">
  <h1>StreamFlix</h1>
  <section class="movies-grid">
    <!-- Transforma esta arquitectura en portfolio -->
  </section>
  <template id="movie-card-template"></template>
</main>
<div id="footer-placeholder"></div>`,
    preview: <FinalPreview mode="portfolio" />,
    validate: validateUiReutilizableActividad3,
    successMessage: "La arquitectura se reutilizo correctamente para un portfolio. Ese es el cierre del modulo.",
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
