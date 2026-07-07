import consonants from "./consonants";
import { speak, speechSupported } from "./speech";

// consonants.js is already stored in Thai alphabetic order (ก … ฮ), so the
// table simply renders them in place.
function ConsonantTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Thai Consonants</h2>
			<table className="char-table">
				<thead>
					<tr>
						<th>Letter</th>
						<th>Name</th>
						<th>Phonetic</th>
					</tr>
				</thead>
				<tbody>
					{consonants.map((c) => (
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
	);
}

export default ConsonantTable;
