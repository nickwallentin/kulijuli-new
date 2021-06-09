import { Section, Wrap } from "../../components/styled"

import Layout from "../../components/layout"
import React from "react"
import SEO from "../../components/seo"
import styled from "styled-components"
import usePressData from "../../queries/usePressData"

const Press = () => {
  const press = usePressData()
  return (
    <Layout>
      <SEO title="Press" />
      <Section>
        <Wrap>
          <h1>Kulijuli i media</h1>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <PressList>
            {press.map(({ node: article }) => {
              console.log(article)
              return (
                <li key={article.data.Rubrik}>
                  <a
                    href={article.data.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="title">{article.data.Rubrik}</h4>
                    <div className="date">
                      Publicerades {article.data.Datum}
                    </div>
                  </a>
                </li>
              )
            })}
          </PressList>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default Press

const PressList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  h4 {
    margin: 0px;
  }
  .date {
    opacity: 0.7;
  }
  li {
    margin: 0px;
    border-bottom: 1px solid #d8d8d8;
    &:last-child {
      border-bottom: 0px;
    }
  }
  a {
    color: black;
    text-decoration: none;
    padding: 1rem 0px;
    margin: 0px;
    display: inline-block;

    &:hover {
      .title {
        text-decoration: underline;
      }
    }
  }
`
