import { FC, useEffect, useState } from 'react'
import { forumService } from '../../../services/forum.service'
import { Forum, Topic } from '../types'
import ForumList from '../../../components/Forum/ForumList'
import ForumItem from '../../../components/Forum/ForumItem'
import { topicDialogData } from '../constants'
import ForumHeader from '../../../components/Forum/ForumHeader'

const Forums: FC<object> = () => {
  const [forums, setForums] = useState<Forum[]>([])

  const topicDialogConfirm = (item: Topic) => {
    console.log(item)
  }

  useEffect(() => {
    forumService.getForums().then(data => setForums(data.items))
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
            dialogData={{
              tooltip: 'Добавить тему',
              ...topicDialogData(data.id),
              onConfirm: topicDialogConfirm,
            }}
          />
        )}
      />
    </>
  )
}

export default Forums
