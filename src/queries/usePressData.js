import { graphql, useStaticQuery } from "gatsby"

const usePressData = () => {
  const data = useStaticQuery(graphql`
    query getPressData {
      allAirtable(
        filter: { table: { eq: "Press" } }
        sort: { fields: data___Datum, order: DESC }
      ) {
        edges {
          node {
            id
            data {
              Rubrik
              Datum
              Url
            }
          }
        }
      }
    }
  `)
  return data.allAirtable.edges
}

export default usePressData
