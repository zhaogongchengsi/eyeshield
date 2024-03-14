import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import pages from 'vite-plugin-pages'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    pages(),
  ],
  server: {
    port: 5678,
  },
  resolve: {
    alias: {
      '~/': join(__dirname, 'src/'),
    },
  },
  build: {
    outDir: 'electron/renderer'
  }
});
