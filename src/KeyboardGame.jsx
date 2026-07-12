import { memo, useCallback, useEffect, useRef, useState } from "react";
import consonants from "./consonants";

// 42 playable consonants (drop the two obsolete letters ฃ and ฅ).
const letters = consonants
	.filter((c) => c.letter !== "ฃ" && c.letter !== "ฅ")
	.map((c) => c.letter);
const letterSet = new Set(letters);

// Thai (Kedmanee) keyboard laid out on the QWERTY rows. Each key is
// [unshifted, shifted] exactly as on a physical Thai keyboard, so the on-screen
// keys sit where the real keys are. All 42 consonants appear across the layers.
const KEY_ROWS = [
	[["ๅ", "+"], ["/", "๑"], ["-", "๒"], ["ภ", "๓"], ["ถ", "๔"], ["ุ", "ู"], ["ึ", "฿"], ["ค", "๕"], ["ต", "๖"], ["จ", "๗"], ["ข", "๘"], ["ช", "๙"]],
	[["ๆ", "๐"], ["ไ", "\""], ["ำ", "ฎ"], ["พ", "ฑ"], ["ะ", "ธ"], ["ั", "ํ"], ["ี", "๊"], ["ร", "ณ"], ["น", "ฯ"], ["ย", "ญ"], ["บ", "ฐ"], ["ล", ","]],
	[["ฟ", "ฤ"], ["ห", "ฆ"], ["ก", "ฏ"], ["ด", "โ"], ["เ", "ฌ"], ["้", "็"], ["่", "๋"], ["า", "ษ"], ["ส", "ศ"], ["ว", "ซ"], ["ง", "."]],
	[["ผ", "("], ["ป", ")"], ["แ", "ฉ"], ["อ", "ฮ"], ["ิ", "ฺ"], ["ื", "์"], ["ท", "?"], ["ม", "ฒ"], ["ใ", "ฬ"], ["ฝ", "ฦ"]],
];

const MISS_LINE = 90; // percent of the play-area height
const HIGH_KEY = "thaiKbGameHigh";

// Difficulty ramps over the first 90 seconds of a run.
function rampT(elapsed)
{
	return Math.min(elapsed, 90) / 90;
}
function fallSpeed(elapsed)
{
	const seconds = 6 - rampT(elapsed) * (6 - 1.6);
	return MISS_LINE / seconds; // percent per second
}
function spawnInterval(elapsed)
{
	return 2.6 - rampT(elapsed) * (2.6 - 0.9); // seconds between spawns
}

function Heart({ on })
{
	return (
		<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"
			fill={on ? "#f87171" : "none"}
			stroke={on ? "#f87171" : "#475569"} strokeWidth="2">
			<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
		</svg>
	);
}

// The on-screen keyboard is memoised so it does not re-render every frame.
// Each key passes the consonant character(s) it carries; tapping clears a
// falling tile matching any of them.
const Keyboard = memo(function Keyboard({ onKey })
{
	return (
		<div className="kb">
			{KEY_ROWS.map((row, ri) => (
				<div className="kb-row" key={ri}>
					{row.map(([base, shift], ci) => {
						const candidates = [base, shift].filter((c) => letterSet.has(c));
						return (
							<button
								key={ci}
								type="button"
								className="kb-key"
								onClick={() => onKey(candidates)}
							>
								<span className={letterSet.has(base) ? "kb-b" : "kb-b dim"}>
									{base}
								</span>
								<span className={letterSet.has(shift) ? "kb-s" : "kb-s dim"}>
									{shift}
								</span>
							</button>
						);
					})}
				</div>
			))}
		</div>
	);
});

function KeyboardGame()
{
	const [status, setStatus] = useState("idle");
	const [score, setScore] = useState(0);
	const [lives, setLives] = useState(3);
	const [tiles, setTiles] = useState([]);
	const [wrong, setWrong] = useState(false);
	const [highScore, setHighScore] = useState(() => {
		if (typeof localStorage === "undefined")
		{
			return 0;
		}
		return Number(localStorage.getItem(HIGH_KEY)) || 0;
	});

	const tilesRef = useRef([]);
	const scoreRef = useRef(0);
	const livesRef = useRef(3);
	const elapsedRef = useRef(0);
	const spawnRef = useRef(0);
	const lastRef = useRef(0);
	const idRef = useRef(0);
	const rafRef = useRef(0);
	const highRef = useRef(highScore);
	const wrongTimer = useRef(0);

	const endGame = useCallback(() => {
		cancelAnimationFrame(rafRef.current);
		setStatus("over");
		if (scoreRef.current > highRef.current)
		{
			highRef.current = scoreRef.current;
			setHighScore(scoreRef.current);
			try
			{
				localStorage.setItem(HIGH_KEY, String(scoreRef.current));
			}
			catch
			{
				// ignore storage errors (private mode, etc.)
			}
		}
	}, []);

	const startGame = useCallback(() => {
		tilesRef.current = [];
		scoreRef.current = 0;
		livesRef.current = 3;
		elapsedRef.current = 0;
		spawnRef.current = 0;
		idRef.current = 0;
		setTiles([]);
		setScore(0);
		setLives(3);
		setStatus("playing");
	}, []);

	const clearMatching = useCallback((candidates) => {
		if (candidates.length === 0)
		{
			return;
		}
		const matches = tilesRef.current.filter((t) =>
			candidates.includes(t.letter)
		);
		if (matches.length === 0)
		{
			setWrong(true);
			clearTimeout(wrongTimer.current);
			wrongTimer.current = setTimeout(() => setWrong(false), 200);
			return;
		}
		// Clear the lowest matching tile (the most urgent one).
		let target = matches[0];
		for (const t of matches)
		{
			if (t.y > target.y)
			{
				target = t;
			}
		}
		tilesRef.current = tilesRef.current.filter((t) => t.id !== target.id);
		setTiles(tilesRef.current);
		scoreRef.current += 1;
		setScore(scoreRef.current);
	}, []);

	// Main game loop.
	useEffect(() => {
		if (status !== "playing")
		{
			return undefined;
		}
		lastRef.current = performance.now();
		const loop = (now) => {
			const dt = Math.min((now - lastRef.current) / 1000, 0.05);
			lastRef.current = now;
			elapsedRef.current += dt;
			const speed = fallSpeed(elapsedRef.current);
			let missed = 0;
			const next = [];
			for (const t of tilesRef.current)
			{
				const y = t.y + speed * dt;
				if (y >= MISS_LINE)
				{
					missed += 1;
				}
				else
				{
					next.push({ ...t, y });
				}
			}
			spawnRef.current += dt;
			if (spawnRef.current >= spawnInterval(elapsedRef.current))
			{
				spawnRef.current = 0;
				idRef.current += 1;
				next.push({
					id: idRef.current,
					letter: letters[Math.floor(Math.random() * letters.length)],
					x: 4 + Math.random() * 76,
					y: 0,
				});
			}
			tilesRef.current = next;
			setTiles(next);
			if (missed > 0)
			{
				livesRef.current -= missed;
				setLives(Math.max(0, livesRef.current));
				if (livesRef.current <= 0)
				{
					endGame();
					return;
				}
			}
			rafRef.current = requestAnimationFrame(loop);
		};
		rafRef.current = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(rafRef.current);
	}, [status, endGame]);

	// Physical keyboard: on a Thai layout, pressing the ก key sends "ก".
	useEffect(() => {
		if (status !== "playing")
		{
			return undefined;
		}
		const onKey = (e) => {
			if (e.repeat)
			{
				return;
			}
			if (letterSet.has(e.key))
			{
				e.preventDefault();
				clearMatching([e.key]);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [status, clearMatching]);

	useEffect(() => () => clearTimeout(wrongTimer.current), []);

	if (status !== "playing")
	{
		const over = status === "over";
		return (
			<div className="game-view">
				<div className="game-card">
					<h2 className="game-title">
						{over ? "Game over" : "Keyboard Game"}
					</h2>
					{over ? (
						<p className="game-final">Score {score}</p>
					) : (
						<p className="game-lead">
							Thai consonants fall — clear each one by pressing its key,
							or tapping the keyboard, before it reaches the line. You get
							three lives.
						</p>
					)}
					<p className="game-best">Best: {Math.max(highScore, score)}</p>
					<button type="button" className="game-btn" onClick={startGame}>
						{over ? "Play again" : "Play"}
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="game-view playing">
			<div className="game-hud">
				<div className="hud-cell">
					<span className="hud-label">Score</span>
					<span className="hud-value">{score}</span>
				</div>
				<div className="hud-lives">
					{[0, 1, 2].map((i) => (
						<Heart key={i} on={i < lives} />
					))}
				</div>
				<div className="hud-cell hud-right">
					<span className="hud-label">Best</span>
					<span className="hud-value">{Math.max(highScore, score)}</span>
				</div>
			</div>

			<div className={`play-area${wrong ? " wrong" : ""}`}>
				{tiles.map((t) => (
					<div
						key={t.id}
						className="fall-tile"
						style={{ left: `${t.x}%`, top: `${t.y}%` }}
					>
						{t.letter}
					</div>
				))}
				<div className="miss-line" style={{ top: `${MISS_LINE}%` }}></div>
			</div>

			<Keyboard onKey={clearMatching} />
		</div>
	);
}

export default KeyboardGame;
