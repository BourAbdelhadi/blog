import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import AppHeader from '@/components/layout/AppHeader'
import AppMain from '@/components//layout/AppMain'
import AppFooter from '@/components//layout/AppFooter'

injectGlobal`${normalize()}`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > :nth-child(2) {
    flex: 1;
  }
`
export default function App() {
  return (
    <Container>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </Container>
  )
}
