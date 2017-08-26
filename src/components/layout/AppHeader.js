import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = styled.header`
  text-align: center;
  border-bottom: 1px solid #aaa;
`

export default function AppHeader(props) {
  return (
    <Header>
      {props.title}
    </Header>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
