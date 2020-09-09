import React, { useState } from "react"

import PageLayout from "./layout"
import SEO from "../../components/seo"

import { Wrap, Section, Grid } from "../../components/styled"

const PodcastPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <PageLayout setTab={setTabIndex} tabIndex={tabIndex}>
      <SEO title="Kulijulipodden" />

      <Section
        space="4rem 0rem"
        bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          {tabIndex === 1 ? (
            <React.Fragment>
              <div style={{ marginBottom: "2rem" }}>
                <div>
                  <h2>Programvärdar</h2>
                  <p>
                    Kulijuli-podden leds av programvärdarna Dennis Westerberg
                    och Lena Bergkvist, och bjuder på spännande samtal,
                    med fokus på musik, upplevelser och personliga
                    livsberättelser
                  </p>
                </div>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <div>
                  <h2>Glädje och samhörighet</h2>
                  <p>
                    Ambitionen är ingen annan än "att skapa en allt mer
                    kärleksfull och gladare värld att leva i" – en härlig
                    blandning av det lokala, det regionala och det nationella.
                  </p>
                </div>
              </div>
              <div style={{ marginBottom: "2rem" }} cols="1fr">
                <div>
                  <h2>Nytt avsnitt varannan vecka</h2>
                  <p>
                    Varje avsnitt är 60 minuter långt, och varvar intervjuer och
                    samtal med musik, tävlingar och lokala inslag. Podden kommer
                    ut varannan vecka, och släpps via www.kulijuli.se, samt
                    finns tillgänglig på alla de plattformar där poddar
                    vanligtvis går att finna (Spotify, iTunes, Acast och
                    Podcaster).
                  </p>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h2>Alla avsnitt</h2>
              <p>Kommer snart</p>
            </React.Fragment>
          )}
        </Wrap>
      </Section>
    </PageLayout>
  )
}

export default PodcastPage
