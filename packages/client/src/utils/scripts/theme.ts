import { createTheme, Theme } from '@mui/material'
import { LinkProps } from '@mui/material/Link'
import { LinkBehavior } from '../styles/Link'
const generateTheme = (darkMode: boolean): Theme => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
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
  });
};

export default generateTheme;
