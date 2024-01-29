import React, { FC } from 'react'
import { Box, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import { IListItem } from '../types'
interface IProps {
  item: IListItem
}
const LeaderBoardItem: FC<IProps> = ( item ) => {
  const {
    display_name,
    first_name,
    second_name,
    ratingFieldName,
    cursor,
    limit,
    avatar
  } = item.item

  return (
    <ListItem
      className={'list-grid'}
      sx={{
        display: 'grid',
        width: '100%',
        borderBottom: t => `1px solid ${t.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ListItemAvatar>
          <Avatar alt="avatar" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={display_name}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {first_name} {second_name}
            </Typography>
          }
        />
      </Box>
      <ListItemText
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {ratingFieldName}
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
            {cursor}
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
            {limit}
          </Typography>
        }
      />
    </ListItem>
  )
}

export default LeaderBoardItem
