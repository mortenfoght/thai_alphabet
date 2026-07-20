// Data layer for the "About Thailand" knowledge base: a hub page, five
// category index pages, and 27 article pages. Article prose lives as markdown
// under ./content/thailand/<category>/<slug>.md and is loaded at build time via
// Vite's import.meta.glob (?raw). This module turns those files plus the
// curated catalog below into the registries the nav, breadcrumb, and page
// components consume.
//
// View-id conventions used across the app's state-based router (see App.jsx):
//   "about"                    -> the hub / overview page
//   "thai-cat:<categoryId>"    -> a category index page
//   "thai-art:<slug>"          -> a single article page

// The five categories, in display order. `blurb` is the one-line description
// shown on the hub card and at the top of each category index page.
export const thailandCategories = [
	{
		id: "geography",
		label: "Geography",
		glyph: "🗺️",
		blurb: "The land itself — four distinct regions, a tropical monsoon climate, and the natural resources that shaped the country.",
	},
	{
		id: "history",
		label: "History",
		glyph: "🏛️",
		blurb: "From the Sukhothai kingdom to the mid-2020s — kingdoms, revolutions, coups, and the making of modern Thailand.",
	},
	{
		id: "political-system",
		label: "Political System",
		glyph: "⚖️",
		blurb: "How Thailand is governed — the monarchy, parliament, executive, courts, parties, and the question of its democracy.",
	},
	{
		id: "economy",
		label: "Economy",
		glyph: "📈",
		blurb: "A US$577bn export-oriented economy — its sectors, trade, tourism, poverty record, and monetary policy.",
	},
	{
		id: "people-and-society",
		label: "People & Society",
		glyph: "👥",
		blurb: "The people of Thailand — its ethnic groups, its many languages, and its religions.",
	},
];

// Curated catalog: for each category, the article slugs in reading order paired
// with a short label used in the mega-menu (the full article titles are too
// long for a compact dropdown row). The slug must match the .md filename.
const catalog = {
	geography: [
		["regional-geography-of-thailand", "Regional Geography"],
		["climate-and-natural-resources-of-thailand", "Climate & Natural Resources"],
	],
	history: [
		["sukhothai-kingdom", "The Sukhothai Kingdom"],
		["ayutthaya-kingdom", "The Ayutthaya Kingdom"],
		["chakri-dynasty-founding-of-bangkok", "Chakri Dynasty & Bangkok"],
		["rama-iv-rama-v-modernization", "Rama IV & V Modernization"],
		["1932-revolution-thailand", "The 1932 Revolution"],
		["siam-to-thailand-wwii", "Siam to Thailand & WWII"],
		["cold-war-era-vietnam-war-thailand", "Cold War & Vietnam War"],
		["coups-and-constitutions-thailand", "Coups & Constitutions"],
		["modern-political-history-thailand", "Modern Political History"],
		["thailand-mid-2020s-political-crisis", "The Mid-2020s Crisis"],
	],
	"political-system": [
		["thai-monarchy-role-and-powers", "The Monarchy"],
		["executive-branch-prime-minister-cabinet-thailand", "The Executive Branch"],
		["national-assembly-thailand", "The National Assembly"],
		["judiciary-thailand-political-role", "The Judiciary"],
		["political-parties-movements-thailand", "Parties & Movements"],
		["is-thailand-a-democracy", "Is Thailand a Democracy?"],
	],
	economy: [
		["thailand-economic-overview-growth-history", "Economic Overview"],
		["thailand-industry-services-agriculture-sectors", "Industry, Services & Agriculture"],
		["thailand-trade-and-exports", "Trade & Exports"],
		["thailand-tourism-industry", "Tourism Industry"],
		["thailand-poverty-income-growth-outlook", "Poverty & Growth Outlook"],
		["thailand-inflation-monetary-policy", "Inflation & Monetary Policy"],
	],
	"people-and-society": [
		["ethnic-groups-of-thailand", "Ethnic Groups"],
		["languages-of-thailand", "Languages"],
		["religion-in-thailand", "Religion"],
	],
};

// Raw markdown bodies, keyed by file path, loaded eagerly at build time.
const rawFiles = import.meta.glob("./content/thailand/**/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

// Split a raw markdown file into its H1 title, the italic one-line description
// that follows it, and the remaining body. Both the title and description are
// stripped from the body so pages can render them with their own styling.
function parseArticle(raw)
{
	const lines = raw.replace(/\r\n/g, "\n").split("\n");
	let title = "";
	let description = "";
	let sawTitle = false;
	let sawDescription = false;
	const bodyLines = [];

	for (const line of lines)
	{
		if (!sawTitle && line.startsWith("# "))
		{
			title = line.slice(2).trim();
			sawTitle = true;
			continue;
		}

		const emphasised = line.trim().match(/^\*(.+)\*$/);
		const beforeBody = bodyLines.every((l) => l.trim() === "");
		if (!sawDescription && sawTitle && emphasised && beforeBody)
		{
			description = emphasised[1].trim();
			sawDescription = true;
			continue;
		}

		bodyLines.push(line);
	}

	return { title, description, body: bodyLines.join("\n").trim() };
}

// Build the slug -> article record map from the raw files.
const bySlug = {};
for (const [path, raw] of Object.entries(rawFiles))
{
	const segments = path.split("/");
	const slug = segments.pop().replace(/\.md$/, "");
	const category = segments.pop();
	const { title, description, body } = parseArticle(raw);
	bySlug[slug] = { slug, category, title, description, body };
}

// Ordered article lists, honouring the catalog's reading order and nav labels.
export const articlesByCategory = {};
export const thailandArticles = [];
for (const cat of thailandCategories)
{
	const entries = catalog[cat.id] || [];
	const list = entries
		.map(([slug, navLabel], index) =>
		{
			const record = bySlug[slug];
			if (!record)
			{
				return null;
			}
			return { ...record, navLabel, order: index + 1 };
		})
		.filter(Boolean);
	articlesByCategory[cat.id] = list;
	thailandArticles.push(...list);
}

export const articleMap = Object.fromEntries(thailandArticles.map((a) => [a.slug, a]));
export const categoryMap = Object.fromEntries(thailandCategories.map((c) => [c.id, c]));

// View-id helpers.
export function articleViewId(slug)
{
	return `thai-art:${slug}`;
}

export function categoryViewId(categoryId)
{
	return `thai-cat:${categoryId}`;
}

// Classify a view id as part of the About Thailand section, or return null.
export function parseThailandView(viewId)
{
	if (viewId === "about")
	{
		return { kind: "hub" };
	}
	if (viewId.startsWith("thai-cat:"))
	{
		return { kind: "category", id: viewId.slice("thai-cat:".length) };
	}
	if (viewId.startsWith("thai-art:"))
	{
		return { kind: "article", slug: viewId.slice("thai-art:".length) };
	}
	return null;
}

// True when the view id belongs anywhere in the About Thailand section — used
// to highlight the nav category and to build breadcrumbs.
export function isThailandView(viewId)
{
	return parseThailandView(viewId) !== null;
}
