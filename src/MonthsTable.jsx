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

// A small round speaker button for a single row. Stops propagation so it does
// not also trigger the row's tap-to-hear (which would speak twice).
function HearButton({ label, onHear })
{
	return (
		<button
			type="button"
			className="hear-btn"
			onClick={(e) =>
			{
				e.stopPropagation();
				onHear();
			}}
			disabled={!speechSupported}
			aria-label={
				speechSupported
					? `Hear ${label} pronounced`
					: "Speech is not supported in this browser"
			}
			title={speechSupported ? "Hear it pronounced" : "Speech is not supported in this browser"}
		>
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path
					fill="currentColor"
					d="M11 5 6.5 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.5L11 19a1 1 0 0 0 1.7-.7V5.7A1 1 0 0 0 11 5z"
				/>
				<path
					fill="none"
					stroke="currentColor"
					strokeWidth="1.7"
					strokeLinecap="round"
					d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"
				/>
			</svg>
		</button>
	);
}

// The 12 Thai months. Each row has a visible Hear button; tapping the row also
// speaks the full Thai name. The coloured left stripe + legend encode the
// day-length rule (see months.js).
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
							<th>Hear</th>
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
								<td className="cell-hear">
									<HearButton label={m.english} onHear={() => speak(m.thai)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default MonthsTable;
