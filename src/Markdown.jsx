// A small, dependency-free markdown renderer scoped to the exact subset the
// Thailand articles use: ## / ### headings, single-line paragraphs, unordered
// lists, and inline **bold**, *italic*, and [label](url) links. It is not a
// general-purpose markdown engine — it deliberately trades completeness for a
// tiny, auditable footprint and full control over link safety (every external
// link is forced to open in a new tab with rel="noopener noreferrer").
//
// When an `internalLinks` prop is supplied, plain paragraph/list text is also
// scanned for a curated set of cross-reference phrases (see internalLinks.js);
// the first occurrence of each target article in the body is turned into a real
// same-site <a href> (with client-side nav on click). Headings are never
// internally linked, and existing citation links are left untouched.

// Render **bold** and *italic* within a plain (link-free) text run.
function formatEmphasis(text, keyBase)
{
	const out = [];
	let counter = 0;
	const boldParts = text.split(/(\*\*[^*]+\*\*)/g);

	for (const part of boldParts)
	{
		if (!part)
		{
			continue;
		}
		if (/^\*\*[^*]+\*\*$/.test(part))
		{
			out.push(<strong key={`${keyBase}-b${counter++}`}>{part.slice(2, -2)}</strong>);
			continue;
		}

		const italicParts = part.split(/(\*[^*]+\*)/g);
		for (const piece of italicParts)
		{
			if (!piece)
			{
				continue;
			}
			if (/^\*[^*]+\*$/.test(piece))
			{
				out.push(<em key={`${keyBase}-i${counter++}`}>{piece.slice(1, -1)}</em>);
			}
			else
			{
				out.push(<span key={`${keyBase}-s${counter++}`}>{piece}</span>);
			}
		}
	}

	return out;
}

function isWordChar(ch)
{
	return ch !== "" && /[A-Za-z0-9]/.test(ch);
}

// Scan a plain text run for curated internal-link phrases, wrapping the first
// unlinked occurrence of each target as a same-site link. Non-matching spans
// are passed through formatEmphasis. `ctx.linked` (a Set of already-linked
// slugs) is mutated so each target is linked at most once per article.
function renderTextRun(text, ctx, keyBase)
{
	if (!ctx)
	{
		return formatEmphasis(text, keyBase);
	}

	const nodes = [];
	const lower = text.toLowerCase();
	let pos = 0;
	let counter = 0;

	while (pos < text.length)
	{
		let best = null;
		for (const { term, slug } of ctx.terms)
		{
			if (slug === ctx.currentSlug || ctx.linked.has(slug))
			{
				continue;
			}
			const idx = lower.indexOf(term.toLowerCase(), pos);
			if (idx === -1)
			{
				continue;
			}
			const before = idx === 0 ? "" : text[idx - 1];
			const after = idx + term.length >= text.length ? "" : text[idx + term.length];
			if (isWordChar(before) || isWordChar(after))
			{
				continue;
			}
			if (!best || idx < best.start || (idx === best.start && term.length > best.len))
			{
				best = { start: idx, len: term.length, slug };
			}
		}

		if (!best)
		{
			nodes.push(...formatEmphasis(text.slice(pos), `${keyBase}-e${counter++}`));
			break;
		}

		if (best.start > pos)
		{
			nodes.push(...formatEmphasis(text.slice(pos, best.start), `${keyBase}-e${counter++}`));
		}

		const label = text.slice(best.start, best.start + best.len);
		const slug = best.slug;
		ctx.linked.add(slug);
		nodes.push(
			<a
				key={`${keyBase}-il${counter++}`}
				className="md-link internal"
				href={ctx.hrefForSlug(slug)}
				onClick={(e) =>
				{
					e.preventDefault();
					ctx.onNavigate(ctx.viewIdForSlug(slug));
				}}
			>
				{label}
			</a>
		);
		pos = best.start + best.len;
	}

	return nodes;
}

// Tokenise a line into text runs and links. Link URLs may themselves contain
// parentheses (common in Wikipedia URLs), so the closing paren is found by
// tracking paren depth rather than a naive regex.
function renderInline(text, keyBase, ctx)
{
	const nodes = [];
	let buffer = "";
	let i = 0;
	let counter = 0;

	const flush = () =>
	{
		if (buffer)
		{
			nodes.push(...renderTextRun(buffer, ctx, `${keyBase}-t${counter++}`));
			buffer = "";
		}
	};

	while (i < text.length)
	{
		if (text[i] === "[")
		{
			const labelEnd = text.indexOf("]", i);
			if (labelEnd !== -1 && text[labelEnd + 1] === "(")
			{
				let j = labelEnd + 2;
				let depth = 1;
				let url = "";
				while (j < text.length)
				{
					const c = text[j];
					if (c === "(")
					{
						depth++;
					}
					else if (c === ")")
					{
						depth--;
						if (depth === 0)
						{
							break;
						}
					}
					url += c;
					j++;
				}

				if (depth === 0)
				{
					const label = text.slice(i + 1, labelEnd);
					flush();
					nodes.push(
						<a
							key={`${keyBase}-l${counter++}`}
							className="md-link"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{label}
						</a>
					);
					i = j + 1;
					continue;
				}
			}
		}

		buffer += text[i];
		i++;
	}

	flush();
	return nodes;
}

// Parse the body into block-level elements. Paragraphs in the source are single
// physical lines separated by blank lines, which keeps the block parser simple.
function Markdown({ text, internalLinks })
{
	if (!text)
	{
		return null;
	}

	// A fresh set of already-linked target slugs for this render pass, so each
	// cross-reference target is linked at most once per article.
	const ctx = internalLinks
		? { ...internalLinks, linked: new Set() }
		: null;

	const lines = text.replace(/\r\n/g, "\n").split("\n");
	const blocks = [];
	let key = 0;
	let i = 0;

	while (i < lines.length)
	{
		const line = lines[i];

		if (line.trim() === "")
		{
			i++;
			continue;
		}

		if (line.startsWith("### "))
		{
			blocks.push(<h3 key={key} className="md-h3">{renderInline(line.slice(4), `h${key}`, null)}</h3>);
			key++;
			i++;
			continue;
		}

		if (line.startsWith("## "))
		{
			blocks.push(<h2 key={key} className="md-h2">{renderInline(line.slice(3), `h${key}`, null)}</h2>);
			key++;
			i++;
			continue;
		}

		if (line.startsWith("- "))
		{
			const items = [];
			while (i < lines.length && lines[i].startsWith("- "))
			{
				items.push(<li key={items.length}>{renderInline(lines[i].slice(2), `li${key}-${items.length}`, ctx)}</li>);
				i++;
			}
			blocks.push(<ul key={key} className="md-list">{items}</ul>);
			key++;
			continue;
		}

		const isRelated = /^(\*\*)?Related Reading/.test(line);
		blocks.push(
			<p key={key} className={isRelated ? "md-p md-related" : "md-p"}>
				{renderInline(line, `p${key}`, ctx)}
			</p>
		);
		key++;
		i++;
	}

	return <>{blocks}</>;
}

export default Markdown;
