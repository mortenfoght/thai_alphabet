import { useState } from "react";
import { LobbyCard } from "./Lobby";
import navCategories from "./navCategories";

// One compact tile in a desktop mega-menu dropdown. Items with no `id`
// (the "coming soon" placeholders) render disabled and non-interactive.
function NavItem({ item, accent, onNavigate })
{
	const disabled = !item.id;
	return (
		<button
			type="button"
			className={`nav-item${disabled ? " disabled" : ""}`}
			disabled={disabled}
			onClick={disabled ? undefined : () => onNavigate(item.id)}
		>
			{item.glyph ? (
				<span className={`nav-item-glyph accent-${accent}`}>{item.glyph}</span>
			) : null}
			<span className="nav-item-text">
				<span className="nav-item-title">{item.title}</span>
				<span className="nav-item-sub">{item.sub}</span>
			</span>
		</button>
	);
}

function categoryContainsId(cat, id)
{
	if (cat.groups)
	{
		return cat.groups.some((g) => g.items.some((item) => item.id === id));
	}
	return cat.items.some((item) => item.id === id);
}

// The app's sole navigation: a sticky top bar with 4 mega-menu category
// dropdowns on desktop, collapsing to a hamburger + accordion drawer on
// narrow screens (see the @media rule in App.css).
function TopNav({ viewId, onNavigate })
{
	const [openCategory, setOpenCategory] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileExpanded, setMobileExpanded] = useState(null);

	function go(id)
	{
		onNavigate(id);
		setOpenCategory(null);
		setMobileOpen(false);
		setMobileExpanded(null);
	}

	function closeAll()
	{
		setOpenCategory(null);
		setMobileOpen(false);
		setMobileExpanded(null);
	}

	const openCat = navCategories.find((c) => c.id === openCategory);

	return (
		<>
			<header className="top-nav">
				<div className="nav-inner">
					<button type="button" className="nav-logo" onClick={() => go("home")}>
						<span className="brand-mark" aria-hidden="true">ก</span>
						<span className="nav-wordmark">Learn Thai</span>
					</button>

					<nav className="nav-categories">
						{navCategories.map((cat) => (
							<button
								key={cat.id}
								type="button"
								className={`nav-category-btn${openCategory === cat.id ? " active" : ""}${categoryContainsId(cat, viewId) ? " current" : ""}`}
								onClick={() =>
									setOpenCategory((current) => (current === cat.id ? null : cat.id))
								}
							>
								<span className={`nav-dot accent-${cat.accent}`}></span>
								{cat.label}
							</button>
						))}
					</nav>

					<button type="button" className="nav-cta" onClick={() => go("random")}>
						Start practicing
					</button>

					<button
						type="button"
						className="nav-hamburger"
						aria-label="Menu"
						aria-expanded={mobileOpen}
						onClick={() => setMobileOpen((open) => !open)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>

				{openCat ? (
					<div className="nav-dropdown">
						{openCat.groups ? (
							openCat.groups.map((group) => (
								<div key={group.label} className="nav-dropdown-group">
									<div className="nav-group-label">{group.label}</div>
									<div className="nav-dropdown-grid">
										{group.items.map((item) => (
											<NavItem
												key={item.id}
												item={item}
												accent={openCat.accent}
												onNavigate={go}
											/>
										))}
									</div>
								</div>
							))
						) : (
							<div className="nav-dropdown-group">
								{openCat.comingSoon ? (
									<div className="nav-group-label">Coming soon</div>
								) : null}
								<div className="nav-dropdown-grid">
									{openCat.items.map((item) => (
										<NavItem
											key={item.title}
											item={item}
											accent={openCat.accent}
											onNavigate={go}
										/>
									))}
								</div>
							</div>
						)}
					</div>
				) : null}

				{mobileOpen ? (
					<div className="nav-mobile-panel">
						<button
							type="button"
							className="nav-cta nav-cta-mobile"
							onClick={() => go("random")}
						>
							Start practicing
						</button>
						{navCategories.map((cat) => (
							<div key={cat.id} className="nav-accordion-section">
								<button
									type="button"
									className="nav-accordion-head"
									onClick={() =>
										setMobileExpanded((current) =>
											current === cat.id ? null : cat.id
										)
									}
								>
									<span className={`nav-dot accent-${cat.accent}`}></span>
									<span className="nav-accordion-label">{cat.label}</span>
									<span
										className={`nav-accordion-chevron${mobileExpanded === cat.id ? " open" : ""}`}
										aria-hidden="true"
									>
										›
									</span>
								</button>
								{mobileExpanded === cat.id ? (
									<div className="nav-accordion-body">
										{cat.groups ? (
											cat.groups.map((group) => (
												<div key={group.label}>
													<p className="lobby-section">{group.label}</p>
													<div className="lobby-cards">
														{group.items.map((item) => (
															<LobbyCard
																key={item.id}
																glyph={item.glyph}
																glyphSmall={item.glyphSmall}
																title={item.title}
																sub={item.sub}
																onClick={() => go(item.id)}
															/>
														))}
													</div>
												</div>
											))
										) : (
											<div className="lobby-cards">
												{cat.items.map((item, i) =>
													item.id ? (
														<LobbyCard
															key={item.id}
															glyph={item.glyph}
															glyphSmall={item.glyphSmall}
															title={item.title}
															sub={item.sub}
															onClick={() => go(item.id)}
														/>
													) : (
														<div
															key={item.title ?? i}
															className="lobby-card disabled"
														>
															<span className="lobby-card-text">
																<span className="lobby-card-title">
																	{item.title}
																</span>
																<span className="lobby-card-sub">
																	{item.sub}
																</span>
															</span>
														</div>
													)
												)}
											</div>
										)}
									</div>
								) : null}
							</div>
						))}
					</div>
				) : null}
			</header>
			{openCategory || mobileOpen ? (
				<div className="nav-backdrop" onClick={closeAll}></div>
			) : null}
		</>
	);
}

export default TopNav;
