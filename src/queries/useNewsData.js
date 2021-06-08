import { graphql, useStaticQuery } from "gatsby"

export default function useNewsData() {
  const data = useStaticQuery(graphql`
    query getNewsData {
      allAirtable(
        filter: { table: { eq: "Nyheter" } }
        sort: { fields: data___Publicerad, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            data {
              Text {
                childMarkdownRemark {
                  excerpt(pruneLength: 100)
                }
              }
              Publicerad(formatString: "D MMMM, YYYY", locale: "sv")
              Rubrik
              largeThumb: Img {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 320, maxHeight: 176) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              thumb: Img {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 150) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              mainOnNewsPage: Img {
                localFiles {
                  childImageSharp {
                    fluid(maxHeight: 400) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              onNewsPage: Img {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 400) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allAirtable.edges
}
