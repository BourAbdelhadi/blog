import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Guideline from '@/pages/Guideline'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/guideline', component: Guideline },
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
