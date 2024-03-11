import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { Box, ListItem } from '@mui/material'
import { Message } from '../../../pages/Forum/types'

const ForumMessageItem: FC<Message> = ({ author, message, createDateTime }) => {
  const date = new Date(createDateTime).toLocaleDateString()

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
              aria-label="recipe">
              R
            </Avatar>
          </Box>

          <Box
            sx={{
              minWidth: '150px',
              borderRight: '1px solid gray',
            }}>
            <Typography gutterBottom variant="body1" component="div">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%',
              background: '#464545a6',
              padding: '16px',
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
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default ForumMessageItem
