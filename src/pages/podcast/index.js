import { Grid, Section, Wrap } from "../../components/styled"
import React, { useState } from "react"

import CloseIcon from "../../assets/closeMenu.svg"
import Episode from "../../components/podcastEpisode"
import PageLayout from "./layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import usePodcastEpisodes from "../../queries/usePodcastEpisodes"

const PodcastPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [popup, setPopup] = useState(false)
  const [popupContent, setPopupContent] = useState(null)
  const episodes = usePodcastEpisodes()

  const handlePopup = episode => {
    if (episode) {
      setPopupContent(episode)
      setPopup(true)
      console.log(popup, popupContent)
    } else {
      setPopupContent(null)
      setPopup(false)
    }
  }

  return (
    <PageLayout setTab={setTabIndex} tabIndex={tabIndex}>
      <SEO title="Kulijulipodden" />

      <Section
        space="4rem 0rem"
        bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          <div style={{ display: tabIndex === 1 ? "block" : "none" }}>
            <div style={{ marginBottom: "2rem" }}>
              <div>
                <h2>Programvärdar</h2>
                <p>
                  Kulijuli-podden leds av programvärdarna Dennis Westerberg och
                  Lena Bergkvist, och bjuder på spännande samtal, med fokus på
                  musik, upplevelser och personliga livsberättelser.
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
                  ut varannan vecka, och släpps via www.kulijuli.se, samt finns
                  tillgänglig på alla de plattformar där poddar vanligtvis går
                  att finna (Spotify, iTunes, Acast och Podcaster).
                </p>
              </div>
            </div>
          </div>

          <Episodes style={{ display: tabIndex === 0 ? "block" : "none" }}>
            <h2>Avsnitt</h2>
            <div>
              {episodes.map(({ node: e }) => (
                <Episode episode={e} />
              ))}
            </div>
          </Episodes>
        </Wrap>
      </Section>
    </PageLayout>
  )
}

export default PodcastPage

const Episodes = styled.div``
