import months from "./months";
import { speak, speechSupported } from "./speech";

// Maps a month's day-count to the Thai naming rule it comes from. The suffix
// of the full name determines the length, so the stripe/badge doubles as a
// spelling cue: -คม → 31, -ยน → 30, -พันธ์ → 28.
function dayClass(days)
{
	if (days === 31)
	{
		return "days-31";
	}
	if (days === 30)
	{
		return "days-30";
	}
	return "days-28";
}

// The 12 Thai months. Tapping a row speaks the full Thai name. The coloured
// left stripe + legend encode the day-length rule (see months.js).
function MonthsTable()
{
	return (
		<div className="table-view">
			<h2 className="table-title">Thai Months <span className="table-title-thai">เดือน</span></h2>

			<div className="month-legend">
				<span className="month-legend-item"><span className="month-dot days-31" />–คม = 31 days</span>
				<span className="month-legend-item"><span className="month-dot days-30" />–ยน = 30 days</span>
				<span className="month-legend-item"><span className="month-dot days-28" />–พันธ์ = 28 days</span>
			</div>

			<div className="table-scroll">
				<table className="char-table months-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Thai</th>
							<th>Month</th>
							<th>Short</th>
							<th>Sound</th>
						</tr>
					</thead>
					<tbody>
						{months.map((m) => (
							<tr
								key={m.n}
								onClick={speechSupported ? () => speak(m.thai) : undefined}
								title={speechSupported ? "Tap to hear" : undefined}
							>
								<td className="cell-number">{m.n}</td>
								<td className={`cell-letter month-stripe ${dayClass(m.days)}`}>{m.thai}</td>
								<td className="cell-name">{m.english}</td>
								<td><span className="cell-short-pill">{m.short}</span></td>
								<td className="cell-phonetic">{m.phonetic}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default MonthsTable;
