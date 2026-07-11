function LobbyCard({ glyph, glyphSmall, title, sub, onClick })
{
	return (
		<button type="button" className="lobby-card" onClick={onClick}>
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

// The home screen. `onNavigate` switches the active view by its id.
function Lobby({ onNavigate })
{
	return (
		<div className="lobby">
			<div className="lobby-hero">
				<div className="lobby-flourish">ก ข ค</div>
				<h1 className="lobby-title">Learn Thai</h1>
				<p className="lobby-subtitle">Consonants, vowels and numbers</p>
			</div>

			<p className="lobby-section">Practice</p>
			<div className="lobby-cards">
				<LobbyCard
					glyph="ก"
					title="Random letter"
					sub="Consonant flashcards, shuffled"
					onClick={() => onNavigate("random")}
				/>
				<LobbyCard
					glyph="๕"
					title="Numbers"
					sub="Number flashcards, 1 to 10 million"
					onClick={() => onNavigate("numbers")}
				/>
			</div>

			<p className="lobby-section">Reference</p>
			<div className="lobby-cards">
				<LobbyCard
					glyph="ช"
					title="Consonant table"
					sub="All 44 consonants in order"
					onClick={() => onNavigate("table")}
				/>
				<LobbyCard
					glyph="เอ"
					title="Vowel table"
					sub="The 32 traditional vowels"
					onClick={() => onNavigate("vowels")}
				/>
				<LobbyCard
					glyph="๑๐"
					glyphSmall
					title="Number table"
					sub="All 51 numbers with readings"
					onClick={() => onNavigate("numbertable")}
				/>
			</div>

			<p className="lobby-section">Tones</p>
			<div className="lobby-cards">
				<LobbyCard
					glyph="ก่"
					title="Tone rules"
					sub="Class, syllable and mark to tone"
					onClick={() => onNavigate("tonerules")}
				/>
				<LobbyCard
					glyph="ก้"
					title="Tone finder"
					sub="Work out any syllable's tone"
					onClick={() => onNavigate("tonefinder")}
				/>
			</div>
		</div>
	);
}

export default Lobby;
