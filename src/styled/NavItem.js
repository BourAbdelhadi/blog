import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const activeNavClassName = 'mine-nav-active'

export const NavItem = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  color: ${props => props.theme.color.baseLight};
  padding: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &.${activeNavClassName} {
    background-color: ${props => props.theme.color.bgDark};
    color: ${props => props.theme.color.baseDark};
  }
`
