import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Wrap, Section, Grid } from "../components/styled"

const HxPage = () => {
  const images = useStaticQuery(graphql`
    query getHxPageImages {
      allFile(
        filter: { relativeDirectory: { eq: "hxPage/2020" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(images.allFile)
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
                width="100%"
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
          <Grid style={{ marginBottom: "3rem" }} cols="1fr 2fr">
            <Img
              style={{ borderRadius: "4px" }}
              fluid={images.allFile.edges[0].node.childImageSharp.fluid}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2>Kulijuli + Hx-Festivalen = Hx-Grytan.</h2>
              <p>
                Hx-Grytan är ett arrangemang som kombinerar det bästa av två
                världar. Nämligen ett evenemang under Hx-Festivalen, som bjuder
                på en Kulijulispecial, med pärlor från sommarens allsångsfest.
              </p>
            </div>
          </Grid>
          <Grid style={{ marginBottom: "3rem" }} cols="2fr 1fr">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2>Hx-Grytan sändes live för första gången.</h2>
              <p>
                Den 31 juli, 2020, tog Hx-Festivalen form som ett online-event,
                med Hx-Grytan som ett av de mest populära inslagen. I den
                tillfälliga "TV-studion” gästades vi av Glenn Borgkvist, Anna
                Pauline, Maja Gullstrand , Johan Östberg, Kathleen Lorenzen, Kim
                Bergkvist och Andreas Eldeen. Även Kulijuli-legendaren Olle
                Larsson var på plats och välsignade eventet med sin närvaro.
              </p>
            </div>
            <Img
              style={{ borderRadius: "4px" }}
              fluid={images.allFile.edges[1].node.childImageSharp.fluid}
            />
          </Grid>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default HxPage

const Hero = styled.div`
  text-align: center;
  .featured {
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
