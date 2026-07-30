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
  const markers = Array.from(initialCode.matchAll(/<!--\s*([a-z0-9./-]+\.(?:html|css|js))\s*-->/gi));
  if (markers.length === 0) return null;

  const files: EditorFiles = {};
  const firstMarkerIndex = markers[0].index ?? 0;
  const preamble = clean(initialCode.slice(0, firstMarkerIndex));

  if (preamble) {
    files["index.html"] = preamble;
  }

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

function escapeClosingScript(value: string): string {
  return value.replace(/<\/script/gi, "<\\/script");
}

function serializeFilesForPreview(files: EditorFiles): string {
  return JSON.stringify(files).replace(/</g, "\\u003c");
}

const previewBaseStyles = `
:root {
  color-scheme: light;
  font-family: Arial, sans-serif;
  color: #172026;
  background: #f4f7f8;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #f4f7f8;
}

body > header,
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 24px;
  background: #14213d;
  color: white;
}

body > header h1,
.site-header h1 {
  margin: 0;
  font-size: 26px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

nav a {
  color: inherit;
  font-weight: 700;
  text-decoration: none;
}

main {
  width: min(960px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.movie-card {
  padding: 18px;
  background: white;
  border: 1px solid #dce3e7;
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(20, 33, 61, 0.08);
}

.movie-card h3,
.movie-card p {
  margin-top: 0;
}

button,
.play-button {
  border: 0;
  border-radius: 8px;
  padding: 10px 14px;
  background: #0d9488;
  color: white;
  font-weight: 700;
}

body > footer,
.site-footer {
  padding: 18px 24px;
  background: #e8eef0;
  color: #34434b;
  text-align: center;
}
`;

const utilityPreviewMarkup = `<main>
  <section class="movies-grid">
    <article class="movie-card p-3 rounded shadow">
      <h3 class="movie-title text-center bold">Neon Runner</h3>
      <p class="movie-rating">8.8/10</p>
      <p class="movie-year">2026</p>
      <button class="bg-primary text-white">Ver ahora</button>
    </article>
  </section>
</main>`;

function hasOnlyEmptyMain(html: string): boolean {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  return /^<main>\s*<\/main>$/i.test(body.trim());
}

export function createPreviewDocument(files: EditorFiles): string {
  let html = files["index.html"] ?? "";
  const js = files["app.js"] ?? "";
  const allCss = Object.entries(files)
    .filter(([fileName]) => /\.css$/i.test(fileName))
    .map(([, content]) => content)
    .filter((content) => content.trim().length > 0)
    .join("\n\n");

  if (allCss.trim() && hasOnlyEmptyMain(html)) {
    html = html.replace(/<body[^>]*>[\s\S]*?<\/body>/i, `<body>\n${utilityPreviewMarkup}\n</body>`);
  }

  const styleTag = `<style>\n${previewBaseStyles}\n${allCss}\n</style>`;

  if (/<\/head>/i.test(html)) {
    if (/<link[^>]+rel=["']stylesheet["'][^>]*href=["']styles\.css["'][^>]*>/i.test(html)) {
      html = html.replace(/<link[^>]+rel=["']stylesheet["'][^>]*href=["']styles\.css["'][^>]*>/i, styleTag);
    } else {
      html = html.replace(/<\/head>/i, `${styleTag}\n</head>`);
    }
  } else {
    html = `${styleTag}\n${html}`;
  }

  const previewRuntime = `<script>
(() => {
  const files = ${serializeFilesForPreview(files)};
  const originalFetch = window.fetch.bind(window);
  window.fetch = (path, options) => {
    const key = String(path).replace(/^\\.\\//, "");
    if (Object.prototype.hasOwnProperty.call(files, key)) {
      return Promise.resolve(new Response(files[key], { status: 200, headers: { "Content-Type": "text/html" } }));
    }
    return originalFetch(path, options);
  };
})();
</script>`;

  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${previewRuntime}\n</head>`);
  } else {
    html = `${previewRuntime}\n${html}`;
  }

  if (js.trim()) {
    const scriptTag = `<script>\n${escapeClosingScript(js)}\n</script>`;

    if (/<script[^>]+src=["']app\.js["'][^>]*>\s*<\/script>/i.test(html)) {
      html = html.replace(/<script[^>]+src=["']app\.js["'][^>]*>\s*<\/script>/i, scriptTag);
    } else if (/<\/body>/i.test(html)) {
      html = html.replace(/<\/body>/i, `${scriptTag}\n</body>`);
    } else {
      html = `${html}\n${scriptTag}`;
    }
  }

  return html;
}
