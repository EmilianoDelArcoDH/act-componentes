export type EditorFiles = Record<string, string>;

const defaultFiles: EditorFiles = {
  "index.html": "",
  "styles.css": "",
  "app.js": "",
};

function clean(value: string): string {
  return value.trim();
}

function withoutMatches(value: string, patterns: RegExp[]): string {
  return patterns.reduce((current, pattern) => current.replace(pattern, ""), value);
}

function extractFirst(value: string, pattern: RegExp): string {
  return value.match(pattern)?.[1] ?? "";
}

function hasFullHtmlSkeleton(value: string): boolean {
  return (
    /<!doctype\s+html>/i.test(value) &&
    /<html(\s|>)/i.test(value) &&
    /<head(\s|>)[\s\S]*<\/head>/i.test(value) &&
    /<body(\s|>)[\s\S]*<\/body>/i.test(value) &&
    /<meta[^>]+charset\s*=/i.test(value) &&
    /<meta[^>]+name=["']viewport["']/i.test(value) &&
    /<title>[\s\S]*?<\/title>/i.test(value)
  );
}

function ensureIndexHtmlSkeleton(files: EditorFiles): EditorFiles {
  const indexHtml = files["index.html"] ?? "";

  if (hasFullHtmlSkeleton(indexHtml)) {
    return files;
  }

  const stylesheetLinks = Array.from(
    indexHtml.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi),
    (match) => match[0],
  );
  const scriptTags = Array.from(indexHtml.matchAll(/<script[^>]+src=["'][^"']+["'][^>]*>\s*<\/script>/gi), (match) => match[0]);
  const bodyContent = clean(
    indexHtml
      .replace(/<!doctype\s+html>/gi, "")
      .replace(/<\/?(html|head|body)[^>]*>/gi, "")
      .replace(/<meta[^>]+>/gi, "")
      .replace(/<title>[\s\S]*?<\/title>/gi, "")
      .replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, "")
      .replace(/<script[^>]+src=["'][^"']+["'][^>]*>\s*<\/script>/gi, ""),
  );
  const uniqueLinks = new Set(stylesheetLinks);
  const uniqueScripts = new Set(scriptTags);

  if ((files["styles.css"] ?? "").trim() && !Array.from(uniqueLinks).some((link) => /styles\.css/i.test(link))) {
    uniqueLinks.add('<link rel="stylesheet" href="styles.css">');
  }

  if ((files["app.js"] ?? "").trim() && !Array.from(uniqueScripts).some((script) => /app\.js/i.test(script))) {
    uniqueScripts.add('<script src="app.js"></script>');
  }

  const headLinks = Array.from(uniqueLinks).map((link) => `    ${link}`).join("\n");
  const bodyScripts = Array.from(uniqueScripts).map((script) => `  ${script}`).join("\n");
  const safeBodyContent = bodyContent || "<main></main>";

  return {
    ...files,
    "index.html": clean(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StreamFlix</title>
${headLinks}
  </head>
  <body>
${safeBodyContent
  .split("\n")
  .map((line) => `    ${line}`)
  .join("\n")}
${bodyScripts}
  </body>
</html>`),
  };
}

function splitNamedHtmlFiles(initialCode: string): EditorFiles | null {
  const markers = Array.from(initialCode.matchAll(/<!--\s*([a-z0-9./-]+\.html)\s*-->/gi));
  if (markers.length === 0) return null;

  const files: EditorFiles = {};

  markers.forEach((marker, index) => {
    const fileName = marker[1];
    const start = (marker.index ?? 0) + marker[0].length;
    const end = index + 1 < markers.length ? markers[index + 1].index ?? initialCode.length : initialCode.length;
    files[fileName] = clean(initialCode.slice(start, end));
  });

  return ensureIndexHtmlSkeleton({ ...defaultFiles, ...files });
}

export function createEditorFiles(initialCode: string): EditorFiles {
  const namedFiles = splitNamedHtmlFiles(initialCode);
  if (namedFiles) return namedFiles;

  const htmlBlock = extractFirst(initialCode, /<!--\s*HTML\s*-->([\s\S]*?)(?=\/\*\s*CSS\s*\*\/|\/\/\s*JS|$)/i);
  const cssBlock = extractFirst(initialCode, /\/\*\s*CSS\s*\*\/([\s\S]*?)(?=\/\/\s*JS|$)/i);
  const jsBlock = extractFirst(initialCode, /\/\/\s*JS\s*([\s\S]*)/i);

  if (htmlBlock || cssBlock || jsBlock) {
    return ensureIndexHtmlSkeleton({
      "index.html": clean(htmlBlock),
      "styles.css": clean(cssBlock),
      "app.js": clean(jsBlock),
    });
  }

  const styleMatches = Array.from(initialCode.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi));
  const inlineScriptPattern = /<script(?![^>]*\ssrc\s*=)(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
  const scriptMatches = Array.from(initialCode.matchAll(inlineScriptPattern));
  const externalScriptMatches = Array.from(initialCode.matchAll(/<script[^>]+src=["'][^"']+["'][^>]*>\s*<\/script>/gi));
  const css = clean(styleMatches.map((match) => match[1]).join("\n\n"));
  const js = clean(scriptMatches.map((match) => match[1]).join("\n\n"));
  const html = clean(withoutMatches(initialCode, [/<style[^>]*>[\s\S]*?<\/style>/gi, inlineScriptPattern]));

  if (css || js || externalScriptMatches.length > 0) {
    return ensureIndexHtmlSkeleton({
      "index.html": html,
      "styles.css": css,
      "app.js": js,
    });
  }

  const looksLikeCss = /^\s*\.[\w-]+\s*\{/m.test(initialCode) && !/<[a-z][\s\S]*>/i.test(initialCode);
  const looksLikeJs =
    /^\s*(function|const|let|var|async|document\.|fetch\()/m.test(initialCode) && !/<[a-z][\s\S]*>/i.test(initialCode);

  if (looksLikeCss) {
    return ensureIndexHtmlSkeleton({ ...defaultFiles, "styles.css": clean(initialCode) });
  }

  if (looksLikeJs) {
    return ensureIndexHtmlSkeleton({ ...defaultFiles, "app.js": clean(initialCode) });
  }

  return ensureIndexHtmlSkeleton({ ...defaultFiles, "index.html": clean(initialCode) });
}

export function combineEditorFiles(files: EditorFiles): string {
  return Object.entries(files)
    .filter(([, content]) => content.trim().length > 0)
    .map(([fileName, content]) => `<!-- ${fileName} -->\n${content}`)
    .join("\n\n");
}

export function getInitialEditorFile(files: EditorFiles): string {
  return Object.entries(files).find(([, content]) => content.trim().length > 0)?.[0] ?? "index.html";
}
