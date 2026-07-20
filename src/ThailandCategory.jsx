import { LobbyCard } from "./Lobby";
import { categoryMap, articlesByCategory, articleViewId } from "./thailandContent";

// A category index page: a short intro plus a card list of every article in the
// category, in reading order. Reached from the hub's category cards, the
// mega-menu group headers, and the breadcrumb.
function ThailandCategory({ categoryId, onNavigate })
{
	const category = categoryMap[categoryId];
	const articles = articlesByCategory[categoryId] || [];

	if (!category)
	{
		return (
			<div className="article">
				<h2 className="article-title">Category not found</h2>
				<p className="article-lead">
					<button type="button" className="link-button" onClick={() => onNavigate("about")}>
						Back to About Thailand
					</button>
				</p>
			</div>
		);
	}

	return (
		<div className="article">
			<button type="button" className="article-eyebrow" onClick={() => onNavigate("about")}>
				About Thailand
			</button>
			<h1 className="article-title">{category.label}</h1>
			<p className="article-lead">{category.blurb}</p>

			<div className="lobby-cards">
				{articles.map((a) => (
					<LobbyCard
						key={a.slug}
						glyph={String(a.order)}
						title={a.title}
						sub={a.description}
						accent="jungle"
						onClick={() => onNavigate(articleViewId(a.slug))}
					/>
				))}
			</div>
		</div>
	);
}

export default ThailandCategory;
