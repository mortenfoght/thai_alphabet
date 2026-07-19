// The 4 top-nav mega-menu categories. `alphabet` wires to the app's 13 real
// screens (grouped the same way the old Practice/Reference/Tones hubs were);
// the other 3 are placeholders — real content is separate follow-up work.
// Items with no `id` are non-navigable ("coming soon").
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
		comingSoon: true,
		items: [
			{ title: "Regions & geography", sub: "Coming soon" },
			{ title: "Culture & customs", sub: "Coming soon" },
			{ title: "Festivals", sub: "Coming soon" },
		],
	},
];

export default navCategories;

// Given a leaf view's id, returns { categoryLabel, groupLabel, itemTitle }
// for breadcrumb display, or null if the id has no entry (e.g. "home", or a
// "coming soon" category with no real ids yet).
export function findBreadcrumb(viewId)
{
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
				return { categoryLabel: cat.label, groupLabel: group.label, itemTitle: item.title };
			}
		}
	}
	return null;
}
