import vowels from "./vowels";
import { speak, speechSupported } from "./speech";

// vowels.js is stored in the traditional teaching order, so the table renders
// them in place. Tapping a row speaks the vowel form (its sound).
function VowelTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Thai Vowels</h2>
			<table className="char-table">
				<thead>
					<tr>
						<th>Vowel</th>
						<th>Name</th>
						<th>Phonetic</th>
					</tr>
				</thead>
				<tbody>
					{vowels.map((v) => (
						<tr
							key={v.name}
							onClick={speechSupported ? () => speak(v.vowel) : undefined}
							title={speechSupported ? "Tap to hear" : undefined}
						>
							<td className="cell-letter">{v.vowel}</td>
							<td className="cell-name">{v.name}</td>
							<td className="cell-phonetic">{v.phonetic}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default VowelTable;
