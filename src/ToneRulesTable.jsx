import {
	classes,
	classLabels,
	classThai,
	lettersByClass,
	syllableColumns,
	markColumns,
	toneExamples,
	columnTone,
} from "./toneRules";

// One detailed tone table. With `withExamples`, each cell also shows a real
// example word; otherwise it shows the resulting tone only.
function ToneTable({ withExamples })
{
	const columns = [...syllableColumns, ...markColumns];
	return (
		<div className="table-scroll">
			<table className="char-table tone-matrix">
				<thead>
					<tr>
						<th rowSpan={2}>Class</th>
						<th colSpan={3}>Long vowel</th>
						<th colSpan={3}>Short vowel</th>
						<th colSpan={4}>Tone mark</th>
					</tr>
					<tr>
						{syllableColumns.map((c) => (
							<th key={c.key}>{c.label}</th>
						))}
						{markColumns.map((c) => (
							<th key={c.key}>
								{c.glyph} {c.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{classes.map((cls) => (
						<tr key={cls}>
							<td>
								<span className={`class-badge ${cls}`}>
									{classLabels[cls]}
								</span>
							</td>
							{columns.map((col) => {
								const tone = columnTone(cls, col);
								const example = toneExamples[cls][col.key];
								if (withExamples)
								{
									return (
										<td key={col.key}>
											{example ? (
												<>
													<span className="tone-ex">{example}</span>
													<span className="tone-name">{tone}</span>
												</>
											) : (
												"—"
											)}
										</td>
									);
								}
								return <td key={col.key}>{tone || "—"}</td>;
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function ToneRulesTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Tone Rules</h2>
			<p className="tone-intro">
				The tone comes from the consonant class, the syllable, and any tone
				mark. A syllable is “live” when it ends in a long vowel or a sonorant
				(น ง ม ย ว), and “dead” when it ends in a short vowel or a stop
				(ก ด บ = k, t, p).
			</p>

			<h3 className="tone-subhead">Resulting tone</h3>
			<ToneTable withExamples={false} />

			<h3 className="tone-subhead">With example words</h3>
			<ToneTable withExamples={true} />

			<p className="tone-note">
				Mai tri อ๊ and mai chattawa อ๋ are only used with middle-class
				consonants. Table after Ratraykha Ritthisorn (2002).
			</p>

			<h3 className="tone-subhead">Consonant classes</h3>
			<div className="class-groups">
				{classes.map((cls) => (
					<div key={cls} className="class-group">
						<div className="class-group-head">
							<span className={`class-badge ${cls}`}>{classLabels[cls]}</span>
							<span className="class-thai">{classThai[cls]}</span>
						</div>
						<div className="class-letters">
							{lettersByClass(cls).join(" ")}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ToneRulesTable;
