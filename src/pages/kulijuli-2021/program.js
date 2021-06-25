import { Message, Section, Wrap } from "../../components/styled"

import PageLayout from "./layout"
import ProgramDay from "../../components/program/programDay"
import React from "react"
import SEO from "../../components/seo"
import styled from "styled-components"
import useProgramSettings from "../../queries/useProgramSettings"

const ProgramPage = ({ data }) => {
  const program = data.allAirtable.edges
  const settings = useProgramSettings()
  let isPublic = false
  settings.map(({ node: setting }) => {
    if (setting.data.Name === "Visa program") {
      if (setting.data.Aktiv) {
        isPublic = true
      }
    }
  })
  return (
    <PageLayout>
      <SEO title="Kulijuli 2021: Skånes stora allsång" />
      <Styles>
        <Section
          space="4rem 0rem"
          bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
        >
          <Wrap>
            <h2>Program</h2>

            {isPublic ? (
              program.map(day => {
                return <ProgramDay day={day} />
              })
            ) : (
              <Message>Programmet kommer under 2021.</Message>
            )}
          </Wrap>
        </Section>
      </Styles>
    </PageLayout>
  )
}

export default ProgramPage

export const pageQuery = graphql`
  query getAllProgramDataTwo {
    allAirtable(
      filter: { table: { eq: "Datum" } }
      sort: { fields: data___Datum, order: ASC }
    ) {
      edges {
        node {
          id
          data {
            Datum
            Beskrivning
            Program {
              data {
                Programpunkt
                Beskrivning
                Fotograf
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
                      fluid(maxWidth: 600, maxHeight: 600) {
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

        margin-bottom: 0px;
        font-size: 24px;
      }
      ul {
        border-top: 1px solid #f4f4f4;
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
