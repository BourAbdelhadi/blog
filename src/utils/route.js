import React from 'react'
import Loadable from 'react-loadable'

export const createPage = function createRoute(page) {
  const isIndex = page.path.toLowerCase() === '/index'
  return {
    path: isIndex ? '/' : page.path.toLowerCase(),
    exact: true,
    component: Loadable({
      loader: () => import(`@/pages${page.path}`),
      loading: function loading() {
        return <h1>loading</h1>
      },
    }),
    page,
  }
}

export const createPost = function createPost(page) {
  return {
    path: page.path + '/:id',
    posts: page.posts,
    exact: false,
    component: Loadable({
      loader: () => import('@/components/Post'),
      loading: function loading() {
        return <h1>loading</h1>
      },
    }),
  }
}
