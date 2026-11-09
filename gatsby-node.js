const path = require("path")
const fs = require("fs")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query BlogRoutesQuery {
      allWpPost { edges { node { slug } } }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild("Unable to load WordPress blog routes", result.errors)
    return
  }
  for (const { node } of result.data.allWpPost.edges) {
    // Existing file-based routes use the same WordPress-powered template.
    if (fs.existsSync(path.resolve(`src/pages/blogs/${node.slug}.js`))) continue
    actions.createPage({
      path: `/blogs/${node.slug}/`,
      component: path.resolve("src/templates/blog-detail.js"),
      context: { slug: node.slug },
    })
  }
}
