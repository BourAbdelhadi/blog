// @preval
const path = require('path')
const { readdirSync, readFileSync } = require('fs')

exports.guideline = getContent('guideline')

function getContent(part) {
  const contentPath = path.join(__dirname, '../../contents', part)

  return readdirSync(contentPath).map(file => {
    const { name } = path.parse(file)
    const filePath = path.join(contentPath, file)
    const content = readFileSync(filePath).toString()

    return { name, content }
  })
}
