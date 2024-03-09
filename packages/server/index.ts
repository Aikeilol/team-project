import dotenv from 'dotenv'
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import express from 'express'
import forumRouter from './routes/forum'
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware'
const apiRouter = express.Router()

dotenv.config()

import * as fs from 'fs'
import * as path from 'path'
import { dbConnect } from './db'

const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  await dbConnect()

  const app = express()
  app.use(cors())
  app.use(express.json())

  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/dist-ssr/entry-server.cjs')

  app.use('/api', apiRouter)

  apiRouter.use('/forum', forumRouter)

  apiRouter.use(errorHandlerMiddleware)

  apiRouter.get('*', (_, res) => {
    res.status(404).json('👋 Howdy from the server :)')
  })

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })

    app.use(vite.middlewares)
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.use((await import('compression')).default())
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
    app.use('/snake.svg', express.static(path.resolve(distPath, 'snake.svg')))
    app.use(
      '/net-or-cache-sw.js',
      express.static(path.resolve(distPath, 'net-or-cache-sw.js'))
    )
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      let template: string
      let render: (remixRequest: Request) => Promise<string>

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
        render = (await import(ssrClientPath)).render
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (
          await vite.ssrLoadModule(path.resolve(srcPath, 'entry-server.tsx'))
        ).render
      }

      try {
        const [appHtml, store] = await render(createFetchRequest(req, res))
        const html = template.replace(
          `<!--ssr-outlet-->`,
          appHtml +
            `<script>
        window.__PRELOADED_STATE__ = ${JSON.stringify({ store }).replace(
          /</g,
          '\\u003c'
        )}
      </script>`
        )
        res.setHeader('Content-Type', 'text/html')
        return res.status(200).end(html)
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          const location = e.headers.get('Location')
          if (location) {
            return res.redirect(e.status, location)
          }
        }
        throw e
      }
    } catch (e) {
      const error = e as Error
      if (isDev()) {
        vite.ssrFixStacktrace(error)
      }
      console.log(error.stack)
      res.status(500).end(error.stack)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()

function createFetchRequest(
  req: express.Request,
  res: express.Response
): Request {
  const origin = `${req.protocol}://${req.get('host')}`
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin)

  const controller = new AbortController()
  res.on('close', () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value)
        }
      } else {
        headers.set(key, values)
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body
  }

  return new Request(url.href, init)
}
