import { speechSupported } from "./speech";

// A small round speaker button used inside table rows. The row itself is often
// also tap-to-hear, so this stops propagation to avoid speaking twice. `label`
// is folded into the accessible name ("Hear January pronounced"); `onHear` does
// the actual speaking. Disabled when the browser has no speech synthesis.
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

export default HearButton;
