import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import { Section, Wrap } from "../../components/styled"

const PageLayout = ({ children }) => {
  const images = useStaticQuery(graphql`
    query getEventPageMainImage {
      allFile(filter: { relativeDirectory: { eq: "eventPage" } }) {
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
      <Section space="30px 0px 0px 0px">
        <Wrap>
          <Hero>
            <h1 style={{ maxWidth: "500px" }}>
              <span>Kulijuli 2021</span> Skånes största allsångsevenemang
            </h1>
            <a href="#" className="button">
              Köp biljetter
            </a>
            <Img
              className="backdrop"
              fluid={images.allFile.edges[0].node.childImageSharp.fluid}
            />
          </Hero>
          <PageNav>
            <li>
              <Link activeClassName="active" to="/kulijuli-2021">
                Om Kulijuli 2021
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/kulijuli-2021/program">
                Program
              </Link>
            </li>
          </PageNav>
        </Wrap>
      </Section>
      {children}
    </Layout>
  )
}

export default PageLayout

const Hero = styled.div`
  color: white;
  padding: 30px;
  border-radius: 4px;
  background: var(--c-pri);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  .button {
    z-index: 1;
    text-decoration: none;
    color: black;
    background: var(--c-sec);
    display: flex;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    align-self: flex-start;
  }
  .latest-podcast {
    max-width: 560px;
    margin: 0 auto;
  }
  h1 {
    z-index: 1;
    span {
      display: block;
      font-size: 60%;
      color: var(--c-sec);
    }
  }
`
const PageNav = styled.ul`
  max-width: 700px;
  margin: 0px auto;
  margin-top: 30px;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;

  li {
    margin: 0px;
    width: 99%;
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0px;
    }

    a {
      width: 100%;
      text-align: center;
      display: inline-block;
      padding: 20px 15px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      text-decoration: none;
      color: inherit;
      font-weight: 700;
      background: #ffffff90;

      &:hover {
        background: white;
      }

      &.active {
        background: white;
        box-shadow: 0px -14px 19px #00000005;
      }
    }
  }
`
