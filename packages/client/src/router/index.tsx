import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from 'react-router-dom'
import App from '../pages/App'
import Error from '../components/Error'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Main from '../pages/Main'
import Game from '../pages/Game'
import LeaderBord from '../pages/LeaderBord'
import Forums from '../pages/Forum/Forums'
import Messages from '../pages/Forum/Messages'
import Topics from '../pages/Forum/Topics'
import Forum from '../pages/Forum'
import Intro from '../components/Intro'
import { signInAction, signUpAction } from './actions'
import ProtectedRoute from '../components/ProtectedRoute'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { redirectLoader } from './loaders'

const Router = () => {
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <ProtectedRoute />,
          children: [
            {
              path: '/',
              element: <Main />,
              children: [
                {
                  index: true,
                  element: <Intro />,
                },
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
                  path: 'forum',
                  element: <Forum />,
                  children: [
                    {
                      index: true,
                      element: <Forums />,
                    },
                    {
                      path: ':forumId/topics',
                      element: <Topics />,
                    },
                    {
                      path: ':forumId/topics/:topicId/messages',
                      element: <Messages />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: '/sign-in',
          element: <SignIn />,
          action: ({ request, params }: LoaderFunctionArgs) =>
            signInAction(dispatch, { request, params }),
          loader: () => redirectLoader(user),
        },
        {
          path: '/sign-up',
          element: <SignUp />,
          action: ({ request, params }: LoaderFunctionArgs) =>
            signUpAction(dispatch, { request, params }),
          loader: () => redirectLoader(user),
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
