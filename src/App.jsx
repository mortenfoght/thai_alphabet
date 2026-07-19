import { useState } from "react";
import Lobby from "./Lobby";
import TopNav from "./TopNav";
import Breadcrumb from "./Breadcrumb";
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
	{ id: "home", Component: Lobby },
	{ id: "random", Component: RandomLetter },
	{ id: "game", Component: KeyboardGame },
	{ id: "quiz", Component: ConsonantQuiz },
	{ id: "stories", Component: ShortStories },
	{ id: "classifiers", Component: ClassifierFlashcard },
	{ id: "table", Component: ConsonantTable },
	{ id: "vowels", Component: VowelTable },
	{ id: "numbers", Component: NumberFlashcard },
	{ id: "numbertable", Component: NumberTable },
	{ id: "finals", Component: FinalConsonants },
	{ id: "classifiertable", Component: ClassifierTable },
	{ id: "tonerules", Component: ToneRulesTable },
	{ id: "tonefinder", Component: ToneFinder },
];

function App()
{
	const [viewId, setViewId] = useState("home");

	const Current = views.find((v) => v.id === viewId).Component;

	return (
		<div className="app">
			<TopNav viewId={viewId} onNavigate={setViewId} />
			<Breadcrumb viewId={viewId} onNavigate={setViewId} />
			<main className="view">
				<Current onNavigate={setViewId} />
			</main>
		</div>
	);
}

export default App;
