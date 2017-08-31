import React, { createElement } from 'react'
import marksy from 'marksy'

/* eslint-disable react/prop-types */
export default marksy({
  createElement,
  elements: {
    h1({ id, children }) {
      return (
        <h1 className="my-custom-class">
          {children}
        </h1>
      )
    },
  },
})
/* eslint-enable react/prop-types */
