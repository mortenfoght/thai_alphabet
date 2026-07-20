// Server entry used only at build time by scripts/prerender.mjs. It renders the
// full app for a given URL path to a static HTML string, and re-exports the
// route list + per-view SEO so the prerender script can drive everything from
// this one bundle (which Vite's SSR build processes, resolving import.meta.glob
// and ?raw markdown imports).

import { renderToString } from "react-dom/server";
import App from "./App";
import { pathToViewId, seoForView, prerenderPaths, SITE_ORIGIN, SITE_NAME } from "./routes";

export function render(path)
{
	return renderToString(<App initialPath={path} />);
}

export function seoForPath(path)
{
	return seoForView(pathToViewId(path));
}

export { prerenderPaths, SITE_ORIGIN, SITE_NAME };
