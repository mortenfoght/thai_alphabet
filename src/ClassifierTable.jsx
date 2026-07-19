import classifiers from "./classifiers";
import { speak, speechSupported } from "./speech";

// classifiers.js is stored in a loosely category-ordered list (people, then
// objects, then general catch-alls), so the table renders it in place.
// Tapping a row speaks the classifier itself.
function ClassifierTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Thai Classifiers</h2>
			<div className="table-scroll">
				<table className="char-table">
					<thead>
						<tr>
							<th>Classifier</th>
							<th>Used for</th>
							<th>Example</th>
							<th>Phonetic</th>
						</tr>
					</thead>
					<tbody>
						{classifiers.map((c) => (
							<tr
								key={c.classifier}
								onClick={speechSupported ? () => speak(c.classifier) : undefined}
								title={speechSupported ? "Tap to hear" : undefined}
							>
								<td className="cell-letter">{c.classifier}</td>
								<td className="cell-name">{c.meaning}</td>
								<td className="cell-name">
									{c.example.word}{" "}
									<span className="cell-phonetic">({c.example.gloss})</span>
								</td>
								<td className="cell-phonetic">{c.phonetic}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ClassifierTable;
