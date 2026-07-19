// Thai classifiers (ลักษณนาม) — the counter word required whenever you count
// a noun, e.g. "นักเรียน 3 คน" (three students). Grouped loosely by what they
// count: people, objects/fruit, media/documents, vehicles, buildings/rooms,
// sets/containers, then general catch-alls.
const classifiers = [
	{ classifier: "คน", phonetic: "kon", meaning: "people (general)", example: { word: "นักเรียน", phonetic: "nák-rian", gloss: "student" } },
	{ classifier: "ท่าน", phonetic: "tâan", meaning: "respected people (formal)", example: { word: "อาจารย์", phonetic: "aa-jaan", gloss: "teacher" } },
	{ classifier: "องค์", phonetic: "ong", meaning: "Buddha images, monks, royalty (formal)", example: { word: "พระ", phonetic: "prá", gloss: "monk" } },
	{ classifier: "ตัว", phonetic: "dtua", meaning: "animals, furniture, clothing, letters", example: { word: "แมว", phonetic: "mɛɛo", gloss: "cat" } },
	{ classifier: "ใบ", phonetic: "bai", meaning: "leaves, fruit, cups, flat hollow objects, documents", example: { word: "ใบไม้", phonetic: "bai-máai", gloss: "leaf" } },
	{ classifier: "ผล", phonetic: "pǒn", meaning: "fruit (formal, written)", example: { word: "มะม่วง", phonetic: "má-mûang", gloss: "mango" } },
	{ classifier: "ลูก", phonetic: "lûuk", meaning: "round fruit, balls, children (informal)", example: { word: "ส้ม", phonetic: "sôm", gloss: "orange" } },
	{ classifier: "เล่ม", phonetic: "lêm", meaning: "books, knives, candles", example: { word: "หนังสือ", phonetic: "nǎng-sɯ̌ɯ", gloss: "book" } },
	{ classifier: "แผ่น", phonetic: "pɛ̀n", meaning: "flat thin sheets: paper, boards, discs", example: { word: "กระดาษ", phonetic: "grà-dàat", gloss: "paper" } },
	{ classifier: "ฉบับ", phonetic: "chà-bàp", meaning: "newspapers, letters, documents", example: { word: "จดหมาย", phonetic: "jòt-mǎai", gloss: "letter" } },
	{ classifier: "เรื่อง", phonetic: "rɯ̂ang", meaning: "stories, movies, TV episodes", example: { word: "หนัง", phonetic: "nǎng", gloss: "movie" } },
	{ classifier: "คัน", phonetic: "kan", meaning: "vehicles, umbrellas, spoons and forks", example: { word: "รถ", phonetic: "rót", gloss: "car" } },
	{ classifier: "ลำ", phonetic: "lam", meaning: "boats, airplanes", example: { word: "เรือ", phonetic: "rɯa", gloss: "boat" } },
	{ classifier: "หลัง", phonetic: "lǎng", meaning: "houses", example: { word: "บ้าน", phonetic: "bâan", gloss: "house" } },
	{ classifier: "โรง", phonetic: "roong", meaning: "schools, factories, theatres (buildings)", example: { word: "โรงเรียน", phonetic: "roong-rian", gloss: "school" } },
	{ classifier: "ห้อง", phonetic: "hɔ̂ng", meaning: "rooms", example: { word: "ห้องนอน", phonetic: "hɔ̂ng-nɔɔn", gloss: "bedroom" } },
	{ classifier: "คู่", phonetic: "kûu", meaning: "pairs", example: { word: "รองเท้า", phonetic: "rɔɔng-táao", gloss: "shoes" } },
	{ classifier: "ชุด", phonetic: "chút", meaning: "sets, outfits", example: { word: "เสื้อผ้า", phonetic: "sɯ̂a-pâa", gloss: "clothes" } },
	{ classifier: "แก้ว", phonetic: "gɛ̂ɛo", meaning: "glasses (of a drink)", example: { word: "น้ำ", phonetic: "náam", gloss: "water" } },
	{ classifier: "ขวด", phonetic: "kùat", meaning: "bottles", example: { word: "น้ำปลา", phonetic: "náam-bplaa", gloss: "fish sauce" } },
	{ classifier: "จาน", phonetic: "jaan", meaning: "plates (of food)", example: { word: "ข้าว", phonetic: "kâao", gloss: "rice" } },
	{ classifier: "ถ้วย", phonetic: "tûai", meaning: "cups, bowls", example: { word: "กาแฟ", phonetic: "gaa-fɛɛ", gloss: "coffee" } },
	{ classifier: "กล่อง", phonetic: "glɔ̀ng", meaning: "boxes", example: { word: "ของขวัญ", phonetic: "kɔ̌ɔng-kwǎn", gloss: "gift" } },
	{ classifier: "ซอง", phonetic: "sɔɔng", meaning: "envelopes, packets", example: { word: "บุหรี่", phonetic: "bù-rìi", gloss: "cigarette" } },
	{ classifier: "ก้อน", phonetic: "gɔ̂n", meaning: "lumps: soap, stone, ice, sugar", example: { word: "สบู่", phonetic: "sà-bùu", gloss: "soap" } },
	{ classifier: "ดวง", phonetic: "duang", meaning: "stars, sun, stamps, hearts", example: { word: "ดาว", phonetic: "daao", gloss: "star" } },
	{ classifier: "เส้น", phonetic: "sên", meaning: "noodles, roads, strings, hair", example: { word: "ก๋วยเตี๋ยว", phonetic: "gǔay-dtǐao", gloss: "noodles" } },
	{ classifier: "อัน", phonetic: "an", meaning: "small objects (general catch-all)", example: { word: "ดินสอ", phonetic: "din-sɔ̌ɔ", gloss: "pencil" } },
	{ classifier: "ชิ้น", phonetic: "chín", meaning: "pieces: cake, meat, cloth", example: { word: "เค้ก", phonetic: "kéek", gloss: "cake" } },
];

export default classifiers;
