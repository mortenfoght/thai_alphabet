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
	intermediate: [
		{
			id: "unexpected-journey",
			title: "การเดินทางที่ไม่คาดคิด",
			titleEn: "The unexpected journey",
			thai: [
				"สมชายวางแผนเดินทางไปประชุมที่กรุงเทพฯ ด้วยเที่ยวบินเช้า แต่เมื่อไปถึงสนามบิน เขาพบว่าเที่ยวบินถูกยกเลิกเนื่องจากพายุฝนที่พัดผ่านเข้ามาอย่างกะทันหัน สายการบินแจ้งว่าต้องรอถึงบ่ายจึงจะมีเที่ยวบินถัดไป",
				"ด้วยความจำเป็นที่ต้องเข้าประชุมให้ทันเวลา สมชายจึงตัดสินใจเปลี่ยนแผนโดยเลือกเดินทางด้วยรถไฟความเร็วสูงแทน แม้จะใช้เวลานานกว่าเครื่องบิน แต่เขาก็สามารถทำงานบนรถไฟไปพร้อมกันได้ ระหว่างทาง เขาได้พบกับนักธุรกิจอีกคนที่ประสบปัญหาเดียวกัน ทั้งสองพูดคุยแลกเปลี่ยนความคิดเห็นทางธุรกิจกันอย่างออกรส",
				"สุดท้ายสมชายเดินทางไปถึงที่ประชุมได้ทันเวลาพอดี และยังได้คู่ค้าทางธุรกิจใหม่จากการพูดคุยบนรถไฟอีกด้วย เหตุการณ์ที่ไม่คาดคิดในวันนั้นกลับกลายเป็นโอกาสที่ดีอย่างไม่น่าเชื่อ",
			],
			english: [
				"Somchai planned to travel to a meeting in Bangkok on a morning flight. But when he arrived at the airport, he found his flight had been cancelled due to a sudden storm. The airline announced the next available flight wouldn't be until the afternoon.",
				"Since he had to make it to his meeting on time, Somchai decided to change plans and take the high-speed train instead. Even though it took longer than flying, he was able to work on the train at the same time. Along the way, he met another businessman facing the same problem, and the two of them had an engaging conversation exchanging business ideas.",
				"In the end, Somchai reached his meeting exactly on time — and even gained a new business partner from the conversation on the train. The unexpected event that day turned out to be an incredibly good opportunity.",
			],
		},
		{
			id: "my-small-business",
			title: "ธุรกิจเล็กๆของฉัน",
			titleEn: "My small business",
			thai: [
				"สองปีก่อน ฉันตัดสินใจลาออกจากงานประจำเพื่อเปิดร้านกาแฟเล็ก ๆ ของตัวเอง หลายคนบอกว่าเสี่ยงเกินไป แต่ฉันเชื่อว่าถ้าตั้งใจทำจริง ผลลัพธ์ก็ต้องออกมาดี",
				"ช่วงเดือนแรก ๆ ลูกค้าน้อยมากจนแทบไม่พอจ่ายค่าเช่าร้าน ฉันต้องปรับสูตรกาแฟหลายครั้งและเรียนรู้การตลาดผ่านสื่อสังคมออนไลน์ด้วยตัวเอง ค่อย ๆ สร้างฐานลูกค้าประจำผ่านการพูดคุยและให้บริการอย่างจริงใจ",
				"ทุกวันนี้ร้านกาแฟของฉันมีลูกค้าประจำมากขึ้นเรื่อย ๆ และเริ่มมีกำไรพอที่จะขยายสาขาที่สอง ประสบการณ์ครั้งนี้สอนให้ฉันรู้ว่าความอดทนและความสม่ำเสมอสำคัญกว่าความสำเร็จที่รวดเร็ว",
			],
			english: [
				"Two years ago, I decided to quit my full-time job to open my own small coffee shop. Many people told me it was too risky, but I believed that if I worked hard, the results would turn out well.",
				"In the first few months, I had so few customers I could barely cover the rent. I had to adjust my coffee recipe many times and taught myself marketing through social media. I gradually built a base of regular customers through genuine conversation and sincere service.",
				"Today, my coffee shop has more and more regular customers, and it's starting to make enough profit to expand to a second location. This experience taught me that patience and consistency matter more than quick success.",
			],
		},
		{
			id: "technology-changes-lives",
			title: "เทคโนโลยีเปลี่ยนชีวิต",
			titleEn: "Technology changed her life",
			thai: [
				"ก่อนหน้านี้ คุณสมหญิงเป็นแม่ค้าขายผักในตลาดสดมากว่าสิบปี รายได้ขึ้นอยู่กับจำนวนลูกค้าที่เดินผ่านหน้าร้านเท่านั้น จนกระทั่งลูกสาวแนะนำให้เธอเริ่มขายของผ่านแอปพลิเคชันส่งอาหารและสื่อสังคมออนไลน์",
				"แรก ๆ คุณสมหญิงไม่ค่อยเข้าใจวิธีใช้งานและกลัวว่าจะทำผิดพลาด แต่ลูกสาวช่วยสอนทุกขั้นตอนอย่างใจเย็น ไม่นานคุณสมหญิงก็เริ่มถ่ายรูปผักสวย ๆ และโพสต์ขายทุกเช้า ลูกค้าใหม่จากนอกพื้นที่เริ่มสั่งซื้อเข้ามาเรื่อย ๆ",
				"ภายในหนึ่งปี รายได้ของคุณสมหญิงเพิ่มขึ้นเป็นสองเท่า เธอบอกว่าเทคโนโลยีที่เคยดูยากและน่ากลัว กลับกลายเป็นเครื่องมือที่เปลี่ยนชีวิตเธอไปในทางที่ดีขึ้นอย่างไม่คาดคิด",
			],
			english: [
				"Before, Mrs. Somying had been a vegetable vendor at the fresh market for over ten years. Her income depended entirely on how many customers walked past her stall — until her daughter suggested she start selling through food delivery apps and social media.",
				"At first, Mrs. Somying didn't really understand how to use the technology and was afraid of making mistakes, but her daughter patiently taught her every step. Before long, she started taking pretty photos of her vegetables and posting them for sale every morning. New customers from outside the area kept placing orders.",
				"Within a year, her income had doubled. She says the technology that once seemed difficult and intimidating turned out to be a tool that changed her life for the better in ways she never expected.",
			],
		},
		{
			id: "boxers-dream",
			title: "ความฝันของนักมวย",
			titleEn: "A boxer's dream",
			thai: [
				"เด็กชายวัยสิบสี่ปีคนหนึ่งเติบโตมาในหมู่บ้านเล็ก ๆ ทางภาคอีสาน เขาฝันอยากเป็นนักมวยไทยระดับโลกมาตั้งแต่จำความได้ ทุกเช้าก่อนไปโรงเรียน เขาจะวิ่งรอบหมู่บ้านและฝึกชกกระสอบทรายที่ผูกไว้ใต้ต้นมะขาม",
				"ครอบครัวของเขาไม่มีเงินพอส่งเขาไปฝึกที่ค่ายมวยใหญ่ในเมือง เขาจึงฝึกเองโดยดูวิดีโอจากอินเทอร์เน็ตและขอคำแนะนำจากนักมวยรุ่นพี่ในหมู่บ้าน แม้บางครั้งจะรู้สึกท้อแท้เมื่อแพ้การแข่งขัน แต่เขาไม่เคยคิดจะเลิก",
				"หลังฝึกฝนมานานหลายปี เขาได้รับโอกาสไปทดสอบฝีมือที่ค่ายมวยในกรุงเทพฯ และผ่านการคัดเลือกเข้าเป็นนักมวยอาชีพในที่สุด ความฝันที่ดูเหมือนไกลเกินเอื้อม กลายเป็นความจริงได้ด้วยความพยายามที่ไม่ย่อท้อ",
			],
			english: [
				"A fourteen-year-old boy grew up in a small village in the northeast. He had dreamed of becoming a world-class Muay Thai fighter for as long as he could remember. Every morning before school, he would run around the village and practice punching a sandbag tied under a tamarind tree.",
				"His family couldn't afford to send him to train at a big gym in the city, so he trained himself, watching videos online and asking senior fighters in the village for advice. Even though he sometimes felt discouraged after losing matches, he never once thought about quitting.",
				"After years of training, he was given the chance to try out at a gym in Bangkok and was eventually selected to become a professional fighter. A dream that once seemed impossibly out of reach became reality through unwavering effort.",
			],
		},
		{
			id: "first-investment",
			title: "การลงทุนครั้งแรก",
			titleEn: "The first investment",
			thai: [
				"เมื่อสามปีก่อน ธนาเริ่มสนใจเรื่องคริปโทเคอร์เรนซีหลังจากอ่านข่าวเกี่ยวกับราคาบิตคอยน์ที่พุ่งสูงขึ้นอย่างรวดเร็ว ด้วยความอยากรู้และอยากลองทำกำไร เขาจึงนำเงินเก็บทั้งหมดไปลงทุนโดยไม่ได้ศึกษาข้อมูลอย่างรอบคอบ",
				"ไม่นานหลังจากนั้น ตลาดคริปโทปรับตัวลงอย่างหนัก เงินลงทุนของธนาลดลงไปกว่าครึ่ง เขารู้สึกเครียดและเสียใจมาก แต่แทนที่จะถอนเงินออกทั้งหมด เขาเลือกที่จะศึกษาความรู้เรื่องการวิเคราะห์ตลาดและการบริหารความเสี่ยงอย่างจริงจังมากขึ้น",
				"หลังจากนั้นธนาเริ่มลงทุนอย่างมีแผนและกระจายความเสี่ยงมากขึ้น แม้ผลตอบแทนจะไม่หวือหวาเหมือนช่วงแรก แต่เขารู้สึกมั่นคงและเข้าใจตลาดมากขึ้น เขามักบอกเพื่อน ๆ ว่าบทเรียนราคาแพงในครั้งนั้นสอนให้เขาเป็นนักลงทุนที่รอบคอบขึ้นอย่างมาก",
			],
			english: [
				"Three years ago, Thana became interested in cryptocurrency after reading news about Bitcoin's rapidly rising price. Out of curiosity and a desire to make quick profits, he invested all his savings without carefully researching first.",
				"Not long after, the crypto market crashed hard, and his investment lost more than half its value. He felt stressed and devastated, but instead of withdrawing everything, he chose to seriously study market analysis and risk management.",
				"After that, Thana began investing with a plan and diversifying his risk more carefully. Even though the returns weren't as dramatic as before, he felt more stable and understood the market better. He often tells his friends that the expensive lesson from that time taught him to become a far more careful investor.",
			],
		},
		{
			id: "foreign-friend",
			title: "เพื่อนต่างชาติ",
			titleEn: "A foreign friend",
			thai: [
				"ปีที่แล้ว มีนักเรียนแลกเปลี่ยนจากประเทศเยอรมนีชื่อลูคัสมาเรียนที่โรงเรียนของฉันเป็นเวลาหนึ่งปี ตอนแรกเขาพูดภาษาไทยไม่ได้เลยและดูเหมือนจะเก็บตัวอยู่คนเดียวบ่อย ๆ",
				"ฉันตัดสินใจเข้าไปทำความรู้จักและชวนเขาไปกินข้าวกับกลุ่มเพื่อน เราสอนภาษาไทยง่าย ๆ ให้เขา ส่วนเขาก็สอนภาษาเยอรมันให้เราเป็นการแลกเปลี่ยน แม้บางครั้งจะสื่อสารกันลำบากเพราะใช้ภาษาอังกฤษปนกัน แต่ทุกคนก็สนุกกับการเรียนรู้วัฒนธรรมของกันและกัน",
				"เมื่อถึงเวลาที่ลูคัสต้องกลับประเทศ ทุกคนรู้สึกใจหายและร้องไห้ในวันอำลา เราสัญญากันว่าจะติดต่อกันตลอด และหวังว่าสักวันจะได้ไปเยี่ยมเขาที่เยอรมนีบ้าง มิตรภาพข้ามวัฒนธรรมครั้งนี้สอนให้ฉันเข้าใจโลกกว้างขึ้นมาก",
			],
			english: [
				"Last year, an exchange student from Germany named Lukas came to study at my school for a year. At first, he couldn't speak any Thai at all and often seemed to keep to himself.",
				"I decided to get to know him and invited him to eat with our group of friends. We taught him simple Thai, and in exchange, he taught us some German. Even though communication was sometimes difficult since we mixed in English, everyone had fun learning about each other's culture.",
				"When it was time for Lukas to return home, everyone felt heartbroken and cried on the day of farewell. We promised to stay in touch and hoped to visit him in Germany someday. This cross-cultural friendship taught me to understand the world much more broadly.",
			],
		},
		{
			id: "lessons-from-failure",
			title: "บทเรียนจากความล้มเหลว",
			titleEn: "Lessons from failure",
			thai: [
				"วิชัยเปิดร้านอาหารตามความฝันของตัวเองหลังจากเก็บเงินมานานหลายปี เขาลงทุนตกแต่งร้านอย่างสวยงามและจ้างพนักงานหลายคน แต่ด้วยความไม่มีประสบการณ์ด้านการบริหาร ร้านของเขาขาดทุนต่อเนื่องภายในเวลาไม่ถึงหนึ่งปี",
				"การปิดร้านทำให้วิชัยรู้สึกล้มเหลวอย่างมาก เขาเก็บตัวอยู่บ้านนานหลายเดือนและไม่กล้าเริ่มต้นทำอะไรใหม่ อย่างไรก็ตาม เพื่อนสนิทคนหนึ่งชักชวนให้เขาไปทำงานเป็นพนักงานในร้านอาหารของคนอื่นเพื่อเรียนรู้ระบบการบริหารจริง ๆ",
				"หลังจากทำงานเก็บประสบการณ์อยู่สองปี วิชัยเปิดร้านอาหารใหม่อีกครั้งพร้อมความรู้และความเข้าใจที่มากขึ้น คราวนี้ร้านของเขาประสบความสำเร็จและมีลูกค้าประจำมากมาย วิชัยบอกเสมอว่าความล้มเหลวครั้งแรกคือครูที่ดีที่สุดที่เขาเคยมี",
			],
			english: [
				"Wichai opened a restaurant to fulfill his own dream after saving money for many years. He invested heavily in beautiful décor and hired several staff, but due to his lack of management experience, the restaurant kept losing money and closed within less than a year.",
				"Closing the restaurant made Wichai feel like a complete failure. He stayed home for months, afraid to start anything new. However, a close friend convinced him to work as an employee at someone else's restaurant to really learn how the management system worked.",
				"After two years of gaining experience, Wichai opened a new restaurant with much greater knowledge and understanding. This time, his restaurant succeeded and gained many regular customers. Wichai always says his first failure was the best teacher he ever had.",
			],
		},
		{
			id: "the-town-that-changed",
			title: "เมืองที่เปลี่ยนไป",
			titleEn: "The town that changed",
			thai: [
				"เมื่อสิบปีก่อน หมู่บ้านเล็ก ๆ แห่งนี้ยังเป็นพื้นที่เกษตรกรรมที่เงียบสงบ ผู้คนส่วนใหญ่ทำนาและเลี้ยงสัตว์เป็นอาชีพหลัก แต่หลังจากมีการสร้างถนนใหญ่เชื่อมต่อกับตัวเมือง ทุกอย่างก็เริ่มเปลี่ยนไปอย่างรวดเร็ว",
				"โรงงานและห้างสรรพสินค้าเริ่มเข้ามาตั้งอยู่ในพื้นที่ ที่ดินราคาสูงขึ้นหลายเท่าตัว ชาวบ้านหลายคนขายที่นาให้กับนักลงทุนและเปลี่ยนอาชีพไปทำงานในโรงงานแทน แม้รายได้จะมั่นคงขึ้น แต่วิถีชีวิตแบบเดิมที่เคยเรียบง่ายก็หายไปพร้อมกับความเปลี่ยนแปลงนี้",
				"ทุกวันนี้ เมื่อคนรุ่นเก่ามองย้อนไปยังอดีต หลายคนรู้สึกคิดถึงความสงบและความผูกพันในชุมชนแบบเก่า แม้จะยอมรับว่าความสะดวกสบายในปัจจุบันดีขึ้นในหลายด้าน แต่สิ่งที่สูญเสียไปก็ไม่สามารถเรียกกลับคืนมาได้อีก",
			],
			english: [
				"Ten years ago, this small village was still a quiet agricultural area. Most people farmed rice fields and raised livestock as their main occupation. But after a large road was built connecting it to the city, everything began to change rapidly.",
				"Factories and shopping malls started moving into the area, and land prices rose many times over. Many villagers sold their rice fields to investors and switched to factory work instead. Although their income became more stable, the simple way of life they once had disappeared along with this change.",
				"Today, when older generations look back on the past, many feel nostalgic for the peace and close-knit community of before. Even though they admit today's conveniences are better in many ways, what was lost can never be brought back.",
			],
		},
		{
			id: "holiday-like-no-other",
			title: "วันหยุดที่ไม่เหมือนใคร",
			titleEn: "A holiday like no other",
			thai: [
				"ปกติแล้ว ครอบครัวของอรุณจะไปเที่ยวทะเลทุกปีในช่วงวันหยุดยาว แต่ปีนี้ลูกชายคนโตเสนอให้ลองทำสิ่งที่แตกต่างออกไปบ้าง นั่นคือการไปเป็นอาสาสมัครสอนหนังสือให้เด็ก ๆ ในพื้นที่ห่างไกลทางภาคเหนือ",
				"ตอนแรกอรุณค่อนข้างลังเล เพราะไม่คุ้นเคยกับการเดินทางไปพื้นที่ที่ไม่มีสิ่งอำนวยความสะดวกมากนัก แต่เมื่อไปถึง เธอกลับพบว่าเด็ก ๆ ในหมู่บ้านมีความกระตือรือร้นในการเรียนรู้อย่างมาก แม้จะขาดแคลนอุปกรณ์การเรียนก็ตาม ทั้งครอบครัวช่วยกันสอนหนังสือ เล่นเกม และทำกิจกรรมร่วมกับเด็ก ๆ ตลอดทั้งสัปดาห์",
				"ก่อนกลับบ้าน เด็ก ๆ พากันมาส่งพร้อมของขวัญที่ทำด้วยมือ อรุณรู้สึกซาบซึ้งใจมากกว่าการไปเที่ยวทะเลครั้งใดที่ผ่านมา เธอตัดสินใจว่าจะทำกิจกรรมแบบนี้กับครอบครัวเป็นประจำทุกปีต่อจากนี้ไป",
			],
			english: [
				"Normally, Arun's family goes to the beach every year during the long holidays. But this year, her eldest son suggested trying something different — volunteering to teach children in a remote area in the north.",
				"At first, Arun was quite hesitant, since she wasn't used to traveling to places without many conveniences. But when they arrived, she found the village children were incredibly enthusiastic about learning, even with a lack of school supplies. The whole family spent the week teaching, playing games, and doing activities together with the children.",
				"Before leaving, the children came to see them off with handmade gifts. Arun felt more touched than she ever had on any beach trip before. She decided the family would make this kind of activity a yearly tradition from now on.",
			],
		},
		{
			id: "difficult-decision",
			title: "การตัดสินใจที่ยากลำบาก",
			titleEn: "A difficult decision",
			thai: [
				"สุพรเป็นพนักงานบริษัทมาสิบกว่าปี วันหนึ่งเขาได้รับข้อเสนองานใหม่จากบริษัทต่างประเทศที่ให้เงินเดือนสูงกว่าเดิมมาก แต่ต้องย้ายไปทำงานที่ต่างประเทศเป็นเวลาอย่างน้อยสามปี ซึ่งหมายความว่าเขาต้องทิ้งครอบครัวและเพื่อนสนิททั้งหมดไว้ที่นี่",
				"หลายคืนสุพรนอนไม่หลับเพราะครุ่นคิดถึงข้อดีข้อเสียของทั้งสองทางเลือก ครอบครัวของเขาบอกว่าพร้อมสนับสนุนไม่ว่าเขาจะเลือกทางไหน แต่สุดท้ายการตัดสินใจก็ต้องเป็นของเขาเอง เขาจึงลองเขียนรายการสิ่งที่สำคัญที่สุดในชีวิตออกมาทีละข้อ",
				"ในที่สุด สุพรเลือกที่จะปฏิเสธข้อเสนองานใหม่ เพราะเห็นว่าความสัมพันธ์ในครอบครัวและความสุขในชีวิตประจำวันมีค่ามากกว่าเงินเดือนที่สูงขึ้น แม้บางครั้งเขาจะยังคิดถึงโอกาสที่พลาดไป แต่เขาไม่เคยเสียใจกับการตัดสินใจในวันนั้นเลย",
			],
			english: [
				"Suporn had worked for the company for over ten years. One day he received a job offer from a foreign company with a much higher salary, but it required moving abroad for at least three years — meaning he would have to leave his family and all his close friends behind.",
				"For many nights, Suporn couldn't sleep, weighing the pros and cons of both choices. His family said they would support whatever he decided, but ultimately the decision had to be his own. So he tried writing down, one by one, the things that mattered most in his life.",
				"In the end, Suporn decided to turn down the new job offer, realizing that family relationships and everyday happiness meant more to him than a higher salary. Even though he sometimes still thinks about the opportunity he missed, he has never regretted his decision that day.",
			],
		},
	],
	advanced: [
		{
			id: "reflections-in-the-mirror",
			title: "เงาสะท้อนในกระจก",
			titleEn: "Reflections in the Mirror",
			thai: [
				"อนุพงษ์เป็นช่างภาพที่มีชื่อเสียงในวงการโฆษณา ภาพถ่ายของเขาปรากฏอยู่บนป้ายบิลบอร์ดทั่วกรุงเทพฯ และนิตยสารแฟชั่นหลายฉบับ ทุกคนมองว่าเขาคือความสำเร็จที่จับต้องได้ แต่ลึก ๆ แล้ว อนุพงษ์รู้สึกเหมือนตัวเองกำลังแสดงบทบาทบางอย่างที่ไม่ใช่ตัวจริง ทุกครั้งที่ยกกล้องขึ้นถ่ายภาพนางแบบที่ยิ้มอย่างสมบูรณ์แบบ เขาอดคิดไม่ได้ว่าความสมบูรณ์แบบเหล่านั้นถูกสร้างขึ้นมาเพื่อขายความฝันให้คนอื่น ทั้งที่ตัวเขาเองยังไม่รู้ด้วยซ้ำว่าความฝันของตัวเองคืออะไร",
				"จุดเปลี่ยนเกิดขึ้นเมื่อเขาได้รับมอบหมายให้ไปถ่ายภาพสารคดีที่หมู่บ้านชาวประมงเล็ก ๆ ทางภาคใต้ ต่างจากงานสตูดิโอที่ควบคุมแสงและมุมได้ทุกอย่าง ที่นี่เขาต้องรอคอยแสงธรรมชาติ รอให้เรือกลับเข้าฝั่ง และรอให้ชาวบ้านเปิดใจให้เขาเข้าไปใกล้ชีวิตของพวกเขา ภาพแรกที่เขาถ่ายได้อย่างภาคภูมิใจคือภาพชายชราคนหนึ่งกำลังซ่อมแหที่ขาดวิ่น ใบหน้าเต็มไปด้วยริ้วรอยที่บอกเล่าเรื่องราวหลายสิบปีของการต่อสู้กับทะเล ไม่มีการจัดแสง ไม่มีการรีทัชภาพ แต่กลับมีพลังบางอย่างที่ภาพถ่ายในสตูดิโอของเขาไม่เคยมี",
				"คืนหนึ่ง หลังจากนั่งดูภาพที่ถ่ายมาทั้งวันบนจอกล้อง อนุพงษ์เดินไปยืนหน้ากระจกในห้องพักเล็ก ๆ ที่เขาเช่าอยู่ เขามองเงาสะท้อนของตัวเองเป็นเวลานาน และเริ่มตั้งคำถามว่าเขาใช้เวลาสิบกว่าปีในอาชีพนี้เพื่อสร้างความสมบูรณ์แบบปลอม ๆ ให้คนอื่นดู หรือเพื่อค้นหาความจริงบางอย่างในตัวเอง คำตอบยังไม่ชัดเจนนัก แต่เขารู้สึกว่าคำถามนี้สำคัญกว่าคำตอบเสียอีก",
				"เมื่อกลับถึงกรุงเทพฯ อนุพงษ์เริ่มปฏิเสธงานโฆษณาบางงานที่รู้สึกว่าขัดกับความเชื่อของตัวเอง และหันมาทำโครงการถ่ายภาพส่วนตัวที่เล่าเรื่องคนธรรมดาในสังคม แม้รายได้จะลดลงอย่างเห็นได้ชัด แต่เขากลับรู้สึกว่าตัวเองกำลังยืนอยู่บนพื้นที่ที่มั่นคงกว่าเดิม เพื่อนร่วมงานหลายคนไม่เข้าใจการตัดสินใจของเขา บางคนถึงกับบอกว่าเขากำลังทำลายอาชีพของตัวเองโดยไม่จำเป็น",
				"หลายปีต่อมา ภาพถ่ายชุดหมู่บ้านชาวประมงของอนุพงษ์ได้รับรางวัลระดับนานาชาติ และถูกจัดแสดงในนิทรรศการหลายประเทศ แต่สิ่งที่เขาภูมิใจที่สุดไม่ใช่รางวัลเหล่านั้น หากเป็นความรู้สึกที่ว่าในที่สุดเขาก็ได้มองเข้าไปในกระจกและเห็นภาพสะท้อนที่เขาไม่ต้องรู้สึกแปลกแยกจากมันอีกต่อไป",
			],
			english: [
				"Anupong was a well-known photographer in the advertising industry. His photos appeared on billboards all across Bangkok and in numerous fashion magazines. Everyone saw him as tangible proof of success, but deep down, Anupong felt as though he were performing a role that wasn't truly his own. Every time he raised his camera to shoot a model's perfectly composed smile, he couldn't help thinking that such perfection was manufactured to sell a dream to others — even though he himself didn't yet know what his own dream was.",
				"The turning point came when he was assigned to shoot a documentary in a small fishing village in the south. Unlike studio work where he could control every bit of light and angle, here he had to wait for natural light, wait for the boats to return to shore, and wait for the villagers to open up and let him into their lives. The first photo he took with genuine pride was of an old man mending a torn fishing net, his face etched with wrinkles that told decades of struggle against the sea. There was no lighting setup, no retouching — yet the image carried a kind of power his studio photos had never had.",
				"One night, after reviewing the day's shots on his camera screen, Anupong walked over and stood in front of the mirror in the small room he was renting. He stared at his own reflection for a long time and began questioning whether he had spent over a decade in this profession building a false perfection for others to see, or searching for some truth within himself. The answer wasn't clear yet, but he felt the question mattered more than any answer could.",
				"Back in Bangkok, Anupong began turning down certain advertising jobs that felt at odds with his own beliefs, and shifted toward personal photography projects that told the stories of ordinary people in society. Even though his income visibly dropped, he felt he was now standing on more solid ground than before. Many colleagues didn't understand his decision; some even said he was needlessly destroying his own career.",
				"Years later, Anupong's series of photographs from the fishing village won an international award and was exhibited in several countries. But what he was proudest of wasn't the awards themselves — it was the feeling that he could finally look into the mirror and see a reflection he no longer felt estranged from.",
			],
		},
		{
			id: "unfinished-bridge",
			title: "สะพานที่ยังสร้างไม่เสร็จ",
			titleEn: "The Unfinished Bridge",
			thai: [
				"วราภรณ์เป็นวิศวกรโยธาหญิงคนแรกที่ได้รับมอบหมายให้ดูแลโครงการก่อสร้างสะพานข้ามแม่น้ำสายใหญ่ที่เชื่อมสองจังหวัดเข้าด้วยกัน โครงการนี้มีความสำคัญอย่างยิ่งต่อชาวบ้านที่ต้องนั่งเรือข้ามฟากทุกวันเพื่อไปทำงานหรือส่งลูกไปโรงเรียน แต่ก็เป็นโครงการที่เต็มไปด้วยแรงกดดัน เพราะผู้บริหารระดับสูงหลายคนไม่เชื่อว่าผู้หญิงจะบริหารโครงการขนาดใหญ่เช่นนี้ได้สำเร็จ",
				"ในช่วงเดือนแรกของการก่อสร้าง ทุกอย่างดูเหมือนจะเป็นไปตามแผน จนกระทั่งเกิดปัญหาดินทรุดตัวใต้ฐานเสาสะพานต้นหนึ่งอย่างไม่คาดคิด วิศวกรที่ปรึกษาบางคนแนะนำให้เดินหน้าตามแผนเดิมและแก้ปัญหาไปทีละจุด เพราะการหยุดโครงการจะทำให้เสียเวลาและงบประมาณมหาศาล แต่วราภรณ์ยืนกรานว่าต้องหยุดการก่อสร้างชั่วคราวเพื่อตรวจสอบโครงสร้างดินทั้งหมดใหม่อีกครั้ง เพราะความปลอดภัยของผู้ใช้สะพานในอนาคตสำคัญกว่าความเร่งรีบใด ๆ",
				"การตัดสินใจครั้งนี้สร้างความไม่พอใจให้กับผู้บริหารและผู้รับเหมาหลายฝ่าย บางคนถึงกับกดดันให้เธอลาออกจากตำแหน่งผู้ดูแลโครงการ วราภรณ์ต้องนำเสนอข้อมูลทางเทคนิคอย่างละเอียดในการประชุมหลายครั้ง เพื่อพิสูจน์ว่าการหยุดชั่วคราวเป็นทางเลือกที่ถูกต้องที่สุด เธอทำงานหนักจนดึกดื่นทุกคืน ตรวจสอบรายงานทางวิศวกรรมซ้ำแล้วซ้ำอีก และปรึกษาผู้เชี่ยวชาญด้านดินจากหลายสถาบัน",
				"หลังจากการตรวจสอบอย่างละเอียดเป็นเวลาสามเดือน ทีมของวราภรณ์พบว่าต้องเปลี่ยนวิธีการวางฐานเสาทั้งหมดให้ลึกลงไปกว่าที่ออกแบบไว้เดิม แม้จะทำให้งบประมาณเพิ่มขึ้นและใช้เวลานานกว่าที่วางแผนไว้ แต่ผลการทดสอบยืนยันว่าโครงสร้างใหม่มีความมั่นคงสูงกว่าเดิมมาก ผู้บริหารบางคนที่เคยคัดค้านเธอก็ต้องยอมรับว่าการตัดสินใจของวราภรณ์ถูกต้อง",
				"เมื่อสะพานสร้างเสร็จในที่สุดหลังจากล่าช้าไปกว่าหนึ่งปี วราภรณ์ยืนอยู่กลางสะพานในวันเปิดใช้งาน มองดูรถและคนเดินเท้าที่ข้ามไปมาอย่างปลอดภัย เธอนึกถึงคำพูดของชาวบ้านคนหนึ่งที่บอกเธอในวันวางศิลาฤกษ์ว่า \"สะพานที่สร้างเร็วแต่ไม่มั่นคง ไม่มีความหมายอะไรเลย\" คำพูดนั้นกลายเป็นแรงบันดาลใจที่ทำให้เธอยืนหยัดในการตัดสินใจของตัวเองตลอดโครงการ และทำให้เธอเชื่อมั่นมากขึ้นว่าความกล้าที่จะทำสิ่งที่ถูกต้อง สำคัญกว่าความกล้าที่จะทำตามความคาดหวังของคนอื่น",
			],
			english: [
				"Waraporn was the first female civil engineer assigned to oversee the construction of a large bridge across a major river, connecting two provinces. The project mattered enormously to villagers who had to take a boat across the river every day for work or to take their children to school — but it was also a project full of pressure, since several senior executives doubted that a woman could successfully manage such a large-scale project.",
				"In the first month of construction, everything seemed to be going according to plan, until an unexpected soil subsidence problem occurred beneath the foundation of one of the bridge's support columns. Some consulting engineers advised pressing ahead with the original plan and fixing issues one at a time, since halting the project would waste enormous time and budget. But Waraporn insisted on temporarily stopping construction to re-examine the entire soil structure, because the future safety of the people who would use the bridge mattered more than any urgency to finish quickly.",
				"This decision angered several executives and contractors. Some even pressured her to resign from her position overseeing the project. Waraporn had to present detailed technical data at multiple meetings to prove that the temporary halt was the correct choice. She worked late into the night every night, reviewing engineering reports over and over, and consulting soil experts from several institutions.",
				"After three months of thorough inspection, Waraporn's team found that the entire foundation-laying method needed to be changed, going deeper than the original design. Even though this increased the budget and took longer than planned, test results confirmed the new structure was far more stable than before. Some executives who had once opposed her had to admit that her decision had been the right one.",
				"When the bridge was finally completed, more than a year behind schedule, Waraporn stood in the middle of it on opening day, watching cars and pedestrians cross safely back and forth. She thought back to what a villager had told her on the day of the groundbreaking ceremony: \"A bridge built quickly but without stability means nothing at all.\" Those words became the inspiration that kept her standing firm in her decisions throughout the project, and made her believe even more strongly that the courage to do what's right matters more than the courage to meet others' expectations.",
			],
		},
		{
			id: "letter-from-the-past",
			title: "จดหมายจากอดีต",
			titleEn: "A Letter from the Past",
			thai: [
				"หลังจากที่แม่เสียชีวิตไปได้ครบหนึ่งปี ปิยะดาต้องกลับไปจัดการบ้านเก่าที่แม่อาศัยอยู่คนเดียวมาตลอดสิบปีที่ผ่านมา บ้านหลังนั้นเต็มไปด้วยข้าวของเก่า ๆ ที่สะสมไว้ ตั้งแต่เสื้อผ้า จานชาม ไปจนถึงกล่องกระดาษแข็งที่ไม่มีใครเปิดมานาน ปิยะดาใช้เวลาทั้งสัปดาห์ในการคัดแยกของว่าจะเก็บไว้หรือทิ้งไป ระหว่างที่กำลังเก็บของในห้องนอนของแม่ เธอพบกล่องไม้เล็ก ๆ ซ่อนอยู่ใต้เตียง ภายในมีจดหมายหลายฉบับที่เขียนด้วยลายมือของแม่ ลงวันที่เมื่อกว่าสี่สิบปีก่อน",
				"จดหมายเหล่านั้นเขียนถึงชายคนหนึ่งชื่อประเสริฐ ซึ่งปิยะดาไม่เคยรู้จักหรือเคยได้ยินชื่อมาก่อนเลยในชีวิต เนื้อหาในจดหมายเผยให้เห็นว่าแม่ของเธอเคยมีความรักครั้งสำคัญกับชายคนนี้ก่อนที่จะแต่งงานกับพ่อ แต่ด้วยเหตุผลบางอย่างที่ไม่ได้ระบุไว้อย่างชัดเจน ความสัมพันธ์นั้นต้องยุติลง จดหมายฉบับสุดท้ายเขียนไว้ว่า \"ฉันเลือกทางที่ปลอดภัยกว่าสำหรับตัวเองและครอบครัว แต่ใจของฉันจะนึกถึงเธอเสมอไม่ว่าจะผ่านไปกี่ปี\"",
				"ปิยะดารู้สึกสับสนและปั่นป่วนใจอย่างมาก เธอไม่เคยรู้เลยว่าแม่ผู้ที่ดูสงบเสงี่ยมและใช้ชีวิตอย่างเรียบง่ายมาตลอด เคยมีอดีตที่ซับซ้อนและเจ็บปวดเช่นนี้ เธอเริ่มตั้งคำถามกับตัวเองว่าเธอรู้จักแม่ของตัวเองดีเพียงใด และความทรงจำที่เธอมีต่อแม่ตลอดหลายสิบปีนั้น เป็นเพียงส่วนเล็ก ๆ ของชีวิตทั้งหมดของแม่เท่านั้นหรือไม่",
				"หลังจากลังเลอยู่หลายสัปดาห์ ปิยะดาตัดสินใจสืบหาว่าประเสริฐยังมีชีวิตอยู่หรือไม่ และในที่สุดก็พบว่าเขายังมีชีวิตอยู่ที่จังหวัดเชียงราย อายุกว่าเจ็ดสิบปีแล้ว เธอตัดสินใจเดินทางไปพบเขาด้วยตัวเอง แม้จะไม่รู้ว่าจะพูดอะไรกับชายที่ไม่เคยรู้จักคนนี้ เมื่อได้พบกัน ประเสริฐเล่าให้เธอฟังว่าเขากับแม่ของเธอรักกันมากในสมัยเรียนมหาวิทยาลัย แต่ครอบครัวทั้งสองฝ่ายไม่เห็นด้วยเพราะความแตกต่างทางสถานะทางสังคม แม่ของเธอจึงเลือกที่จะแต่งงานกับพ่อตามความต้องการของครอบครัว",
				"ประเสริฐมอบรูปถ่ายเก่าให้ปิยะดาหนึ่งใบ เป็นภาพแม่ตอนสาว ยืนหัวเราะอย่างมีความสุขข้างสระน้ำในมหาวิทยาลัย ใบหน้าของแม่ในภาพนั้นแตกต่างจากภาพที่ปิยะดาคุ้นเคยอย่างสิ้นเชิง มันคือใบหน้าของหญิงสาวที่เต็มไปด้วยความหวังและความรักที่ยังไม่ถูกบดขยี้ด้วยภาระของชีวิต วันนั้นปิยะดาเดินทางกลับบ้านด้วยความรู้สึกที่ซับซ้อน ทั้งเศร้าที่ไม่มีโอกาสรู้จักแม่ในมุมนี้ตอนที่แม่ยังมีชีวิตอยู่ และซาบซึ้งที่ได้เห็นว่าแม่เป็นมนุษย์คนหนึ่งที่มีความรัก ความฝัน และความเสียสละมากกว่าที่เธอเคยเข้าใจมาตลอด",
			],
			english: [
				"A full year after her mother's death, Piyada had to return to sort out the old house where her mother had lived alone for the past ten years. The house was full of old belongings that had accumulated over time — clothes, dishes, and cardboard boxes no one had opened in ages. Piyada spent an entire week sorting through what to keep and what to throw away. While clearing out her mother's bedroom, she found a small wooden box hidden under the bed. Inside were several letters written in her mother's handwriting, dated over forty years earlier.",
				"The letters were addressed to a man named Prasert, someone Piyada had never known or even heard of in her entire life. The contents revealed that her mother had once had a significant love affair with this man before marrying her father, but for reasons that weren't clearly stated, the relationship had ended. The last letter read: \"I chose the safer path for myself and my family, but my heart will think of you always, no matter how many years pass.\"",
				"Piyada felt deeply confused and unsettled. She had never known that her mother, who had always seemed so calm, modest, and simple in how she lived, had once had such a complicated and painful past. She began questioning how well she truly knew her mother, and whether the memories she'd held of her all these decades were only a small fraction of her mother's entire life.",
				"After weeks of hesitation, Piyada decided to find out whether Prasert was still alive, and eventually discovered he was, living in Chiang Rai province, now over seventy years old. She decided to travel to meet him herself, even though she had no idea what to say to this man she'd never known. When they met, Prasert told her that he and her mother had loved each other deeply during their university years, but both families disapproved because of differences in social status. Her mother had ultimately chosen to marry her father to honor her family's wishes.",
				"Prasert gave Piyada an old photograph — her mother as a young woman, laughing happily beside a pond on campus. Her mother's face in that photo was completely different from the one Piyada was familiar with. It was the face of a young woman full of hope and love that hadn't yet been worn down by life's burdens. That day, Piyada traveled home with complicated feelings — sad that she'd never had the chance to know her mother from this side while she was alive, yet deeply moved to discover that her mother had been a human being with love, dreams, and sacrifices far greater than she had ever understood.",
			],
		},
		{
			id: "seaside-village-mystery",
			title: "ปริศนาในหมู่บ้านริมทะเล",
			titleEn: "The Mystery of the Seaside Village",
			thai: [
				"ตำรวจสาวนามว่าสิริพรถูกส่งตัวมาประจำการที่สถานีตำรวจเล็ก ๆ ในหมู่บ้านชาวประมงห่างไกล หลังจากทำงานในเมืองใหญ่มานานหลายปี เธอคาดว่างานที่นี่จะเป็นเพียงการดูแลความสงบเรียบร้อยของชุมชนเล็ก ๆ แต่ไม่นานหลังจากมาถึง เธอก็ต้องเผชิญกับคดีที่ซับซ้อนกว่าที่คิด เมื่อชาวประมงคนหนึ่งหายตัวไปอย่างไร้ร่องรอยหลังจากออกเรือไปหาปลาตามปกติในตอนกลางคืน",
				"การสืบสวนในช่วงแรกดูเหมือนจะเป็นเพียงอุบัติเหตุทางทะเลธรรมดา เพราะสภาพอากาศคืนนั้นค่อนข้างแปรปรวน แต่สิริพรสังเกตเห็นความผิดปกติหลายอย่างที่ทำให้เธอไม่อาจปิดคดีได้ง่าย ๆ เรือของชายผู้สูญหายถูกพบลอยเกยหาดอยู่ในสภาพสมบูรณ์ ไม่มีความเสียหายใด ๆ ที่บ่งบอกว่าเจอพายุ และที่แปลกกว่านั้นคือ อุปกรณ์จับปลามูลค่าสูงบนเรือหายไปทั้งหมด ทั้งที่ของมีค่าอื่น ๆ อย่างเครื่องยนต์กลับยังอยู่ครบ",
				"เมื่อสิริพรเริ่มสอบถามชาวบ้านอย่างละเอียด เธอพบว่าหลายคนในหมู่บ้านไม่อยากพูดถึงเรื่องนี้มากนัก บางคนหลีกเลี่ยงคำถามอย่างชัดเจน จนเธอเริ่มสงสัยว่าอาจมีคนในหมู่บ้านรู้เห็นเรื่องนี้มากกว่าที่พูดออกมา เธอใช้เวลาหลายสัปดาห์ในการสร้างความไว้วางใจกับชาวบ้าน โดยเข้าไปช่วยงานต่าง ๆ ในชุมชนและพูดคุยอย่างเป็นกันเองมากกว่าการซักถามแบบทางการ",
				"ในที่สุด หญิงชราคนหนึ่งที่เป็นแม่ของชายผู้สูญหายเรียกสิริพรไปพบเป็นการส่วนตัวในยามวิกาล เธอเล่าว่าลูกชายของเธอเคยพัวพันกับกลุ่มคนที่ลักลอบจับสัตว์น้ำหายากไปขายให้พ่อค้าต่างชาติอย่างผิดกฎหมาย และเมื่อเร็ว ๆ นี้เขาต้องการถอนตัวออกจากกลุ่มเพราะรู้สึกผิด แต่กลับถูกกลุ่มคนเหล่านั้นข่มขู่ หญิงชราเชื่อว่าลูกชายของเธอไม่ได้ประสบอุบัติเหตุ แต่ถูกทำร้ายเพื่อปิดปาก",
				"ด้วยข้อมูลนี้ สิริพรประสานงานกับหน่วยงานที่เกี่ยวข้องกับการปราบปรามการค้าสัตว์น้ำผิดกฎหมาย และค่อย ๆ สืบสวนจนพบว่ามีเครือข่ายลักลอบจับสัตว์น้ำหายากดำเนินการอยู่ในพื้นที่จริง แม้จะยังไม่สามารถพิสูจน์ได้อย่างแน่ชัดว่าใครเป็นคนทำร้ายชายผู้สูญหาย แต่การสืบสวนของเธอนำไปสู่การจับกุมเครือข่ายลักลอบค้าสัตว์น้ำรายใหญ่ที่ดำเนินการมานานหลายปี หมู่บ้านที่เคยเงียบสงบเริ่มกลับมาปลอดภัยขึ้น และสิริพรก็ได้เรียนรู้ว่าบางครั้งคดีที่ดูเรียบง่ายที่สุด อาจซ่อนความจริงที่ซับซ้อนกว่าที่ตาเห็นเสมอ",
			],
			english: [
				"A young policewoman named Siriporn was transferred to a small police station in a remote fishing village after years of working in the city. She expected the job here to be simply maintaining order in a small community, but not long after arriving, she found herself facing a case far more complex than she'd anticipated, when a fisherman disappeared without a trace after going out to fish one ordinary night.",
				"The initial investigation seemed like a simple maritime accident, since the weather that night had been fairly rough. But Siriporn noticed several irregularities that made it impossible for her to close the case easily. The missing man's boat was found washed up on the beach in perfect condition, with no damage suggesting it had encountered a storm. Stranger still, the high-value fishing equipment on board had completely vanished, while other valuable items, like the engine, remained untouched.",
				"When Siriporn began questioning the villagers in detail, she found that many were reluctant to talk about the matter. Some clearly avoided her questions, leading her to suspect that some villagers knew more than they were letting on. She spent weeks building trust with the community, helping with various local tasks and chatting casually rather than conducting formal interrogations.",
				"Eventually, an elderly woman, the missing man's mother, called Siriporn to meet privately late at night. She explained that her son had once been involved with a group illegally poaching rare aquatic species to sell to foreign traders, and had recently wanted to withdraw from the group out of guilt — but was instead threatened by them. The old woman believed her son hadn't had an accident at all, but had been harmed to silence him.",
				"With this information, Siriporn coordinated with agencies handling illegal wildlife trafficking and gradually investigated until she uncovered an actual network smuggling rare aquatic species operating in the area. Although she still couldn't definitively prove who had harmed the missing man, her investigation led to the arrest of a major poaching network that had been operating for years. The once-quiet village began to feel safer again, and Siriporn learned that sometimes the simplest-looking cases hide truths far more complicated than what meets the eye.",
			],
		},
		{
			id: "retired-fighters-path",
			title: "เส้นทางของนักมวยผู้เกษียณ",
			titleEn: "The Retired Fighter's Path",
			thai: [
				"เดชาเคยเป็นนักมวยไทยชื่อดังที่ครองแชมป์เวทีมวยระดับประเทศอยู่หลายปี แต่หลังจากอาการบาดเจ็บที่หัวเข่ารุนแรงจากการแข่งขันครั้งสุดท้าย เขาต้องแขวนนวมก่อนวัยอันควรตั้งแต่อายุเพียงยี่สิบแปดปี ช่วงแรกหลังเลิกชกมวย เดชารู้สึกเหมือนชีวิตไม่มีเป้าหมายอีกต่อไป เขาใช้เวลาหลายเดือนอยู่กับความรู้สึกสูญเสียตัวตนที่เคยรู้จัก เพราะตลอดชีวิตที่ผ่านมา ตัวตนของเขาผูกติดอยู่กับคำว่า \"นักมวย\" มาโดยตลอด",
				"เดชาลองทำงานหลายอย่างแต่ไม่มีสิ่งใดทำให้เขารู้สึกมีความหมายเท่ากับการชกมวย จนกระทั่งวันหนึ่งเพื่อนเก่าชวนให้เขาไปช่วยสอนมวยไทยให้เด็กด้อยโอกาสในชุมชนแออัดแห่งหนึ่ง ตอนแรกเขาไปด้วยความไม่ตั้งใจนัก เพียงเพื่อทำตามคำขอของเพื่อน แต่เมื่อเห็นเด็ก ๆ ที่มาฝึกด้วยความกระตือรือร้น แม้จะไม่มีอุปกรณ์ที่ดีพอ บางคนถึงกับฝึกด้วยเท้าเปล่าเพราะไม่มีเงินซื้อนวมหรือรองเท้า เดชารู้สึกถึงพลังบางอย่างที่คล้ายกับตอนที่เขาเริ่มฝึกมวยครั้งแรกเมื่อยังเป็นเด็ก",
				"เขาเริ่มไปสอนอย่างสม่ำเสมอมากขึ้น และค่อย ๆ พบว่าการถ่ายทอดความรู้ให้เด็ก ๆ ทำให้เขารู้สึกมีคุณค่ามากกว่าการชกมวยเพื่อตัวเองเสียอีก เขาไม่เพียงสอนเทคนิคการชกและการเตะ แต่ยังสอนเรื่องวินัย ความอดทน และการเคารพคู่ต่อสู้ ซึ่งเป็นคุณค่าที่เขาเรียนรู้มาตลอดชีวิตนักมวย เด็กหลายคนที่เคยมีปัญหาพฤติกรรมในโรงเรียนเริ่มเปลี่ยนแปลงไปในทางที่ดีขึ้นหลังจากได้ฝึกมวยไทยกับเดชาอย่างจริงจัง",
				"ปัญหาใหญ่ที่สุดที่เดชาต้องเผชิญคือการหาทุนสนับสนุนอุปกรณ์ฝึกและพื้นที่ฝึกซ้อมที่เหมาะสม เพราะชุมชนที่เขาสอนอยู่ไม่มีงบประมาณมากพอ เขาจึงตัดสินใจติดต่อสื่อมวลชนกีฬาให้มาทำข่าวเกี่ยวกับโครงการนี้ โดยหวังว่าจะมีผู้ใจดีมาช่วยสนับสนุน ผลลัพธ์เกินความคาดหมาย เพราะหลังจากข่าวถูกเผยแพร่ มีทั้งบริษัทเอกชนและอดีตแฟนมวยจำนวนมากติดต่อมาเพื่อบริจาคอุปกรณ์และเงินทุน ทำให้โครงการของเขาขยายตัวจนสามารถสร้างโรงฝึกมวยขนาดเล็กถาวรได้ในที่สุด",
				"ห้าปีต่อมา เด็กคนหนึ่งที่เดชาเคยสอนตั้งแต่ยังไม่มีรองเท้าใส่ ได้ก้าวขึ้นชกในเวทีมวยระดับประเทศเป็นครั้งแรกและได้รับชัยชนะ เดชายืนอยู่ข้างเวทีด้วยความรู้สึกภาคภูมิใจที่ไม่ต่างจากตอนที่เขาเองคว้าแชมป์ครั้งแรก เขาเข้าใจในที่สุดว่าการเกษียณจากการชกมวยไม่ได้หมายความว่าเรื่องราวของเขาในโลกมวยไทยได้จบลง แต่เป็นเพียงจุดเริ่มต้นของบทใหม่ที่มีความหมายลึกซึ้งกว่าเดิม",
			],
			english: [
				"Decha had once been a famous Muay Thai fighter who held a national championship title for several years. But after a severe knee injury in his final match, he was forced into early retirement at just twenty-eight years old. In the first months after quitting, Decha felt as though his life no longer had any purpose. He spent months grappling with a sense of lost identity, since his entire sense of self had always been tied to the word \"fighter.\"",
				"Decha tried several jobs, but none of them made him feel as meaningful as fighting had — until one day, an old friend invited him to help teach Muay Thai to underprivileged children in a crowded urban community. At first he went reluctantly, simply to honor his friend's request. But when he saw the children training with such enthusiasm, despite lacking proper equipment — some even trained barefoot because they couldn't afford gloves or shoes — Decha felt something similar to the energy he'd felt when he first started training as a child himself.",
				"He began teaching more regularly, and gradually discovered that passing on his knowledge to the children made him feel even more valuable than fighting for himself ever had. He didn't just teach punching and kicking techniques, but also discipline, patience, and respect for one's opponent — values he had learned throughout his fighting career. Several children who had once had behavioral problems at school began to change for the better after training seriously under Decha.",
				"The biggest challenge Decha faced was finding funding for training equipment and a proper training space, since the community he taught in didn't have much budget. He decided to reach out to sports media to cover the project, hoping some kind-hearted people might help support it. The result exceeded his expectations — after the story was published, both private companies and former fight fans reached out in large numbers to donate equipment and funds, allowing his project to grow until he was eventually able to build a small permanent training gym.",
				"Five years later, one of the children Decha had once taught, back when the boy had no shoes to wear, stepped into the ring for his first national-level match and won. Decha stood ringside, feeling a pride no different from when he himself had won his first championship. He finally understood that retiring from fighting hadn't meant his story in the world of Muay Thai had ended — it was merely the beginning of a new chapter with even deeper meaning than before.",
			],
		},
		{
			id: "blockchain-farmer",
			title: "เมื่อบล็อกเชนเปลี่ยนโลกของชาวนา",
			titleEn: "When Blockchain Changed a Farmer's World",
			thai: [
				"สมพรเป็นชาวนาปลูกข้าวหอมมะลิในจังหวัดสุรินทร์มากว่าสามสิบปี ตลอดชีวิตที่ผ่านมา เขาต้องขายข้าวให้กับพ่อค้าคนกลางที่มักกดราคาให้ต่ำกว่าที่ควรจะเป็น โดยให้เหตุผลต่าง ๆ นานาว่าตลาดไม่ดีหรือข้าวคุณภาพไม่ถึงมาตรฐาน สมพรรู้สึกไม่พอใจมาตลอด แต่ก็ไม่มีทางเลือกอื่น เพราะไม่มีช่องทางเข้าถึงผู้บริโภคโดยตรง และไม่มีความรู้เรื่องการตลาดสมัยใหม่มากพอ",
				"จุดเปลี่ยนเกิดขึ้นเมื่อหลานสาวของสมพรที่เรียนจบด้านเทคโนโลยีจากมหาวิทยาลัยในกรุงเทพฯ กลับมาเยี่ยมบ้านและเล่าให้ฟังเกี่ยวกับเทคโนโลยีบล็อกเชนที่สามารถใช้ติดตามที่มาของสินค้าเกษตรได้อย่างโปร่งใส ตั้งแต่ขั้นตอนการปลูกไปจนถึงมือผู้บริโภค หลานสาวเสนอว่าถ้าสมพรร่วมมือกับกลุ่มเกษตรกรในพื้นที่ และใช้ระบบนี้บันทึกข้อมูลการปลูกข้าวอย่างละเอียด ผู้บริโภคที่ต้องการซื้อข้าวคุณภาพสูงโดยตรงจากเกษตรกรจะสามารถตรวจสอบความน่าเชื่อถือได้ และยินดีจ่ายในราคาที่สูงกว่าตลาดทั่วไป",
				"สมพรลังเลอยู่นาน เพราะไม่เคยใช้เทคโนโลยีอะไรที่ซับซ้อนกว่าโทรศัพท์มือถือธรรมดา แต่ด้วยความไว้ใจในตัวหลานสาวและความอยากเปลี่ยนแปลงชีวิตที่ลำบากมาตลอด เขาจึงตัดสินใจลองเข้าร่วมโครงการนำร่องกับกลุ่มเกษตรกรอีกสิบกว่าครอบครัวในพื้นที่ หลานสาวช่วยติดตั้งแอปพลิเคชันในโทรศัพท์และสอนขั้นตอนการบันทึกข้อมูล ตั้งแต่วันปลูก วันใส่ปุ๋ย ไปจนถึงวันเก็บเกี่ยว ทุกขั้นตอนถูกบันทึกลงในระบบบล็อกเชนที่ไม่สามารถแก้ไขหรือปลอมแปลงได้",
				"ในช่วงแรก การเปลี่ยนแปลงพฤติกรรมเป็นเรื่องยากสำหรับสมพรและเกษตรกรคนอื่น ๆ หลายคนบ่นว่าการบันทึกข้อมูลทุกวันเป็นเรื่องยุ่งยากและเสียเวลา แต่หลานสาวและทีมงานค่อย ๆ ปรับแอปพลิเคชันให้ใช้งานง่ายขึ้น จนเกษตรกรส่วนใหญ่เริ่มคุ้นเคยและทำเป็นกิจวัตร เมื่อถึงฤดูเก็บเกี่ยว ข้าวหอมมะลิของกลุ่มสมพรถูกนำไปเสนอขายผ่านแพลตฟอร์มออนไลน์ที่ให้ผู้บริโภคสแกนคิวอาร์โค้ดบนถุงข้าวเพื่อดูประวัติการปลูกทั้งหมด ตั้งแต่ชื่อเกษตรกร แปลงนา ไปจนถึงวันที่เก็บเกี่ยว",
				"ผลลัพธ์เกินความคาดหมายของทุกคน เพราะผู้บริโภคในเมืองที่ให้ความสำคัญกับความโปร่งใสและคุณภาพยินดีจ่ายราคาสูงกว่าตลาดทั่วไปถึงสามสิบเปอร์เซ็นต์ เพราะสามารถตรวจสอบได้ว่าข้าวที่ซื้อมาจากเกษตรกรจริง ๆ ไม่ผ่านพ่อค้าคนกลางที่กดราคา รายได้ของสมพรและกลุ่มเกษตรกรเพิ่มขึ้นอย่างมีนัยสำคัญภายในเวลาไม่ถึงหนึ่งปี สมพรเคยคิดว่าเทคโนโลยีเป็นเรื่องของคนรุ่นใหม่เท่านั้น แต่ตอนนี้เขาเข้าใจแล้วว่า แม้แต่ชาวนาผู้สูงอายุอย่างเขาก็สามารถใช้เทคโนโลยีเปลี่ยนชีวิตให้ดีขึ้นได้ ตราบใดที่มีคนช่วยเปิดประตูให้ก้าวเข้าไป",
			],
			english: [
				"Somporn had been growing jasmine rice in Surin province for over thirty years. Throughout his life, he'd always had to sell his rice to middlemen who routinely pushed prices below what was fair, citing various excuses like a weak market or substandard rice quality. Somporn had always resented this, but he had no other choice, since he had no direct channel to consumers and not enough knowledge of modern marketing.",
				"The turning point came when Somporn's granddaughter, who had graduated with a technology degree from a university in Bangkok, came home to visit and told him about blockchain technology that could transparently track the origin of agricultural products, from the growing stage all the way to the consumer's hands. She proposed that if Somporn partnered with local farmer groups and used this system to record detailed rice-growing data, consumers who wanted to buy high-quality rice directly from farmers could verify its authenticity and would be willing to pay above standard market prices.",
				"Somporn hesitated for a long time, since he had never used any technology more complex than an ordinary mobile phone. But trusting his granddaughter and wanting to change a life that had always been difficult, he decided to join a pilot program with over ten other farming families in the area. His granddaughter helped install the app on his phone and taught him how to log data — from planting day, to fertilizing day, to harvest day. Every step was recorded on a blockchain system that couldn't be edited or falsified.",
				"At first, changing habits was difficult for Somporn and the other farmers. Many complained that logging data every day was tedious and time-consuming. But his granddaughter and her team gradually simplified the app until most farmers grew comfortable and made it routine. By harvest season, Somporn's group's jasmine rice was offered for sale through an online platform where consumers could scan a QR code on the rice bag to see the entire growing history — from the farmer's name and field, to the harvest date.",
				"The results exceeded everyone's expectations. Urban consumers who valued transparency and quality were willing to pay up to thirty percent more than standard market prices, since they could verify the rice truly came from real farmers, bypassing price-suppressing middlemen. Somporn's income and that of the farming group increased significantly within less than a year. Somporn had once thought technology was only for younger generations, but now he understood that even an elderly farmer like himself could use technology to change his life for the better — as long as someone was there to help open the door for him to step through.",
			],
		},
		{
			id: "immigrant-in-the-big-city",
			title: "อพยพในเมืองใหญ่",
			titleEn: "An Immigrant in the Big City",
			thai: [
				"มาลีเดินทางออกจากหมู่บ้านเล็ก ๆ ทางภาคตะวันออกเฉียงเหนือมายังกรุงเทพฯ เมื่ออายุเพียงสิบเก้าปี ด้วยความหวังว่าจะหางานทำและส่งเงินกลับไปให้พ่อแม่ที่ยังทำนาอยู่ที่บ้าน วันแรกที่มาถึงเมืองใหญ่ เธอรู้สึกทั้งตื่นเต้นและหวาดกลัวไปพร้อมกัน ตึกสูงระฟ้า รถราที่วิ่งขวักไขว่ และความรีบเร่งของคนเมืองเป็นสิ่งที่แตกต่างจากชีวิตในหมู่บ้านของเธออย่างสิ้นเชิง เธอไม่มีญาติหรือคนรู้จักในเมืองนี้เลยแม้แต่คนเดียว",
				"มาลีได้งานเป็นพนักงานเสิร์ฟในร้านอาหารเล็ก ๆ แถวชานเมือง ค่าแรงไม่มากนักและต้องทำงานหนักถึงวันละสิบสองชั่วโมง แต่เธอไม่เคยบ่น เพราะรู้ว่าครอบครัวที่บ้านกำลังรอเงินจากเธอ ในช่วงแรก เธอต้องเผชิญกับความเหงาอย่างรุนแรง เพราะไม่คุ้นเคยกับวิถีชีวิตในเมือง และสำเนียงพูดของเธอทำให้เพื่อนร่วมงานบางคนล้อเลียนอยู่บ่อยครั้ง หลายคืนเธอนอนร้องไห้คนเดียวในห้องเช่าเล็ก ๆ และคิดถึงบ้านจนอยากเดินทางกลับไปในทันที",
				"สิ่งที่ทำให้มาลีอดทนอยู่ต่อได้คือความสัมพันธ์ที่ค่อย ๆ ก่อตัวขึ้นกับเพื่อนร่วมงานอีกคนหนึ่งชื่อสมหญิง ซึ่งเป็นคนเมืองแท้แต่มีจิตใจดีและไม่รังเกียจที่จะสอนมาลีเรื่องต่าง ๆ ตั้งแต่วิธีใช้รถไฟฟ้าไปจนถึงมารยาทในการทำงานที่คนเมืองคุ้นเคย สมหญิงกลายเป็นเพื่อนสนิทคนแรกของมาลีในเมืองใหญ่ และช่วยให้เธอค่อย ๆ ปรับตัวได้ดีขึ้นทีละน้อย",
				"หลังจากทำงานที่ร้านอาหารมาสามปี มาลีเก็บเงินได้พอที่จะไปเรียนหลักสูตรระยะสั้นด้านการจัดการร้านอาหารในช่วงวันหยุด เธอทำงานหนักขึ้นเป็นสองเท่าเพื่อทั้งเรียนและทำงานไปพร้อมกัน แต่เธอเชื่อว่าความรู้ที่ได้จะช่วยให้ชีวิตเธอดีขึ้นในระยะยาว เมื่อจบหลักสูตร เธอได้รับการเลื่อนตำแหน่งเป็นผู้ช่วยผู้จัดการร้าน และเริ่มมีรายได้มากพอที่จะส่งเงินกลับบ้านได้มากขึ้น รวมถึงเก็บเงินไว้สำหรับอนาคตของตัวเองด้วย",
				"หกปีหลังจากวันแรกที่เดินทางมาถึงกรุงเทพฯ ด้วยกระเป๋าเพียงใบเดียวและความไม่รู้อะไรเลยเกี่ยวกับชีวิตในเมือง มาลีได้เปิดร้านอาหารเล็ก ๆ ของตัวเองในที่สุด โดยจ้างเด็กสาวจากหมู่บ้านเดียวกันมาทำงานด้วย เพื่อให้พวกเธอมีโอกาสเริ่มต้นชีวิตในเมืองอย่างที่มาลีเคยได้รับความช่วยเหลือ เธอมักบอกพนักงานใหม่เสมอว่า เมืองใหญ่อาจดูโหดร้ายในวันแรก แต่ถ้าไม่ยอมแพ้และเปิดใจรับความช่วยเหลือจากคนรอบข้าง สักวันหนึ่งเมืองนี้ก็จะกลายเป็นบ้านหลังที่สองที่อบอุ่นไม่แพ้บ้านเกิด",
			],
			english: [
				"Malee left her small village in the northeast for Bangkok at just nineteen years old, hoping to find work and send money back to her parents, who still farmed rice at home. On her first day in the big city, she felt both excited and terrified at once. The skyscrapers, the chaotic traffic, and the hurried pace of city life were utterly different from her village life. She didn't have a single relative or acquaintance in the entire city.",
				"Malee got a job as a waitress at a small restaurant on the outskirts of town. The pay was low and she had to work twelve-hour days, but she never complained, knowing her family back home was waiting for her money. In the early days, she faced intense loneliness, unfamiliar with city life, and her accent made some coworkers tease her frequently. Many nights she cried alone in her small rented room, homesick enough to want to leave immediately.",
				"What helped Malee endure was a relationship that gradually formed with another coworker named Somying, a true city native with a kind heart who didn't mind teaching Malee everything, from how to use the skytrain to the workplace manners city people took for granted. Somying became Malee's first close friend in the big city and helped her adjust little by little.",
				"After three years working at the restaurant, Malee had saved enough to take a short course in restaurant management on her days off. She worked twice as hard, studying and working at the same time, but believed the knowledge would improve her life in the long run. After completing the course, she was promoted to assistant manager and began earning enough to send more money home, as well as save for her own future.",
				"Six years after arriving in Bangkok with just one bag and no idea about city life, Malee finally opened her own small restaurant, hiring young women from her own village to work with her, giving them the chance to start their city life the way she had once been helped. She always tells new employees that the big city may seem cruel on the first day, but if you never give up and stay open to help from those around you, one day this city will become a second home just as warm as the one you were born in.",
			],
		},
		{
			id: "calm-before-the-storm",
			title: "ความเงียบก่อนพายุ",
			titleEn: "The Calm Before the Storm",
			thai: [
				"ครอบครัวของอาจารย์สุรชัยอาศัยอยู่ในหมู่บ้านเล็ก ๆ ริมชายฝั่งทะเลอันดามันมานานหลายชั่วอายุคน ทุกปีในช่วงฤดูมรสุม พวกเขาคุ้นเคยกับพายุฝนที่พัดเข้ามาเป็นประจำ จนไม่รู้สึกกังวลมากนัก แต่ปีนี้มีบางอย่างที่แตกต่างออกไป ท้องทะเลเงียบสงบผิดปกติ นกทะเลที่มักบินวนอยู่เหนือหาดหายไปหมด และสัตว์เลี้ยงในบ้านของสุรชัยแสดงอาการกระวนกระวายอย่างไม่มีเหตุผลชัดเจน",
				"สุรชัยเป็นครูวิทยาศาสตร์ในโรงเรียนประถมของหมู่บ้าน และเป็นหนึ่งในไม่กี่คนที่ติดตามข่าวสารเกี่ยวกับปรากฏการณ์ทางธรรมชาติผ่านอินเทอร์เน็ตอย่างสม่ำเสมอ เขาสังเกตเห็นรายงานจากสำนักงานอุตุนิยมวิทยาที่เตือนถึงความเป็นไปได้ของพายุลูกใหญ่ที่อาจก่อตัวขึ้นในทะเลอันดามัน แม้รายงานยังไม่มีความชัดเจนแน่นอน แต่ด้วยความไวต่อสัญญาณผิดปกติของธรรมชาติที่เขาสังเกตเห็นด้วยตาตัวเอง สุรชัยรู้สึกไม่สบายใจอย่างมาก",
				"เมื่อสุรชัยพยายามเตือนชาวบ้านให้เตรียมตัวและอพยพไปยังพื้นที่สูงก่อนที่พายุจะมาถึง หลายคนกลับไม่เชื่อและมองว่าเขากำลังตื่นตระหนกเกินเหตุ เพราะตลอดหลายสิบปีที่ผ่านมา หมู่บ้านนี้ไม่เคยเผชิญกับพายุรุนแรงถึงขั้นต้องอพยพเลยแม้แต่ครั้งเดียว ผู้ใหญ่บ้านถึงกับบอกให้สุรชัยเลิกสร้างความหวาดกลัวให้กับชาวบ้าน เพราะอาจกระทบต่อการทำประมงและวิถีชีวิตปกติของทุกคน",
				"ด้วยความเป็นห่วงอย่างจริงจัง สุรชัยจึงตัดสินใจเตรียมความพร้อมให้ครอบครัวและเพื่อนบ้านที่ไว้ใจเขาก่อน โดยเก็บอาหารแห้ง น้ำสะอาด และอุปกรณ์จำเป็นไว้ในที่สูงล่วงหน้า พร้อมทั้งอธิบายให้ลูกศิษย์ในโรงเรียนฟังถึงวิธีสังเกตสัญญาณเตือนของธรรมชาติ เพื่อให้พวกเขานำความรู้นี้กลับไปบอกครอบครัวด้วย แม้จะถูกมองว่าเป็นคนคิดมากเกินไปในสายตาของหลายคน แต่เขายังคงยืนหยัดในความเชื่อของตัวเอง",
				"สองวันต่อมา พายุที่สุรชัยเกรงกลัวก็ก่อตัวขึ้นจริง และทวีความรุนแรงเร็วกว่าที่นักวิทยาศาสตร์คาดการณ์ไว้มาก เมื่อคำเตือนอย่างเป็นทางการมาถึง เวลาก็เหลือไม่มากพอสำหรับการอพยพอย่างเป็นระบบ แต่ด้วยการเตรียมตัวล่วงหน้าของสุรชัยและครอบครัวที่เชื่อฟังเขา หลายครัวเรือนสามารถอพยพขึ้นสู่พื้นที่สูงได้ทันเวลาก่อนที่คลื่นลมจะพัดถล่มหมู่บ้าน แม้บ้านหลายหลังจะได้รับความเสียหายอย่างหนัก แต่ไม่มีผู้เสียชีวิตแม้แต่คนเดียวในหมู่บ้าน หลังพายุสงบลง ผู้ใหญ่บ้านที่เคยตำหนิสุรชัยเดินมาขอบคุณเขาต่อหน้าชาวบ้านทั้งหมด และแต่งตั้งให้เขาเป็นผู้รับผิดชอบระบบเตือนภัยของหมู่บ้านอย่างเป็นทางการนับตั้งแต่นั้นเป็นต้นมา",
			],
			english: [
				"Teacher Surachai's family had lived in a small village on the Andaman coast for many generations. Every monsoon season, they were used to the recurring storms and rarely felt much worry. But this year, something was different. The sea was unusually calm, the seabirds that normally circled above the beach had all disappeared, and the animals at Surachai's home showed signs of restlessness for no clear reason.",
				"Surachai was a science teacher at the village's primary school and one of the few people who regularly followed news about natural phenomena online. He noticed reports from the meteorological department warning of the possibility of a major storm forming in the Andaman Sea. Although the reports weren't yet definitive, given his own sensitivity to the unusual natural signs he'd observed firsthand, Surachai felt deeply uneasy.",
				"When Surachai tried to warn the villagers to prepare and evacuate to higher ground before the storm arrived, many didn't believe him and thought he was overreacting, since in the many decades past, the village had never faced a storm severe enough to require evacuation. The village headman even told Surachai to stop scaring people, since it might disrupt the fishing trade and everyone's normal way of life.",
				"Genuinely worried, Surachai decided to prepare his own family and the neighbors who trusted him first, storing dried food, clean water, and essential supplies at higher ground in advance, while also teaching his students at school how to recognize nature's warning signs, so they could pass the knowledge on to their families too. Even though many viewed him as overthinking things, he stood firm in his convictions.",
				"Two days later, the storm Surachai had feared truly did form, and intensified far faster than scientists had predicted. By the time the official warning came, there wasn't enough time left for an organized evacuation. But thanks to Surachai's advance preparation and the family and neighbors who had trusted him, many households managed to evacuate to higher ground in time before the wind and waves battered the village. Although many homes suffered severe damage, not a single person in the village died. After the storm passed, the village headman who had once criticized Surachai came to thank him in front of the entire village, and formally appointed him as the person responsible for the village's warning system from that day forward.",
			],
		},
		{
			id: "last-conversation-with-father",
			title: "บทสนทนาสุดท้ายกับพ่อ",
			titleEn: "The Last Conversation with Father",
			thai: [
				"กิตติกับพ่อไม่ได้พูดกันอย่างจริงจังมานานกว่าสิบปีแล้ว ความขัดแย้งเริ่มต้นขึ้นตั้งแต่วันที่กิตติตัดสินใจไม่รับช่วงกิจการโรงงานเฟอร์นิเจอร์ของครอบครัว และเลือกไปทำงานเป็นนักออกแบบกราฟิกที่บริษัทโฆษณาในกรุงเทพฯ แทน พ่อของเขามองว่านี่คือการปฏิเสธมรดกความพยายามที่ตนเองสร้างมาทั้งชีวิต และรู้สึกผิดหวังอย่างสุดซึ้ง ทั้งสองคนไม่เคยเปิดใจคุยกันเรื่องนี้อย่างตรงไปตรงมา มีเพียงความเงียบและระยะห่างที่ค่อย ๆ เพิ่มขึ้นทุกปี",
				"การพูดคุยระหว่างกิตติกับพ่อจึงจำกัดอยู่เพียงเรื่องพื้นฐาน เช่น ถามถึงสุขภาพหรือทักทายกันในวันสำคัญ กิตติมักบอกตัวเองว่าสักวันเขาจะกลับไปคุยกับพ่ออย่างจริงจัง แต่ก็ผัดวันไปเรื่อย ๆ เพราะไม่รู้จะเริ่มต้นอย่างไร และกลัวว่าการพูดคุยจะนำไปสู่การทะเลาะครั้งใหญ่อีกครั้งเช่นเดิม จนกระทั่งวันหนึ่ง เขาได้รับโทรศัพท์จากแม่ว่าพ่อล้มป่วยหนักและถูกนำตัวส่งโรงพยาบาลอย่างฉุกเฉิน",
				"กิตติรีบเดินทางกลับบ้านทันทีด้วยใจที่สั่นระริก เมื่อไปถึงโรงพยาบาล เขาพบว่าพ่อนอนอยู่บนเตียงในห้องไอซียู ร่างกายอ่อนแอกว่าที่เขาจำได้มาก แพทย์บอกว่าพ่อมีอาการหัวใจล้มเหลวเฉียบพลันและต้องเฝ้าดูอาการอย่างใกล้ชิด กิตตินั่งอยู่ข้างเตียงพ่อทั้งคืน มองดูเครื่องช่วยหายใจที่ทำงานขึ้นลงตามจังหวะ และรู้สึกเสียใจอย่างสุดซึ้งที่เขาปล่อยให้เวลาผ่านไปนานถึงสิบปีโดยไม่เคยพูดสิ่งที่อยู่ในใจให้พ่อฟัง",
				"เช้าวันรุ่งขึ้น พ่อลืมตาขึ้นและมีอาการดีขึ้นเล็กน้อย กิตติจึงตัดสินใจใช้โอกาสนี้พูดสิ่งที่เก็บไว้ในใจมานานให้พ่อฟัง เขาขอโทษที่ไม่เคยอธิบายให้พ่อเข้าใจอย่างชัดเจนว่าทำไมเขาเลือกเส้นทางที่แตกต่างออกไป และบอกพ่อว่าการตัดสินใจนั้นไม่ได้เกิดจากการไม่รักหรือไม่เคารพสิ่งที่พ่อสร้างมา แต่เพราะเขาต้องการค้นหาความหมายในชีวิตของตัวเองในแบบของตัวเอง พ่อฟังอย่างเงียบ ๆ ด้วยดวงตาที่เอ่อล้นไปด้วยน้ำตา และในที่สุดก็พูดว่าเขาเสียใจที่ปล่อยให้ความภาคภูมิใจของตัวเองมาบังตาจนไม่ยอมรับฟังลูกชายมาตลอดหลายปี",
				"พ่อของกิตติฟื้นตัวได้ในเวลาต่อมา และความสัมพันธ์ระหว่างพวกเขาก็เริ่มเปลี่ยนไปในทางที่ดีขึ้นทีละน้อย แม้จะไม่สามารถลบความเจ็บปวดจากสิบปีที่ห่างเหินออกไปได้ทั้งหมด แต่กิตติเรียนรู้ว่าการเปิดใจพูดความจริงแม้จะน่ากลัว มักมีค่ามากกว่าความเงียบที่ปลอดภัยแต่ว่างเปล่าเสมอ เขามักบอกกับตัวเองในเวลาต่อมาว่า อย่ารอให้ถึงวันที่สายเกินไปก่อนจะพูดสิ่งที่สำคัญที่สุดกับคนที่เรารัก",
			],
			english: [
				"Kitti and his father hadn't spoken seriously to each other in over ten years. The conflict began the day Kitti decided not to take over the family's furniture factory business, choosing instead to work as a graphic designer at an advertising company in Bangkok. His father saw this as a rejection of the legacy he had built through a lifetime of effort, and felt deeply disappointed. Neither of them ever openly discussed the matter honestly; there was only silence and a distance that grew wider each year.",
				"Conversations between Kitti and his father became limited to basic exchanges, like asking about health or greetings on important occasions. Kitti often told himself that someday he'd have a real conversation with his father, but he kept putting it off, unsure how to begin and afraid the conversation would only lead to another major argument like before — until one day, he received a call from his mother saying his father had fallen seriously ill and been rushed to the hospital.",
				"Kitti rushed home immediately, his heart pounding with fear. When he arrived at the hospital, he found his father lying in the ICU, his body far weaker than Kitti remembered. The doctor said his father was suffering acute heart failure and needed close monitoring. Kitti sat by his father's bedside all night, watching the ventilator rise and fall in rhythm, feeling profound regret that he had let ten years pass without ever telling his father what was truly in his heart.",
				"The next morning, his father opened his eyes and showed slight improvement. Kitti decided to use this chance to say what he had held inside for so long. He apologized for never clearly explaining why he had chosen a different path, and told his father that the decision hadn't come from a lack of love or respect for what his father had built, but because he needed to find meaning in his own life, in his own way. His father listened quietly, his eyes brimming with tears, and finally said he regretted letting his own pride blind him from truly listening to his son all these years.",
				"Kitti's father recovered over time, and the relationship between them gradually began to improve. Although it couldn't fully erase the pain of ten distant years, Kitti learned that opening up to speak the truth, however frightening, is always worth more than a silence that feels safe but is ultimately empty. He often told himself afterward: never wait until it's too late to say the most important things to the people you love.",
			],
		},
		{
			id: "city-that-never-sleeps",
			title: "เมืองที่ไม่มีใครหลับ",
			titleEn: "The City That Never Sleeps",
			thai: [
				"ณิชาทำงานเป็นนักวิเคราะห์การเงินในบริษัทข้ามชาติแห่งหนึ่งในกรุงเทพฯ ชีวิตของเธอหมุนไปตามตารางงานที่แน่นขนัด ประชุมตั้งแต่เช้าจนถึงดึก บางวันไม่มีเวลาแม้แต่จะกินข้าวเที่ยงอย่างสงบ เธอภูมิใจในตำแหน่งที่ได้มาด้วยความพยายามอย่างหนัก และมองว่าความสำเร็จทางอาชีพคือเครื่องพิสูจน์คุณค่าของตัวเองที่ชัดเจนที่สุด เพื่อนร่วมงานหลายคนมองว่าณิชาคือตัวอย่างของคนทำงานที่ประสบความสำเร็จอย่างแท้จริง",
				"แต่เบื้องหลังความสำเร็จนั้น ณิชาเริ่มสังเกตเห็นว่าตัวเองนอนหลับได้ไม่เกินสี่ชั่วโมงต่อคืนมาหลายเดือนแล้ว เธอรู้สึกเหนื่อยล้าตลอดเวลาแม้จะดื่มกาแฟหลายแก้วในแต่ละวัน ความสัมพันธ์กับเพื่อนและครอบครัวเริ่มห่างเหินเพราะไม่มีเวลาให้ เธอพลาดงานแต่งงานของเพื่อนสนิทเพราะต้องเข้าประชุมด่วนกับลูกค้าต่างประเทศ และพลาดวันเกิดของแม่เพราะต้องปิดยอดโครงการสำคัญ ทุกครั้งที่พลาดโอกาสเหล่านี้ เธอบอกตัวเองว่าคุ้มค่ากับความก้าวหน้าในอาชีพที่กำลังได้มา",
				"จุดพลิกผันเกิดขึ้นเมื่อวันหนึ่งขณะกำลังนำเสนองานสำคัญในที่ประชุม ณิชารู้สึกหน้ามืดและหมดสติไปกลางที่ประชุมโดยไม่มีสัญญาณเตือนล่วงหน้า เพื่อนร่วมงานรีบนำตัวเธอส่งโรงพยาบาล แพทย์วินิจฉัยว่าเป็นภาวะร่างกายล้มเหลวจากความเครียดสะสมและการนอนไม่พอเป็นเวลานาน พร้อมเตือนอย่างหนักแน่นว่าหากยังใช้ชีวิตแบบนี้ต่อไป ความเสี่ยงต่อโรคหัวใจและภาวะซึมเศร้าจะสูงขึ้นอย่างมาก",
				"การนอนโรงพยาบาลสามวันทำให้ณิชามีเวลาคิดทบทวนชีวิตของตัวเองเป็นครั้งแรกในรอบหลายปี เธอตั้งคำถามกับตัวเองว่าความสำเร็จที่เธอไล่ตามมาตลอดนั้น มีความหมายอะไรจริง ๆ หากต้องแลกมาด้วยสุขภาพและความสัมพันธ์ที่สำคัญในชีวิต เธอนึกถึงใบหน้าของแม่ในวันเกิดที่เธอพลาดไป และนึกถึงเพื่อนสนิทที่เธอไม่ได้ไปร่วมยินดีในวันแต่งงาน ความรู้สึกผิดและความเสียใจท่วมทับเธอในคืนนั้น",
				"หลังจากออกจากโรงพยาบาล ณิชาตัดสินใจปรับเปลี่ยนวิถีชีวิตอย่างจริงจัง เธอเจรจากับหัวหน้างานเพื่อขอปรับตารางงานให้สมดุลมากขึ้น กำหนดเวลานอนอย่างเคร่งครัด และเริ่มปฏิเสธงานที่ไม่จำเป็นบางส่วนเพื่อรักษาเวลาให้กับครอบครัวและตัวเอง แม้ในช่วงแรกเธอจะรู้สึกผิดที่ทำงานได้น้อยลง แต่เมื่อเวลาผ่านไป เธอพบว่าคุณภาพงานของเธอกลับดีขึ้น เพราะสมองที่ได้พักผ่อนเพียงพอสามารถคิดวิเคราะห์ได้เฉียบคมกว่าเดิม ณิชาเรียนรู้ว่าเมืองใหญ่ที่ไม่มีใครหลับอาจดูเหมือนเต็มไปด้วยโอกาส แต่คนที่ฉลาดที่สุดคือคนที่รู้ว่าเมื่อไหร่ควรหยุดพักเพื่อรักษาชีวิตของตัวเองไว้ให้สมดุล",
			],
			english: [
				"Nicha worked as a financial analyst at a multinational company in Bangkok. Her life revolved around a packed schedule — meetings from morning until late at night, some days without even a peaceful lunch break. She took pride in the position she'd earned through hard work and saw professional success as the clearest proof of her own worth. Many coworkers viewed Nicha as the model of a truly successful professional.",
				"But behind that success, Nicha began noticing she'd been sleeping no more than four hours a night for months. She felt exhausted all the time despite drinking several cups of coffee daily. Her relationships with friends and family grew distant from lack of time. She missed a close friend's wedding because of an urgent meeting with a foreign client, and missed her mother's birthday because she had to close out an important project. Every time she missed these moments, she told herself it was worth it for the career progress she was gaining.",
				"The turning point came one day while presenting important work in a meeting — Nicha felt dizzy and collapsed unconscious in the middle of the meeting without any prior warning. Coworkers rushed her to the hospital. Doctors diagnosed a physical collapse from accumulated stress and prolonged sleep deprivation, warning firmly that continuing this lifestyle would sharply increase her risk of heart disease and depression.",
				"Three days in the hospital gave Nicha time to reflect on her own life for the first time in years. She questioned herself about what the success she'd been chasing truly meant, if it had to come at the cost of her health and important relationships. She thought of her mother's face on the birthday she'd missed, and of the close friend whose wedding she hadn't been there to celebrate. Guilt and regret overwhelmed her that night.",
				"After leaving the hospital, Nicha decided to seriously change her lifestyle. She negotiated with her boss for a more balanced schedule, set strict sleep hours, and began declining some non-essential work to preserve time for her family and herself. Although she initially felt guilty about doing less work, over time she found her work quality actually improved, since a well-rested mind could think and analyze far more sharply than before. Nicha learned that a big city where no one sleeps might seem full of opportunity, but the wisest people are the ones who know when to stop and rest, in order to keep their own lives in balance.",
			],
		},
	],
};

export default stories;
