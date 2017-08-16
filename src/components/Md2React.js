import React from 'react'
import PropTypes from 'prop-types'

import marksy from '@/utils/marksy'

export default function Md2React(props) {
  return (
    <div>
      {marksy(props.content).tree}
    </div>
  )
}

Md2React.propTypes = {
  content: PropTypes.string.isRequired,
}
