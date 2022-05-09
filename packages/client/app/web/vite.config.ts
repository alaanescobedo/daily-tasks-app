import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve: {
    alias: [
      {find:'@modules/*',replacement:path.resolve(__dirname, '/src/modules')},
      {find:'@setup/*',replacement:path.resolve(__dirname, '/src/setup')},
      {find:'@ui/*',replacement:path.resolve(__dirname, '/src/ui')},
      {find:'@components/*',replacement:path.resolve(__dirname, '/src/components')},
      {find:'@utils/*',replacement:path.resolve(__dirname, '/src/utils')},
    ]
  }
})
