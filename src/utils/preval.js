// @preval
const path = require('path')
const fs = require('fs')
const { readdirSync, readFileSync } = require('fs')

const resolve = name => path.join(__dirname, name)

const PATHS = {
  pages: resolve('../pages'),
  posts: resolve('../../posts'),
}

exports.pages = readdirSync(PATHS.pages).map(file => {
  const { name } = path.parse(file)
  return {
    path: '/' + name,
    title: name,
    posts: getPosts(name.toLowerCase()),
  }
})

function getPosts(part) {
  const postPath = path.join(PATHS.posts, part)

  if (!fs.existsSync(postPath)) return []

  return readdirSync(postPath).map(file => {
    const { name } = path.parse(file)
    const filePath = path.join(postPath, file)
    const post = readFileSync(filePath, 'utf-8')

    return {
      path: `/${part}/${name}`,
      post,
    }
  })
}
