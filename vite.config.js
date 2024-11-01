import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: process.env.PORT || 3000, // Usa el puerto definido en process.env.PORT o 3000 como respaldo
  },
})