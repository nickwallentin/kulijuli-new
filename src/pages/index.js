import { Grid, Section, Wrap } from "../components/styled"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import SectionArticles from "../components/sections/articles"
import SectionLatestPodcast from "../components/sections/latestPodcast"
import SectionSocialCalls from "../components/sections/socialCalls"
import SectionSponsors from "../components/sections/sponsors"
import styled from "styled-components"

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
      <SEO title="Skånes största allsångsevenemang" />
      <Section>
        <Wrap>
          <Grid cols="2fr 1fr">
            <ContentBlockOne to="/kulijuli-2021/live">
              <h2>
                <span>Kulijuli 2021</span>TV-sändningen:
              </h2>
              <p>13, 20 och 27 juli, kl 19.00</p>
              <Link to="/kulijuli-2021/live" className="button">
                Se programmet
              </Link>
              <Img
                className="backdrop"
                fluid={images.allFile.edges[0].node.large.fluid}
              />
            </ContentBlockOne>
            <ContentBlockTwo to="/podcast">
              <h2 style={{ zIndex: "2" }}>
                <span>Kulijulipodden</span>
                Skånes trevligaste podcast
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
          <SectionSponsors />
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <SectionSocialCalls />
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
