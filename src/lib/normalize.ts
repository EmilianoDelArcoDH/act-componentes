export function toLower(value: string): string {
  return value.toLowerCase();
}

export function removeAccents(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function collapseSpaces(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export const collapseWhitespace = collapseSpaces;

export function normalizeText(value: string): string {
  return collapseSpaces(removeAccents(toLower(value)));
}

export function normalizeForSearch(value: string): string {
  return removeAccents(toLower(value));
}

export function hasFlexibleMatch(value: string, pattern: string): boolean {
  return normalizeForSearch(value).includes(normalizeForSearch(pattern));
}

export function includesAny(value: string, patterns: string[]): boolean {
  const normalized = normalizeForSearch(value);
  return patterns.some((pattern) => normalized.includes(normalizeForSearch(pattern)));
}

export function countMatches(value: string, pattern: RegExp | string): number {
  if (typeof pattern === "string") {
    const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return value.match(new RegExp(escaped, "gi"))?.length ?? 0;
  }

  const flags = pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`;
  return value.match(new RegExp(pattern.source, flags))?.length ?? 0;
}

export function stripHtmlComments(value: string): string {
  return value.replace(/<!--[\s\S]*?-->/g, "");
}

export function stripCssComments(value: string): string {
  return value.replace(/\/\*[\s\S]*?\*\//g, "");
}
