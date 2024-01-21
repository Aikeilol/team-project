import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App'
import Error from '../components/Error'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Main from '../pages/Main'
import Game from '../pages/Game'
import LeaderBord from '../pages/LeaderBord'
import Forum from '../pages/Forum'
import Topic from '../pages/Forum/Topic'
import NewTopic from '../pages/Forum/NewTopic'
import Intro from '../components/Intro'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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

export default router
