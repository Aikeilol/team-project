import React, { FC, useState, useEffect } from 'react'
import { Message, Request } from '../types'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import DialogWithInput from '../../../components/Forum/ForumDialogWithInput'
import { messageDialogData } from '../constants'
import ForumList from '../../../components/Forum/ForumList'
import ForumMessageItem from '../../../components/Forum/ForumMessageItem'
import ForumHeader from '../../../components/Forum/ForumHeader'
import { createMessage, getMessages } from '../../../utils/scripts/api/forumApi'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/slices/userSlice'

const Messages: FC<object> = () => {
  const user = useAppSelector(state => selectUser(state))

  const [messages, setMessages] = useState<Message[]>([])

  const { topicId } = useParams()

  const messageDialogConfirm = async (data: Request) => {
    const author = {
      id: user!.id,
      display_name: user!.first_name,
      avatar: user!.avatar,
    }

    await createMessage(Number(data.id), data.title, author)
    await handlerGetMessages()
  }

  const handlerGetMessages = async () => {
    const updatedMessages = await getMessages(Number(topicId))

    if (updatedMessages?.data) {
      setMessages(updatedMessages?.data)
    }
  }

  useEffect(() => {
    handlerGetMessages()
  }, [])

  return (
    <>
      <ForumHeader>Сообщения</ForumHeader>
      <ForumList
        data={messages}
        template={(data, key) => {
          return (
            <ForumMessageItem
              key={key}
              handlerGetMessages={handlerGetMessages}
              {...data}
            />
          )
        }}
      />

      <Box
        sx={{
          textAlign: 'right',
          marginRight: '90px',
          marginTop: '20px',
        }}>
        {topicId && (
          <DialogWithInput
            {...messageDialogData(+topicId)}
            tooltip="Добавить сообщение"
            addBtnType={'medium'}
            onConfirm={messageDialogConfirm}
          />
        )}
      </Box>
    </>
  )
}

export default Messages
