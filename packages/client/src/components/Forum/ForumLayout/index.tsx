import { FC, ReactNode } from 'react'
import { Container } from '@mui/system'
import { Box } from '@mui/material'

interface IProps {
  children: ReactNode
}

const ForumLayout: FC<IProps> = ({ children }) => {
  return (
    <Container fixed sx={{ height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 20px 58px',
        }}>
        {children}
      </Box>
    </Container>
  )
}

export default ForumLayout
