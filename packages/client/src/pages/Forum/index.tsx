import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import ForumLayout from '../../components/Forum/ForumLayout'

export const Forum: FC<object> = () => {
  return (
    <ForumLayout>
      <Outlet />
    </ForumLayout>
  )
}

export default Forum
