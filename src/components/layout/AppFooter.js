import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  font-size: 1.1rem;
  padding: 20px;
  text-align: center;
  background-color: ${props => props.theme.color.bgDark};
`

export default function AppFooter() {
  return <Footer> This is a Footer </Footer>
}
