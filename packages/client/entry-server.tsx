import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server'
import { routes } from './src/router/index.js'
import { store } from './src/store/store.js'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { AppContext } from './src/context/AppContext'
import theme from './src/utils/scripts/theme.js'

export async function render(remixRequest: Request) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const context = await query(remixRequest)

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(dataRoutes, context)

  return ReactDOMServer.renderToString(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{}}>
            <CssBaseline />
            <StaticRouterProvider
              router={router}
              context={context}
              nonce="the-nonce"
            />
          </AppContext.Provider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
