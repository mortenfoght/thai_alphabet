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
			{glyph ? (
				<span className={glyphSmall ? "lobby-glyph small" : "lobby-glyph"}>
					{glyph}
				</span>
			) : null}
			<span className="lobby-card-text">
				<span className="lobby-card-title">{title}</span>
				<span className="lobby-card-sub">{sub}</span>
			</span>
			<span className="lobby-arrow" aria-hidden="true">›</span>
		</button>
	);
}

// The home screen. Navigation now lives entirely in the top nav's mega-menu
// (see TopNav.jsx / navCategories.js); this is just the landing hero.
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
				<div className="buttons">
					<button
						type="button"
						className="primary"
						onClick={() => onNavigate("random")}
					>
						Start practicing
					</button>
				</div>
			</div>
		</div>
	);
}

export default Lobby;
