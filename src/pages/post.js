import React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'
import frontMatter from 'front-matter'
import MD2React from '@/components/md2React'

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
      <div>
        <h1>
          {post.title}
        </h1>
        <MD2React content={post.body} />
      </div>
    )
  }
}

Post.propTypes = {
  location: PropTypes.object.isRequired,
}
