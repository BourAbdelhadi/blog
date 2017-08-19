import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { activeNavClassName, NavItem } from '@/styled/NavItem'

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 200px;
  // border-right: 1px solid ${props => props.theme.color.border};
  background: ${props => props.theme.color.bgDark};
`

export default function SidebarNav(props) {
  return (
    <Aside>
      {props.sidebar.map((item, i) =>
        <NavItem
          exact={true}
          key={i}
          to={item.path}
          activeClassName={activeNavClassName}>
          {item.text}
        </NavItem>
      )}
    </Aside>
  )
}

SidebarNav.propTypes = {
  sidebar: PropTypes.array.isRequired,
}
