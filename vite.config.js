import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Absolute base: the app now uses real nested URLs (e.g.
// /about-thailand/history/sukhothai-kingdom) and is prerendered per route, so
// asset references must resolve from the domain root, not relative to the
// current path. (This drops compatibility with a /thai_alphabet/ GitHub Pages
// subpath, which is not used for the learnthai.io deploy.)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
