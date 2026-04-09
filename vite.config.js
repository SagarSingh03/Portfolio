import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/Portfolio-SagarSingh03/",   // <-- apne repo ka naam
=======
  base: "/Portfolio-SagarSingh03/", // Must match your repo name exactly (case-sensitive)
  build: {
    outDir: 'dist',
  },
>>>>>>> b6a34ea (Commit)
})
