import { useStaticQuest, graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 5
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 90)
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "D MMMM, YYYY", locale: "sv")

              mainImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
