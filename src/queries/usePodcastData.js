import { graphql, useStaticQuery } from "gatsby"

export default function usePodcastData() {
  const data = useStaticQuery(graphql`
    query getPodcastData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(podcast)/" } }
        sort: { order: DESC, fields: frontmatter___episode }
      ) {
        edges {
          node {
            id
            html
            excerpt(pruneLength: 150)
            frontmatter {
              episode
              spotify_url
              sponsorName
              sponsorLogo {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              guests
              competitionWinner
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}