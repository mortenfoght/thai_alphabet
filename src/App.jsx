import { useState } from "react";
import Lobby from "./Lobby";
import RandomLetter from "./RandomLetter";
import ConsonantTable from "./ConsonantTable";
import VowelTable from "./VowelTable";
import NumberFlashcard from "./NumberFlashcard";
import NumberTable from "./NumberTable";
import "./App.css";

const views = [
	{ id: "home", label: "Home", Component: Lobby },
	{ id: "random", label: "Random Letter", Component: RandomLetter },
	{ id: "table", label: "Consonant Table", Component: ConsonantTable },
	{ id: "vowels", label: "Vowel Table", Component: VowelTable },
	{ id: "numbers", label: "Numbers", Component: NumberFlashcard },
	{ id: "numbertable", label: "Number Table", Component: NumberTable },
];

function App()
{
	const [viewId, setViewId] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);

	function choose(id)
	{
		setViewId(id);
		setMenuOpen(false);
	}

	const Current = views.find((v) => v.id === viewId).Component;

	return (
		<div className="app">
			{viewId !== "home" ? (
				<button
					type="button"
					className="home-btn"
					aria-label="Home"
					onClick={() => choose("home")}
				>
					<svg
						viewBox="0 0 24 24"
						width="22"
						height="22"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
						<polyline points="9 22 9 12 15 12 15 22"></polyline>
					</svg>
				</button>
			) : null}
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
				<Current onNavigate={choose} />
			</main>
		</div>
	);
}

export default App;
