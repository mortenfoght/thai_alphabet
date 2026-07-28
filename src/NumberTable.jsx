import numbers, { formatArabic } from "./numbers";
import HearButton from "./HearButton";
import { speak, speechSupported } from "./speech";

// numbers.js is stored in ascending order, so the table renders it in place.
// Tapping a row speaks the Thai word.
function NumberTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Thai Numbers</h2>
			<div className="table-scroll">
				<table className="char-table">
					<thead>
						<tr>
							<th>Number</th>
							<th>Thai</th>
							<th>Word</th>
							<th>Phonetic</th>
							<th>Hear</th>
						</tr>
					</thead>
					<tbody>
						{numbers.map((n) => (
							<tr
								key={n.value}
								onClick={speechSupported ? () => speak(n.word) : undefined}
								title={speechSupported ? "Tap to hear" : undefined}
							>
								<td className="cell-number">{formatArabic(n.value)}</td>
								<td className="cell-letter">{n.thai}</td>
								<td className="cell-name">{n.word}</td>
								<td className="cell-phonetic">{n.phonetic}</td>
								<td className="cell-hear">
									<HearButton label={`the number ${formatArabic(n.value)}`} onHear={() => speak(n.word)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default NumberTable;
