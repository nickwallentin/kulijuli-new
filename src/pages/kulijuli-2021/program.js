import React from "react"

import PageLayout from "./layout"
import SEO from "../../components/seo"

import { Wrap, Section, Message } from "../../components/styled"

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
          <Message>Programmet kommer under 2021.</Message>
        </Wrap>
      </Section>
    </PageLayout>
  )
}

export default ProgramPage
