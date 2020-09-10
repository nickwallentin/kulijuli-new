import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
        sort: { order: DESC, fields: frontmatter___date }
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
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              thumb: mainImage {
                childImageSharp {
                  fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              mainOnNewsPage: mainImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              onNewsPage: mainImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
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
