import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { ListItem } from '@mui/material'
import { MessageWithReaction } from '../../../pages/Forum/types'
import { EmojiControl } from '../../EmojiControl'
import { EmojiCounter } from '../../EmojiCounter'

interface IProps {
  data: MessageWithReaction
  userEmail?: string
  onEmojiClick: (emojiId: number, messageId: number, shouldAdd: boolean) => void
}

const ForumMessageItem: FC<IProps> = ({
  data,
  onEmojiClick,
  userEmail = '',
}) => {
  const { author, message, createDateTime, reactions } = data
  const date = new Date(createDateTime).toLocaleDateString()

  const messageReactions = reactions
    .map(reaction => {
      return {
        id: reaction.emojiId,
        unicode: reaction.unicode,
        count: reaction.userEmails.length,
        liked: reaction.userEmails.includes(userEmail),
      }
    })
    .sort((a, b) => b.id - a.id)

  const handleClick = (id: number) => {
    onEmojiClick(
      id,
      data.id,
      !messageReactions.find(reaction => reaction.id === id)?.liked
    )
  }

  return (
    <ListItem>
      <Card sx={{ width: '100%' }}>
        <CardContent
          sx={{
            fontSize: '24px',
            padding: '35px',
          }}>
          <Grid container>
            <Grid item xs={5} container spacing={2}>
              <Grid item>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: red[500],
                  }}
                  aria-label="recipe">
                  R
                </Avatar>
              </Grid>
              <Grid
                item
                sx={{
                  minWidth: '150px',
                }}>
                <Typography gutterBottom variant="body1" component="div">
                  {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {date}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" spacing={2} xs={7}>
              <Grid
                item
                sx={{
                  background: '#464545a6',
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    maxHeight: '100px',
                    minHeight: '100px',
                    overflow: 'auto',
                  }}>
                  {message}
                </Typography>
              </Grid>
              <Grid item container spacing={2} alignItems="center">
                <Grid item xs>
                  <EmojiCounter
                    emojis={messageReactions}
                    onClick={handleClick}
                  />
                </Grid>
                <Grid item>
                  <EmojiControl onClick={handleClick} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default ForumMessageItem
