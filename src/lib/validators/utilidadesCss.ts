import type { ValidationResult } from "@/types/activity";
import { countProperties, extractTag, getClassDeclaration, hasClassInside, hasTagInside, result } from "./helpers";

const spacingClasses = ["m-1", "m-2", "m-3", "p-1", "p-2", "p-3"];
const visualClasses = ["bg-primary", "bg-dark", "text-white", "text-center", "bold", "rounded"];

export function validateUtilidadesCssActividad1(code: string): ValidationResult {
  const messages: string[] = [];
  const missing = spacingClasses.filter((className) => !getClassDeclaration(code, className));

  if (missing.length > 0) messages.push(`Faltan clases de espaciado: ${missing.join(", ")}.`);
  spacingClasses.forEach((className) => {
    const declaration = getClassDeclaration(code, className);
    if (!declaration) return;
    const expected = className.startsWith("m-") ? "margin" : "padding";
    if (!new RegExp(`${expected}\\s*:`, "i").test(declaration)) messages.push(`.${className} debe usar ${expected}.`);
    if (!/(rem|px)\s*;?/i.test(declaration)) messages.push(`.${className} debe usar valores en rem o px.`);
    if (countProperties(declaration) > 2) messages.push(`.${className} mezcla demasiadas propiedades.`);
  });

  return result(messages);
}

export function validateUtilidadesCssActividad2(code: string): ValidationResult {
  const messages: string[] = [];
  const missing = visualClasses.filter((className) => !getClassDeclaration(code, className));

  if (missing.length > 0) messages.push(`Faltan utilidades visuales: ${missing.join(", ")}.`);
  if (!/background(?:-color)?\s*:/i.test(getClassDeclaration(code, "bg-primary"))) messages.push(".bg-primary debe usar background o background-color.");
  if (!/color\s*:/i.test(getClassDeclaration(code, "text-white"))) messages.push(".text-white debe usar color.");
  if (!/text-align\s*:/i.test(getClassDeclaration(code, "text-center"))) messages.push(".text-center debe usar text-align.");
  if (!/font-weight\s*:/i.test(getClassDeclaration(code, "bold"))) messages.push(".bold debe usar font-weight.");
  if (!/border-radius\s*:/i.test(getClassDeclaration(code, "rounded"))) messages.push(".rounded debe usar border-radius.");

  return result(messages);
}

export function validateUtilidadesCssActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const utilityPattern = /\b(?:m|p)-[123]\b|\bbg-(?:primary|dark)\b|\btext-(?:white|center)\b|\bbold\b|\brounded\b/g;
  const htmlClasses = Array.from(code.matchAll(/class=["']([^"']+)["']/gi)).flatMap((match) => match[1].match(utilityPattern) ?? []);
  const header = extractTag(code, "header");
  const footer = extractTag(code, "footer");
  const movieCardMatch = code.match(/<[^>]+class=["'][^"']*\bmovie-card\b[^"']*["'][^>]*>/i)?.[0] ?? "";
  const buttonMatch = code.match(/<button[^>]*class=["'][^"']+["'][^>]*>/i)?.[0] ?? "";

  if (new Set(htmlClasses).size < 5) messages.push("Usa al menos 5 clases utilitarias en el HTML.");
  if (!/\b(p-[123]|bg-dark|text-white|text-center)\b/.test(header)) messages.push("El header debe usar clases utilitarias.");
  if (!hasTagInside(code, "header", "h1")) messages.push("Conserva el h1 dentro de header.");
  if (!hasClassInside(code, "main", "movies-grid")) messages.push("Conserva .movies-grid dentro de main.");
  if (!/\bmovie-card\b/.test(movieCardMatch) || !/\b(p-[123]|rounded|bg-(primary|dark))\b/.test(movieCardMatch)) {
    messages.push("movie-card debe usar p-*, rounded o bg-*.");
  }
  if (!/<h3[^>]+class=["'][^"']*(text-center|bold)[^"']*["']/i.test(code)) messages.push("El titulo de la card debe usar text-center o bold.");
  if (!/\bbg-primary\b/.test(buttonMatch) || !/\btext-white\b/.test(buttonMatch)) {
    messages.push("El button debe usar bg-primary y text-white.");
  }
  if (!/\b(text-center|p-[123]|m-[123])\b/.test(footer)) messages.push("El footer debe conservarse y usar una utilidad.");
  if (!/<\s*header/i.test(code) || !/<\s*main/i.test(code) || !/<\s*footer/i.test(code)) {
    messages.push("No elimines la estructura principal.");
  }

  const repeatedValues = Array.from(code.matchAll(/([\w-]+)\s*:\s*([^;{}]+);/gi)).map(
    (match) => `${match[1]}:${match[2].trim()}`,
  );
  const repeatedTooMuch = repeatedValues.some((value) => repeatedValues.filter((item) => item === value).length > 3);
  if (repeatedTooMuch) messages.push("Todavia hay CSS especifico repetido; usa las utilidades para reducirlo.");

  return result(messages);
}

export const validateUtilidadesCss = validateUtilidadesCssActividad3;
