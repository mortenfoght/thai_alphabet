import { useState } from "react";
import stories, { levels } from "./stories";
import { speak, speechSupported } from "./speech";

// Reading practice: Short Stories -> level -> story. Stories live in
// stories.js; empty levels show a placeholder until stories are added.
function ShortStories()
{
	const [levelId, setLevelId] = useState(null);
	const [storyIndex, setStoryIndex] = useState(null);
	const [showTranslation, setShowTranslation] = useState(false);

	function openLevel(id)
	{
		setLevelId(id);
		setStoryIndex(null);
		setShowTranslation(false);
	}

	function openStory(index)
	{
		setStoryIndex(index);
		setShowTranslation(false);
	}

	if (levelId === null)
	{
		return (
			<div className="stories-view">
				<h2 className="table-title">Short Stories</h2>
				<p className="tone-intro">
					Read Thai at your level. Pick a level to see its stories.
				</p>
				<div className="story-cards">
					{levels.map((lv) => (
						<button
							key={lv.id}
							type="button"
							className="story-card"
							onClick={() => openLevel(lv.id)}
						>
							<span>
								<span className="story-card-title">{lv.label}</span>
								<span className="story-card-sub">
									{stories[lv.id].length === 0
										? "No stories yet"
										: `${stories[lv.id].length} ${
												stories[lv.id].length === 1 ? "story" : "stories"
										  }`}
								</span>
							</span>
							<span className="story-arrow" aria-hidden="true">›</span>
						</button>
					))}
				</div>
			</div>
		);
	}

	const level = levels.find((lv) => lv.id === levelId);
	const list = stories[levelId];

	if (storyIndex === null)
	{
		return (
			<div className="stories-view">
				<button
					type="button"
					className="story-back"
					onClick={() => setLevelId(null)}
				>
					‹ Short Stories
				</button>
				<h2 className="table-title">{level.label}</h2>
				{list.length === 0 ? (
					<p className="story-empty">
						No stories here yet — they are on the way.
					</p>
				) : (
					<div className="story-cards">
						{list.map((s, i) => (
							<button
								key={s.id}
								type="button"
								className="story-card"
								onClick={() => openStory(i)}
							>
								<span>
									<span className="story-card-title">{s.title}</span>
									<span className="story-card-sub">{s.titleEn}</span>
								</span>
								<span className="story-arrow" aria-hidden="true">›</span>
							</button>
						))}
					</div>
				)}
			</div>
		);
	}

	const story = list[storyIndex];

	return (
		<div className="stories-view">
			<button
				type="button"
				className="story-back"
				onClick={() => setStoryIndex(null)}
			>
				‹ {level.label}
			</button>
			<h2 className="story-title">{story.title}</h2>
			<div className="story-text">
				{story.thai.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
			<div className="story-actions">
				<button
					type="button"
					className="game-btn"
					onClick={() => setShowTranslation((s) => !s)}
				>
					{showTranslation ? "Hide translation" : "Show translation"}
				</button>
				<button
					type="button"
					className="game-btn ghost"
					disabled={!speechSupported}
					onClick={() => speak([story.title, ...story.thai].join(" "))}
					title={
						speechSupported
							? "Hear the story read aloud"
							: "Speech is not supported in this browser"
					}
				>
					Hear
				</button>
			</div>
			{showTranslation ? (
				<div className="story-translation">
					<h3 className="story-translation-head">English translation</h3>
					{story.english.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
			) : null}
		</div>
	);
}

export default ShortStories;
