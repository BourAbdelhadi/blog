import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

import theme from '@/styled/theme'
import AppHeader from '@/components/layout/AppHeader'
import AppMain from '@/components//layout/AppMain'

injectGlobal`${normalize()}`
injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.color.base};
  font-family: ${props => props.theme.font.familySans};

  > :nth-child(1) {
    overflow-y: scroll;
    height: 100%;
  }
`
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppMain />
        <AppHeader />
      </Container>
    </ThemeProvider>
  )
}
