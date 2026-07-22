// URL routing + SEO metadata for the state-based app. The app has no router;
// this module is the single source of truth mapping the internal `viewId`
// strings to real, crawlable URL paths and back, plus the per-page SEO metadata
// (title / description / canonical / JSON-LD) used both on the client (live
// <head> updates) and at build time (prerendered static HTML). See
// scripts/prerender.mjs and src/entry-server.jsx.

import {
	thailandCategories,
	articlesByCategory,
	articleMap,
	categoryMap,
	articleViewId,
	categoryViewId,
	parseThailandView,
} from "./thailandContent";
import { getBreadcrumb } from "./navCategories";

export const SITE_ORIGIN = "https://learnthai.io";
export const SITE_NAME = "Learn Thai";

// Only the About Thailand knowledge base has real, crawlable URLs — those pages
// are prerendered. The interactive alphabet tools live at "/" (client state
// only): they aren't SEO content, and keeping them URL-less means the host's
// SPA fallback (which serves the prerendered home page) can never disagree with
// what the client renders, so there are no hydration mismatches.

// --- viewId -> path -------------------------------------------------------

// Paths use a trailing slash to match how the host serves prerendered pages:
// Cloudflare's asset server 307-redirects the no-slash form to the trailing-slash
// form. Emitting the trailing-slash form directly (in canonical tags, the
// sitemap, internal links, and pushState) avoids redirects and keeps canonical
// URLs identical to the served URLs.
export function viewIdToPath(viewId)
{
	const thailand = parseThailandView(viewId);
	if (thailand)
	{
		if (thailand.kind === "hub")
		{
			return "/about-thailand/";
		}
		if (thailand.kind === "category")
		{
			return `/about-thailand/${thailand.id}/`;
		}
		if (thailand.kind === "article")
		{
			const article = articleMap[thailand.slug];
			const category = article ? article.category : "";
			return `/about-thailand/${category}/${thailand.slug}/`;
		}
	}
	// home and all interactive alphabet tools share the root path.
	return "/";
}

// --- path -> viewId -------------------------------------------------------

function normalisePath(pathname)
{
	if (!pathname)
	{
		return "/";
	}
	// Strip a trailing slash (except for the root) so "/x" and "/x/" match.
	let path = pathname;
	if (path.length > 1 && path.endsWith("/"))
	{
		path = path.slice(0, -1);
	}
	return path;
}

export function pathToViewId(pathname)
{
	const path = normalisePath(pathname);

	if (path === "/" || path === "")
	{
		return "home";
	}

	const parts = path.split("/").filter(Boolean);

	if (parts[0] === "about-thailand")
	{
		if (parts.length === 1)
		{
			return "about";
		}
		if (parts.length === 2 && categoryMap[parts[1]])
		{
			return categoryViewId(parts[1]);
		}
		// Require the category segment to match the article's real category, so
		// only the exact prerendered path resolves to the article. Any other
		// shape falls through to "home" — matching the SPA fallback markup and
		// avoiding a hydration mismatch.
		const article = articleMap[parts[2]];
		if (parts.length === 3 && article && article.category === parts[1])
		{
			return articleViewId(parts[2]);
		}
	}

	// Anything unrecognised resolves to home — which is exactly what the host's
	// SPA fallback serves, so a direct hit on an unknown URL hydrates cleanly.
	return "home";
}

// --- SEO metadata ---------------------------------------------------------

function absolute(path)
{
	return `${SITE_ORIGIN}${path}`;
}

// Build a schema.org BreadcrumbList from the app's breadcrumb trail.
function breadcrumbJsonLd(viewId)
{
	const segments = getBreadcrumb(viewId) || [];
	const items = [{ name: "Home", path: "/" }];
	for (const segment of segments)
	{
		// The final (current) segment has no target; give it its own path.
		items.push({ name: segment.label, path: segment.target ? viewIdToPath(segment.target) : viewIdToPath(viewId) });
	}
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((it, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: it.name,
			item: absolute(it.path),
		})),
	};
}

// Returns { title, description, canonical, jsonLd: [...] } for a view.
export function seoForView(viewId)
{
	const path = viewIdToPath(viewId);
	const canonical = absolute(path);
	const thailand = parseThailandView(viewId);

	if (thailand && thailand.kind === "article")
	{
		const article = articleMap[thailand.slug];
		const description = article ? article.description : "";
		const title = `${article ? article.title : "About Thailand"} | ${SITE_NAME}`;
		const jsonLd = [
			{
				"@context": "https://schema.org",
				"@type": "Article",
				headline: article ? article.title : "",
				description,
				url: canonical,
				mainEntityOfPage: canonical,
				about: "Thailand",
				inLanguage: "en",
				isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_ORIGIN },
				publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
			},
			breadcrumbJsonLd(viewId),
		];
		return { title, description, canonical, jsonLd };
	}

	if (thailand && thailand.kind === "category")
	{
		const category = categoryMap[thailand.id];
		const description = category ? category.blurb : "";
		const title = `${category ? category.label : "About Thailand"} — About Thailand | ${SITE_NAME}`;
		return {
			title,
			description,
			canonical,
			jsonLd: [
				{
					"@context": "https://schema.org",
					"@type": "CollectionPage",
					name: category ? category.label : "About Thailand",
					description,
					url: canonical,
					isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_ORIGIN },
				},
				breadcrumbJsonLd(viewId),
			],
		};
	}

	if (thailand && thailand.kind === "hub")
	{
		const description = "An in-depth guide to Thailand: its geography, history, political system, economy, and people — 27 sourced deep-dive articles for learners of Thai.";
		return {
			title: `About Thailand — Geography, History, Politics & Economy | ${SITE_NAME}`,
			description,
			canonical,
			jsonLd: [breadcrumbJsonLd(viewId)],
		};
	}

	// Home / everything else.
	return {
		title: `${SITE_NAME} — Read Thai Script: Consonants, Vowels, Tones & Numbers`,
		description: "Learn to read Thai script: consonants, vowels, tones and numbers, taught the way native readers actually see them. Plus an in-depth About Thailand knowledge base.",
		canonical: absolute("/"),
		jsonLd: [
			{
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: SITE_NAME,
				url: SITE_ORIGIN,
			},
		],
	};
}

// --- Prerender route list -------------------------------------------------

// Every path that gets its own prerendered static HTML file: home, the About
// Thailand hub, all category indexes, and all articles.
export function prerenderPaths()
{
	const paths = ["/", "/about-thailand"];
	for (const cat of thailandCategories)
	{
		paths.push(`/about-thailand/${cat.id}`);
		for (const article of articlesByCategory[cat.id])
		{
			paths.push(`/about-thailand/${cat.id}/${article.slug}`);
		}
	}
	return paths;
}
