import type { ValidationResult } from "@/types/activity";
import { normalizeForSearch } from "@/lib/normalize";
import {
  countClass,
  countLinks,
  extractBlock,
  extractCards,
  extractTag,
  getTagTexts,
  getUniqueNormalizedCount,
  hasClassInside,
  hasTag,
  hasTagInside,
  hasTextInsideTag,
  isNotEmpty,
  removeTag,
  result,
} from "./helpers";

export function validateComponentesActividad1(code: string): ValidationResult {
  const messages: string[] = [];
  const outsideHeader = removeTag(code, "header");
  const h1Count = code.match(/<\s*h1(\s|>)/gi)?.length ?? 0;

  if (!isNotEmpty(code)) messages.push("La entrega no puede estar vacia.");
  if (!hasTag(code, "header")) messages.push("Falta una etiqueta header.");
  if (!hasTag(code, "main")) messages.push("Falta una etiqueta main.");
  if (!hasTag(code, "footer")) messages.push("Falta una etiqueta footer.");
  if (!/streamflix/i.test(code)) messages.push("Debe aparecer el texto StreamFlix.");
  if (!hasTextInsideTag(code, "header", /streamflix/i)) {
    messages.push("El h1 con el texto StreamFlix debe estar dentro de header.");
  }
  if (!hasTagInside(code, "header", "h1")) messages.push("Conserva un h1 dentro de header.");
  if (h1Count !== 1) messages.push("Debe haber un solo h1 en la pagina, ubicado dentro de header.");
  if (/<\s*h1(\s|>)[\s\S]*streamflix[\s\S]*<\s*\/\s*h1\s*>/i.test(outsideHeader)) {
    messages.push("No agregues otro h1 con StreamFlix fuera de header.");
  }
  if (!hasTagInside(code, "header", "nav")) messages.push("La navegacion debe estar dentro de header.");
  if (hasTag(outsideHeader, "nav")) messages.push("No agregues nav fuera de header.");
  if (countLinks(extractTag(code, "nav")) < 2) messages.push("La navegacion dentro de header debe tener al menos 2 enlaces.");
  if (!hasTagInside(code, "main", "section")) messages.push("La section de peliculas debe estar dentro de main.");
  if (!hasTagInside(code, "section", "h2")) messages.push("Conserva un h2 dentro de la section de peliculas.");

  return result(messages);
}

export function validateComponentesActividad2(code: string): ValidationResult {
  const messages: string[] = [];
  const cards = extractCards(code);
  const cardTitles = cards.flatMap((card) => getTagTexts(card, "h3"));
  const cardTexts = cards.map((card) => getTagTexts(card, "h3").join(" "));

  if (countClass(code, "movie-card") < 3) messages.push("Crea al menos 3 cards con la clase movie-card.");
  if (!hasTag(code, "main")) messages.push("Conserva la etiqueta main del codigo inicial.");
  if (!hasClassInside(code, "main", "movies-grid")) messages.push("Conserva .movies-grid dentro de main.");
  if (/<\s*template/i.test(code)) messages.push("Todavia no uses template; esta actividad busca sentir la repeticion manual.");

  const completeCards = cards.filter((card) => {
    const hasTitle = /<h3[^>]*>[\s\S]*?<\/h3>|class=["'][^"']*\bmovie-title\b/i.test(card);
    const hasMeta = /(rating|puntaje|year|anio|ano|19\d{2}|20\d{2}|\d(?:\.\d)?\/10)/i.test(card);
    const hasButton = /<button[^>]*>[\s\S]*?ver ahora[\s\S]*?<\/button>/i.test(card);
    return hasTitle && hasMeta && hasButton;
  });

  if (cards.length >= 3 && completeCards.length < 3) {
    messages.push("Cada movie-card necesita titulo, anio o rating, y boton Ver ahora.");
  }

  const normalizedCards = new Set(cards.map((card) => normalizeForSearch(card).replace(/\s+/g, " ")));
  if (cards.length >= 3 && normalizedCards.size < 3) messages.push("Las cards deben contener datos distintos.");
  if (cards.length >= 3 && getUniqueNormalizedCount(cardTitles) < 3) {
    messages.push("Cada movie-card debe tener un titulo de pelicula diferente.");
  }
  if (cards.length >= 3 && getUniqueNormalizedCount(cardTexts) < 3) {
    messages.push("No copies la misma card tres veces; cambia el contenido de cada pelicula.");
  }

  return result(messages);
}

export function validateComponentesActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const html = extractBlock(code, "HTML") || code;
  const css = extractBlock(code, "CSS");
  const js = extractBlock(code, "JS");

  if (!hasTag(html, "header") || !hasTag(html, "main") || !hasTag(html, "footer")) {
    messages.push("El bloque HTML debe contener header, main y footer.");
  }
  if (!hasTextInsideTag(html, "header", /streamflix/i)) messages.push("Conserva StreamFlix dentro del header del bloque HTML.");
  if (!hasClassInside(html, "main", "movie-card")) messages.push("La card con class=\"movie-card\" debe estar dentro de main.");
  if (!/class=["'][^"']*\bplay-button\b[^"']*["']/i.test(html)) messages.push("Conserva el boton con class=\"play-button\" en el bloque HTML.");
  if (!/\.movie-card\s*\{[^}]+\}/i.test(css)) messages.push("El bloque CSS debe tener al menos una regla para .movie-card.");
  if (!/(addEventListener|function\s+\w+|const\s+\w+\s*=\s*\()/i.test(js)) {
    messages.push("El bloque JS debe incluir addEventListener o una funcion.");
  }
  if (/<style|\.movie-card\s*\{/i.test(js)) messages.push("No mezcles CSS dentro del bloque JS.");
  if (!isNotEmpty(html) || !isNotEmpty(css) || !isNotEmpty(js)) messages.push("No dejes bloques vacios.");

  return result(messages);
}

export const validateComponentes = validateComponentesActividad1;
