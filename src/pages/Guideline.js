import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

import BurgerNav from '@/components/BurgerNav'
import Md2React from '@/components/Md2React'

const Article = styled(Box)`
  min-width: 0; /* famous min-width problem */
`

export default function Guideline({ match } = {}) {
  const guideline = []
  const sidebar = guideline.map(item => ({
    path: `${match.url}/${item.name}`,
    text: item.name,
    content: item.content,
  }))

  return <div>Guideline</div>
  // return (
  //   <Flex>
  //     <BurgerNav sidebar={sidebar} />

  //     <Article flex="1">
  //       <Redirect from={match.url} to={sidebar[0].path} />
  //       {sidebar.map((item, i) =>
  //         <Route
  //           key={i}
  //           path={item.path}
  //           render={() => <Md2React content={item.content} />}
  //         />
  //       )}
  //     </Article>
  //   </Flex>
  // )
}
