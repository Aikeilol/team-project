import ListItem from '@mui/material/ListItem'
import { Link } from 'react-router-dom'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import DialogWithInput, { DialogProps } from '../ForumDialogWithInput'
import CommentIcon from '@mui/icons-material/Comment'

interface IProps<T> {
  to: string
  title: string
  messageCount: number
  topicCount?: number
  dialogData: DialogProps<T>
}

const ForumItem = <T extends object>({
  to,
  title,
  messageCount,
  topicCount,
  dialogData,
}: IProps<T>) => {
  const secondaryText = topicCount
    ? `Темы: ${topicCount}, Сообщения: ${messageCount}`
    : `Сообщения: ${messageCount}`

  return (
    <ListItem
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      secondaryAction={
        <DialogWithInput {...dialogData} onConfirm={dialogData.onConfirm} />
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
