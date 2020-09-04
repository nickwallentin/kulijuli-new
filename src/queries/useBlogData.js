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
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              thumb: mainImage {
                childImageSharp {
                  fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              mainOnNewsPage: mainImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              onNewsPage: mainImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
