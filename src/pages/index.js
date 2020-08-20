import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Wrap, Section, Grid } from "../components/styled"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <Wrap>
        <Grid cols="2fr 1fr">
          <TempBlock>1</TempBlock>
          <TempBlock>2</TempBlock>
        </Grid>
      </Wrap>
    </Section>
  </Layout>
)

export default IndexPage

const TempBlock = styled.div`
  height: 400px;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
`
