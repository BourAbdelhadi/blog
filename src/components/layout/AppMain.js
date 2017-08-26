import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Loadable from 'react-loadable'
import PropTypes from 'prop-types'

import { pages } from '../../utils/preval'

const routes = pages.map(page => {
  const isIndex = page.path.toLowerCase() === '/index'
  return {
    path: isIndex ? '/' : page.path,
    exact: isIndex,
    component: Loadable({
      loader: () => import(`@/pages${page.path}`),
      loading: function loading() {
        return <h1> loading</h1>
      },
    }),
    page,
  }
})

const RouteWrapper = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props => {
      const allProps = { ...props, ...rest }
      return <Component {...allProps} />
    }}
  />

const Main = styled.main``

export default function AppMain() {
  return (
    <Main>
      <Switch>
        {routes.map((route, i) => <RouteWrapper key={i} {...route} />)}
      </Switch>
    </Main>
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
}
