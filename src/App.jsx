import { useEffect, useState } from "react";
import consonants from "./consonants";
import "./App.css";

const speechSupported =
	typeof window !== "undefined" && "speechSynthesis" in window;

// Held at module scope so the utterance being spoken is not garbage-collected
// before it finishes (a known cause of speech cutting out in Chrome).
let activeUtterance = null;

// Names of Thai voices that are known to be female across the common
// platforms (macOS/iOS "Kanya", Windows "Premwadee", Google Standard-A/C).
const femaleVoicePattern = /kanya|premwadee|female|หญิง|standard-a|standard-c/i;

function pickThaiVoice()
{
	if (!speechSupported)
	{
		return null;
	}
	const thai = window.speechSynthesis
		.getVoices()
		.filter((v) => v.lang && v.lang.toLowerCase().startsWith("th"));
	if (thai.length === 0)
	{
		return null;
	}
	const female = thai.find((v) => femaleVoicePattern.test(v.name));
	return { voice: female || thai[0], isFemale: Boolean(female) };
}

function speak(text)
{
	if (!speechSupported)
	{
		return;
	}
	const synth = window.speechSynthesis;
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "th-TH";
	utterance.rate = 0.85;
	const picked = pickThaiVoice();
	if (picked)
	{
		utterance.voice = picked.voice;
		// If we could not confirm a female voice, nudge the pitch up so
		// whatever Thai voice is available sounds more feminine.
		utterance.pitch = picked.isFemale ? 1 : 1.3;
	}
	else
	{
		utterance.pitch = 1.3;
	}
	// Keep a reference so the utterance is not garbage-collected mid-speech.
	activeUtterance = utterance;

	const start = () =>
	{
		// Chrome sometimes leaves the engine paused after prior use; resume()
		// is a no-op when it is not paused and unsticks it when it is.
		synth.resume();
		synth.speak(utterance);
	};

	if (synth.speaking || synth.pending)
	{
		// Interrupt whatever is playing, but give Chrome a tick to process the
		// cancel — speaking immediately after cancel() drops the new utterance.
		synth.cancel();
		setTimeout(start, 120);
	}
	else
	{
		// Engine is idle: speak directly. Calling cancel() here (as before)
		// is what silently killed repeat presses and post-Next presses.
		start();
	}
}

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

	// Voice lists load asynchronously in some browsers; touching getVoices()
	// and listening for the change event warms them up before first use.
	useEffect(() => {
		if (!speechSupported)
		{
			return;
		}
		window.speechSynthesis.getVoices();
		const handler = () => window.speechSynthesis.getVoices();
		window.speechSynthesis.addEventListener("voiceschanged", handler);
		return () =>
			window.speechSynthesis.removeEventListener("voiceschanged", handler);
	}, []);

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

	function handleHear()
	{
		speak(current.name);
	}

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
				<button
					type="button"
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
				<button type="button" onClick={handleShowName}>
					Show Name
				</button>
			</div>
		</div>
	);
}

export default App;
