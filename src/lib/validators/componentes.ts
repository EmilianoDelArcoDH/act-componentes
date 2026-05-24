import type { ValidationResult } from "@/types/activity";
import { normalizeForSearch } from "@/lib/normalize";
import { countClass, countLinks, extractBlock, extractCards, hasTag, hasTagInside, isNotEmpty, result } from "./helpers";

export function validateComponentesActividad1(code: string): ValidationResult {
  const messages: string[] = [];

  if (!isNotEmpty(code)) messages.push("La entrega no puede estar vacia.");
  if (!hasTag(code, "header")) messages.push("Falta una etiqueta header.");
  if (!hasTag(code, "main")) messages.push("Falta una etiqueta main.");
  if (!hasTag(code, "footer")) messages.push("Falta una etiqueta footer.");
  if (!hasTagInside(code, "main", "section")) messages.push("Falta una section dentro de main.");
  if (!/streamflix/i.test(code)) messages.push("Debe aparecer el texto StreamFlix.");
  if (countLinks(code) < 2) messages.push("La navegacion debe tener al menos 2 enlaces.");

  return result(messages);
}

export function validateComponentesActividad2(code: string): ValidationResult {
  const messages: string[] = [];
  const cards = extractCards(code);

  if (countClass(code, "movie-card") < 3) messages.push("Crea al menos 3 cards con la clase movie-card.");
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
  if (!/\.movie-card\s*\{[^}]+\}/i.test(css)) messages.push("El bloque CSS debe tener al menos una regla para .movie-card.");
  if (!/(addEventListener|function\s+\w+|const\s+\w+\s*=\s*\()/i.test(js)) {
    messages.push("El bloque JS debe incluir addEventListener o una funcion.");
  }
  if (/<style|\.movie-card\s*\{/i.test(js)) messages.push("No mezcles CSS dentro del bloque JS.");
  if (!isNotEmpty(html) || !isNotEmpty(css) || !isNotEmpty(js)) messages.push("No dejes bloques vacios.");

  return result(messages);
}

export const validateComponentes = validateComponentesActividad1;
