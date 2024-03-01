import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server'
import { store } from './src/store/store.js'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './src/utils/scripts/theme.js'
import { RouteObject } from 'react-router-dom'
import { ServerRouter } from './src/router/index.js'

export async function render(remixRequest: Request) {
  const { query, dataRoutes } = createStaticHandler(
    ServerRouter() as RouteObject[]
  )
  const context = await query(remixRequest)

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(dataRoutes, context)

  return [
    ReactDOMServer.renderToString(
      <StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StaticRouterProvider
              router={router}
              context={context}
              nonce="the-nonce"
            />
          </ThemeProvider>
        </Provider>
      </StrictMode>
    ),
    store.getState(),
  ]
}
