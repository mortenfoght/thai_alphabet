import { useState, useEffect, useCallback } from "react";
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
import AboutThailand from "./AboutThailand";
import ThailandCategory from "./ThailandCategory";
import ThailandArticle from "./ThailandArticle";
import { parseThailandView } from "./thailandContent";
import { pathToViewId, viewIdToPath } from "./routes";
import { applySeo } from "./applySeo";
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

// Resolve a view id to its rendered screen. The About Thailand section is
// data-driven (hub / category / article), so it's matched first; everything
// else is a fixed component from the `views` table, falling back to home.
function renderView(viewId, onNavigate)
{
	const thailand = parseThailandView(viewId);
	if (thailand)
	{
		if (thailand.kind === "category")
		{
			return <ThailandCategory categoryId={thailand.id} onNavigate={onNavigate} />;
		}
		if (thailand.kind === "article")
		{
			return <ThailandArticle slug={thailand.slug} onNavigate={onNavigate} />;
		}
		return <AboutThailand onNavigate={onNavigate} />;
	}

	const view = views.find((v) => v.id === viewId) || views[0];
	const Current = view.Component;
	return <Current onNavigate={onNavigate} />;
}

// Read the current path — from the browser on the client, or the server-supplied
// initialPath during prerendering.
function currentPath(initialPath)
{
	if (typeof window !== "undefined")
	{
		return window.location.pathname;
	}
	return initialPath || "/";
}

function App({ initialPath })
{
	const [viewId, setViewId] = useState(() => pathToViewId(currentPath(initialPath)));

	// Navigate: update state AND push a real URL so every screen is a shareable,
	// crawlable address and the browser back/forward buttons work.
	const navigate = useCallback((id) =>
	{
		setViewId(id);
		if (typeof window !== "undefined")
		{
			const path = viewIdToPath(id);
			if (window.location.pathname !== path)
			{
				window.history.pushState({}, "", path);
			}
		}
	}, []);

	// Sync state with the URL on back/forward.
	useEffect(() =>
	{
		const onPop = () => setViewId(pathToViewId(window.location.pathname));
		window.addEventListener("popstate", onPop);
		return () => window.removeEventListener("popstate", onPop);
	}, []);

	// On every view change: scroll to the top and refresh the document <head>
	// SEO tags (title / meta / canonical / JSON-LD).
	useEffect(() =>
	{
		window.scrollTo(0, 0);
		applySeo(viewId);
	}, [viewId]);

	return (
		<div className="app">
			<TopNav viewId={viewId} onNavigate={navigate} />
			<Breadcrumb viewId={viewId} onNavigate={navigate} />
			<main className="view">
				{renderView(viewId, navigate)}
			</main>
		</div>
	);
}

export default App;
