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
          {tabIndex === 0 ? (
            <React.Fragment>
              <div style={{ marginBottom: "2rem" }}>
                <div>
                  <h2>Programvärdar</h2>
                  <p>
                    Kulijuli-podden leds av programvärdarna Dennis Westerberg
                    och Lena Bergkvist, och bjuder på spännande samtal,
                    med fokus på musik, upplevelser och personliga
                    livsberättelser.
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
          ) : null}
        </Wrap>
      </Section>
      {popup && (
        <React.Fragment>
          <Overlay onClick={() => handlePopup()} />
          <Popup>
            <div className="popup-header">
              <strong>Avsnitt #{popupContent.data.Avsnitt}</strong>{" "}
              <span onClick={() => handlePopup()}>
                <CloseIcon />
              </span>
            </div>
            <div className="popup-content">
              <span>Utgiven: {popupContent.data.Utgiven}</span>
              <h3>{popupContent.data.Rubrik}</h3>

              <p>{popupContent.data.Beskrivning}</p>
              <dl className="popup-meta">
                <Grid>
                  <div>
                    <dt>Gäster</dt>
                    <dd>
                      {popupContent.data.G_ster.map((guest, index) => {
                        if (popupContent.data.G_ster.length > index + 1) {
                          return <span>{`${guest.data.Namn}, `}</span>
                        } else {
                          return <span>{guest.data.Namn}</span>
                        }
                      })}
                    </dd>
                  </div>

                  <div>
                    {popupContent.data.Sponsor && (
                      <React.Fragment>
                        <dt>Sponsor</dt>
                        <dd>{popupContent.data.Sponsor}</dd>
                      </React.Fragment>
                    )}
                  </div>

                  <div>
                    <dt>Låtar</dt>
                    <dd style={{ whiteSpace: "pre-wrap" }}>
                      {popupContent.data.L_tar}
                    </dd>
                  </div>
                  <div>
                    <dt>Omnämnda</dt>
                    <dd style={{ whiteSpace: "pre-wrap" }}>
                      {popupContent.data.Omn_mnda}
                    </dd>
                  </div>
                </Grid>
              </dl>
            </div>
          </Popup>
        </React.Fragment>
      )}
    </PageLayout>
  )
}

export default PodcastPage

const Popup = styled.div`
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 5px;
  overflow-y: scroll;
  z-index: 999;

  & > div {
    padding: 2rem;
  }
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
  }

  .popup-meta {
    font-size: 0.8rem;
  }
`
const Overlay = styled.div`
  z-index: 998;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #00000060;
`
