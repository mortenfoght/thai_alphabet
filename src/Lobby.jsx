export function LobbyCard({ glyph, glyphSmall, title, sub, accent, large, onClick })
{
	const classes = ["lobby-card"];
	if (accent)
	{
		classes.push(`accent-${accent}`);
	}
	if (large)
	{
		classes.push("large");
	}
	return (
		<button type="button" className={classes.join(" ")} onClick={onClick}>
			<span className={glyphSmall ? "lobby-glyph small" : "lobby-glyph"}>
				{glyph}
			</span>
			<span className="lobby-card-text">
				<span className="lobby-card-title">{title}</span>
				<span className="lobby-card-sub">{sub}</span>
			</span>
			<span className="lobby-arrow" aria-hidden="true">›</span>
		</button>
	);
}

// The home screen. `onNavigate` switches the active view by its id. Three
// explore cards lead to the Practice/Reference/Tones hub screens (see
// Hub.jsx), which in turn list the actual leaf views.
function Lobby({ onNavigate })
{
	return (
		<div className="lobby">
			<div className="lobby-hero">
				<div className="lobby-flourish">
					<span className="brand-mark" aria-hidden="true">ก</span>
				</div>
				<h1 className="lobby-title">Learn Thai</h1>
				<p className="lobby-subtitle">Consonants, vowels and numbers</p>
			</div>

			<div className="lobby-cards">
				<LobbyCard
					large
					accent="gold"
					glyph="ก"
					title="Practice"
					sub="Flashcards, quiz, keyboard game and stories"
					onClick={() => onNavigate("practice")}
				/>
				<LobbyCard
					large
					accent="ochre"
					glyph="ช"
					title="Reference"
					sub="Consonants, vowels, numbers and finals"
					onClick={() => onNavigate("reference")}
				/>
				<LobbyCard
					large
					accent="jungle"
					glyph="ก่"
					title="Tones"
					sub="Class and syllable rules, plus a tone finder"
					onClick={() => onNavigate("tones")}
				/>
			</div>
		</div>
	);
}

export default Lobby;
