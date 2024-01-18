import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import ForumLayout from '../../components/Forum/ForumLayout'
import { CssBaseline } from '@mui/material'

export const Forum: FC<object> = () => {
  return (
    <ForumLayout>
      <CssBaseline />
      <Outlet />
    </ForumLayout>
  )
}

export default Forum
