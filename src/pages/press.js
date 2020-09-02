import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Wrap } from "../components/styled"

import usePressData from "../queries/usePressData"

const PressPage = () => {
  const press = usePressData()
  return (
    <Layout>
      <SEO title="" />
      <Section>
        <Wrap>
          <h1>
            Press <span>Kulijuli i media</span>
          </h1>
          <PressList>
            {press.map(({ node: article }) => (
              <li>
                <span>{article.frontmatter.published}</span>
                <a
                  href={article.frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <small>{article.frontmatter.url.split("/")[2]}</small>
                  {article.frontmatter.title}
                </a>
              </li>
            ))}
          </PressList>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default PressPage
const PressList = styled.ul`
  list-style-type: none;
  margin: 2rem 0px;
  li {
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin: 0;
    padding: 2rem 0px;
    border-bottom: 1px solid #d8d8d8;
    &:last-of-type {
      border-bottom: 0px;
    }
    span {
      display: flex;
      align-items: center;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 700;
      small {
        display: block;
        font-size: 0.8rem;
        font-weight: 400;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
