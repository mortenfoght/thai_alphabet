import {
	toneMatrix,
	classes,
	classLabels,
	classThai,
	lettersByClass,
} from "./toneRules";

function cell(value)
{
	return value || "—";
}

// Static reference: how the tone is decided, plus which letters are in each
// class. All data comes from toneRules.js / consonants.js.
function ToneRulesTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Tone Rules</h2>
			<p className="tone-intro">
				The tone comes from the consonant class, the syllable type, and the
				tone mark.
			</p>

			<div className="table-scroll">
				<table className="char-table tone-matrix">
					<thead>
						<tr>
							<th>Class</th>
							<th>Live</th>
							<th>Dead · short</th>
							<th>Dead · long</th>
							<th>Mai ek อ่</th>
							<th>Mai tho อ้</th>
							<th>Mai tri อ๊</th>
							<th>Mai chattawa อ๋</th>
						</tr>
					</thead>
					<tbody>
						{toneMatrix.map((row) => (
							<tr key={row.cls}>
								<td>
									<span className={`class-badge ${row.cls}`}>
										{classLabels[row.cls]}
									</span>
								</td>
								<td>{cell(row.live)}</td>
								<td>{cell(row.deadShort)}</td>
								<td>{cell(row.deadLong)}</td>
								<td>{cell(row.ek)}</td>
								<td>{cell(row.tho)}</td>
								<td>{cell(row.tri)}</td>
								<td>{cell(row.chattawa)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<p className="tone-note">
				A syllable is “dead” when it ends in a short vowel or a stop sound
				(p, t, k); otherwise it is “live”. Mai tri อ๊ and mai chattawa อ๋ are
				only used with middle-class consonants.
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
