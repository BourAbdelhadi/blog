import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { format } from '@/utils/util'

const Title = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: ${props => props.theme.color.base};
`

const UpdateDate = styled.div``

const Contributor = styled.div``

const Entry = styled(Link)`
  display: block;
  text-decoration: none;
  padding: ${props => props.theme.gutter};
  border-bottom: 1px solid ${props => props.theme.color.border};
  line-height: 1.5;
  font-size: .8rem;
  color: ${props => props.theme.color.baseLight};
`

export default function PostEntry({ post }) {
  return (
    <Entry to={`/post?path=${post.path}`}>
      <Title>
        {post.title}
      </Title>
      <UpdateDate>
        Updated: {format(post.date)}
      </UpdateDate>
      <Contributor>
        {/* By: {post.contributor} */}
      </Contributor>
    </Entry>
  )
}

PostEntry.propTypes = {
  post: PropTypes.object.isRequired,
}
