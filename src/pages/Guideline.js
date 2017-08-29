import React from 'react'
import propTypes from 'prop-types'

import AppNavs from '@/components/layout/appNavs'
import PostEntry from '@/components/postEntry'

export default function Guideline({ page }) {
  const { posts } = page

  return (
    <div>
      <AppNavs />
      {posts.map((post, i) => <PostEntry key={i} post={post} />)}
    </div>
  )
}

Guideline.propTypes = {
  page: propTypes.object.isRequired,
}
