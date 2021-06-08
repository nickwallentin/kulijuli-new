const path = require("path")
const slugify = require("slugify")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.table === "Nyheter") {
    const slug = slugify(node.data.Rubrik).toLowerCase()
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogTemplate = path.resolve("./src/templates/post.js")
  //get slugs
  const posts = await graphql(`
    query {
      allAirtable(filter: { table: { eq: "Nyheter" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log("POSTS =>", posts)
  //create new pages with unique slug
  posts.data.allAirtable.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
