// Short stories for reading practice, grouped by level.
//
// To add a story, append an object to the matching level array:
// {
//   id: "unique-slug",
//   title: "Thai title",
//   titleEn: "English title",
//   thai: ["paragraph 1", "paragraph 2", ...],
//   english: ["paragraph 1", "paragraph 2", ...],
// }
export const levels = [
	{ id: "beginner", label: "Beginner" },
	{ id: "intermediate", label: "Intermediate" },
	{ id: "advanced", label: "Advanced" },
];

const stories = {
	beginner: [
		{
			id: "my-cat",
			title: "แมว ของ ฉัน",
			titleEn: "My cat",
			thai: [
				"ฉัน มี แมว หนึ่ง ตัว มัน มี สี ขาว และ สี ดำ แมว ของ ฉัน ชื่อ มิ้ว. มิ้ว ชอบ กิน ปลา และ ชอบ นอน ทั้ง วัน.",
				"ทุก เช้า มิ้ว จะ มา นั่ง ที่ หน้าต่าง มัน ชอบ มอง นก ที่ บิน ผ่าน ไป. ฉัน รัก แมว ตัว นี้ มาก.",
			],
			english: [
				"I have one cat. It is white and black. My cat's name is Miu. Miu likes to eat fish and sleep all day.",
				"Every morning, Miu comes to sit by the window. She likes to watch the birds flying by. I love my cat very much.",
			],
		},
		{
			id: "rainy-day",
			title: "วันนี้ ฝนตก",
			titleEn: "It is raining today",
			thai: [
				"วันนี้ ฝนตก ตั้งแต่ เช้า. ฉัน ต้อง กาง ร่ม ไป โรงเรียน. ถนน มี น้ำ ขัง เยอะ รถ วิ่ง ช้า มาก.",
				"ฉัน ชอบ ฟัง เสียง ฝน ตอน นอน มัน ทำให้ ฉัน รู้สึก สบาย และ หลับ ง่าย ขึ้น",
			],
			english: [
				"It has been raining since this morning. I had to bring an umbrella to school. The road had a lot of standing water, so cars moved very slowly.",
				"I like listening to the sound of rain while I sleep. It makes me feel relaxed and helps me fall asleep more easily.",
			],
		},
		{
			id: "my-family",
			title: "ครอบครัว ของ ฉัน",
			titleEn: "My family",
			thai: [
				"ครอบครัว ของ ฉัน มี สี่ คน คือ พ่อ แม่ พี่สาว และ ฉัน. เรา อยู่ บ้าน เล็ก ๆ ใกล้ แม่น้ำ",
				"ทุก เย็น เรา กิน ข้าว พร้อม กัน และ คุย เรื่อง ต่าง ๆ ฉัน มี ความสุข ที่ ได้ อยู่ กับ ครอบครัว.",
			],
			english: [
				"My family has four people: my father, mother, older sister, and me. We live in a small house near a river.",
				"Every evening we eat dinner together and talk about various things. I'm happy to be with my family.",
			],
		},
		{
			id: "my-school",
			title: "โรงเรียน ของ ฉัน",
			titleEn: "My school",
			thai: [
				"โรงเรียน ของ ฉัน อยู่ ไม่ ไกล จาก บ้าน. ฉัน เดิน ไป เรียน ทุก วัน. ใน โรงเรียน มี ต้นไม้ ใหญ่ หลาย ต้น",
				"ครู ของ ฉัน ใจดี และ สอน สนุก. ฉัน ชอบ วิชา ภาษาไทย มาก ที่สุด เพราะ ได้ อ่าน นิทาน.",
			],
			english: [
				"My school isn't far from home. I walk to school every day. There are many big trees at the school.",
				"My teacher is kind and makes lessons fun. I like Thai language class the most because I get to read stories.",
			],
		},
	],
	intermediate: [],
	advanced: [],
};

export default stories;
