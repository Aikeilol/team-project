import React, { FC, useState, useEffect, useMemo, useCallback } from 'react'
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
import {
  getMessagesReactions,
  saveReaction,
  deleteReaction,
} from '../../../utils/scripts/api/reactionsApi'
import { MessagesReaction } from '../../../utils/scripts/api/types'

const Messages: FC<object> = () => {
  const user = useAppSelector(state => selectUser(state))
  const [messages, setMessages] = useState<Message[]>([])
  const [reactions, setReactions] = useState<MessagesReaction[]>([])

  const { topicId } = useParams()

  const messageDialogConfirm = async (data: Request) => {
    await createMessage(Number(data.id), data.title, user!)
    await handlerGetMessages()
  }

  const handlerGetMessages = async () => {
    const updatedMessages = await getMessages(Number(topicId))

    if (updatedMessages?.data) {
      setMessages(updatedMessages?.data)
    }
  }

  const onEmojiClick = async (
    emojiId: number,
    messageId: number,
    shouldAdd: boolean
  ) => {
    if (shouldAdd) {
      await saveReaction(user!, emojiId, messageId)
    } else {
      await deleteReaction(user!, messageId)
    }

    await getReactions()
  }

  const messagesWithReactions = useMemo(() => {
    return messages.map(item => {
      const reactionsForMessage = reactions.find(
        reaction => reaction.messageId === item.id
      )
      return { ...item, reactions: reactionsForMessage?.reactions || [] }
    })
  }, [messages, reactions])

  const getReactions = useCallback(async () => {
    if (!messages.length) return
    const reactionsRes = await getMessagesReactions(
      messages.map(item => item.id)
    )
    setReactions(reactionsRes?.data || [])
  }, [messages])

  useEffect(() => {
    getReactions()
  }, [messages])

  useEffect(() => {
    handlerGetMessages()
  }, [])

  return (
    <>
      <ForumHeader>Сообщения</ForumHeader>
      <ForumList
        data={messagesWithReactions}
        template={(data, key) => (
          <ForumMessageItem
            key={key}
            data={data}
            userEmail={user?.email}
            onEmojiClick={onEmojiClick}
            handlerGetMessages={handlerGetMessages}
          />
        )}
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
