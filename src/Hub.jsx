import { LobbyCard } from "./Lobby";

// A second-level screen reached from one of Home's three explore cards: a
// title plus a flat list of lobby-style cards leading to the actual leaf
// views. Reuses Lobby's card look rather than duplicating the markup.
function HubView({ title, items, onNavigate })
{
	return (
		<div className="lobby">
			<p className="lobby-section">{title}</p>
			<div className="lobby-cards">
				{items.map((item) => (
					<LobbyCard
						key={item.id}
						glyph={item.glyph}
						glyphSmall={item.glyphSmall}
						title={item.title}
						sub={item.sub}
						onClick={() => onNavigate(item.id)}
					/>
				))}
			</div>
		</div>
	);
}

const practiceItems = [
	{ id: "random", glyph: "ก", title: "Random letter", sub: "Consonant flashcards, shuffled" },
	{ id: "numbers", glyph: "๕", title: "Numbers", sub: "Number flashcards, 1 to 10 million" },
	{ id: "game", glyph: "▶", title: "Keyboard game", sub: "Type the falling consonants" },
	{ id: "quiz", glyph: "?", title: "Consonant quiz", sub: "Match the consonant to its sound" },
	{ id: "stories", glyph: "อ่าน", glyphSmall: true, title: "Short stories", sub: "Read Thai at your level" },
	{ id: "classifiers", glyph: "คน", glyphSmall: true, title: "Classifiers", sub: "Practice the counter word for each noun" },
];

const referenceItems = [
	{ id: "table", glyph: "ช", title: "Consonant table", sub: "All 44 consonants in order" },
	{ id: "vowels", glyph: "เอ", title: "Vowel table", sub: "The 32 traditional vowels" },
	{ id: "numbertable", glyph: "๑๐", glyphSmall: true, title: "Number table", sub: "All 51 numbers with readings" },
	{ id: "finals", glyph: "ง", title: "Final consonants", sub: "The 8 ending sounds" },
	{ id: "classifiertable", glyph: "ใบ", glyphSmall: true, title: "Classifier table", sub: "Every counter word, grouped by what it counts" },
];

const tonesItems = [
	{ id: "tonerules", glyph: "ก่", title: "Tone rules", sub: "Class, syllable and mark to tone" },
	{ id: "tonefinder", glyph: "ก้", title: "Tone finder", sub: "Work out any syllable's tone" },
];

export function PracticeHub({ onNavigate })
{
	return <HubView title="Practice" items={practiceItems} onNavigate={onNavigate} />;
}

export function ReferenceHub({ onNavigate })
{
	return <HubView title="Reference" items={referenceItems} onNavigate={onNavigate} />;
}

export function TonesHub({ onNavigate })
{
	return <HubView title="Tones" items={tonesItems} onNavigate={onNavigate} />;
}
