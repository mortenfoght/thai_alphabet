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

// Rows for the static reference table. null = combination does not occur.
export const toneMatrix = [
	{ cls: "middle", live: "Mid", deadShort: "Low", deadLong: "Low", ek: "Low", tho: "Falling", tri: "High", chattawa: "Rising" },
	{ cls: "high", live: "Rising", deadShort: "Low", deadLong: "Low", ek: "Low", tho: "Falling", tri: null, chattawa: null },
	{ cls: "low", live: "Mid", deadShort: "High", deadLong: "Falling", ek: "Falling", tho: "High", tri: null, chattawa: null },
];

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
