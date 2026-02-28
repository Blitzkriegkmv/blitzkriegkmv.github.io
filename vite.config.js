import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is set by the CI workflow depending on the repo.
// For blitzkriegkmv.github.io (user page) → '/'
// For forks (project page)                → '/blitzkriegkmv.github.io/'
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
