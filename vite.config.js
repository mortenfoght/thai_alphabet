import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
// Relative base so the build works both at a domain root (Cloudflare Pages)
// and under the /thai_alphabet/ subpath on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react(), cloudflare()],
})