import "dayjs/locale/sv"

import { Section, Wrap } from "../components/styled"

import Img from "gatsby-image"
import Layout from "../components/layout"
import ProgramDay from "../components/program/programDay"
import React from "react"
import dayjs from "dayjs"
import { graphql } from "gatsby"
import styled from "styled-components"

const ProgramPage = ({ data }) => {
  const program = data.allAirtable.edges
  return (
    <Layout>
      <Styles>
        <Section>
          <Wrap>
            <h1>Program</h1>
          </Wrap>
        </Section>
        <Section>
          <Wrap>
            {program.map(day => {
              return <ProgramDay day={day} />
            })}
          </Wrap>
        </Section>
      </Styles>
    </Layout>
  )
}

export default ProgramPage

const Styles = styled.div`
  .program-day {
    background: white;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #f4f4f4;
      background: var(--c-pri);
      color: white;

      .day {
        text-transform: capitalize;
      }
    }

    .section {
      padding: 1rem;
      h2 {
        display: block;
        padding-bottom: 10px;
        border-bottom: 1px solid #f4f4f4;
        margin-bottom: 0px;
        font-size: 24px;
      }
      ul {
        margin: 0px;
        list-style: none;
        padding: 1rem 0px;
        li {
          display: flex;
          align-items: center;
          margin: 0px;
          padding: 0.5rem 0px;
          &:hover {
            strong {
              text-decoration: underline;
            }
          }
          strong {
            margin: 0px;
          }
          p {
            font-size: 14px;
            line-height: 1.2rem;
          }
          figure {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            overflow: hidden;
            margin: 0px;
            margin-right: 1rem;
          }
        }
        @media (min-width: 600px) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          li {
            figure {
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query getAllProgramData {
    allAirtable(
      filter: { table: { eq: "Datum" } }
      sort: { fields: data___Datum, order: ASC }
    ) {
      edges {
        node {
          id
          data {
            Datum
            Program {
              data {
                Programpunkt
                Beskrivning
                Bild {
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                Large: Bild {
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 400) {
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
    }
  }
`
