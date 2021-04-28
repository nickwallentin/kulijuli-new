import { Section, Wrap } from "../components/styled"

import Img from "gatsby-image"
import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const SponsorPage = ({ data }) => {
  const s = data?.allAirtable?.edges
  const main = s?.filter(({ node: item }) => item.data.Typ === "Guldsponsor")
  const sponsors = s?.filter(
    ({ node: item }) => item.data.Typ !== "Guldsponsor"
  )

  return (
    <Layout>
      <Section>
        <Wrap>
          <h1>Sponsorer</h1>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <Sponsors>
            {main?.map(({ node: sponsor }) => (
              <div className="main" key={sponsor.data.F_retag}>
                <a
                  href={sponsor?.data?.HemsidaURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <Img
                      fluid={
                        sponsor?.data?.Logo?.localFiles[0].childImageSharp.fluid
                      }
                    />
                  </figure>
                  <h2>{sponsor?.data?.F_retag}</h2>
                </a>
              </div>
            ))}
            {sponsors?.map(({ node: sponsor }) => (
              <div key={sponsor?.data?.F_retag}>
                <a
                  href={sponsor?.data?.HemsidaURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <Img
                      fluid={
                        sponsor?.data?.Logo?.localFiles[0].childImageSharp.fluid
                      }
                    />
                  </figure>
                  <h2>{sponsor?.data?.F_retag}</h2>
                </a>
              </div>
            ))}
          </Sponsors>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default SponsorPage

const Sponsors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  a {
    text-decoration: none;
    h2 {
      font-size: 1.2rem !important;
      color: black;
      text-align: center;
    }
  }
  .main {
    grid-area: span 2 / span 2;
  }
`

export const pageQuery = graphql`
  query MyQuery {
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
`
