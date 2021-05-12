import { graphql, useStaticQuery } from "gatsby"

const useProgamSettings = () => {
  const data = useStaticQuery(graphql`
    query getProgramSettings {
      allAirtable(filter: { table: { eq: "Inställningar" } }) {
        edges {
          node {
            id
            data {
              Aktiv
              Name
            }
          }
        }
      }
    }
  `)
  return data.allAirtable.edges
}

export default useProgamSettings
