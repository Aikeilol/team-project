import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { buildSync } from 'esbuild'
import { join } from 'node:path'
import { splitVendorChunkPlugin } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: Number(process.env.SERVER_PORT) || 3001,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    {
      name: 'build-sw',
      apply(config, { command }) {
        // apply only on build but not for SSR
        return command === 'build' && !config.build.ssr
      },
      enforce: 'post', // вызывать после Vite core plugins
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), 'net-or-cache-sw.js')],
          outfile: join(process.cwd(), 'dist', 'net-or-cache-sw.js'),
        })
      },
    },
    EnvironmentPlugin('all'),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Reducing chunk size
          if (id.includes('@open-ish') || id.includes('tslib')) {
            return '@open-ish'
          }
          if (id.indexOf('node_modules') !== -1) {
            const basic = id.toString().split('node_modules/')[1]
            const sub1 = basic.split('/')[0]
            if (sub1 !== '.pnpm') {
              return sub1.toString()
            }
            const name2 = basic.split('/')[1]
            return name2.split('@')[name2[0] === '@' ? 1 : 0].toString()
          }
        },
      },
    },
  },
})
