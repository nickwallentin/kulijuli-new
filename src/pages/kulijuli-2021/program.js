import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import PageLayout from "./layout"
import SEO from "../../components/seo"

import { Wrap, Section, Grid } from "../../components/styled"

const ProgramPage = () => {
  return (
    <PageLayout>
      <SEO title="Kulijuli 2021: Skånes stora allsång" />

      <Section
        space="4rem 0rem"
        bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          <h2>Program</h2>
        </Wrap>
      </Section>
    </PageLayout>
  )
}

export default ProgramPage

const Hero = styled.div`
  color: white;
  padding: 30px;
  border-radius: 4px;
  background: var(--c-pri);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .latest-podcast {
    max-width: 560px;
    margin: 0 auto;
  }
  h1 {
    span {
      display: block;
      font-size: 60%;
      color: var(--c-sec);
    }
  }
`
