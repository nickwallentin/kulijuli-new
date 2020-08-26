import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Wrap, Section, Grid } from "../components/styled"

const HxPage = () => {
  return (
    <Layout>
      <SEO title="Hx-grytan: Kulijuli på Hx-festivalen 2020" />
      <Section>
        <Wrap>
          <Hero>
            <h1>
              Hx-Grytan 2020 <span>Kulijuli på Hx-festivalen</span>
            </h1>
            <div className="featured">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/uycH7c2y_2A"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Hero>
        </Wrap>
      </Section>
      <Section
        space="4rem 0rem"
        bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          <Grid cols="1fr 2fr">
            <div>
              <figure>img</figure>
            </div>
            <div>
              <h2>Kulijuli var en del av Hx-festivalens digitala evenemang.</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </Grid>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default HxPage

const Hero = styled.div`
  text-align: center;
  .latest-podcast {
    max-width: 560px;
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
