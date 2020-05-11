const path = require("path")
const slugify = require("@sindresorhus/slugify")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "Mdx") {
    const slug =
      node.frontmatter.slug ||
      slugify(node.frontmatter.title) ||
      createFilePath({ node, getNode, basePath: "pages" })

    actions.createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    actions.createNodeField({
      name: "draft",
      node,
      value: node.frontmatter.draft || false,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      blog: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//blog//" }
          fields: { draft: { eq: false } }
        }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const { createPage } = actions

  data.blog.edges.forEach(({ node }, i) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: node.id,
      },
    })
  })
}
