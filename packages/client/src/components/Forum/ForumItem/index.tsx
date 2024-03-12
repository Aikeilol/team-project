import React from 'react'
import ListItem from '@mui/material/ListItem'
import { Link } from 'react-router-dom'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material'
import DialogWithInput, { DialogProps } from '../ForumDialogWithInput'
import CommentIcon from '@mui/icons-material/Comment'

interface IProps<T> {
  to: string
  title: string
  message_count: number
  topic_count?: number
  dialogData: Array<DialogProps<T>>
}

const ForumItem = <T extends object>({
  to,
  title,
  message_count,
  topic_count,
  dialogData,
}: IProps<T>) => {
  const secondaryText = topic_count
    ? `Темы: ${topic_count}, Сообщения: ${message_count}`
    : `Сообщения: ${message_count}`

  return (
    <ListItem
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      secondaryAction={
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
          }}>
          {dialogData.map(el => {
            return (
              <DialogWithInput
                key={el.flagBtn}
                {...el}
                onConfirm={el.onConfirm}
              />
            )
          })}
        </Box>
      }>
      <ListItemButton
        sx={{
          flexGrow: 'auto',
          bgcolor: 'white',
          padding: '10px',
          color: 'black',
          borderRadius: '20px',
          width: '90%',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.8)',
          },
        }}
        component={Link}
        to={to}>
        <ListItemIcon sx={{ justifyContent: 'center' }}>
          <CommentIcon sx={{ color: 'gray' }} />
        </ListItemIcon>

        <ListItemText
          primary={
            <Typography variant="body2" sx={{ fontSize: '20px' }}>
              {title}
            </Typography>
          }
          secondary={
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {secondaryText}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  )
}

export default ForumItem
