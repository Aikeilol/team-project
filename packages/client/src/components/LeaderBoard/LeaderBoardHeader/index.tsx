import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { IListTitle } from '../types'

interface IProps {
  title: string
  // listTitle: IListTitle
}

const LeaderBoardHeader: FC<IProps> = ({ title,listTitle }) => {
  return (
    <>
    <Box
      component="div"
      sx={{
        mt: 8,
        mb: 6,
        pb: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>
      <Typography component="h1" variant="h6" align="center">
        {title}
      </Typography>
    </Box>
    {/*<Box*/}
    {/*  component="div"*/}
    {/*  className={'list-grid'}*/}
    {/*  sx={{*/}
    {/*    width: '100%',*/}
    {/*    pt: 1,*/}
    {/*    pb: 1,*/}
    {/*    pl: 2,*/}
    {/*    pr: 2,*/}
    {/*    borderBottom: t => `1px solid ${t.palette.divider}`,*/}
    {/*  }}*/}
    {/*>*/}
    {/*  <Typography component="p" align="justify" width="100%">{listTitle.user}</Typography>*/}
    {/*  <Typography component="p" align="justify" width="100%">{listTitle.rating}</Typography>*/}
    {/*  <Typography component="p" align="justify" width="100%">{listTitle.cursor}</Typography>*/}
    {/*  <Typography component="p" align="justify" width="100%">{listTitle.rating}</Typography>*/}
    {/*</Box>*/}
    </>
  )
}

export default LeaderBoardHeader
