import { useState } from "react";
import consonants from "./consonants";
import { classes, classLabels, classThai } from "./toneRules";
import { speak, speechSupported } from "./speech";

// consonants.js is already stored in Thai alphabetic order (ก … ฮ); within
// each class group below, rows keep that same relative order.
function ConsonantTable()
{
	const [query, setQuery] = useState("");
	const q = query.trim().toLowerCase();

	const filtered = q
		? consonants.filter(
				(c) =>
					c.letter.includes(query.trim()) ||
					c.name.toLowerCase().includes(q) ||
					c.phonetic.toLowerCase().includes(q)
			)
		: consonants;

	return (
		<div className="table-view">
			<h2 className="table-title">Thai Consonants</h2>
			<input
				type="text"
				className="table-search"
				placeholder="Search by letter, name or sound…"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<div className="class-groups">
				{classes.map((cls) => {
					const rows = filtered.filter((c) => c.class === cls);
					if (rows.length === 0)
					{
						return null;
					}
					return (
						<div key={cls} className="class-group">
							<div className="class-group-head">
								<span className={`class-badge ${cls}`}>{classLabels[cls]}</span>
								<span className="class-thai">{classThai[cls]}</span>
							</div>
							<div className="table-scroll">
								<table className="char-table">
									<thead>
										<tr>
											<th>Letter</th>
											<th>Name</th>
											<th>Phonetic</th>
										</tr>
									</thead>
									<tbody>
										{rows.map((c) => (
											<tr
												key={c.letter}
												onClick={speechSupported ? () => speak(c.name) : undefined}
												title={speechSupported ? "Tap to hear" : undefined}
											>
												<td className="cell-letter">{c.letter}</td>
												<td className="cell-name">{c.name}</td>
												<td className="cell-phonetic">{c.phonetic}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					);
				})}
			</div>
			{filtered.length === 0 && (
				<p className="table-empty">No consonants match &ldquo;{query}&rdquo;.</p>
			)}
		</div>
	);
}

export default ConsonantTable;
