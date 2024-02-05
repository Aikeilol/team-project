import React, { FC, useState, useEffect } from 'react'
import { Message } from '../types'
import { forumService } from '../../../services/forum.service'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import DialogWithInput from '../../../components/Forum/ForumDialogWithInput'
import { messageDialogData } from '../constants'
import ForumList from '../../../components/Forum/ForumList'
import ForumMessageItem from '../../../components/Forum/ForumMessageItem'
import ForumHeader from '../../../components/Forum/ForumHeader'

const Messages: FC<object> = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [title, setTitle] = useState('')

  const { topicId } = useParams()

  const messageDialogConfirm = (item: Message) => {
    setMessages([...messages, item])
  }

  useEffect(() => {
    async function getMessages() {
      try {
        const data = !!topicId && (await forumService.getMessages(+topicId))
        if (data && data?.items) {
          setTitle(data.title)
          setMessages(data.items)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getMessages()
  }, [])

  return (
    <>
      <ForumHeader>Тема: {title}</ForumHeader>
      <ForumList
        data={messages}
        template={(data, key) => <ForumMessageItem key={key} {...data} />}
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
