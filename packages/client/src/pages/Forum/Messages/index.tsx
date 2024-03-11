import React, { FC, useState, useEffect, useMemo, useCallback } from 'react'
import { Message } from '../types'
import { forumService } from '../../../services/forum.service'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import DialogWithInput from '../../../components/Forum/ForumDialogWithInput'
import { messageDialogData } from '../constants'
import ForumList from '../../../components/Forum/ForumList'
import ForumMessageItem from '../../../components/Forum/ForumMessageItem'
import ForumHeader from '../../../components/Forum/ForumHeader'
import {
  getMessagesReactions,
  saveReaction,
  deleteReaction,
} from '../../../utils/scripts/api/reactionsApi'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/slices/userSlice'
import { MessagesReaction } from '../../../utils/scripts/api/types'

const Messages: FC<object> = () => {
  const user = useAppSelector(state => selectUser(state))
  const [messages, setMessages] = useState<Message[]>([])
  const [reactions, setReactions] = useState<MessagesReaction[]>([])
  const [title, setTitle] = useState('')

  const { topicId } = useParams()

  const messageDialogConfirm = (item: Message) => {
    setMessages([...messages, item])
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
        data={messagesWithReactions}
        template={(data, key) => (
          <ForumMessageItem
            key={key}
            data={data}
            userEmail={user?.email}
            onEmojiClick={onEmojiClick}
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
