import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from '@mui/material'
import gameScreen from './images/game-screen.jpg'
import features from './features'

function Intro() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
        }}>
        <Grid
          container
          spacing={5}
          sx={{
            pb: 5,
          }}>
          <Grid item sm={12} md={7}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ paddingBottom: '15px' }}>
              Игра Змейка
            </Typography>
            <Typography
              variant="h6"
              sx={{ opacity: '0.4', paddingBottom: '30px' }}>
              Знакомая игра в новом исполнении! Набери как можно больше очков и
              останься в живых дольше остальных!
            </Typography>
            <Button
              href="/game"
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: 'uppercase' }}>
              Начать игру
            </Button>
          </Grid>
          <Grid item sm={12} md={5}>
            <img src={gameScreen} alt="game" width="100%" />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          {features.map(({ icon, title }, index) => (
            <Grid item xs={12} sm={12} md={4} key={index} alignItems="stretch">
              <Card sx={{ height: '100%' }}>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    m: 3,
                  }}>
                  {icon}
                  <Typography sx={{ paddingTop: '30px' }}>{title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Intro
