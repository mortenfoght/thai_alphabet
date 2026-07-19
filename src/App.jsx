import { useState } from "react";
import Lobby from "./Lobby";
import { PracticeHub, ReferenceHub, TonesHub } from "./Hub";
import RandomLetter from "./RandomLetter";
import KeyboardGame from "./KeyboardGame";
import ConsonantQuiz from "./ConsonantQuiz";
import ShortStories from "./ShortStories";
import ClassifierFlashcard from "./ClassifierFlashcard";
import ConsonantTable from "./ConsonantTable";
import VowelTable from "./VowelTable";
import NumberFlashcard from "./NumberFlashcard";
import NumberTable from "./NumberTable";
import FinalConsonants from "./FinalConsonants";
import ClassifierTable from "./ClassifierTable";
import ToneRulesTable from "./ToneRulesTable";
import ToneFinder from "./ToneFinder";
import "./App.css";

const views = [
	{ id: "home", label: "Home", Component: Lobby },
	{ id: "random", label: "Random Letter", Component: RandomLetter },
	{ id: "game", label: "Keyboard Game", Component: KeyboardGame },
	{ id: "quiz", label: "Consonant Quiz", Component: ConsonantQuiz },
	{ id: "stories", label: "Short Stories", Component: ShortStories },
	{ id: "classifiers", label: "Classifiers", Component: ClassifierFlashcard },
	{ id: "table", label: "Consonant Table", Component: ConsonantTable },
	{ id: "vowels", label: "Vowel Table", Component: VowelTable },
	{ id: "numbers", label: "Numbers", Component: NumberFlashcard },
	{ id: "numbertable", label: "Number Table", Component: NumberTable },
	{ id: "finals", label: "Final Consonants", Component: FinalConsonants },
	{ id: "classifiertable", label: "Classifier Table", Component: ClassifierTable },
	{ id: "tonerules", label: "Tone Rules", Component: ToneRulesTable },
	{ id: "tonefinder", label: "Tone Finder", Component: ToneFinder },
];

// Second-level hub screens reached only from Home's three explore cards.
// Kept out of `views` (which also drives the burger menu) so the burger
// menu keeps listing the flat set of leaf destinations, unchanged.
const hubViews = [
	{ id: "practice", Component: PracticeHub },
	{ id: "reference", Component: ReferenceHub },
	{ id: "tones", Component: TonesHub },
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

	const Current = [...views, ...hubViews].find((v) => v.id === viewId).Component;

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
