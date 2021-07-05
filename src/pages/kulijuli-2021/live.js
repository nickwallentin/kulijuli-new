import "dayjs/locale/sv"

import { Section, Wrap } from "../../components/styled"

import Layout from "../../components/layout"
import React from "react"
import dayjs from "dayjs"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

const LivePage = () => {
  const data = useStaticQuery(graphql`
    query getDates {
      allAirtable(filter: { table: { eq: "Datum" } }) {
        edges {
          node {
            id
            data {
              Datum
              Video
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}>
        <Section>
          <Wrap>
            <h1>Kulijuli - TV-versionen</h1>
            <p>
              På den här sidan kommer du att kunna del av Kulijulis
              TV-sändningar enligt nedanstående tider. Välkommen åter.
            </p>
            <ul>
              <li>Sänds: 13 juli 2021, 19:00 - 20:00</li>
              <li>Sänds: 20 juli 2021, 19:00 - 20:00</li>
              <li>Sänds: 27 juli 2021, 19:00 - 20:00</li>
            </ul>
          </Wrap>
        </Section>

        <Section>
          <Wrap>
            {data.allAirtable.edges.map(({ node: day }) => {
              const now = dayjs().add(2, "hour").toISOString()
              console.log(day.data.Datum, now)
              if (now < day.data.Datum) {
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
        </Section>
      </div>
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
