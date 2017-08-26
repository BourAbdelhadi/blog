import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { withRouter } from 'react-router'

import BurgerNav from '@/components/BurgerNav'

import { activeNavClassName, NavItem } from '@/styled/NavItem'

const Nav = styled(Flex)`
  padding: 16px 10px;
  width: 100%;
  z-index: 1024;
  background: ${props => props.theme.color.bgDark};
`

const navs = [
  { path: '/', text: '首页' },
  { path: '/guideline', text: '开发流程规范' },
  { path: '/learning', text: '一起学' },
]

function AppHeader(props) {
  return <BurgerNav routes={navs} {...props} />
}

export default withRouter(AppHeader)
