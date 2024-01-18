import { FC, ReactNode } from 'react'
import { Container } from '@mui/system'
import { Box } from '@mui/material'

interface IProps {
  children: ReactNode
}

const ForumLayout: FC<IProps> = ({ children }) => {
  return (
    <Container fixed sx={{}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 20px 58px 20px',
          minHeight: 'calc(100vh - 44px)',
          height: 'calc(100vh - 44px)',
        }}>
        {children}
      </Box>
    </Container>
  )
}

export default ForumLayout
