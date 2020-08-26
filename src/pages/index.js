import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Wrap, Section, Grid } from "../components/styled"
import styled from "styled-components"

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
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
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
            <ContentBlock to="/" id="main-block">
              <h2>
                <span>Kulijuli 2021</span> Skånes största allsångsevenemang
              </h2>

              <Link className="button" to="/kulijuli-2021">
                Läs mer
              </Link>
              <Img
                className="backdrop"
                fluid={images.allFile.edges[0].node.childImageSharp.fluid}
              />
            </ContentBlock>
            <ContentBlock to="/" id="secondary-block">
              <h2>
                <span>Kulijulipodden</span>
                Skånes bästa podcast
              </h2>

              <Link className="button" to="/podcast">
                Lyssna nu
              </Link>
            </ContentBlock>
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
          <SectionLatestPodcast />
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

const ContentBlock = styled(Link)`
  height: 400px;
  position: relative;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;

  a.button {
    display: flex;
    padding: 15px 30px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    align-self: flex-start;
    margin-top: 30px;
  }

  &#main-block {
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

    a.button {
      background: var(--c-sec);
      color: black;
      z-index: 1;
    }
  }

  &#secondary-block {
    background: var(--c-sec);

    h2 {
      font-size: 2rem;
      span {
        display: block;
        font-size: 60%;
        margin-bottom: 5px;
        color: var(--c-pri);
      }
    }

    a.button {
      background: var(--c-pri);
      color: white;
    }
  }
`
