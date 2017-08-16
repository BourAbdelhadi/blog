import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`

const NavItem = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const navs = [
  { path: '/', text: '首页' },
  { path: '/guideline', text: '开发流程规范' },
  { path: '/about', text: '关于' },
]

export default function AppHeader() {
  return (
    <Nav>
      {navs.map((nav, i) => {
        return (
          <NavItem key={i} to={nav.path}>
            {nav.text}
          </NavItem>
        )
      })}
    </Nav>
  )
}
