import type { ValidationResult } from "@/types/activity";
import { extractNamedSection, hasId, hasScriptSrc, hasTag, hasTagInside, result } from "./helpers";
import { includesAny, normalizeForSearch } from "@/lib/normalize";

function hasDocumentTags(fragment: string): boolean {
  return /<\s*(html|head|body)(\s|>)/i.test(fragment);
}

export function validateIncludesHtmlActividad1(code: string): ValidationResult {
  const messages: string[] = [];
  const normalized = normalizeForSearch(code);

  if (!includesAny(normalized, ["header repetido", "header se repite", "se repite header", "encabezado repetido", "encabezado se repite", "se repite encabezado"])) {
    messages.push("En el bloque Analisis, escribe que el header se repite en las dos paginas.");
  }
  if (!includesAny(normalized, ["footer repetido", "footer se repite", "se repite footer", "pie de pagina repetido", "pie de pagina se repite", "se repite pie de pagina"])) {
    messages.push("En el bloque Analisis, escribe que el footer se repite en las dos paginas.");
  }
  if (!includesAny(normalized, ["mantener", "mantenimiento", "dificil", "cambiar en varias paginas", "duplicar dificulta"])) {
    messages.push("Menciona que duplicar dificulta mantener o actualizar.");
  }
  if (!extractNamedSection(code, "index.html") || !extractNamedSection(code, "peliculas.html")) {
    messages.push("Deben aparecer dos paginas simuladas: index.html y peliculas.html.");
  }

  return result(messages);
}

export function validateIncludesHtmlActividad2(code: string): ValidationResult {
  const messages: string[] = [];
  const indexSection = extractNamedSection(code, "index.html") || code;
  const headerSection = extractNamedSection(code, "components/header.html");
  const footerSection = extractNamedSection(code, "components/footer.html");

  if (!headerSection || !hasTag(headerSection, "header")) messages.push("components/header.html debe contener solo un header.");
  if (!footerSection || !hasTag(footerSection, "footer")) messages.push("components/footer.html debe contener solo un footer.");
  if (headerSection && !hasTagInside(headerSection, "header", "h1")) messages.push("components/header.html debe conservar el h1 dentro de header.");
  if (headerSection && !hasTagInside(headerSection, "header", "nav")) messages.push("components/header.html debe conservar nav dentro de header.");
  if (footerSection && !/<footer[\s\S]*streamflix/i.test(footerSection)) messages.push("components/footer.html debe conservar el contenido de StreamFlix dentro de footer.");
  if (hasDocumentTags(headerSection)) messages.push("El header separado no debe contener html, head ni body.");
  if (hasDocumentTags(footerSection)) messages.push("El footer separado no debe contener html, head ni body.");
  if (hasTag(indexSection, "header")) messages.push("index.html no debe tener header directo duplicado.");
  if (hasTag(indexSection, "footer")) messages.push("index.html no debe tener footer directo duplicado.");
  if (!hasTag(indexSection, "main")) messages.push("index.html debe conservar main con el contenido propio de la pagina.");
  if (!hasTagInside(indexSection, "main", "section")) messages.push("La section de peliculas debe seguir dentro de main.");

  return result(messages);
}

export function validateIncludesHtmlActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const indexSection = extractNamedSection(code, "index.html") || code;

  if (!hasId(indexSection, "header-placeholder")) messages.push("En el primer espacio, agrega <div id=\"header-placeholder\"></div> antes de main.");
  if (!hasId(indexSection, "footer-placeholder")) messages.push("Despues del cierre de main, agrega <div id=\"footer-placeholder\"></div>.");
  if (!hasScriptSrc(indexSection, "app.js")) messages.push("Al final de index.html, agrega <script src=\"app.js\"></script>.");
  if (hasTag(indexSection, "header")) messages.push("No debe haber header directo en index.html.");
  if (hasTag(indexSection, "footer")) messages.push("No debe haber footer directo en index.html.");
  if (!hasTag(indexSection, "main")) messages.push("main debe seguir presente.");
  if (!hasTagInside(indexSection, "main", "section")) messages.push("Conserva la section de peliculas dentro de main.");
  if (!/header-placeholder[\s\S]*<main/i.test(indexSection)) messages.push("#header-placeholder debe estar antes de main.");
  if (!/<\/main>[\s\S]*footer-placeholder/i.test(indexSection)) messages.push("#footer-placeholder debe estar despues de main.");

  return result(messages);
}

export const validateIncludesHtml = validateIncludesHtmlActividad2;
