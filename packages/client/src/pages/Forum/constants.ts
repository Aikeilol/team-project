import { forumService } from '../../services/forum.service'

export const messageDialogData = (topicId: number) => ({
  itemId: topicId,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Создать',
  dialogTitle: 'Создать сообщение',
  input: {
    label: 'Текст сообщения',
    multiple: true,
  },
  addRequest: forumService.addMessage,
})

export const topicDialogData = (forumId: number) => ({
  itemId: forumId,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Создать',
  dialogTitle: 'Создать тему',
  input: { label: 'Тема' },
  addRequest: forumService.addTopic,
})
