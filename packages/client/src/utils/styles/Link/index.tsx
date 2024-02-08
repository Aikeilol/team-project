import { forwardRef } from 'react'
import { styled } from '@mui/system'
import {
  NavLink as RouterLink,
  NavLinkProps as RouterLinkProps,
} from 'react-router-dom'

const StyledRouterLink = styled(RouterLink)(() => ({
  '&.active': {
    textDecoration: 'none',
  },
}))

export const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  return <StyledRouterLink ref={ref} to={href} {...other} />
})
