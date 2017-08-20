import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import { guideline } from '../utils/getContent'
import BurgerNav from '@/components/BurgerNav'
import Md2React from '@/components/Md2React'

export default function Guideline({ match } = {}) {
  const sidebar = guideline.map(item => ({
    path: `${match.url}/${item.name}`,
    text: item.name,
    content: item.content,
  }))

  return (
    <Flex>
      <BurgerNav sidebar={sidebar} />
      <Box flex="1 1 auto">
        {sidebar.map((item, i) =>
          <Route
            key={i}
            path={item.path}
            render={() => <Md2React content={item.content} />}
          />
        )}
      </Box>
    </Flex>
  )
}
