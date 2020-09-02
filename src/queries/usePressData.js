import { graphql, useStaticQuery } from "gatsby"

export default function usePressData() {
  const data = useStaticQuery(graphql`
    query getPressData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(press)/" } }
        sort: { order: DESC, fields: frontmatter___published }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
