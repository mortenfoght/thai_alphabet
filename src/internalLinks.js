// Contextual internal linking for the About Thailand articles. A curated,
// high-precision map of distinctive phrases to the article they should link to.
// Only unambiguous phrases are included — generic terms that appear across many
// articles (e.g. "Thaksin", "2017 constitution", "Anutin") are deliberately
// omitted so we never guess the wrong target. In each article, only the first
// occurrence of each target is linked (see Markdown.jsx), keeping the linking
// contextual rather than spammy.
//
// Entries are sorted longest-phrase-first at module load so multi-word phrases
// win over any shorter phrase they contain.

const rawTerms = [
	// Geography
	["regional geography of Thailand", "regional-geography-of-thailand"],
	["Khorat Plateau", "regional-geography-of-thailand"],
	["natural resources", "climate-and-natural-resources-of-thailand"],
	["monsoon", "climate-and-natural-resources-of-thailand"],

	// History
	["Sukhothai Kingdom", "sukhothai-kingdom"],
	["Sukhothai", "sukhothai-kingdom"],
	["Ayutthaya Kingdom", "ayutthaya-kingdom"],
	["Ayutthaya", "ayutthaya-kingdom"],
	["Chakri dynasty", "chakri-dynasty-founding-of-bangkok"],
	["founding of Bangkok", "chakri-dynasty-founding-of-bangkok"],
	["Bowring Treaty", "rama-iv-rama-v-modernization"],
	["Chulalongkorn", "rama-iv-rama-v-modernization"],
	["Mongkut", "rama-iv-rama-v-modernization"],
	["Siamese revolution of 1932", "1932-revolution-thailand"],
	["1932 Revolution", "1932-revolution-thailand"],
	["Khana Ratsadon", "1932-revolution-thailand"],
	["Free Thai Movement", "siam-to-thailand-wwii"],
	["Seri Thai", "siam-to-thailand-wwii"],
	["Phibunsongkhram", "siam-to-thailand-wwii"],
	["Vietnam War", "cold-war-era-vietnam-war-thailand"],
	["SEATO", "cold-war-era-vietnam-war-thailand"],
	["Cold War", "cold-war-era-vietnam-war-thailand"],
	["Black May", "modern-political-history-thailand"],
	["1973 popular uprising", "modern-political-history-thailand"],
	["Marriage Equality Act", "thailand-mid-2020s-political-crisis"],
	["same-sex marriage", "thailand-mid-2020s-political-crisis"],

	// Political system
	["lèse-majesté", "thai-monarchy-role-and-powers"],
	["Council of Ministers", "executive-branch-prime-minister-cabinet-thailand"],
	["National Assembly", "national-assembly-thailand"],
	["House of Representatives", "national-assembly-thailand"],
	["Constitutional Court", "judiciary-thailand-political-role"],
	["Red Shirts", "political-parties-movements-thailand"],
	["Yellow Shirts", "political-parties-movements-thailand"],
	["Move Forward Party", "political-parties-movements-thailand"],
	["flawed democracy", "is-thailand-a-democracy"],
	["electoral autocracy", "is-thailand-a-democracy"],

	// Economy
	["Asian Financial Crisis", "thailand-economic-overview-growth-history"],
	["Detroit of Asia", "thailand-industry-services-agriculture-sectors"],
	["trade surplus", "thailand-trade-and-exports"],
	["tourism industry", "thailand-tourism-industry"],
	["household debt", "thailand-poverty-income-growth-outlook"],
	["Bank of Thailand", "thailand-inflation-monetary-policy"],

	// People & society
	["Thai Chinese", "ethnic-groups-of-thailand"],
	["hill tribes", "ethnic-groups-of-thailand"],
	["Isan language", "languages-of-thailand"],
	["Theravada Buddhism", "religion-in-thailand"],
];

// Sorted longest-first for greedy multi-word matching.
export const internalLinkTerms = rawTerms
	.map(([term, slug]) => ({ term, slug }))
	.sort((a, b) => b.term.length - a.term.length);
