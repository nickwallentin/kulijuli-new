import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
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

              largeThumb: mainImage {
                childImageSharp {
                  fluid(maxWidth: 320, maxHeight: 176) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              thumb: mainImage {
                childImageSharp {
                  fluid(maxWidth: 150, maxHeight: 150) {
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
