// Client-side <head> updater. On every in-app navigation we refresh the page
// title, meta description, canonical URL, Open Graph tags, and JSON-LD so the
// document reflects the current view (for sharing, and for crawlers that render
// JS). Prerendered pages already ship the correct head; this keeps it in sync
// during SPA navigation and is idempotent (it updates existing tags in place).

import { seoForView } from "./routes";

function setMeta(attr, name, content)
{
	let el = document.head.querySelector(`meta[${attr}="${name}"]`);
	if (!el)
	{
		el = document.createElement("meta");
		el.setAttribute(attr, name);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function setCanonical(href)
{
	let el = document.head.querySelector('link[rel="canonical"]');
	if (!el)
	{
		el = document.createElement("link");
		el.setAttribute("rel", "canonical");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

export function applySeo(viewId)
{
	if (typeof document === "undefined")
	{
		return;
	}

	const { title, description, canonical, jsonLd } = seoForView(viewId);

	document.title = title;
	setMeta("name", "description", description);
	setCanonical(canonical);
	setMeta("property", "og:title", title);
	setMeta("property", "og:description", description);
	setMeta("property", "og:url", canonical);
	setMeta("property", "og:type", "website");
	setMeta("property", "og:site_name", "Learn Thai");
	setMeta("name", "twitter:card", "summary");

	let script = document.getElementById("ld-json");
	if (!script)
	{
		script = document.createElement("script");
		script.type = "application/ld+json";
		script.id = "ld-json";
		document.head.appendChild(script);
	}
	script.textContent = JSON.stringify(jsonLd);
}
