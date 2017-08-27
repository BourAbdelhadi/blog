import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { pages } from '../../utils/preval'
import { createPage } from '@/utils/route'
import NotFound from '@/pages/404'

const routes = pages.map(createPage)

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
        <Route component={NotFound} />
      </Switch>
    </Main>
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
}
