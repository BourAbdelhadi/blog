import React from 'react'
import { Switch, Route } from 'react-router-dom'

import WorkFlow from '@/pages/WorkFlow'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/workflow', component: WorkFlow },
  { component: NotFound },
]

export default function AppMain() {
  return (
    <main>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </main>
  )
}
