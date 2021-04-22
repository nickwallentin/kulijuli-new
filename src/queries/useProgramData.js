import { graphql, useStaticQuery } from "gatsby"

export default function useProgramData() {
  const data = useStaticQuery(graphql`
    query getProgramData {
      allAirtable(filter: { table: { eq: "Program" } }) {
        group(field: data___Datum) {
          edges {
            node {
              id
              data {
                Programpunkt
                Datum
              }
            }
          }
        }
      }
    }
  `)
  return data.allAirtable.edges
}
