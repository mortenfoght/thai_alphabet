// The traditional 32 Thai vowels (สระ ๓๒ ตัว), presented in the classic order
// and using อ as the placeholder consonant, exactly as they are taught.
// `phonetic` gives the vowel sound; short vowels use a single letter and long
// vowels double it. ฤ ฤๅ ฦ ฦๅ are the standalone vowel-letters.
const vowels = [
	{ vowel: "อะ", name: "สระอะ", phonetic: "a" },
	{ vowel: "อา", name: "สระอา", phonetic: "aa" },
	{ vowel: "อิ", name: "สระอิ", phonetic: "i" },
	{ vowel: "อี", name: "สระอี", phonetic: "ii" },
	{ vowel: "อึ", name: "สระอึ", phonetic: "ɯ" },
	{ vowel: "อือ", name: "สระอือ", phonetic: "ɯɯ" },
	{ vowel: "อุ", name: "สระอุ", phonetic: "u" },
	{ vowel: "อู", name: "สระอู", phonetic: "uu" },
	{ vowel: "เอะ", name: "สระเอะ", phonetic: "e" },
	{ vowel: "เอ", name: "สระเอ", phonetic: "ee" },
	{ vowel: "แอะ", name: "สระแอะ", phonetic: "ɛ" },
	{ vowel: "แอ", name: "สระแอ", phonetic: "ɛɛ" },
	{ vowel: "โอะ", name: "สระโอะ", phonetic: "o" },
	{ vowel: "โอ", name: "สระโอ", phonetic: "oo" },
	{ vowel: "เอาะ", name: "สระเอาะ", phonetic: "ɔ" },
	{ vowel: "ออ", name: "สระออ", phonetic: "ɔɔ" },
	{ vowel: "เออะ", name: "สระเออะ", phonetic: "ə" },
	{ vowel: "เออ", name: "สระเออ", phonetic: "əə" },
	{ vowel: "เอียะ", name: "สระเอียะ", phonetic: "ia" },
	{ vowel: "เอีย", name: "สระเอีย", phonetic: "iia" },
	{ vowel: "เอือะ", name: "สระเอือะ", phonetic: "ɯa" },
	{ vowel: "เอือ", name: "สระเอือ", phonetic: "ɯɯa" },
	{ vowel: "อัวะ", name: "สระอัวะ", phonetic: "ua" },
	{ vowel: "อัว", name: "สระอัว", phonetic: "uua" },
	{ vowel: "อำ", name: "สระอำ", phonetic: "am" },
	{ vowel: "ใอ", name: "สระใอ", phonetic: "ai" },
	{ vowel: "ไอ", name: "สระไอ", phonetic: "ai" },
	{ vowel: "เอา", name: "สระเอา", phonetic: "ao" },
	{ vowel: "ฤ", name: "สระ ฤ", phonetic: "rɯ" },
	{ vowel: "ฤๅ", name: "สระ ฤๅ", phonetic: "rɯɯ" },
	{ vowel: "ฦ", name: "สระ ฦ", phonetic: "lɯ" },
	{ vowel: "ฦๅ", name: "สระ ฦๅ", phonetic: "lɯɯ" },
];

export default vowels;
