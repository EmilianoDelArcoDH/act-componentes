import { countMatches, normalizeForSearch, stripCssComments, stripHtmlComments } from "@/lib/normalize";

export function result(messages: string[]): { success: boolean; messages: string[] } {
  return {
    success: messages.length === 0,
    messages,
  };
}

export function isNotEmpty(code: string): boolean {
  return normalizeForSearch(stripHtmlComments(stripCssComments(code))).length > 20;
}

export function hasTag(code: string, tag: string): boolean {
  return new RegExp(`<\\s*${tag}(\\s|>)`, "i").test(code);
}

export function hasTagInside(code: string, parent: string, child: string): boolean {
  const parentMatch = code.match(new RegExp(`<\\s*${parent}(\\s|>)[\\s\\S]*?<\\/\\s*${parent}\\s*>`, "i"))?.[0] ?? "";
  return hasTag(parentMatch, child);
}

export function countClass(code: string, className: string): number {
  const matches = code.match(new RegExp(`class=["'][^"']*\\b${className}\\b[^"']*["']`, "gi"));
  return matches?.length ?? 0;
}

export function hasClass(code: string, className: string): boolean {
  return countClass(code, className) > 0;
}

export function removeTemplates(code: string): string {
  return code.replace(/<template[\s\S]*?<\/template>/gi, "");
}

export function extractTemplate(code: string): string {
  return code.match(/<template[\s\S]*?<\/template>/i)?.[0] ?? "";
}

export function hasId(code: string, id: string): boolean {
  return new RegExp(`id=["']${id}["']`, "i").test(code);
}

export function extractNamedSection(code: string, marker: string): string {
  const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`${escaped}[\\s\\S]*?(?=\\n\\s*(?:<!--|\\/\\*|//)?\\s*(?:index\\.html|peliculas\\.html|components\\/header\\.html|components\\/footer\\.html|styles\\.css|utilities\\.css|script\\.js|app\\.js|html|css|js)|$)`, "i");
  return code.match(pattern)?.[0] ?? "";
}

export function getClassDeclaration(code: string, className: string): string {
  const css = stripCssComments(code);
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return css.match(new RegExp(`\\.${escaped}\\s*\\{([^}]*)\\}`, "i"))?.[1] ?? "";
}

export function countProperties(declaration: string): number {
  return declaration
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean).length;
}

export function extractBlock(code: string, marker: string): string {
  const section = extractNamedSection(code, marker);
  if (section) return section;
  const tag = marker.toLowerCase();
  if (tag === "html") return extractNamedSection(code, "index.html");
  if (tag === "css") return extractNamedSection(code, "styles.css");
  if (tag === "js") return extractNamedSection(code, "app.js");
  if (tag === "html") return code.match(/<html-block>[\s\S]*?<\/html-block>/i)?.[0] ?? "";
  if (tag === "css") return code.match(/<style[\s\S]*?<\/style>/i)?.[0] ?? "";
  if (tag === "js") return code.match(/<script[\s\S]*?<\/script>/i)?.[0] ?? "";
  return "";
}

export function extractCards(code: string, className = "movie-card"): string[] {
  const pattern = new RegExp(
    `<(article|div|section)[^>]*class=["'][^"']*\\b${className}\\b[^"']*["'][^>]*>[\\s\\S]*?<\\/(article|div|section)>`,
    "gi",
  );
  return Array.from(code.matchAll(pattern), (match) => match[0]);
}

export function countLinks(code: string): number {
  return countMatches(code, /<a\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*>/i);
}

export function hasScriptSrc(code: string, fileName: string): boolean {
  return new RegExp(`<script[^>]+src=["'][^"']*${fileName}["'][^>]*>\\s*<\\/script>`, "i").test(code);
}

export function hasStylesheetHref(code: string, fileName: string): boolean {
  return new RegExp(`<link[^>]+href=["'][^"']*${fileName}["'][^>]*>`, "i").test(code);
}

export function validateIndexHtmlSkeleton(code: string): string[] {
  const messages: string[] = [];
  const indexSection = extractNamedSection(code, "index.html") || code;

  if (!/<!doctype\s+html>/i.test(indexSection)) messages.push("index.html debe conservar <!doctype html>.");
  if (!/<html[^>]*lang=["']?es["']?/i.test(indexSection) && !/<html(\s|>)/i.test(indexSection)) {
    messages.push("index.html debe tener etiqueta html.");
  }
  if (!/<head(\s|>)[\s\S]*<\/head>/i.test(indexSection)) messages.push("index.html debe tener head completo.");
  if (!/<body(\s|>)[\s\S]*<\/body>/i.test(indexSection)) messages.push("index.html debe tener body completo.");
  if (!/<meta[^>]+charset\s*=/i.test(indexSection)) messages.push("index.html debe incluir meta charset.");
  if (!/<meta[^>]+name=["']viewport["']/i.test(indexSection)) messages.push("index.html debe incluir meta viewport.");
  if (!/<title>[\s\S]*?<\/title>/i.test(indexSection)) messages.push("index.html debe incluir title.");

  return messages;
}
