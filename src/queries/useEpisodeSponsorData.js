import { graphql, useStaticQuery } from "gatsby"

export default function useEpisodeSponsorData() {
  const data = useStaticQuery(graphql`
    query getEpisodeSponsorData {
      file(relativePath: { eq: "sponsors/E001-Sillen.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return data.file
}
