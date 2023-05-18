import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-portofolio",
  plugins: [react()],
  server: {
    port: 8001,
  },
})
