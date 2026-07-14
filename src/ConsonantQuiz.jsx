import { useEffect, useRef, useState } from "react";
import consonants from "./consonants";
import { shuffledDeck } from "./deck";

const TIME_LIMIT = 10; // seconds to answer each letter

// Build three phonic choices for a consonant: the correct one plus two random
// distractors, shuffled.
function makeChoices(idx)
{
	const correct = consonants[idx];
	const used = new Set([idx]);
	const options = [correct];
	while (options.length < 3)
	{
		const j = Math.floor(Math.random() * consonants.length);
		if (!used.has(j))
		{
			used.add(j);
			options.push(consonants[j]);
		}
	}
	const choices = options.map((c) => ({
		letter: c.letter,
		phonetic: c.phonetic,
		correct: c.letter === correct.letter,
	}));
	for (let i = choices.length - 1; i > 0; i--)
	{
		const k = Math.floor(Math.random() * (i + 1));
		[choices[i], choices[k]] = [choices[k], choices[i]];
	}
	return choices;
}

function ConsonantQuiz({ onNavigate })
{
	const [status, setStatus] = useState("idle");
	const [deck, setDeck] = useState([]);
	const [pos, setPos] = useState(0);
	const [score, setScore] = useState(0);
	const [errors, setErrors] = useState(0);
	const [choices, setChoices] = useState([]);
	const [reveal, setReveal] = useState(null);
	const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
	// Guards a question against being answered twice (e.g. a click landing at
	// the same moment the timer runs out).
	const answered = useRef(false);

	function start()
	{
		const d = shuffledDeck(consonants.length, -1);
		answered.current = false;
		setDeck(d);
		setPos(0);
		setScore(0);
		setErrors(0);
		setReveal(null);
		setTimeLeft(TIME_LIMIT);
		setChoices(makeChoices(d[0]));
		setStatus("playing");
	}

	function advance(nextPos, d)
	{
		answered.current = false;
		setReveal(null);
		if (nextPos >= d.length)
		{
			setStatus("won");
		}
		else
		{
			setPos(nextPos);
			setChoices(makeChoices(d[nextPos]));
		}
	}

	// Wrong answer or timeout: reveal the correct sound, count an error, then
	// move on (or end the game on the third error).
	function fail(revealInfo, currentErrors)
	{
		setErrors(currentErrors);
		setReveal(revealInfo);
		setTimeout(() => {
			if (currentErrors >= 3)
			{
				setReveal(null);
				setStatus("over");
			}
			else
			{
				advance(pos + 1, deck);
			}
		}, 1300);
	}

	function pick(choice)
	{
		if (answered.current)
		{
			return;
		}
		answered.current = true;
		const current = consonants[deck[pos]];
		if (choice.correct)
		{
			setScore((s) => s + 1);
			setReveal({ picked: choice.letter, correct: current.letter, wrong: false });
			setTimeout(() => advance(pos + 1, deck), 450);
		}
		else
		{
			fail(
				{ picked: choice.letter, correct: current.letter, wrong: true },
				errors + 1
			);
		}
	}

	// Countdown timer: 10 seconds per letter. Reaching 0 counts as a wrong
	// guess. Runs only while a fresh question is on screen (not during the
	// reveal, start, game-over or win screens).
	useEffect(() => {
		if (status !== "playing" || reveal)
		{
			return undefined;
		}
		setTimeLeft(TIME_LIMIT);
		const deadline = Date.now() + TIME_LIMIT * 1000;
		const id = setInterval(() => {
			const remaining = deadline - Date.now();
			if (remaining > 0)
			{
				setTimeLeft(remaining / 1000);
				return;
			}
			clearInterval(id);
			if (answered.current)
			{
				return;
			}
			answered.current = true;
			setTimeLeft(0);
			const current = consonants[deck[pos]];
			fail(
				{ picked: null, correct: current.letter, wrong: true, timedOut: true },
				errors + 1
			);
		}, 100);
		return () => clearInterval(id);
	}, [status, pos, reveal, deck, errors]);

	if (status === "idle")
	{
		return (
			<div className="quiz-view">
				<div className="game-card">
					<h2 className="game-title">Consonant Quiz</h2>
					<p className="game-lead">
						A Thai consonant appears with three sounds — tap the one that
						matches. Three wrong answers ends the game.
					</p>
					<button type="button" className="game-btn" onClick={start}>
						Play
					</button>
				</div>
			</div>
		);
	}

	if (status === "over")
	{
		return (
			<div className="quiz-view">
				<div className="game-card">
					<h2 className="game-title">Game over</h2>
					<p className="game-final">Score {score}</p>
					<p className="quiz-again">Play again?</p>
					<div className="quiz-yesno">
						<button type="button" className="game-btn" onClick={start}>
							Yes
						</button>
						<button
							type="button"
							className="game-btn ghost"
							onClick={() => onNavigate("home")}
						>
							No
						</button>
					</div>
				</div>
			</div>
		);
	}

	if (status === "won")
	{
		const perfect = errors === 0;
		return (
			<div className="quiz-view">
				<div className="game-card">
					<h2 className="game-title">Congratulations!</h2>
					<p className="game-lead">
						{perfect
							? "You have managed to recognise all Thai consonants."
							: `You completed it and only had ${errors} error${
									errors > 1 ? "s" : ""
							  }.`}
					</p>
					<div className="quiz-yesno">
						<button type="button" className="game-btn" onClick={start}>
							Play again
						</button>
						<button
							type="button"
							className="game-btn ghost"
							onClick={() => onNavigate("home")}
						>
							Home
						</button>
					</div>
				</div>
			</div>
		);
	}

	const current = consonants[deck[pos]];

	return (
		<div className="quiz-view playing">
			<div className="quiz-hud">
				<div className="hud-cell">
					<span className="hud-label">Score</span>
					<span className="hud-value">{score}</span>
				</div>
				<div className="quiz-errors">
					{[0, 1, 2].map((i) => (
						<span key={i} className={i < errors ? "err-dot on" : "err-dot"}></span>
					))}
				</div>
				<div className="hud-cell hud-right">
					<span className="hud-label">Letter</span>
					<span className="hud-value">
						{pos + 1}/{deck.length}
					</span>
				</div>
			</div>

			<div className="quiz-timer">
				<span className="quiz-timer-num">
					{Math.max(0, Math.ceil(timeLeft))}
				</span>
				<div className="quiz-timer-bar">
					<div
						className={`quiz-timer-fill${timeLeft <= 3 ? " low" : ""}`}
						style={{ width: `${(Math.max(0, timeLeft) / TIME_LIMIT) * 100}%` }}
					></div>
				</div>
			</div>

			<div className="quiz-main">
				<div className="quiz-consonant">{current.letter}</div>
				<div className="quiz-choices">
					{choices.map((c) => {
						let cls = "quiz-choice";
						if (reveal)
						{
							if (c.letter === reveal.correct)
							{
								cls += " correct";
							}
							else if (c.letter === reveal.picked)
							{
								cls += " wrong";
							}
						}
						return (
							<button
								key={c.letter}
								type="button"
								className={cls}
								disabled={Boolean(reveal)}
								onClick={() => pick(c)}
							>
								{c.phonetic}
							</button>
						);
					})}
				</div>
				<div className={`quiz-feedback${reveal ? (reveal.wrong ? " wrong" : " correct") : ""}`}>
					{reveal
						? reveal.timedOut
							? "Time's up!"
							: reveal.wrong
								? "Wrong choice"
								: "Correct"
						: ""}
				</div>
			</div>
		</div>
	);
}

export default ConsonantQuiz;
