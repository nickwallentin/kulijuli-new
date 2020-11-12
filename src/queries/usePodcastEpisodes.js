import { graphql, useStaticQuery } from "gatsby"

const usePodcastEpisodes = () => {
  const data = useStaticQuery(graphql`
    query getPodcastEpisodes {
      allAirtable(
        filter: { table: { eq: "Avsnitt" } }
        sort: { fields: data___Utgiven, order: DESC }
      ) {
        edges {
          node {
            id
            data {
              Avsnitt
              Utgiven
              Rubrik
              Beskrivning
              Omn_mnda
              spotifyUrl
              Sponsor
              L_tar
              G_ster {
                data {
                  Namn
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
export default usePodcastEpisodes
