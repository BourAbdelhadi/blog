import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import marksy from '@/utils/marksy'

const Article = styled.article`
  padding: 30px 30px;
  & h1 {
    text-align: center;
  }
  & pre {
    overflow: scroll;
  }
`

export default function Md2React(props) {
  return (
    <Article>
      {marksy(props.content).tree}
    </Article>
  )
}

Md2React.propTypes = {
  content: PropTypes.string.isRequired,
}
