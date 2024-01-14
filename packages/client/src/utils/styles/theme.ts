import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
          },
        },
      ],
    },
  },
})

export default theme
