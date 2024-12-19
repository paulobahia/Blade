import path, { resolve } from "path"
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
            src: '/icons/blade.jpg',
            sizes: '192x192',
            type: 'image/jpg'
          },
          {
            src: '/icons/blade.jpg',
            sizes: '512x512',
            type: 'image/jpg'
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