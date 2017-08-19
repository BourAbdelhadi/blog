import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Guideline from '@/pages/Guideline'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/guideline', component: Guideline },
  { component: NotFound },
]

const Main = styled.main`
  display: flex;

  > * {
    flex: 1;
  }
`

export default function AppMain() {
  return (
    <Main>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </Main>
  )
}
