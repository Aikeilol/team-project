export const messageDialogData = (id: number) => ({
  itemId: id,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Создать',
  dialogTitle: 'Создать сообщение',
  input: {
    label: 'Текст сообщения',
    multiple: true,
  },
})

export const topicDialogData = (id: number) => ({
  itemId: id,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Создать',
  dialogTitle: 'Создать тему',
  input: { label: 'Тема' },
})

export const deleteTopicDialogData = (id: number, title: string) => ({
  itemId: id,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Удалить',
  dialogTitle: 'Удалить тему',
  input: { label: 'Тема' },
  initialText: title,
})

export const updateTopicDialogData = (id: number, title: string) => ({
  itemId: id,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Обновить',
  dialogTitle: 'Обновить название темы',
  input: { label: 'Тема' },
  initialText: title,
})

export const deleteMessageDialogData = (id: number, title: string) => ({
  itemId: id,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Удалить',
  dialogTitle: 'Удалить сообщение',
  input: { label: 'Текст сообщения' },
  initialText: title,
})

export const updateMessageDialogData = (id: number, title: string) => ({
  itemId: id,
  cancelBtnText: 'Отмена',
  confirmBtnText: 'Обновить',
  dialogTitle: 'Обновить сообщение',
  input: { label: 'Текст сообщения' },
  initialText: title,
})
