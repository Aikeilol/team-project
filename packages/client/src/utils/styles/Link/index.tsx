import React from 'react'
import { styled } from '@mui/system'
import {
  NavLink as RouterLink,
  NavLinkProps as RouterLinkProps,
} from 'react-router-dom'

const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  '&.active': {
    textDecoration: 'none',
  },
}))

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  return <StyledRouterLink ref={ref} to={href} {...other} />
})
