// Build-time prerenderer. After `vite build` (client) and `vite build --ssr`
// (server) have run, this renders every SEO route to a static HTML file under
// dist/, with a fully populated <head> (title, meta description, canonical,
// Open Graph, JSON-LD) and the app markup baked into #root. It also emits
// sitemap.xml and robots.txt. Non-prerendered paths (the interactive alphabet
// tools) continue to be served by the host's SPA fallback.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDir = resolve(root, "dist");
const templatePath = resolve(distDir, "index.html");
const serverEntry = pathToFileURL(resolve(root, "dist-ssr/entry-server.js")).href;

const { render, seoForPath, prerenderPaths, SITE_ORIGIN } = await import(serverEntry);

const template = readFileSync(templatePath, "utf-8");

function escapeHtml(str)
{
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

function escapeAttr(str)
{
	return escapeHtml(str).replace(/"/g, "&quot;");
}

// Build the <head> additions (canonical, Open Graph, Twitter, JSON-LD). IDs and
// selectors match applySeo.js so the client updates these in place after hydrate.
function headTags(seo)
{
	const jsonLd = JSON.stringify(seo.jsonLd).replace(/</g, "\\u003c");
	return [
		`<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`,
		`<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
		`<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
		`<meta property="og:url" content="${escapeAttr(seo.canonical)}" />`,
		`<meta property="og:type" content="website" />`,
		`<meta property="og:site_name" content="Learn Thai" />`,
		`<meta name="twitter:card" content="summary" />`,
		`<script type="application/ld+json" id="ld-json">${jsonLd}</script>`,
	].join("\n    ");
}

function pageHtml(path)
{
	const seo = seoForPath(path);
	const appHtml = render(path);

	let html = template;
	html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);
	html = html.replace(
		/<meta\s+name="description"[^>]*>/,
		`<meta name="description" content="${escapeAttr(seo.description)}" />`
	);
	html = html.replace(/<\/head>/, `    ${headTags(seo)}\n  </head>`);
	html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
	return html;
}

function outFileFor(path)
{
	if (path === "/")
	{
		return resolve(distDir, "index.html");
	}
	return resolve(distDir, `.${path}`, "index.html");
}

const paths = prerenderPaths();
for (const path of paths)
{
	const file = outFileFor(path);
	mkdirSync(dirname(file), { recursive: true });
	writeFileSync(file, pageHtml(path), "utf-8");
}
console.log(`Prerendered ${paths.length} pages.`);

// sitemap.xml
const urls = paths
	.map((p) => `  <url><loc>${SITE_ORIGIN}${p === "/" ? "" : p}</loc></url>`)
	.join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf-8");

// robots.txt
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
writeFileSync(join(distDir, "robots.txt"), robots, "utf-8");
console.log("Wrote sitemap.xml and robots.txt.");
