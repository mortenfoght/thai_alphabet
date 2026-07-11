import { useState } from "react";
import numbers from "./numbers";
import { shuffledDeck } from "./deck";
import { speak, speechSupported, useVoiceWarmup } from "./speech";

// Group the Arabic value in threes with spaces, e.g. 10000000 -> "10 000 000".
function formatArabic(value)
{
	return value.toLocaleString("en-US").replaceAll(",", " ");
}

function NumberFlashcard()
{
	const [deck, setDeck] = useState(() => shuffledDeck(numbers.length, -1));
	const [pos, setPos] = useState(0);
	const [showPhonetic, setShowPhonetic] = useState(false);

	useVoiceWarmup();

	function handleNext()
	{
		if (pos + 1 < deck.length)
		{
			setPos(pos + 1);
		}
		else
		{
			setDeck(shuffledDeck(numbers.length, deck[pos]));
			setPos(0);
		}
		setShowPhonetic(false);
	}

	function handleShowPhonetic()
	{
		setShowPhonetic(true);
	}

	const current = numbers[deck[pos]];

	function handleHear()
	{
		speak(current.word);
	}

	return (
		<div className="flashcard">
			<div className="number-display">
				<div className="number-arabic">{formatArabic(current.value)}</div>
				<div className="number-thai">{current.thai}</div>
			</div>
			<div className="name-slot">
				{showPhonetic ? (
					<>
						<div className="name">{current.word}</div>
						<div className="phonetic">{current.phonetic}</div>
					</>
				) : null}
			</div>
			<div className="buttons">
				<button type="button" onClick={handleNext}>
					Next
				</button>
				<button
					type="button"
					onClick={handleHear}
					disabled={!speechSupported}
					title={
						speechSupported
							? "Hear the number spoken"
							: "Speech is not supported in this browser"
					}
				>
					Hear
				</button>
				<button type="button" onClick={handleShowPhonetic}>
					Show Phonetic
				</button>
			</div>
		</div>
	);
}

export default NumberFlashcard;
