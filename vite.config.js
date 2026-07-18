import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base so the build works both at a domain root (Cloudflare Pages)
// and under the /thai_alphabet/ subpath on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
})
