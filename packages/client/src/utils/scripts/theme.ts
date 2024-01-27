import { createTheme } from '@mui/material'
import { LinkProps } from '@mui/material/Link'
import { LinkBehavior } from '../styles/Link'

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
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
})

export default theme
