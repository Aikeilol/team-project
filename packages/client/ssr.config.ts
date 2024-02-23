import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-ssr',
    ssr: true,
    lib: {
      entry: path.resolve(__dirname, 'entry-server.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist-ssr',
      },
    },
  },
  ssr: {
    format: 'cjs',
  },
})
