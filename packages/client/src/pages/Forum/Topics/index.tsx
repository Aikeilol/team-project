import { FC, useEffect, useState } from 'react'
import { Message, Topic } from '../types'
import { forumService } from '../../../services/forum.service'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import DialogWithInput from '../../../components/Forum/ForumDialogWithInput'
import { messageDialogData, topicDialogData } from '../constants'
import ForumItem from '../../../components/Forum/ForumItem'
import ForumList from '../../../components/Forum/ForumList'
import ForumHeader from '../../../components/Forum/ForumHeader'

const Topics: FC<object> = () => {
  const [title, setTitle] = useState('')
  const [topics, setTopics] = useState<Topic[]>([])

  const { forumId } = useParams()

  const topicDialogConfirm = (item: Topic) => {
    setTopics([...topics, item])
  }

  const messageDialogConfirm = (item: Message) => {
    console.log(item)
  }

  useEffect(() => {
    if (forumId) {
      forumService.getTopics(+forumId).then(data => {
        setTitle(data.title)
        setTopics(data.items)
      })
    }
  }, [])

  return (
    <>
      <ForumHeader>Форум: {title}</ForumHeader>

      {forumId && (
        <ForumList
          data={topics}
          template={(data, key) => (
            <ForumItem
              key={key}
              to={`/forum/${data.forumId}/topics/${data.id}/messages`}
              {...data}
              dialogData={{
                ...messageDialogData(data.id),
                onConfirm: messageDialogConfirm,
                tooltip: 'Добавить сообщение',
              }}
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
