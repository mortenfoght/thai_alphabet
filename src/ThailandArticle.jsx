import Markdown from "./Markdown";
import { articleMap, categoryMap, articlesByCategory, articleViewId, categoryViewId } from "./thailandContent";
import { internalLinkTerms } from "./internalLinks";
import { viewIdToPath } from "./routes";

// A single deep-dive article page. Renders the article's title and one-line
// description, the markdown body (with contextual internal cross-links woven
// into the prose), and a footer linking back to the category, on to the next
// article, and out to the other articles in the same category.
function ThailandArticle({ slug, onNavigate })
{
	const article = articleMap[slug];

	if (!article)
	{
		return (
			<div className="article">
				<h2 className="article-title">Article not found</h2>
				<p className="article-lead">
					This article doesn’t exist yet.{" "}
					<button type="button" className="link-button" onClick={() => onNavigate("about")}>
						Back to About Thailand
					</button>
				</p>
			</div>
		);
	}

	const category = categoryMap[article.category];
	const siblings = articlesByCategory[article.category] || [];
	const position = siblings.findIndex((a) => a.slug === slug);
	const next = position >= 0 && position < siblings.length - 1 ? siblings[position + 1] : null;
	const others = siblings.filter((a) => a.slug !== slug);

	// Context passed to the markdown renderer so it can weave the first mention
	// of each cross-reference phrase into a same-site link.
	const internalLinks = {
		terms: internalLinkTerms,
		currentSlug: slug,
		onNavigate,
		hrefForSlug: (s) => viewIdToPath(articleViewId(s)),
		viewIdForSlug: (s) => articleViewId(s),
	};

	return (
		<article className="article">
			<button
				type="button"
				className="article-eyebrow"
				onClick={() => onNavigate(categoryViewId(article.category))}
			>
				{category ? category.label : "About Thailand"}
			</button>
			<h1 className="article-title">{article.title}</h1>
			{article.description ? <p className="article-lead">{article.description}</p> : null}

			<Markdown text={article.body} internalLinks={internalLinks} />

			{others.length > 0 ? (
				<section className="article-related">
					<h2 className="md-h2">More in {category ? category.label : "About Thailand"}</h2>
					<ul className="article-related-list">
						{others.map((a) => (
							<li key={a.slug}>
								<a
									className="md-link internal"
									href={viewIdToPath(articleViewId(a.slug))}
									onClick={(e) =>
									{
										e.preventDefault();
										onNavigate(articleViewId(a.slug));
									}}
								>
									{a.title}
								</a>
							</li>
						))}
					</ul>
				</section>
			) : null}

			<nav className="article-footer-nav" aria-label="Continue reading">
				<button
					type="button"
					className="article-nav-link"
					onClick={() => onNavigate(categoryViewId(article.category))}
				>
					← All {category ? category.label : "articles"}
				</button>
				{next ? (
					<button
						type="button"
						className="article-nav-link next"
						onClick={() => onNavigate(articleViewId(next.slug))}
					>
						Next: {next.navLabel} →
					</button>
				) : null}
			</nav>
		</article>
	);
}

export default ThailandArticle;
