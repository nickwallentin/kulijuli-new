import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Section, Wrap } from "../../components/styled"
import styled from "styled-components"

const PressMaterialPage = () => {
  return (
    <Layout>
      <SEO />
      <Section>
        <Wrap>
          <h1>Pressmaterial</h1>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <h2>Kulijuli</h2>
          <Download>
            <h3>Logotyper</h3>
            <a
              href="https://www.dropbox.com/sh/7xre8edesl8ecn9/AAA6NodlmY6zMQWxwCFiGiGQa?dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Hämta
            </a>
          </Download>
          <Download>
            <h3>Pressbilder</h3>
            <a
              href="https://www.dropbox.com/sh/gzrxor643qyxwo3/AAAHFjCKXcJ5n1J2P76HId9ta?dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Hämta
            </a>
          </Download>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <h2>Kulijulipodden</h2>
          <Download>
            <h3>Logotyper</h3>
            <a
              href="https://www.dropbox.com/sh/7xre8edesl8ecn9/AAA6NodlmY6zMQWxwCFiGiGQa?dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Hämta
            </a>
          </Download>
          <Download>
            <h3>Pressbilder</h3>
            <a
              href="https://www.dropbox.com/sh/gzrxor643qyxwo3/AAAHFjCKXcJ5n1J2P76HId9ta?dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Hämta
            </a>
          </Download>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default PressMaterialPage

const Download = styled.div`
  background: white;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .button {
    background: var(--c-pri);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }
  h3 {
    margin: 0px;
    font-size: 1.2rem;
  }
`
