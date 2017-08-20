import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const activeNavClassName = 'mine-nav-active'

export const NavItem = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  color: ${props => props.theme.color.baseLight};

  &.${activeNavClassName} {
    color: ${props => props.theme.color.baseDark};
  }
`
