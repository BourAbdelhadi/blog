import React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'
import styled from 'styled-components'
import frontMatter from 'front-matter'
import 'github-markdown-css'

import md2react from '@/utils/md2react'
import { px2vw, px2vh } from '@/styled/helpers'

const StyledPost = styled.div.attrs({
  className: 'markdown-body',
})`
  padding: ${px2vh(20)} ${px2vw(28)};
  font-size: inherit !important;
`
const Title = styled.h1``

const PostBody = styled.article``

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = { post: null }
  }
  componentDidMount() {
    const { path } = qs.parse(this.props.location.search)

    import(`../../posts${path}`).then(md => {
      const { attributes, body } = frontMatter(md)
      const post = { ...attributes, body }

      this.setState({ post })
    })
  }
  render() {
    const { post } = this.state

    if (!post) {
      return <div> loading </div>
    }

    return (
      <StyledPost>
        <Title>
          {post.title}
        </Title>
        <PostBody>
          {md2react(post.body).tree}
        </PostBody>
      </StyledPost>
    )
  }
}

Post.propTypes = {
  location: PropTypes.object.isRequired,
}
