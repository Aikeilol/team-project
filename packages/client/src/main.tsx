import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import ErrorBoundary from './pages/ErrorPage'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Main from './pages/Main'
import Game from './pages/Game'
import LeaderBord from './pages/LeaderBord'
import Forum from './pages/Forum'
import Topic from './pages/Forum/Topic'
import NewTopic from './pages/Forum/NewTopic'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Main />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'game',
            element: <Game />,
          },
          {
            path: 'leaderboard',
            element: <LeaderBord />,
          },
          {
            path: 'topics',
            element: <Forum />,
            children: [
              {
                path: ':topicId',
                element: <Topic />,
              },
              {
                path: 'new',
                element: <NewTopic />,
              },
            ],
          },
        ],
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
