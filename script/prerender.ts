import { mkdir, writeFile, readFile } from "fs/promises";
import path from "path";
import { routeMeta } from "./route-meta.js";

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function prerender(outDir = "dist/public"): Promise<void> {
  const templatePath = path.join(outDir, "index.html");
  const template = await readFile(templatePath, "utf-8");

  let count = 0;
  for (const route of routeMeta) {
    const title = route.title;
    const description = route.description;
    const ogTitle = route.ogTitle ?? title;
    const ogDescription = route.ogDescription ?? description;

    const html = template
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
      .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(ogTitle)}" />`)
      .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(ogDescription)}" />`);

    if (route.path === "/") {
      await writeFile(templatePath, html, "utf-8");
    } else {
      const dir = path.join(outDir, route.path);
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, "index.html"), html, "utf-8");
    }
    count++;
  }

  console.log(`  ✓ pre-rendered ${count} routes`);
}
