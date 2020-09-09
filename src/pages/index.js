import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Wrap, Section, Grid } from "../components/styled"

import SectionArticles from "../components/sections/articles"
import SectionLatestPodcast from "../components/sections/latestPodcast"
import SectionSocialCalls from "../components/sections/socialCalls"
import SectionSponsors from "../components/sections/sponsors"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query getFrontPageImages {
      allFile(filter: { relativeDirectory: { eq: "frontPage" } }) {
        edges {
          node {
            id
            large: childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Kulijuli - Skånes största allsångsevenemang" />
      <Section>
        <Wrap>
          <Grid cols="2fr 1fr">
            <ContentBlockOne to="/kulijuli-2021">
              <h2>
                <span>Kulijuli 2021</span>Skåne största allsångsevenemang
              </h2>
              <div className="button">Läs mer</div>
              <Img
                className="backdrop"
                fluid={images.allFile.edges[0].node.large.fluid}
              />
            </ContentBlockOne>
            <ContentBlockTwo to="/podcast">
              <h2 style={{ zIndex: "2" }}>
                <span>Kulijulipodden</span>
                Skånes bästa podcast
              </h2>

              <div style={{ zIndex: "2" }} className="button">
                Lyssna nu
              </div>
            </ContentBlockTwo>
          </Grid>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <SectionArticles />
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <SectionSocialCalls />
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <SectionSponsors />
        </Wrap>
      </Section>
    </Layout>
  )
}

export default IndexPage

const ContentBlockOne = styled(Link)`
  height: 300px;
  position: relative;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  overflow: hidden;

  .button {
    display: flex;
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    align-self: flex-start;
  }

  background: var(--c-pri);
  color: white;
  h2 {
    font-size: 2rem;
    span {
      display: block;
      font-size: 60%;
      margin-bottom: 5px;
      color: var(--c-sec);
    }
  }
  h2,
  p {
    max-width: 400px;
    z-index: 1;
  }

  .button {
    background: var(--c-sec);
    color: black;
    z-index: 1;
  }
`
const ContentBlockTwo = styled(Link)`
  height: 300px;
  position: relative;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  background: var(--c-sec);

  overflow: hidden;

  .button {
    display: flex;
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    align-self: flex-start;
  }

  h2 {
    font-size: 2rem;
    span {
      display: block;
      font-size: 60%;
      margin-bottom: 5px;
      color: var(--c-pri);
    }
  }

  .button {
    background: var(--c-pri);
    color: white;
  }
`
