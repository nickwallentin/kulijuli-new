import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const useSponsorData = () => {
  const data = useStaticQuery(graphql`
    query GetSponsors {
      allAirtable(filter: { table: { eq: "Sponsorer" } }) {
        edges {
          node {
            data {
              F_retag
              HemsidaURL
              Typ
              Logo {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 300) {
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

export default useSponsorData
