import { useState } from "react";
import consonants from "./consonants";
import "./App.css";

function shuffledDeck(avoidFirst)
{
	const deck = consonants.map((_, i) => i);
	for (let i = deck.length - 1; i > 0; i--)
	{
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	if (deck.length > 1 && deck[0] === avoidFirst)
	{
		[deck[0], deck[1]] = [deck[1], deck[0]];
	}
	return deck;
}

function App()
{
	const [deck, setDeck] = useState(() => shuffledDeck(-1));
	const [pos, setPos] = useState(0);
	const [showName, setShowName] = useState(false);

	function handleNext()
	{
		if (pos + 1 < deck.length)
		{
			setPos(pos + 1);
		}
		else
		{
			setDeck(shuffledDeck(deck[pos]));
			setPos(0);
		}
		setShowName(false);
	}

	function handleShowName()
	{
		setShowName(true);
	}

	const current = consonants[deck[pos]];

	return (
		<div className="app">
			<div className="consonant">{current.letter}</div>
			<div className="name-slot">
				{showName ? (
					<>
						<div className="name">{current.name}</div>
						<div className="phonetic">{current.phonetic}</div>
					</>
				) : null}
			</div>
			<div className="buttons">
				<button type="button" onClick={handleNext}>
					Next
				</button>
				<button type="button" onClick={handleShowName}>
					Show Name
				</button>
			</div>
		</div>
	);
}

export default App;
