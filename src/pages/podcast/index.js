import React, { useState } from "react"
import styled from "styled-components"

import PageLayout from "./layout"
import SEO from "../../components/seo"

import { Wrap, Section, Grid } from "../../components/styled"

const PodcastPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <PageLayout setTab={setTabIndex} tabIndex={tabIndex}>
      <SEO title="Kulijulipodden" />

      <Section
        space="4rem 0rem"
        bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          {tabIndex === 0 ? (
            <React.Fragment>
              <Grid style={{ marginBottom: "2rem" }} cols="1fr 2fr">
                <div>
                  <figure>img</figure>
                </div>
                <div>
                  <h2>Programvärdar</h2>
                  <p>
                    Kulijuli-podden leds av programvärdarna Dennis Westerberg
                    och Lena Bergkvist, och bjuder på spännande samtal,
                    med fokus på musik, upplevelser och personliga
                    livsberättelser
                  </p>
                </div>
              </Grid>
              <Grid style={{ marginBottom: "2rem" }} cols="2fr 1fr">
                <div>
                  <h2>Glädje och samhörighet</h2>
                  <p>
                    Ambitionen är ingen annan än "att skapa en allt mer
                    kärleksfull och gladare värld att leva i" – en härlig
                    blandning av det lokala, det regionala och det nationella.
                  </p>
                </div>
                <div>
                  <figure>img</figure>
                </div>
              </Grid>
            </React.Fragment>
          ) : (
            <h2>Alla avsnitt</h2>
          )}
        </Wrap>
      </Section>
    </PageLayout>
  )
}

export default PodcastPage

const Hero = styled.div`
  text-align: center;
  .button.subtle {
    padding: 5px 15px;
    background: #00000010;
    color: inherit;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .latest-podcast {
    max-width: 600px;
    margin: 0 auto;
  }
  h1 {
    span {
      display: block;
      font-size: 60%;
      color: var(--c-pri);
    }
  }
`