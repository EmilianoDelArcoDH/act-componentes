import type { ValidationResult } from "@/types/activity";
import {
  countClass,
  getClassDeclaration,
  hasClass,
  hasId,
  hasScriptSrc,
  hasStylesheetHref,
  result,
} from "./helpers";

export function validateUiReutilizableActividad1(code: string): ValidationResult {
  const messages: string[] = [];

  if (!hasId(code, "header-placeholder")) messages.push("Falta #header-placeholder.");
  if (!hasId(code, "footer-placeholder")) messages.push("Falta #footer-placeholder.");
  if (!/<template[^>]+id=["']movie-card-template["']/i.test(code)) messages.push("Falta template#movie-card-template.");
  if (!hasClass(code, "movies-grid")) messages.push("Falta .movies-grid.");
  if (!hasScriptSrc(code, "app.js")) messages.push("Falta referencia a app.js.");
  if (!hasStylesheetHref(code, "utilities.css")) messages.push("Falta referencia a utilities.css.");
  if (countClass(code.replace(/<template[\s\S]*?<\/template>/gi, ""), "movie-card") >= 3) {
    messages.push("Evita duplicacion innecesaria de cards visibles.");
  }

  return result(messages);
}

export function validateUiReutilizableActividad2(code: string): ValidationResult {
  const messages: string[] = [];
  const improvements = [
    (code.match(/createMovieCard\s*\(/g) ?? []).length >= 6 || countClass(code, "movie-card") >= 5,
    /series/i.test(code) && (/<\s*section/i.test(code) || hasClass(code, "series")),
    Boolean(getClassDeclaration(code, "shadow")),
    /movie-card\s*:\s*hover|\.movie-card:hover/i.test(code),
    /--(primary|accent|brand|streamflix)|#[0-9a-f]{6}|rgb\(/i.test(code),
    /peliculas\.html|\/peliculas|page-peliculas|movies-page/i.test(code),
  ];
  const detected = improvements.filter(Boolean).length;
  const generatedMovies = (code.match(/createMovieCard\s*\(/g) ?? []).length - (code.match(/function\s+createMovieCard\s*\(/g) ?? []).length;
  const movieCards = Math.max(generatedMovies, countClass(code, "movie-card"));

  if (detected < 3) messages.push("Agrega al menos 3 mejoras visibles de la lista.");
  if (movieCards < 5) messages.push("Debe haber minimo 5 peliculas o cards generadas.");
  if (/shadow/i.test(code) && !getClassDeclaration(code, "shadow")) messages.push("Si creas shadow, debe existir la utilidad .shadow.");
  if (/hover|:hover/i.test(code) && !/:\s*hover|:hover/i.test(code)) messages.push("Si mejoras hover, debe existir :hover.");
  if (/series/i.test(code) && !/series/i.test(code)) messages.push("Si agregas series, debe aparecer Series.");
  if (countClass(code, "movie-card") > 3 && !/template\s*\.\s*content\s*\.\s*cloneNode\s*\(\s*true\s*\)/i.test(code)) {
    messages.push("Evita duplicacion excesiva de cards manuales; manten el uso de template.");
  }

  return result(messages);
}

export function validateUiReutilizableActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const visibleCards = Math.max(
    countClass(code, "project-card"),
    (code.match(/create(Project|Portfolio|Movie)?Card\s*\(/gi) ?? []).length - (code.match(/function\s+create(Project|Portfolio|Movie)?Card\s*\(/gi) ?? []).length,
    countClass(code, "movie-card"),
  );

  if (!/(portfolio|proyecto|project)/i.test(code)) messages.push("Transforma la propuesta hacia portfolio o proyectos.");
  if (/streamflix/i.test(code) && !/(portfolio|proyecto|project)/i.test(code)) messages.push("Ya no debe depender solo de peliculas.");
  if (!/<\s*template/i.test(code)) messages.push("Mantiene el template.");
  if (!hasId(code, "header-placeholder") && !/components\/header\.html/i.test(code)) {
    messages.push("Mantiene placeholders o includes para header.");
  }
  if (!hasId(code, "footer-placeholder") && !/components\/footer\.html/i.test(code)) {
    messages.push("Mantiene placeholders o includes para footer.");
  }
  if (!/\b(p-[123]|m-[123]|bg-primary|text-white|rounded|shadow)\b/i.test(code)) {
    messages.push("Mantiene utilidades CSS.");
  }
  if (visibleCards < 3) messages.push("Debe haber al menos 3 cards o proyectos generados.");
  if (!/<\s*header|header-placeholder/i.test(code) || !/<\s*main/i.test(code) || !/<\s*footer|footer-placeholder/i.test(code)) {
    messages.push("No rompas la estructura base.");
  }

  return result(messages);
}

export const validateUiReutilizable = validateUiReutilizableActividad1;
