import { useState } from "react";
import RandomLetter from "./RandomLetter";
import ConsonantTable from "./ConsonantTable";
import "./App.css";

const views = [
	{ id: "random", label: "Random Letter", Component: RandomLetter },
	{ id: "table", label: "Consonant Table", Component: ConsonantTable },
];

function App()
{
	const [viewId, setViewId] = useState("random");
	const [menuOpen, setMenuOpen] = useState(false);

	function choose(id)
	{
		setViewId(id);
		setMenuOpen(false);
	}

	const Current = views.find((v) => v.id === viewId).Component;

	return (
		<div className="app">
			<header className="topbar">
				<button
					type="button"
					className={`burger${menuOpen ? " open" : ""}`}
					aria-label="Menu"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				{menuOpen ? (
					<nav className="menu">
						{views.map((v) => (
							<button
								key={v.id}
								type="button"
								className={v.id === viewId ? "active" : ""}
								onClick={() => choose(v.id)}
							>
								{v.label}
							</button>
						))}
					</nav>
				) : null}
			</header>
			{menuOpen ? (
				<div
					className="menu-backdrop"
					onClick={() => setMenuOpen(false)}
				></div>
			) : null}
			<main className="view">
				<Current />
			</main>
		</div>
	);
}

export default App;
