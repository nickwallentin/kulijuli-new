import { Section, Wrap } from "../../components/styled"

import Layout from "../../components/layout"
import React from "react"

const LivePage = () => {
  return (
    <Layout>
      <Section>
        <Wrap>
          <h1>Kulijuli - Digitalversionen</h1>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <h2>Sänds:</h2>
          <ul>
            <li>Sänds: 13 juli 2021, 19:00 - 20:00</li>
            <li>Sänds: 20 juli 2021, 19:00 - 20:00</li>
            <li>Sänds: 27 juli 2021, 19:00 - 20:00</li>
          </ul>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default LivePage
