import React, { FC, useEffect, useState } from 'react'
import { Forum, Request } from '../types'
import ForumList from '../../../components/Forum/ForumList'
import ForumItem from '../../../components/Forum/ForumItem'
import { topicDialogData } from '../constants'
import ForumHeader from '../../../components/Forum/ForumHeader'
import { createTopic, getForums } from '../../../utils/scripts/api/forumApi'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/slices/userSlice'

const Forums: FC<object> = () => {
  const [forums, setForums] = useState<Forum[]>([])
  const user = useAppSelector(state => selectUser(state))

  const createTopicDialogConfirm = async (data: Request) => {
    await createTopic(data, user!)
    await handlerGetForums()
  }

  const handlerGetForums = async () => {
    const updatedForums = await getForums()

    if (updatedForums?.data) {
      return setForums(updatedForums?.data)
    }

    return null
  }

  useEffect(() => {
    handlerGetForums()
  }, [])

  return (
    <>
      <ForumHeader>Форумы</ForumHeader>
      <ForumList
        data={forums}
        template={(data, key) => (
          <ForumItem
            key={key}
            to={`/forum/${data.id}/topics`}
            {...data}
            dialogData={[
              {
                tooltip: 'Добавить тему',
                ...topicDialogData(data.id),
                onConfirm: createTopicDialogConfirm,
              },
            ]}
          />
        )}
      />
    </>
  )
}

export default Forums
