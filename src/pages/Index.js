import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Md2React from '@/components/Md2React'

const Intro = styled.div`text-align: center;`

export default function Home({ page }) {
  const [post] = page.posts
  return (
    <div>
      <Intro>
        <Md2React content={post.body} />
      </Intro>
    </div>
  )
}

Home.propTypes = {
  page: PropTypes.object.isRequired,
}
