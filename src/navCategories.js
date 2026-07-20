import {
	thailandCategories,
	articlesByCategory,
	articleViewId,
	categoryViewId,
	parseThailandView,
	articleMap,
	categoryMap,
} from "./thailandContent";

// The About Thailand mega-menu, built from the content registry: an Overview
// group (the hub) followed by one group per category. Group `id`s point at the
// category index page, so the group header itself is navigable (see TopNav).
const aboutGroups = [
	{
		label: "Overview",
		items: [
			{ id: "about", title: "About Thailand", sub: "Overview & quick facts" },
		],
	},
	...thailandCategories.map((cat) => ({
		label: cat.label,
		id: categoryViewId(cat.id),
		items: articlesByCategory[cat.id].map((a) => ({
			id: articleViewId(a.slug),
			title: a.navLabel,
		})),
	})),
];

// The 4 top-nav mega-menu categories. `alphabet` and `about` wire to real
// screens grouped into sections; `phrases` and `food` are placeholders whose
// items have no `id` and render as non-navigable ("coming soon").
const navCategories = [
	{
		id: "alphabet",
		label: "Thai Alphabet",
		accent: "gold",
		groups: [
			{
				label: "Practice",
				items: [
					{ id: "random", glyph: "ก", title: "Random letter", sub: "Consonant flashcards, shuffled" },
					{ id: "numbers", glyph: "๕", title: "Numbers", sub: "Number flashcards, 1 to 10 million" },
					{ id: "game", glyph: "▶", title: "Keyboard game", sub: "Type the falling consonants" },
					{ id: "quiz", glyph: "?", title: "Consonant quiz", sub: "Match the consonant to its sound" },
					{ id: "stories", glyph: "อ่าน", glyphSmall: true, title: "Short stories", sub: "Read Thai at your level" },
					{ id: "classifiers", glyph: "คน", glyphSmall: true, title: "Classifiers", sub: "Practice the counter word for each noun" },
				],
			},
			{
				label: "Reference",
				items: [
					{ id: "table", glyph: "ช", title: "Consonant table", sub: "All 44 consonants in order" },
					{ id: "vowels", glyph: "เอ", title: "Vowel table", sub: "The 32 traditional vowels" },
					{ id: "numbertable", glyph: "๑๐", glyphSmall: true, title: "Number table", sub: "All 51 numbers with readings" },
					{ id: "finals", glyph: "ง", title: "Final consonants", sub: "The 8 ending sounds" },
					{ id: "classifiertable", glyph: "ใบ", glyphSmall: true, title: "Classifier table", sub: "Every counter word, grouped by what it counts" },
				],
			},
			{
				label: "Tones",
				items: [
					{ id: "tonerules", glyph: "ก่", title: "Tone rules", sub: "Class, syllable and mark to tone" },
					{ id: "tonefinder", glyph: "ก้", title: "Tone finder", sub: "Work out any syllable's tone" },
				],
			},
		],
	},
	{
		id: "phrases",
		label: "Thai Phrases",
		accent: "aqua",
		comingSoon: true,
		items: [
			{ title: "Good to know phrases", sub: "Coming soon" },
			{ title: "How to order food", sub: "Coming soon" },
			{ title: "Getting around", sub: "Coming soon" },
			{ title: "Numbers & shopping", sub: "Coming soon" },
		],
	},
	{
		id: "food",
		label: "Thai Food",
		accent: "ochre",
		comingSoon: true,
		items: [
			{ title: "Street food guide", sub: "Coming soon" },
			{ title: "Regional dishes", sub: "Coming soon" },
			{ title: "Dining etiquette", sub: "Coming soon" },
		],
	},
	{
		id: "about",
		label: "About Thailand",
		accent: "jungle",
		groups: aboutGroups,
	},
];

export default navCategories;

// Given a leaf view's id, returns an ordered array of breadcrumb segments to
// render after the "Home" link, or null when there's no trail (e.g. "home").
// Each segment is { label, target? }: a `target` view id makes the segment a
// link; the final (current) segment has no target.
//
// The About Thailand section is a genuine three-level hierarchy (hub ->
// category -> article), so its trail is derived from the content registry. All
// other screens are one level deep inside a mega-menu group.
export function getBreadcrumb(viewId)
{
	const thailand = parseThailandView(viewId);
	if (thailand)
	{
		if (thailand.kind === "hub")
		{
			return [{ label: "About Thailand" }];
		}
		if (thailand.kind === "category")
		{
			const cat = categoryMap[thailand.id];
			if (!cat)
			{
				return null;
			}
			return [
				{ label: "About Thailand", target: "about" },
				{ label: cat.label },
			];
		}
		if (thailand.kind === "article")
		{
			const article = articleMap[thailand.slug];
			if (!article)
			{
				return null;
			}
			const cat = categoryMap[article.category];
			return [
				{ label: "About Thailand", target: "about" },
				{ label: cat.label, target: categoryViewId(cat.id) },
				{ label: article.navLabel },
			];
		}
	}

	for (const cat of navCategories)
	{
		if (!cat.groups)
		{
			continue;
		}
		for (const group of cat.groups)
		{
			const item = group.items.find((i) => i.id === viewId);
			if (item)
			{
				return [
					{ label: cat.label },
					{ label: group.label },
					{ label: item.title },
				];
			}
		}
	}
	return null;
}
