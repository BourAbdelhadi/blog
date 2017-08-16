import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function SidebarNav(props) {
  return (
    <aside>
      {props.sidebar.map((item, i) =>
        <Link key={i} to={item.path}>
          {item.text}
        </Link>
      )}
    </aside>
  )
}

SidebarNav.propTypes = {
  sidebar: PropTypes.array.isRequired,
}
