import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { Box, ListItem } from '@mui/material'
import { Message, Request } from '../../../pages/Forum/types'
import getImageSrc from '../../../utils/scripts/getPath'
import DialogWithInput from '../ForumDialogWithInput'
import {
  deleteMessageDialogData,
  updateMessageDialogData,
} from '../../../pages/Forum/constants'
import {
  deleteMessage,
  updateMessage,
} from '../../../utils/scripts/api/forumApi'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/slices/userSlice'

interface IProps extends Message {
  handlerGetMessages(): void
}

const ForumMessageItem: FC<IProps> = ({
  author,
  message,
  createdAt,
  id,
  handlerGetMessages,
}) => {
  const user = useAppSelector(state => selectUser(state))

  const date = new Date(createdAt).toLocaleDateString()

  const deleteMessageDialogConfirm = async (data: Request) => {
    await deleteMessage(data)
    await handlerGetMessages()
  }

  const updateMessageDialogConfirm = async (data: Request) => {
    await updateMessage(data)
    await handlerGetMessages()
  }

  return (
    <ListItem>
      <Card sx={{ width: '100%' }}>
        <CardContent
          sx={{
            width: '100%',
            display: 'flex',
            fontSize: '24px',
            gap: '40px',
            padding: '35px',
            alignItems: 'stretch',
            textAlign: 'start',
          }}>
          <Box>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: red[500],
              }}
              src={author?.avatar ? getImageSrc(author?.avatar) : ''}
              aria-label="recipe">
              R
            </Avatar>
          </Box>

          <Box
            sx={{
              minWidth: '150px',
              borderRight: '1px solid gray',
            }}>
            <>
              <Typography gutterBottom variant="body1" component="div">
                {author.display_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {date}
              </Typography>
            </>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%',
              background: '#464545a6',
              padding: '16px',
              width: '100%',
            }}>
            <Typography
              variant="body1"
              sx={{
                maxHeight: '100px',
                minHeight: '100px',
                overflow: 'auto',
                padding: '5px',
              }}>
              {message}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              minWidth: '150px',
              borderLeft: '1px solid gray',
              alignItems: 'start',
              justifyContent: 'space-evenly',
            }}>
            <DialogWithInput
              {...updateMessageDialogData(id, message)}
              disabled={false}
              flagBtn={'edit'}
              showBtn={user!.id === author.id}
              onConfirm={updateMessageDialogConfirm}
              tooltip={'Редактировать сообщение'}
            />
            <DialogWithInput
              {...deleteMessageDialogData(id, message)}
              disabled={true}
              flagBtn={'delete'}
              showBtn={user!.id === author.id}
              onConfirm={deleteMessageDialogConfirm}
              tooltip={'Удалить сообщение'}
            />
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default ForumMessageItem
