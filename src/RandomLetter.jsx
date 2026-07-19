import { useState } from "react";
import consonants from "./consonants";
import { shuffledDeck } from "./deck";
import { speak, speechSupported, useVoiceWarmup } from "./speech";

function RandomLetter()
{
	const [deck, setDeck] = useState(() => shuffledDeck(consonants.length, -1));
	const [pos, setPos] = useState(0);
	const [showName, setShowName] = useState(false);

	useVoiceWarmup();

	function handleNext()
	{
		if (pos + 1 < deck.length)
		{
			setPos(pos + 1);
		}
		else
		{
			setDeck(shuffledDeck(consonants.length, deck[pos]));
			setPos(0);
		}
		setShowName(false);
	}

	function handleShowName()
	{
		setShowName(true);
	}

	const current = consonants[deck[pos]];

	function handleHear()
	{
		speak(current.name);
	}

	return (
		<div className="flashcard">
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
				<button type="button" className="primary" onClick={handleNext}>
					Next
				</button>
				<button
					type="button"
					className="secondary"
					onClick={handleHear}
					disabled={!speechSupported}
					title={
						speechSupported
							? "Hear the letter spoken"
							: "Speech is not supported in this browser"
					}
				>
					Hear
				</button>
				<button type="button" className="secondary" onClick={handleShowName}>
					Show Name
				</button>
			</div>
		</div>
	);
}

export default RandomLetter;
