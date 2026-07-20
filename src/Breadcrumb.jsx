import { getBreadcrumb } from "./navCategories";

// The orientation trail shown above every non-home screen: Home / … / current.
// Segments come from getBreadcrumb(); a segment with a `target` renders as a
// link (used for the About Thailand hub and category levels), while plain
// segments and the final current segment render as text. Renders nothing for
// "home" or any id with no trail.
function Breadcrumb({ viewId, onNavigate })
{
	const segments = getBreadcrumb(viewId);
	if (!segments || segments.length === 0)
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
			{segments.map((segment, index) =>
			{
				const isLast = index === segments.length - 1;
				return (
					<span key={index} className="breadcrumb-segment">
						<span className="breadcrumb-sep" aria-hidden="true">/</span>
						{segment.target && !isLast ? (
							<button
								type="button"
								className="breadcrumb-link"
								onClick={() => onNavigate(segment.target)}
							>
								{segment.label}
							</button>
						) : (
							<span className={isLast ? "breadcrumb-current" : undefined}>
								{segment.label}
							</span>
						)}
					</span>
				);
			})}
		</nav>
	);
}

export default Breadcrumb;
