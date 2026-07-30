import type { ValidationResult } from "@/types/activity";
import {
  countClass,
  extractTag,
  extractTemplate,
  hasClass,
  hasClassInside,
  hasId,
  hasTag,
  hasTextInsideTag,
  removeTemplates,
  result,
} from "./helpers";

export function validateTemplateHtmlActividad1(code: string): ValidationResult {
  const messages: string[] = [];
  const template = extractTemplate(code);

  if (!/<\s*template(\s|>)/i.test(code)) messages.push("Falta la etiqueta template.");
  if (!hasId(template || code, "movie-card-template")) messages.push("Falta crear el template con id movie-card-template.");
  if (!hasClass(template, "movie-card")) messages.push("Dentro del template debe existir una card con clase movie-card.");
  if (!hasClassInside(template, "article", "movie-card") && !/<(div|section)[^>]+class=["'][^"']*\bmovie-card\b/i.test(template)) {
    messages.push("La clase movie-card debe estar en el contenedor principal de la card dentro del template.");
  }
  if (!hasClass(template, "movie-title")) messages.push("Dentro del template debe existir .movie-title.");
  if (!hasClass(template, "movie-rating") && !hasClass(template, "movie-year")) {
    messages.push("Dentro del template debe existir .movie-rating o .movie-year.");
  }
  if (!hasTag(template, "button")) messages.push("La card del template debe incluir un button.");

  return result(messages);
}

export function validateTemplateHtmlActividad2(code: string): ValidationResult {
  const messages: string[] = [];
  const template = extractTemplate(code);
  const visibleCode = removeTemplates(code);
  const main = code.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? "";

  if (!main || !/<\s*template/i.test(main)) messages.push("El template debe estar dentro de main.");
  if (!hasClass(visibleCode, "movies-grid")) messages.push("Falta .movies-grid fuera del template.");
  if (/class=["'][^"']*\bmovies-grid\b[^"']*["'][^>]*>[\s\S]*movie-card/i.test(visibleCode)) {
    messages.push(".movies-grid debe quedar vacio o sin cards manuales.");
  }
  if (countClass(visibleCode, "movie-card") >= 3) {
    messages.push("Hay cards visibles fuera del template. En esta actividad deben quedar dentro del template.");
  }
  if (!hasTag(code, "header")) messages.push("El header del codigo inicial debe seguir presente.");
  if (!hasTextInsideTag(code, "header", /streamflix/i)) messages.push("Conserva el h1 StreamFlix dentro del header.");
  if (!hasTag(code, "footer")) messages.push("Agrega o conserva el footer al final de la pagina.");
  if (!hasClass(template, "movie-card")) messages.push("El template debe conservar la movie-card.");
  if (hasClass(extractTag(code, "header"), "movie-card")) messages.push("La movie-card no debe estar dentro de header.");

  return result(messages);
}

export function validateTemplateHtmlActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const template = extractTemplate(code);

  if (!hasId(template || code, "movie-card-template")) messages.push("Falta el id movie-card-template.");
  if (!hasClassInside(code, "main", "movies-grid")) messages.push(".movies-grid debe estar dentro de main.");
  if (!/<main[\s\S]*<template[^>]+id=["']movie-card-template["'][\s\S]*<\/main>/i.test(code)) {
    messages.push("template#movie-card-template debe estar dentro de main.");
  }
  if (!hasClass(template, "movie-title")) messages.push("Usa la clase movie-title como placeholder.");
  if (!hasClass(template, "movie-rating")) messages.push("Usa la clase movie-rating como placeholder.");
  if (!hasClass(template, "movie-year")) messages.push("Usa la clase movie-year como placeholder.");
  if (!hasClass(code, "movies-grid")) messages.push("Falta el contenedor .movies-grid.");
  if (!/(<!--[\s\S]*(clon|template|js)[\s\S]*-->|clonar|clone|template)/i.test(code)) {
    messages.push("Agrega un comentario o texto claro indicando que JS clonara el template.");
  }
  if (/cloneNode\s*\(/i.test(code)) messages.push("Todavia no uses cloneNode; solo prepara la estructura.");

  return result(messages);
}

export const validateTemplateHtml = validateTemplateHtmlActividad1;
