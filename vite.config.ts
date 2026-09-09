import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages, use repository subpath unless custom domain or VITE_BASE_PATH is provided
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/'),
  plugins: [
    react(),
    tailwindcss(),
  ],
})
