import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import propTypes from 'prop-types'

import PostEntry from '@/components/postEntry'

export default function Guideline({ page }) {
  const { posts } = page

  return (
    <div>
      {posts.map((post, i) => <PostEntry key={i} post={post} />)}
    </div>
  )
}

Guideline.propTypes = {
  page: propTypes.object.isRequired,
}
