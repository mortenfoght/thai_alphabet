import { useState } from "react";
import classifiers from "./classifiers";
import { shuffledDeck } from "./deck";
import { speak, speechSupported, useVoiceWarmup } from "./speech";

function ClassifierFlashcard()
{
	const [deck, setDeck] = useState(() => shuffledDeck(classifiers.length, -1));
	const [pos, setPos] = useState(0);
	const [showMeaning, setShowMeaning] = useState(false);

	useVoiceWarmup();

	function handleNext()
	{
		if (pos + 1 < deck.length)
		{
			setPos(pos + 1);
		}
		else
		{
			setDeck(shuffledDeck(classifiers.length, deck[pos]));
			setPos(0);
		}
		setShowMeaning(false);
	}

	function handleShowMeaning()
	{
		setShowMeaning(true);
	}

	const current = classifiers[deck[pos]];

	function handleHear()
	{
		speak(current.classifier);
	}

	return (
		<div className="flashcard">
			<div className="classifier-glyph">{current.classifier}</div>
			<div className="name-slot">
				{showMeaning ? (
					<>
						<div className="name">{current.meaning}</div>
						<div className="phonetic">{current.phonetic}</div>
						<div className="classifier-example">
							{current.example.word} · {current.example.phonetic}{" "}
							<span className="classifier-example-gloss">
								({current.example.gloss})
							</span>
						</div>
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
							? "Hear the classifier spoken"
							: "Speech is not supported in this browser"
					}
				>
					Hear
				</button>
				<button type="button" className="secondary" onClick={handleShowMeaning}>
					Show Meaning
				</button>
			</div>
		</div>
	);
}

export default ClassifierFlashcard;
