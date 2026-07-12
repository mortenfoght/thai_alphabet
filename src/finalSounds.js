// The 8 Thai final-consonant sound categories (มาตราตัวสะกด). At the end of a
// syllable a consonant takes one of these 8 sounds. "live" endings are
// sonorants (ng, n, m, y, w) and make a live syllable; "dead" endings are
// stops (k, t, p) and make a dead syllable — the same split the tone rules use.
const finalSounds = [
	{
		sound: "ng", ipa: "ŋ", rep: "ง", maatra: "แม่กง", type: "live",
		consonants: ["ง"],
		example: { word: "ลิง", phonetic: "ling" },
	},
	{
		sound: "n", ipa: "n", rep: "น", maatra: "แม่กน", type: "live",
		consonants: ["น", "ณ", "ญ", "ร", "ล", "ฬ"],
		example: { word: "คน", phonetic: "kʰon" },
	},
	{
		sound: "m", ipa: "m", rep: "ม", maatra: "แม่กม", type: "live",
		consonants: ["ม"],
		example: { word: "ลม", phonetic: "lom" },
	},
	{
		sound: "y", ipa: "j", rep: "ย", maatra: "แม่เกย", type: "live",
		consonants: ["ย"],
		example: { word: "สาย", phonetic: "sǎai" },
	},
	{
		sound: "w", ipa: "w", rep: "ว", maatra: "แม่เกอว", type: "live",
		consonants: ["ว"],
		example: { word: "ดาว", phonetic: "daao" },
	},
	{
		sound: "k", ipa: "k", rep: "ก", maatra: "แม่กก", type: "dead",
		consonants: ["ก", "ข", "ค", "ฆ"],
		example: { word: "นก", phonetic: "nók" },
	},
	{
		sound: "t", ipa: "t", rep: "ด", maatra: "แม่กด", type: "dead",
		consonants: [
			"จ", "ช", "ซ", "ฌ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ",
			"ด", "ต", "ถ", "ท", "ธ", "ศ", "ษ", "ส",
		],
		example: { word: "รถ", phonetic: "rót" },
	},
	{
		sound: "p", ipa: "p", rep: "บ", maatra: "แม่กบ", type: "dead",
		consonants: ["บ", "ป", "พ", "ฟ", "ภ"],
		example: { word: "บาป", phonetic: "bàap" },
	},
];

export default finalSounds;
