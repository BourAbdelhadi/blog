import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

import theme from '@/styled/theme'
import AppHeader from '@/components/layout/AppHeader'
import AppMain from '@/components//layout/AppMain'
import AppFooter from '@/components//layout/AppFooter'

injectGlobal`${normalize()}`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.base};
  background: ${props => props.theme.color.bg};
  font-family: ${props => props.theme.font.familySans};

  > :nth-child(2) {
    flex: 1;
  }
`
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </Container>
    </ThemeProvider>
  )
}
