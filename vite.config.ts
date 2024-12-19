import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Blade',
        short_name: 'BLADE',
        description: 'BLADE',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/blade192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/blade512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        display: 'standalone',
        background_color: '#ffffff',
        orientation: 'portrait',
      }
    })
  ],
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})