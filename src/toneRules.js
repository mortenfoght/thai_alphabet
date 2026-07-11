import consonants from "./consonants";

export const classes = ["middle", "high", "low"];

export const classLabels = {
	middle: "Middle",
	high: "High",
	low: "Low",
};

export const classThai = {
	middle: "อักษรกลาง",
	high: "อักษรสูง",
	low: "อักษรต่ำ",
};

// English tone name -> traditional Thai tone name (เสียง...).
export const toneThai = {
	Mid: "สามัญ",
	Low: "เอก",
	Falling: "โท",
	High: "ตรี",
	Rising: "จัตวา",
};

// Letters belonging to a class, derived from the consonant data.
export function lettersByClass(cls)
{
	return consonants.filter((c) => c.class === cls).map((c) => c.letter);
}

// Resolve the tone from consonant class + syllable type + tone mark.
// syllable: "live" | "deadShort" | "deadLong"
// mark:     "none" | "ek" | "tho" | "tri" | "chattawa"
// Returns an English tone name, or null for combinations that do not occur.
export function resolveTone(cls, syllable, mark)
{
	if (mark === "ek")
	{
		return cls === "low" ? "Falling" : "Low";
	}
	if (mark === "tho")
	{
		return cls === "low" ? "High" : "Falling";
	}
	if (mark === "tri")
	{
		return cls === "middle" ? "High" : null;
	}
	if (mark === "chattawa")
	{
		return cls === "middle" ? "Rising" : null;
	}
	if (syllable === "live")
	{
		return cls === "high" ? "Rising" : "Mid";
	}
	if (cls === "low")
	{
		return syllable === "deadShort" ? "High" : "Falling";
	}
	return "Low";
}

// Detailed table columns, following the classic chart: syllables split by vowel
// length and final-consonant type, then the four tone marks. A "sonorant" final
// is น ง ม ย ว; a "stop" final is ก ด บ (k, t, p sounds).
export const syllableColumns = [
	{ key: "longOpen", group: "Long vowel", label: "Open", syllable: "live" },
	{ key: "longSon", group: "Long vowel", label: "Sonorant", syllable: "live" },
	{ key: "longStop", group: "Long vowel", label: "Stop", syllable: "deadLong" },
	{ key: "shortOpen", group: "Short vowel", label: "Open", syllable: "deadShort" },
	{ key: "shortSon", group: "Short vowel", label: "Sonorant", syllable: "live" },
	{ key: "shortStop", group: "Short vowel", label: "Stop", syllable: "deadShort" },
];

export const markColumns = [
	{ key: "ek", label: "Mai ek", glyph: "อ่", mark: "ek" },
	{ key: "tho", label: "Mai tho", glyph: "อ้", mark: "tho" },
	{ key: "tri", label: "Mai tri", glyph: "อ๊", mark: "tri" },
	{ key: "chattawa", label: "Mai chattawa", glyph: "อ๋", mark: "chattawa" },
];

// Example word per class per column (null where the combination does not occur).
export const toneExamples = {
	middle: {
		longOpen: "ตา", longSon: "จาน", longStop: "จาก",
		shortOpen: "จะ", shortSon: "กิน", shortStop: "กับ",
		ek: "ไก่", tho: "บ้าน", tri: "โต๊ะ", chattawa: "เดี๋ยว",
	},
	high: {
		longOpen: "ขา", longSon: "ขาย", longStop: "ถูก",
		shortOpen: "สิ", shortSon: "ผม", shortStop: "ขับ",
		ek: "ไข่", tho: "ห้า", tri: null, chattawa: null,
	},
	low: {
		longOpen: "ชา", longSon: "นอน", longStop: "มาก",
		shortOpen: "เงาะ", shortSon: "ลิง", shortStop: "รัก",
		ek: "แม่", tho: "น้ำ", tri: null, chattawa: null,
	},
};

// Resolve the tone for a class + one of the detailed columns above.
export function columnTone(cls, col)
{
	if (col.syllable)
	{
		return resolveTone(cls, col.syllable, "none");
	}
	return resolveTone(cls, "live", col.mark);
}
