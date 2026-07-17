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
		{
			id: "breakfast",
			title: "อาหาร เช้า",
			titleEn: "Breakfast",
			thai: [
				"ทุก เช้า ฉัน กิน ข้าว ต้ม กับ ไข่ ต้ม. แม่ บอก ว่า อาหาร เช้า สำคัญ มาก ต่อ ร่างกาย. บางวัน ฉัน กิน ขนมปัง กับ นม สด แทน ข้าว ต้ม เพราะ ทำ ง่าย และ กิน เร็ว.",
			],
			english: [
				"Every morning I eat rice porridge with a boiled egg. My mother says breakfast is very important for the body. Some days I eat bread with fresh milk instead of rice porridge because it's quick and easy.",
			],
		},
		{
			id: "back-garden",
			title: "สวน หลัง บ้าน",
			titleEn: "The back garden",
			thai: [
				"หลัง บ้าน ของ ฉัน มี สวน เล็ก ๆ พ่อ ปลูก มะเขือเทศ พริก และ ดอกไม้ หลาย ชนิด ฉัน ช่วย พ่อ รดน้ำ ต้นไม้ ทุก เย็น เรา ชอบ นั่ง ดู ดอกไม้ บาน ด้วย กัน",
			],
			english: [
				"Behind my house there's a small garden. My father grows tomatoes, chilies, and many kinds of flowers. I help my father water the plants every evening. We like sitting together to watch the flowers bloom.",
			],
		},
		{
			id: "my-friend",
			title: "เพื่อน ของ ฉัน",
			titleEn: "My friend",
			thai: [
				"ฉัน มี เพื่อน สนิท คน หนึ่ง ชื่อ นิด เรา เรียน ห้อง เดียว กัน มา สาม ปี แล้ว นิด ชอบ วาด รูป ส่วน ฉัน ชอบ เล่น กีฬา เรา ช่วย กัน ทำ การบ้าน ทุก วัน หลัง เลิก เรียน",
			],
			english: [
				"I have a close friend named Nid. We've been in the same class for three years now. Nid likes drawing, while I like playing sports. We help each other with homework every day after school.",
			],
		},
		{
			id: "moms-birthday",
			title: "วันเกิด ของ แม่",
			titleEn: "Mom's birthday",
			thai: [
				"วัน นี้ เป็น วันเกิด ของ แม่ ฉัน กับ พี่สาว ช่วย กัน ทำ เค้ก ให้ แม่ เรา ซื้อ ดอกไม้ มา ด้วย แม่ ดีใจ มาก ตอน เห็น เค้ก แม่ บอก ว่า นี่ คือ วันเกิด ที่ ดี ที่สุด ของ แม่",
			],
			english: [
				"Today is my mother's birthday. My older sister and I made a cake for her together. We also bought flowers. Mom was very happy when she saw the cake. She said this was the best birthday she's ever had.",
			],
		},
		{
			id: "summer",
			title: "ฤดูร้อน",
			titleEn: "Summer",
			thai: [
				"ฤดูร้อน ปีนี้ ร้อน มาก ฉัน กับ เพื่อน ชอบ ไป เล่น น้ำ ที่ แม่น้ำ ใกล้ บ้าน ทุก บ่าย",
				"น้ำ เย็น และ ใส ทำให้ เรา สดชื่น หลัง จาก เล่น น้ำ เรา จะ กิน ไอศกรีม ด้วย กัน",
			],
			english: [
				"Summer this year is very hot. My friends and I like to swim in the river near our house every afternoon.",
				"The water is cool and clear, which refreshes us. After swimming, we eat ice cream together.",
			],
		},
		{
			id: "chiang-mai-trip",
			title: "ไปเที่ยวเชียงใหม่",
			titleEn: "A trip to Chiang Mai",
			thai: [
				"ปิดเทอมที่แล้ว ฉันไปเที่ยวเชียงใหม่กับครอบครัว เราขับรถขึ้นเขาไปดูดอกไม้ที่บาน สวยงามมาก อากาศบนเขาเย็นสบาย ต่างจากในเมืองมาก",
				"วันที่สอง เราไปเดินตลาดเช้าและซื้อของฝากหลายอย่าง มีทั้งผ้าทอมือและกาแฟสด แม่ซื้อผ้าพันคอสีสวยให้ยาย ส่วนพ่อซื้อกาแฟกลับไปฝากเพื่อนที่ทำงาน",
				"ก่อนกลับ เราไปกินข้าวซอยที่ร้านเก่าแก่ริมถนน รสชาติอร่อยจนฉันอยากกลับไปกินอีก ทริปนี้ทำให้ฉันรักเชียงใหม่มากขึ้น",
			],
			english: [
				"Last school break, I went to Chiang Mai with my family. We drove up the mountain to see the blooming flowers — they were beautiful. The mountain air was cool, very different from the city.",
				"On the second day, we walked through the morning market and bought several souvenirs, including handwoven fabric and fresh coffee. Mom bought a pretty scarf for grandma, while dad bought coffee to bring back for a coworker.",
				"Before heading home, we ate khao soi at an old restaurant by the road. It was so delicious I wanted to go back for more. This trip made me love Chiang Mai even more.",
			],
		},
		{
			id: "loy-krathong",
			title: "วันลอยกระทง",
			titleEn: "Loy Krathong night",
			thai: [
				"คืนวันลอยกระทง ท้องฟ้าใสและมีดวงจันทร์เต็มดวง ฉันกับแม่ช่วยกันทำกระทงจากใบตองและดอกไม้สด ใช้เวลาทำนานเกือบชั่วโมง แต่สนุกมาก",
				"พอตกค่ำ เราเดินไปที่แม่น้ำใกล้บ้าน คนมากันเยอะมาก ทุกคนถือกระทงและตะเกียงกันคนละอัน แสงไฟสะท้อนบนผิวน้ำสวยงามมาก",
				"ฉันจุดเทียนแล้วอธิษฐาน ก่อนปล่อยกระทงลงน้ำ ขณะที่กระทงลอยไปตามน้ำ ฉันรู้สึกใจฟูและมีความสุข นี่คือค่ำคืนที่ฉันชอบที่สุดของปี",
			],
			english: [
				"On Loy Krathong night, the sky was clear with a full moon. My mother and I made a krathong together from banana leaves and fresh flowers. It took almost an hour, but it was a lot of fun.",
				"As evening fell, we walked to the river near our house. Huge crowds had gathered, everyone holding their own krathong and lantern. The lights reflecting on the water's surface were beautiful.",
				"I lit a candle and made a wish before releasing the krathong into the water. As it floated away, I felt uplifted and happy. This is my favorite night of the year.",
			],
		},
		{
			id: "songkran",
			title: "สงกรานต์",
			titleEn: "Songkran",
			thai: [
				"เดือนเมษายนของทุกปี ครอบครัวฉันจะรวมตัวกันเพื่อฉลองสงกรานต์ ตอนเช้าเราไปวัดเพื่อทำบุญและรดน้ำขอพรจากคุณยาย คุณยายยิ้มและอวยพรให้ทุกคนมีความสุข",
				"พอสาย ๆ เพื่อนบ้านออกมาเล่นน้ำกันที่หน้าบ้าน ทุกคนถือถังน้ำและปืนฉีดน้ำ เสียงหัวเราะดังไปทั่วซอย น้องชายของฉันโดนสาดน้ำจนเปียกทั้งตัวแต่ก็ยังหัวเราะ",
				"ตอนเย็นทุกคนเหนื่อยแต่มีความสุข เรานั่งกินขนมด้วยกันที่ระเบียงบ้าน สงกรานต์ปีนี้สนุกไม่แพ้ปีก่อน ๆ เลย",
			],
			english: [
				"Every April, my family gathers to celebrate Songkran. In the morning we go to the temple to make merit and pour water over grandma's hands to ask for her blessing. Grandma smiles and blesses everyone with happiness.",
				"Later in the morning, neighbors come out to play with water in front of their houses. Everyone holds buckets and water guns. Laughter echoes through the whole street. My little brother gets completely soaked but keeps laughing anyway.",
				"By evening, everyone is tired but happy. We sit together eating snacks on the porch. This year's Songkran was just as fun as previous years.",
			],
		},
		{
			id: "puppy-at-home",
			title: "หมาน้อยที่บ้าน",
			titleEn: "The puppy at home",
			thai: [
				"เมื่อสามเดือนก่อน พ่อพาหมาตัวเล็กมาเลี้ยงที่บ้าน มันเป็นหมาพันธุ์ผสม สีน้ำตาลอ่อน ตาโตกลม ทุกคนในบ้านตั้งชื่อมันว่าโบโบ้",
				"โบโบ้ชอบวิ่งไล่ผีเสื้อในสวนและชอบนอนใต้ต้นมะม่วง ทุกเช้าฉันจะพามันไปเดินเล่นรอบบ้านก่อนไปโรงเรียน มันวิ่งนำหน้าฉันตลอดทาง",
				"ตอนกลางคืน โบโบ้จะนอนข้างเตียงฉัน ถ้าได้ยินเสียงแปลก ๆ มันจะเห่าทันที ฉันรู้สึกอบอุ่นและปลอดภัยเมื่อมีโบโบ้อยู่ใกล้ ๆ",
			],
			english: [
				"Three months ago, my dad brought home a small puppy. It's a mixed breed with light brown fur and big round eyes. Everyone in the family named him Bobo.",
				"Bobo loves chasing butterflies in the garden and sleeping under the mango tree. Every morning I take him for a walk around the house before school. He always runs ahead of me the whole way.",
				"At night, Bobo sleeps beside my bed. If he hears any strange noise, he barks immediately. I feel warm and safe whenever Bobo is nearby.",
			],
		},
		{
			id: "saturday-market",
			title: "ตลาดนัดวันเสาร์",
			titleEn: "The Saturday market",
			thai: [
				"ทุกวันเสาร์ ใกล้บ้านฉันจะมีตลาดนัด มีร้านขายเสื้อผ้า ของกิน และของเล่นมากมาย ฉันชอบไปเดินตลาดนี้กับแม่ตอนเช้า",
				"แม่มักซื้อผักผลไม้สำหรับทำอาหารทั้งสัปดาห์ ส่วนฉันจะขอเงินซื้อขนมและลูกอมที่ชอบ บางครั้งมีการแสดงดนตรีเล็ก ๆ ที่มุมตลาด ทำให้บรรยากาศครึกครื้น",
				"ตอนกลับบ้าน มือของเราทั้งสองข้างจะเต็มไปด้วยถุงของ แม้จะเหนื่อย แต่ฉันชอบวันเสาร์แบบนี้เพราะได้ใช้เวลากับแม่",
			],
			english: [
				"Every Saturday, there's a flea market near my house, with stalls selling clothes, food, and toys. I love walking through this market with my mom in the morning.",
				"Mom usually buys vegetables and fruit for the whole week's cooking, while I ask for money to buy my favorite snacks and candy. Sometimes there's a small live music performance in a corner of the market, making the atmosphere lively.",
				"On the way home, both our hands are full of bags. Even though we're tired, I love Saturdays like this because I get to spend time with my mom.",
			],
		},
		{
			id: "visiting-grandma",
			title: "ไปหาคุณยาย",
			titleEn: "Visiting grandma",
			thai: [
				"ช่วงปิดเทอมฤดูร้อน พ่อแม่พาฉันไปหาคุณยายที่อยู่ต่างจังหวัด บ้านคุณยายอยู่ท่ามกลางทุ่งนาสีเขียว อากาศเย็นสบายกว่าในเมืองมาก",
				"คุณยายทำขนมไทยให้กินทุกวัน ทั้งขนมชั้นและข้าวเหนียวมะม่วง ฉันชอบนั่งฟังคุณยายเล่าเรื่องสมัยก่อนตอนที่แม่ยังเด็ก มันสนุกและได้ความรู้ไปด้วย",
				"ตอนเย็นเราออกไปเดินดูควายในทุ่งนาด้วยกัน คุณยายบอกว่าฉันโตขึ้นทุกครั้งที่มาเยี่ยม ฉันสัญญาว่าปีหน้าจะมาหาคุณยายอีก",
			],
			english: [
				"During summer break, my parents took me to visit my grandmother, who lives in the provinces. Her house sits among green rice fields, and the air is much cooler than in the city.",
				"Grandma makes Thai desserts for us every day, including layered cake and mango sticky rice. I love sitting and listening to her tell stories about the old days when my mom was still a child. It's fun and I learn a lot too.",
				"In the evening, we all went out together to watch the buffaloes in the fields. Grandma said I grow bigger every time I visit. I promised her I'd come back again next year.",
			],
		},
		{
			id: "football-with-friends",
			title: "เล่นฟุตบอลกับเพื่อน",
			titleEn: "Playing football with friends",
			thai: [
				"ทุกเย็นหลังเลิกเรียน ฉันกับเพื่อนจะไปเล่นฟุตบอลที่สนามหน้าโรงเรียน เราแบ่งทีมกันเองและเล่นจนถึงฟ้ามืด",
				"วันหนึ่ง ทีมของฉันตกลงกับทีมอีกฝั่งของโรงเรียนว่าจะแข่งกันจริงจัง ทุกคนฝึกซ้อมหนักขึ้นทุกวัน แม้จะเหนื่อยแต่ทุกคนก็ตั้งใจมาก",
				"วันแข่งจริง สนามเต็มไปด้วยผู้ปกครองที่มาเชียร์ ทีมของฉันชนะไปหนึ่งประตู ทุกคนดีใจและกอดกันด้วยความสุข นี่คือความทรงจำที่ฉันจะไม่ลืม",
			],
			english: [
				"Every evening after school, my friends and I play football on the field in front of the school. We split into teams ourselves and play until it gets dark.",
				"One day, my team agreed to a serious match against a team from the other side of the school. Everyone trained harder every day. Even though it was tiring, everyone was very committed.",
				"On match day, the field was full of parents cheering us on. My team won by one goal. Everyone was overjoyed and hugged each other happily. This is a memory I'll never forget.",
			],
		},
		{
			id: "cooking-with-mom",
			title: "ทำอาหารกับแม่",
			titleEn: "Cooking with mom",
			thai: [
				"วันอาทิตย์เป็นวันที่ฉันชอบที่สุด เพราะได้ทำอาหารกับแม่ในครัว วันนี้เราตัดสินใจทำผัดกะเพราไก่ไข่ดาว ซึ่งเป็นเมนูที่ทุกคนในบ้านชอบ",
				"แม่สอนฉันหั่นกระเทียมและพริกอย่างระมัดระวัง ส่วนแม่จะเป็นคนผัดเพราะไฟแรงและอันตราย กลิ่นกะเพราหอมฟุ้งไปทั่วบ้าน ทำให้พ่อกับน้องรีบเดินมาที่ครัว",
				"พอทำเสร็จ ทุกคนนั่งกินด้วยกันอย่างมีความสุข พ่อชมว่าอร่อยมาก ฉันรู้สึกภูมิใจที่ได้ช่วยแม่ทำอาหารมื้อนี้",
			],
			english: [
				"Sunday is my favorite day because I get to cook with my mom in the kitchen. Today we decided to make pad krapow (stir-fried basil chicken) with a fried egg, a dish everyone in the family loves.",
				"Mom taught me to carefully chop garlic and chili, while she did the stir-frying herself since the high flame can be dangerous. The smell of basil filled the whole house, drawing dad and my little sibling straight to the kitchen.",
				"Once it was done, everyone sat down to eat together happily. Dad said it was delicious. I felt proud to have helped mom cook this meal.",
			],
		},
		{
			id: "going-to-the-sea",
			title: "ไปทะเล",
			titleEn: "Going to the sea",
			thai: [
				"วันหยุดยาวเดือนที่แล้ว ครอบครัวฉันขับรถไปเที่ยวทะเลที่ชลบุรี ระหว่างทางฉันมองวิวข้างถนนและร้องเพลงในรถอย่างสนุกสนาน",
				"พอถึงชายหาด ฉันวิ่งลงเล่นน้ำทันที คลื่นซัดเข้าฝั่งเป็นระยะ ทำให้ฉันหัวเราะทุกครั้งที่โดนคลื่นดัน น้องชายก่อกองทรายเป็นรูปปราสาทอยู่ไม่ห่างกัน",
				"ตอนพระอาทิตย์ตก ทุกคนนั่งดูสีฟ้าของทะเลเปลี่ยนเป็นสีส้ม สวยงามมาก เราซื้ออาหารทะเลย่างมากินกันริมหาด เป็นวันที่มีความสุขที่สุดวันหนึ่งของฉัน",
			],
			english: [
				"On last month's long holiday, my family drove to the beach in Chonburi. Along the way, I watched the scenery and sang songs happily in the car.",
				"When we reached the shore, I ran straight into the water. Waves crashed onto the beach at regular intervals, making me laugh every time one pushed me. My little brother built a sandcastle not far away.",
				"At sunset, everyone sat watching the blue sea turn orange — it was beautiful. We bought grilled seafood to eat by the shore. It was one of the happiest days of my life.",
			],
		},
		{
			id: "muay-thai",
			title: "ฝึกมวยไทย",
			titleEn: "Training Muay Thai",
			thai: [
				"ทุกเย็นหลังเลิกเรียน ฉันไปฝึกมวยไทยที่ค่ายใกล้บ้าน ครูฝึกสอนให้ฉันฝึกท่าพื้นฐานก่อน เช่น การชกหมัดตรงและการเตะเข่า",
				"ตอนแรกฉันเหนื่อยมากจนแทบยืนไม่ไหว แต่ครูฝึกบอกว่าถ้าฝึกทุกวัน ร่างกายจะแข็งแรงขึ้นเรื่อย ๆ ฉันจึงตั้งใจฝึกซ้อมอย่างสม่ำเสมอ ไม่ขาดแม้แต่วันเดียว",
				"หลังจากฝึกมาสามเดือน ฉันรู้สึกว่าตัวเองแข็งแรงและมั่นใจมากขึ้น ครูฝึกชมว่าฉันพัฒนาไปไกลมาก ฉันตั้งใจว่าจะฝึกต่อไปเรื่อย ๆ จนกว่าจะได้ขึ้นชกจริง",
			],
			english: [
				"Every evening after school, I go train Muay Thai at a gym near my house. My trainer has me practice basic techniques first, like throwing a straight punch and doing a knee strike.",
				"At first I was so exhausted I could barely stand, but my trainer said that if I trained every day, my body would keep getting stronger. So I committed to training consistently, without missing a single day.",
				"After three months of training, I feel stronger and more confident. My trainer says I've improved a lot. I've decided I'll keep training until I get to fight for real.",
			],
		},
	],
	intermediate: [],
	advanced: [],
};

export default stories;
