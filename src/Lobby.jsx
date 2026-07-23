import navCategories from "./navCategories";

// The Thai Alphabet category holds the app's 13 learning screens, grouped
// (Practice / Reference / Tones). The home screen renders those same groups as
// its card list, so it stays in sync with the top-nav mega-menu automatically.
const alphabetCategory = navCategories.find((c) => c.id === "alphabet");

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

// The home screen: the brand hero followed by the grouped card list of every
// learning screen (Practice / Reference / Tones), driven off navCategories so
// it mirrors the Thai Alphabet mega-menu. The top nav still provides global
// navigation on every screen.
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

			{alphabetCategory.groups.map((group) => (
				<section key={group.label} className="lobby-group">
					<p className="lobby-section">{group.label}</p>
					<div className="lobby-cards">
						{group.items.map((item) => (
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
				</section>
			))}
		</div>
	);
}

export default Lobby;
