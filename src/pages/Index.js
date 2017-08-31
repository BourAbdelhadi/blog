import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AppNavs from '@/components/layout/appNavs'
import md2react from '@/utils/md2react'

const Intro = styled.div`text-align: center;`

export default function Home({ page }) {
  const [post] = page.posts
  return (
    <div>
      <AppNavs />
      <Intro>
        {/* {md2react(post.body)} */}
      </Intro>
    </div>
  )
}

Home.propTypes = {
  page: PropTypes.object.isRequired,
}
