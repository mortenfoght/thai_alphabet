import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prerendered pages ship server-rendered markup inside #root, so hydrate them;
// pages served via the SPA fallback have an empty #root, so mount fresh.
const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
