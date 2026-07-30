import type { ValidationResult } from "@/types/activity";
import { normalizeForSearch } from "@/lib/normalize";
import {
  countClass,
  extractCards,
  getObjectPropertyValues,
  getUniqueNormalizedCount,
  hasClass,
  hasId,
  hasScriptSrc,
  result,
} from "./helpers";

export function validateInsertarPlantillasActividad1(code: string): ValidationResult {
  const messages: string[] = [];
  const normalized = normalizeForSearch(code);

  if (!hasId(code, "header-placeholder")) messages.push("Conserva #header-placeholder en index.html.");
  if (!hasId(code, "footer-placeholder")) messages.push("Conserva #footer-placeholder en index.html.");
  if (!hasScriptSrc(code, "app.js")) messages.push("Conserva script src=\"app.js\" en index.html.");
  if (!/function\s+loadInclude\s*\(/i.test(code) && !/const\s+loadInclude\s*=\s*(async\s*)?\(/i.test(code)) {
    messages.push("Falta la funcion loadInclude(path, placeholderId).");
  }
  if (!normalized.includes("fetch(")) messages.push("loadInclude debe usar fetch.");
  if (!/\.then\s*\(/i.test(code)) messages.push("Usa .then para encadenar la carga.");
  if (!/(res|response)\s*\.\s*text\s*\(/i.test(code)) messages.push("Usa response.text() o res.text().");
  if (!normalized.includes("queryselector(")) messages.push("Debes usar querySelector.");
  if (!/\.innerHTML\s*=/i.test(code)) messages.push("Usa innerHTML para insertar includes.");
  if ((code.match(/loadInclude\s*\(/g) ?? []).length < 3) messages.push("Llama a loadInclude para header y footer.");
  if (!/loadInclude\s*\(\s*["']components\/header\.html["']\s*,\s*["']#header-placeholder["']\s*\)/i.test(code)) {
    messages.push("Llama loadInclude con components/header.html y #header-placeholder.");
  }
  if (!/loadInclude\s*\(\s*["']components\/footer\.html["']\s*,\s*["']#footer-placeholder["']\s*\)/i.test(code)) {
    messages.push("Llama loadInclude con components/footer.html y #footer-placeholder.");
  }

  return result(messages);
}

export function validateInsertarPlantillasActividad2(code: string): ValidationResult {
  const messages: string[] = [];

  if (!hasId(code, "movie-card-template")) messages.push("Conserva template#movie-card-template en index.html.");
  if (!hasClass(code, "movies-grid")) messages.push("Conserva .movies-grid en index.html.");
  if (!hasClass(code, "movie-title")) messages.push("Conserva .movie-title dentro del template.");
  if (!hasClass(code, "movie-rating")) messages.push("Conserva .movie-rating dentro del template.");
  if (!hasClass(code, "movie-year")) messages.push("Conserva .movie-year dentro del template.");
  if (!/function\s+createMovieCard\s*\(/i.test(code) && !/const\s+createMovieCard\s*=\s*\(/i.test(code)) {
    messages.push("Falta la funcion createMovieCard(title, rating, year).");
  }
  if (!/document\s*\.\s*querySelector\s*\(/i.test(code)) messages.push("Usa document.querySelector para seleccionar template y contenedor.");
  if (!/template\s*\.\s*content/i.test(code)) messages.push("Usa template.content.");
  if (!/cloneNode\s*\(\s*true\s*\)/i.test(code)) {
    messages.push("Debes clonar el template con template.content.cloneNode(true).");
  }
  if (!/\.textContent\s*=/i.test(code)) messages.push("Usa textContent para modificar titulo, rating y anio.");
  if (!/querySelector\s*\(\s*["']\.movie-title["']\s*\)[\s\S]*\.textContent\s*=/i.test(code)) messages.push("Completa .movie-title con textContent.");
  if (!/querySelector\s*\(\s*["']\.movie-rating["']\s*\)[\s\S]*\.textContent\s*=/i.test(code)) messages.push("Completa .movie-rating con textContent.");
  if (!/querySelector\s*\(\s*["']\.movie-year["']\s*\)[\s\S]*\.textContent\s*=/i.test(code)) messages.push("Completa .movie-year con textContent.");
  if (!/\.appendChild\s*\(/i.test(code)) messages.push("Usa appendChild para insertar las cards.");
  if (!/\.movies-grid/i.test(code)) messages.push("Inserta la card en .movies-grid.");

  return result(messages);
}

export function validateInsertarPlantillasActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const movieArray = code.match(/(?:const|let|var)\s+movies\s*=\s*\[([\s\S]*?)\]\s*;?/i)?.[1] ?? "";
  const movieObjects = movieArray.match(/\{[\s\S]*?\}/g) ?? [];
  const movieTitles = getObjectPropertyValues(movieObjects, "title");
  const hasManualCards = extractCards(code).length >= 3 || countClass(code, "movie-card") >= 3;

  if (!movieArray) messages.push("Falta crear un array movies.");
  if (movieObjects.length < 3) messages.push("El array movies debe tener al menos 3 objetos.");
  if (movieObjects.some((movie) => !/title\s*:/i.test(movie) || !/rating\s*:/i.test(movie) || !/year\s*:/i.test(movie))) {
    messages.push("Cada objeto debe tener title, rating y year.");
  }
  if (movieObjects.length >= 3 && getUniqueNormalizedCount(movieTitles) < 3) {
    messages.push("Cada objeto del array movies debe tener un title diferente.");
  }
  if (!/\.forEach\s*\(|for\s*\(|for\s+const|for\s+let/i.test(code)) messages.push("Recorre movies con forEach o un loop.");
  if (!/createMovieCard\s*\(\s*[^)]*(movie|pelicula|item)/i.test(code)) {
    messages.push("Llama createMovieCard con datos del objeto.");
  }
  if (hasManualCards && !/<\s*template/i.test(code)) messages.push("No copies manualmente 3 cards en HTML.");

  return result(messages);
}

export const validateInsertarPlantillas = validateInsertarPlantillasActividad1;
