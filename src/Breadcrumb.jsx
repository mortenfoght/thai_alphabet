import { findBreadcrumb } from "./navCategories";

// An orientation trail shown above every "Thai Alphabet" leaf screen: Home /
// Category / Group / Screen name. Only "Home" is a link -- the category and
// group segments are labels, not pages of their own. Renders nothing for
// "home" itself or any id not found in navCategories.js.
function Breadcrumb({ viewId, onNavigate })
{
	const trail = findBreadcrumb(viewId);
	if (!trail)
	{
		return null;
	}

	return (
		<nav className="breadcrumb" aria-label="Breadcrumb">
			<button
				type="button"
				className="breadcrumb-link"
				onClick={() => onNavigate("home")}
			>
				Home
			</button>
			<span className="breadcrumb-sep" aria-hidden="true">/</span>
			<span>{trail.categoryLabel}</span>
			{trail.groupLabel ? (
				<>
					<span className="breadcrumb-sep" aria-hidden="true">/</span>
					<span>{trail.groupLabel}</span>
				</>
			) : null}
			<span className="breadcrumb-sep" aria-hidden="true">/</span>
			<span className="breadcrumb-current">{trail.itemTitle}</span>
		</nav>
	);
}

export default Breadcrumb;
