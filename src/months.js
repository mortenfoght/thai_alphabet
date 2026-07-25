// The 12 Thai months (เดือน). Source: the "months" tab of the shared
// "Thai words" study sheet.
//
// `thai` is the full formal name; `short` is the everyday spoken abbreviation
// (e.g. มกรา for มกราคม); `phonetic` is a rough spoken reading.
//
// `days` encodes the Thai naming rule that native speakers use as a mnemonic:
// months ending in -คม have 31 days, months ending in -ยน have 30 days, and
// กุมภาพันธ์ (February, ending -พันธ์) has 28. The table renders this as a
// colour-coded stripe + legend so the list also teaches the rule.
const months = [
	{ n: 1, thai: "มกราคม", english: "January", short: "มกรา", phonetic: "magara", days: 31 },
	{ n: 2, thai: "กุมภาพันธ์", english: "February", short: "กุมภา", phonetic: "gumpaa", days: 28 },
	{ n: 3, thai: "มีนาคม", english: "March", short: "มีนา", phonetic: "meenaa", days: 31 },
	{ n: 4, thai: "เมษายน", english: "April", short: "เมษา", phonetic: "mææsaa", days: 30 },
	{ n: 5, thai: "พฤษภาคม", english: "May", short: "พฤษภา", phonetic: "prø sa paa", days: 31 },
	{ n: 6, thai: "มิถุนายน", english: "June", short: "มิถุนา", phonetic: "metunaa", days: 30 },
	{ n: 7, thai: "กรกฎาคม", english: "July", short: "กรกฎา", phonetic: "garagadaa", days: 31 },
	{ n: 8, thai: "สิงหาคม", english: "August", short: "สิงหา", phonetic: "singhaa", days: 31 },
	{ n: 9, thai: "กันยายน", english: "September", short: "กันยา", phonetic: "ganyaa", days: 30 },
	{ n: 10, thai: "ตุลาคม", english: "October", short: "ตุลา", phonetic: "dulaa", days: 31 },
	{ n: 11, thai: "พฤศจิกายน", english: "November", short: "พฤศจิกา", phonetic: "prø sa dje gaa", days: 30 },
	{ n: 12, thai: "ธันวาคม", english: "December", short: "ธันวา", phonetic: "tanwaa", days: 31 },
];

export default months;
