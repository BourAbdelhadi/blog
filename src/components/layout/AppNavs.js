import React from 'react'
import { withRouter } from 'react-router'

import BurgerNav from '@/components/BurgerNav'

const navs = [
  { path: '/', text: '首页' },
  { path: '/guideline', text: '开发流程规范' },
  { path: '/learning', text: '一起学' },
]

function AppNavs(props) {
  return <BurgerNav routes={navs} {...props} />
}

export default withRouter(AppNavs)
