// Thai numbers: 1–40, the tens 50–90, and the powers 100 … 10,000,000.
// Each entry carries the Arabic value, the Thai numeral, the spelled-out Thai
// word (used for speech and the reveal), and the phonetic reading.
const numbers = [
	{ value: 1, thai: "๑", word: "หนึ่ง", phonetic: "nɯ̀ng" },
	{ value: 2, thai: "๒", word: "สอง", phonetic: "sɔ̌ɔng" },
	{ value: 3, thai: "๓", word: "สาม", phonetic: "sǎam" },
	{ value: 4, thai: "๔", word: "สี่", phonetic: "sìi" },
	{ value: 5, thai: "๕", word: "ห้า", phonetic: "hâa" },
	{ value: 6, thai: "๖", word: "หก", phonetic: "hòk" },
	{ value: 7, thai: "๗", word: "เจ็ด", phonetic: "jèt" },
	{ value: 8, thai: "๘", word: "แปด", phonetic: "bpɛ̀ɛt" },
	{ value: 9, thai: "๙", word: "เก้า", phonetic: "gâo" },
	{ value: 10, thai: "๑๐", word: "สิบ", phonetic: "sìp" },
	{ value: 11, thai: "๑๑", word: "สิบเอ็ด", phonetic: "sìp-èt" },
	{ value: 12, thai: "๑๒", word: "สิบสอง", phonetic: "sìp-sɔ̌ɔng" },
	{ value: 13, thai: "๑๓", word: "สิบสาม", phonetic: "sìp-sǎam" },
	{ value: 14, thai: "๑๔", word: "สิบสี่", phonetic: "sìp-sìi" },
	{ value: 15, thai: "๑๕", word: "สิบห้า", phonetic: "sìp-hâa" },
	{ value: 16, thai: "๑๖", word: "สิบหก", phonetic: "sìp-hòk" },
	{ value: 17, thai: "๑๗", word: "สิบเจ็ด", phonetic: "sìp-jèt" },
	{ value: 18, thai: "๑๘", word: "สิบแปด", phonetic: "sìp-bpɛ̀ɛt" },
	{ value: 19, thai: "๑๙", word: "สิบเก้า", phonetic: "sìp-gâo" },
	{ value: 20, thai: "๒๐", word: "ยี่สิบ", phonetic: "yîi-sìp" },
	{ value: 21, thai: "๒๑", word: "ยี่สิบเอ็ด", phonetic: "yîi-sìp-èt" },
	{ value: 22, thai: "๒๒", word: "ยี่สิบสอง", phonetic: "yîi-sìp-sɔ̌ɔng" },
	{ value: 23, thai: "๒๓", word: "ยี่สิบสาม", phonetic: "yîi-sìp-sǎam" },
	{ value: 24, thai: "๒๔", word: "ยี่สิบสี่", phonetic: "yîi-sìp-sìi" },
	{ value: 25, thai: "๒๕", word: "ยี่สิบห้า", phonetic: "yîi-sìp-hâa" },
	{ value: 26, thai: "๒๖", word: "ยี่สิบหก", phonetic: "yîi-sìp-hòk" },
	{ value: 27, thai: "๒๗", word: "ยี่สิบเจ็ด", phonetic: "yîi-sìp-jèt" },
	{ value: 28, thai: "๒๘", word: "ยี่สิบแปด", phonetic: "yîi-sìp-bpɛ̀ɛt" },
	{ value: 29, thai: "๒๙", word: "ยี่สิบเก้า", phonetic: "yîi-sìp-gâo" },
	{ value: 30, thai: "๓๐", word: "สามสิบ", phonetic: "sǎam-sìp" },
	{ value: 31, thai: "๓๑", word: "สามสิบเอ็ด", phonetic: "sǎam-sìp-èt" },
	{ value: 32, thai: "๓๒", word: "สามสิบสอง", phonetic: "sǎam-sìp-sɔ̌ɔng" },
	{ value: 33, thai: "๓๓", word: "สามสิบสาม", phonetic: "sǎam-sìp-sǎam" },
	{ value: 34, thai: "๓๔", word: "สามสิบสี่", phonetic: "sǎam-sìp-sìi" },
	{ value: 35, thai: "๓๕", word: "สามสิบห้า", phonetic: "sǎam-sìp-hâa" },
	{ value: 36, thai: "๓๖", word: "สามสิบหก", phonetic: "sǎam-sìp-hòk" },
	{ value: 37, thai: "๓๗", word: "สามสิบเจ็ด", phonetic: "sǎam-sìp-jèt" },
	{ value: 38, thai: "๓๘", word: "สามสิบแปด", phonetic: "sǎam-sìp-bpɛ̀ɛt" },
	{ value: 39, thai: "๓๙", word: "สามสิบเก้า", phonetic: "sǎam-sìp-gâo" },
	{ value: 40, thai: "๔๐", word: "สี่สิบ", phonetic: "sìi-sìp" },
	{ value: 50, thai: "๕๐", word: "ห้าสิบ", phonetic: "hâa-sìp" },
	{ value: 60, thai: "๖๐", word: "หกสิบ", phonetic: "hòk-sìp" },
	{ value: 70, thai: "๗๐", word: "เจ็ดสิบ", phonetic: "jèt-sìp" },
	{ value: 80, thai: "๘๐", word: "แปดสิบ", phonetic: "bpɛ̀ɛt-sìp" },
	{ value: 90, thai: "๙๐", word: "เก้าสิบ", phonetic: "gâo-sìp" },
	{ value: 100, thai: "๑๐๐", word: "หนึ่งร้อย", phonetic: "nɯ̀ng-rɔ́ɔy" },
	{ value: 1000, thai: "๑๐๐๐", word: "หนึ่งพัน", phonetic: "nɯ̀ng-pan" },
	{ value: 10000, thai: "๑๐๐๐๐", word: "หนึ่งหมื่น", phonetic: "nɯ̀ng-mɯ̀ɯn" },
	{ value: 100000, thai: "๑๐๐๐๐๐", word: "หนึ่งแสน", phonetic: "nɯ̀ng-sɛ̌ɛn" },
	{ value: 1000000, thai: "๑๐๐๐๐๐๐", word: "หนึ่งล้าน", phonetic: "nɯ̀ng-láan" },
	{ value: 10000000, thai: "๑๐๐๐๐๐๐๐", word: "สิบล้าน", phonetic: "sìp-láan" },
];

export default numbers;

// Group the Arabic value in threes with spaces, e.g. 10000000 -> "10 000 000".
export function formatArabic(value)
{
	return value.toLocaleString("en-US").replaceAll(",", " ");
}
