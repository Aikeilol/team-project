import { Box, FormControl } from '@mui/material'
import { Form } from 'react-router-dom'

type FormProps = {
  children: React.ReactNode
}

const CustomForm = ({ children }: FormProps) => {
  return (
    <Box
      component={Form}
      method="post"
      noValidate
      autoComplete="off"
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <FormControl sx={{ maxWidth: '320px', width: '100%' }}>
        {children}
      </FormControl>
    </Box>
  )
}

export default CustomForm
