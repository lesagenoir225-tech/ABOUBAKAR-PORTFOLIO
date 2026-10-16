import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Expose le serveur sur le réseau (test depuis un téléphone / un autre appareil)
    host: true,
    // Autorise les hôtes de prévisualisation (tunnels, sandbox, ngrok, ...)
    allowedHosts: true,
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
})
