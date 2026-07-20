// A small, dependency-free markdown renderer scoped to the exact subset the
// Thailand articles use: ## / ### headings, single-line paragraphs, unordered
// lists, and inline **bold**, *italic*, and [label](url) links. It is not a
// general-purpose markdown engine — it deliberately trades completeness for a
// tiny, auditable footprint and full control over link safety (every link is
// forced to open in a new tab with rel="noopener noreferrer").

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

// Tokenise a line into text runs and links. Link URLs may themselves contain
// parentheses (common in Wikipedia URLs), so the closing paren is found by
// tracking paren depth rather than a naive regex.
function renderInline(text, keyBase)
{
	const nodes = [];
	let buffer = "";
	let i = 0;
	let counter = 0;

	const flush = () =>
	{
		if (buffer)
		{
			nodes.push(...formatEmphasis(buffer, `${keyBase}-t${counter++}`));
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
function Markdown({ text })
{
	if (!text)
	{
		return null;
	}

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
			blocks.push(<h3 key={key} className="md-h3">{renderInline(line.slice(4), `h${key}`)}</h3>);
			key++;
			i++;
			continue;
		}

		if (line.startsWith("## "))
		{
			blocks.push(<h2 key={key} className="md-h2">{renderInline(line.slice(3), `h${key}`)}</h2>);
			key++;
			i++;
			continue;
		}

		if (line.startsWith("- "))
		{
			const items = [];
			while (i < lines.length && lines[i].startsWith("- "))
			{
				items.push(<li key={items.length}>{renderInline(lines[i].slice(2), `li${key}-${items.length}`)}</li>);
				i++;
			}
			blocks.push(<ul key={key} className="md-list">{items}</ul>);
			key++;
			continue;
		}

		const isRelated = /^(\*\*)?Related Reading/.test(line);
		blocks.push(
			<p key={key} className={isRelated ? "md-p md-related" : "md-p"}>
				{renderInline(line, `p${key}`)}
			</p>
		);
		key++;
		i++;
	}

	return <>{blocks}</>;
}

export default Markdown;
