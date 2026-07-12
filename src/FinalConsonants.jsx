import finalSounds from "./finalSounds";
import { speak, speechSupported } from "./speech";

// The 8 final-consonant sound groups. Tapping a card speaks the example word.
function FinalConsonants()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Final Consonants</h2>
			<p className="tone-intro">
				At the end of a syllable, many consonants collapse into just eight
				sounds (มาตราตัวสะกด). Sonorant endings (ng, n, m, y, w) make a “live”
				syllable; stop endings (k, t, p) make a “dead” one.
			</p>
			<div className="finals-list">
				{finalSounds.map((f) => (
					<button
						key={f.sound}
						type="button"
						className="final-card"
						onClick={speechSupported ? () => speak(f.example.word) : undefined}
						title={speechSupported ? "Tap to hear the example" : undefined}
					>
						<div className="final-head">
							<span className="final-tile">{f.rep}</span>
							<div className="final-meta">
								<span className="final-sound">
									{f.sound} <span className="final-ipa">/{f.ipa}/</span>
								</span>
								<span className="final-maatra">{f.maatra}</span>
							</div>
							<span className={`end-badge ${f.type}`}>
								{f.type === "live" ? "Live" : "Dead"}
							</span>
						</div>
						<div className="final-consonants">{f.consonants.join(" ")}</div>
						<div className="final-example">
							{f.example.word} · {f.example.phonetic}
						</div>
					</button>
				))}
			</div>
		</div>
	);
}

export default FinalConsonants;
