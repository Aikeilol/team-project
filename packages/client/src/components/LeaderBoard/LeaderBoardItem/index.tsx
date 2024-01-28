import React, { FC } from 'react'
import { ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import { IListItem } from '../types'
interface IProps {
  item: IListItem
}
const LeaderBoardItem: FC<IProps> = ( item ) => {
  const {
    avatar,
    displayName,
    firstName,
    secondName,
    ratingFieldName,
  cursor,
  limit } = item
  return (
    <ListItem
      sx={{
        width: '100%',
        borderBottom: t => `1px solid ${t.palette.divider}`,
      }}
    >
      <ListItemAvatar>
        <Avatar alt="avatar" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="display_name"
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {'first_name'} {'second_name'}
          </Typography>
        }
      />
      <ListItemText
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {'ratingFieldName'}
          </Typography>
        }
      />
      <ListItemText
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {'cursor'}
          </Typography>
        }
      />
      <ListItemText
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {'limit'}
          </Typography>
        }
      />
    </ListItem>
  )
}

export default LeaderBoardItem
