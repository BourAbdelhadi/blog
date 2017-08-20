import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'

import { activeNavClassName, NavItem } from '@/styled/NavItem'

const Nav = styled(Flex)`
  padding: 16px 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1024;
  background: ${props => props.theme.color.bgDark};
`

const navs = [
  { path: '/', text: '首页' },
  { path: '/guideline', text: '开发流程规范' },
  { path: '/about', text: '关于' },
]

export default function AppHeader() {
  return (
    <Nav justify="space-around">
      {navs.map((nav, i) => {
        return (
          <NavItem
            key={i}
            to={nav.path}
            exact={true}
            activeClassName={activeNavClassName}>
            {nav.text}
          </NavItem>
        )
      })}
    </Nav>
  )
}
