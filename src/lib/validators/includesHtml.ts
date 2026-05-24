import type { ValidationResult } from "@/types/activity";
import { extractNamedSection, hasId, hasScriptSrc, hasTag, result } from "./helpers";
import { includesAny, normalizeForSearch } from "@/lib/normalize";

function hasDocumentTags(fragment: string): boolean {
  return /<\s*(html|head|body)(\s|>)/i.test(fragment);
}

export function validateIncludesHtmlActividad1(code: string): ValidationResult {
  const messages: string[] = [];
  const normalized = normalizeForSearch(code);

  if (!includesAny(normalized, ["header repetido", "header se repite", "se repite header"])) {
    messages.push("Marca o escribe que el header esta repetido.");
  }
  if (!includesAny(normalized, ["footer repetido", "footer se repite", "se repite footer"])) {
    messages.push("Marca o escribe que el footer esta repetido.");
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
  if (hasDocumentTags(headerSection)) messages.push("El header separado no debe contener html, head ni body.");
  if (hasDocumentTags(footerSection)) messages.push("El footer separado no debe contener html, head ni body.");
  if (hasTag(indexSection, "header")) messages.push("index.html no debe tener header directo duplicado.");

  return result(messages);
}

export function validateIncludesHtmlActividad3(code: string): ValidationResult {
  const messages: string[] = [];
  const indexSection = extractNamedSection(code, "index.html") || code;

  if (!hasId(indexSection, "header-placeholder")) messages.push("Falta #header-placeholder en index.html.");
  if (!hasId(indexSection, "footer-placeholder")) messages.push("Falta #footer-placeholder en index.html.");
  if (!hasScriptSrc(indexSection, "app.js")) messages.push("Falta script src=\"app.js\".");
  if (hasTag(indexSection, "header")) messages.push("No debe haber header directo en index.html.");
  if (hasTag(indexSection, "footer")) messages.push("No debe haber footer directo en index.html.");
  if (!hasTag(indexSection, "main")) messages.push("main debe seguir presente.");

  return result(messages);
}

export const validateIncludesHtml = validateIncludesHtmlActividad2;
