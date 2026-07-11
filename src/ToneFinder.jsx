import { useState } from "react";
import { resolveTone, toneThai } from "./toneRules";

const classOptions = [
	{ id: "middle", label: "Middle" },
	{ id: "high", label: "High" },
	{ id: "low", label: "Low" },
];

const syllableOptions = [
	{ id: "live", label: "Live" },
	{ id: "deadShort", label: "Dead · short" },
	{ id: "deadLong", label: "Dead · long" },
];

const markOptions = [
	{ id: "none", label: "None" },
	{ id: "ek", label: "Mai ek", glyph: "อ่" },
	{ id: "tho", label: "Mai tho", glyph: "อ้" },
	{ id: "tri", label: "Mai tri", glyph: "อ๊" },
	{ id: "chattawa", label: "Mai chattawa", glyph: "อ๋" },
];

function Segmented({ options, value, onChange, disabled })
{
	return (
		<div className="seg">
			{options.map((o) => (
				<button
					key={o.id}
					type="button"
					className={`seg-btn${value === o.id ? " active" : ""}`}
					disabled={disabled}
					onClick={() => onChange(o.id)}
				>
					{o.glyph ? <span className="seg-glyph">{o.glyph}</span> : null}
					{o.label}
				</button>
			))}
		</div>
	);
}

function ToneFinder()
{
	const [cls, setCls] = useState("middle");
	const [syllable, setSyllable] = useState("live");
	const [mark, setMark] = useState("none");

	const tone = resolveTone(cls, syllable, mark);
	const markActive = mark !== "none";

	return (
		<div className="finder-view">
			<h2 className="table-title">Tone Finder</h2>

			<div className="finder-group">
				<p className="finder-label">Consonant class</p>
				<Segmented options={classOptions} value={cls} onChange={setCls} />
			</div>

			<div className="finder-group">
				<p className="finder-label">Syllable</p>
				<Segmented
					options={syllableOptions}
					value={syllable}
					onChange={setSyllable}
					disabled={markActive}
				/>
				{markActive ? (
					<p className="finder-hint">Ignored when a tone mark is set.</p>
				) : null}
			</div>

			<div className="finder-group">
				<p className="finder-label">Tone mark</p>
				<Segmented options={markOptions} value={mark} onChange={setMark} />
			</div>

			<div className="finder-result">
				<p className="finder-result-label">Resulting tone</p>
				{tone ? (
					<>
						<div className="finder-tone">{tone}</div>
						<div className="finder-tone-thai">เสียง{toneThai[tone]}</div>
					</>
				) : (
					<div className="finder-tone none">Not used in Thai</div>
				)}
			</div>
		</div>
	);
}

export default ToneFinder;
