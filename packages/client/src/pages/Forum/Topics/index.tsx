import React, { FC, useEffect, useState } from 'react'
import { Request, Topic } from '../types'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import DialogWithInput from '../../../components/Forum/ForumDialogWithInput'
import {
  deleteTopicDialogData,
  messageDialogData,
  topicDialogData,
  updateTopicDialogData,
} from '../constants'
import ForumItem from '../../../components/Forum/ForumItem'
import ForumList from '../../../components/Forum/ForumList'
import ForumHeader from '../../../components/Forum/ForumHeader'
import {
  createMessage,
  createTopic,
  deleteTopic,
  getTopics,
  updateTopic,
} from '../../../utils/scripts/api/forumApi'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/slices/userSlice'

const Topics: FC<object> = () => {
  const user = useAppSelector(state => selectUser(state))

  const [topics, setTopics] = useState<Topic[]>([])

  const { forumId } = useParams()

  const topicDialogConfirm = async (data: Request) => {
    await createTopic(data, user!)
    await handlerGetTopics()
  }

  const messageDialogConfirm = async (data: Request) => {
    await createMessage(Number(data.id), data.title, user!)
    await handlerGetTopics()
  }

  const deleteTopicDialogConfirm = async (data: Request) => {
    const { id } = data
    await deleteTopic(id)
    await handlerGetTopics()
  }

  const editTopicDialogConfirm = async (data: Request) => {
    await updateTopic(data)
    await handlerGetTopics()
  }

  const handlerGetTopics = async () => {
    const updatedTopics = await getTopics(Number(forumId))

    if (updatedTopics?.data) {
      setTopics(updatedTopics?.data)
    }
  }

  useEffect(() => {
    getTopics(Number(forumId)).then(res => {
      if (res?.data) {
        setTopics(res?.data)
      }
    })
  }, [])

  return (
    <>
      <ForumHeader>Темы</ForumHeader>

      {forumId && (
        <ForumList
          data={topics}
          template={(data, key) => (
            <ForumItem
              key={key}
              to={`/forum/${data.forum_id}/topics/${data.id}/messages`}
              {...data}
              dialogData={[
                {
                  ...messageDialogData(data.id),
                  onConfirm: messageDialogConfirm,
                  tooltip: 'Добавить сообщение',
                },
                {
                  ...updateTopicDialogData(data.id, data.title),
                  flagBtn: 'edit',
                  showBtn: user!.id === data.author.id,
                  onConfirm: editTopicDialogConfirm,
                  tooltip: 'Редактировать тему',
                },
                {
                  ...deleteTopicDialogData(data.id, data.title),
                  disabled: true,
                  flagBtn: 'delete',
                  showBtn: user!.id === data.author.id,
                  onConfirm: deleteTopicDialogConfirm,
                  tooltip: 'Удалить тему',
                },
              ]}
            />
          )}
        />
      )}

      <Box
        sx={{
          textAlign: 'right',
          marginRight: '90px',
          marginTop: '20px',
        }}>
        {forumId && (
          <DialogWithInput
            {...topicDialogData(+forumId)}
            addBtnType={'medium'}
            tooltip="Добавить тему"
            onConfirm={topicDialogConfirm}
          />
        )}
      </Box>
    </>
  )
}

export default Topics
