import "dayjs/locale/sv"

import { Grid, Section, Wrap } from "../../../components/styled"

import Layout from "../../../components/layout"
import ProgramDay from "../../../components/program/programDay"
import React from "react"
import dayjs from "dayjs"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

const LivePage = ({ data }) => {
  return (
    <Layout>
      <Styles>
        <div>
          <Section>
            <Wrap>
              <div>
                <Grid>
                  <div>
                    <h1>Kulijuli - TV-versionen</h1>
                    <p>
                      På den här sidan kommer du att kunna ta del av Kulijulis
                      TV-sändningar enligt nedanstående tider. Välkommen åter.
                    </p>
                    <ul>
                      <li>Sänds: 13 juli 2021, 19:00 - 20:00</li>
                      <li>Sänds: 20 juli 2021, 19:00 - 20:00</li>
                      <li>Sänds: 27 juli 2021, 19:00 - 20:00</li>
                    </ul>
                  </div>
                  <div>
                    {data.allAirtable.edges.map(({ node: day }) => {
                      const now = "2021-07-13T19:00:00.000Z" //dayjs().add(2, "hour").toISOString()
                      const end = dayjs(day.data.Datum)
                        .add(1, "day")
                        .toISOString()

                      if (now < day.data.Datum || end < now) {
                        return null
                      } else {
                        return (
                          <>
                            <h2>
                              {dayjs(day.data.Datum)
                                .locale("sv")
                                .format("DD MMMM, YYYY")}{" "}
                              - Titta nu
                            </h2>
                            <Video>
                              <iframe
                                src={day.data.Video}
                                width="640"
                                height="360"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </Video>
                          </>
                        )
                      }
                    })}
                  </div>
                </Grid>
              </div>
            </Wrap>
          </Section>
          <Section bg="white">
            <Wrap>
              <h2>Program</h2>
              {data.allAirtable.edges.map(day => {
                return <ProgramDay day={day} />
              })}
            </Wrap>
          </Section>
          {/*
        <Section>
          <Wrap>
            {data.allAirtable.edges.map(({ node: day }) => {
              const now = dayjs().add(2, "hour").toISOString()
              console.log(day.data.Datum, now)
              if ("2021-07-13T19:00:00.000Z" < day.data.Datum) {
                return null
              } else {
                return (
                  <>
                    <h2>
                      {dayjs(day.data.Datum)
                        .locale("sv")
                        .format("DD MMMM, YYYY")}
                    </h2>
                    <iframe
                      src={day.data.Video}
                      width="640"
                      height="360"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </>
                )
              }
            })}
          </Wrap>
          </Section>*/}
        </div>
      </Styles>
    </Layout>
  )
}

export default LivePage

const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  max-width: 100%;
  iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
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

export const pageQuery = graphql`
  query getAllProgramDataThree {
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
            Video
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
