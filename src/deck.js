// Fisher–Yates shuffle producing a full-coverage deck of the indices
// [0, length). When avoidFirst is a valid index, the first card is swapped away
// from it so a freshly reshuffled deck never repeats the card shown just before.
export function shuffledDeck(length, avoidFirst)
{
	const deck = Array.from({ length }, (_, i) => i);
	for (let i = deck.length - 1; i > 0; i--)
	{
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	if (deck.length > 1 && deck[0] === avoidFirst)
	{
		[deck[0], deck[1]] = [deck[1], deck[0]];
	}
	return deck;
}
