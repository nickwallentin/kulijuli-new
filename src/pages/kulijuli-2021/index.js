import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import PageLayout from "./layout"
import SEO from "../../components/seo"

import { Wrap, Section, Grid } from "../../components/styled"

const EventPage = () => {
  return (
    <PageLayout>
      <SEO title="Kulijuli 2021: Skånes stora allsång" />

      <Section
        space="4rem 0rem"
        bg="linear-gradient(0deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          <Grid style={{ marginBottom: "3rem" }} cols="1fr 2fr">
            <div>
              <figure>img</figure>
            </div>
            <div>
              <h2>Skånes största allsångsevenemang.</h2>
              <p>
                Kulijuli är Skånes största allsångsevenemang – ett
                nöjesarrangemang som i mångt och mycket påminner om ”Allsång på
                Skansen” och ”Lotta på Liseberg”. Tre tisdagskvällar i juli
                samlas varje år omkring 10.000 människor i Nöjesgrytan, i
                Slottshagen [Helsingborg] för att njuta av ett varierat utbud av
                folkkära och rikskända underhållare för alla smaker.
              </p>
            </div>
          </Grid>
          <Grid style={{ marginBottom: "3rem" }} cols="2fr 1fr">
            <div>
              <h2>Pågått i över 50 år.</h2>
              <p>
                I över femtio år har det populära allsångs-evenemanget
                genomförts. Mängder av artister har mött publiken i nöjesgrytan,
                exempelvis Eric Saade, Sanna Nielsen, Hasse Andersson, Marianne
                Mörck, Christer Sjögren, Christina Lindberg, Adde Malmberg,
                Jessica Andersson, Jan Johansen m.fl.
              </p>
            </div>
            <div>
              <figure>img</figure>
            </div>
          </Grid>
          <Grid style={{ marginBottom: "3rem" }} cols="1fr 2fr">
            <div>
              <figure>img</figure>
            </div>
            <div>
              <h2>Lokal och glädjefylld underhållning.</h2>
              <p>
                Evenemanget karaktäriseras av ett glatt programvärdskap, lokala
                och nationellt erkända förmågor, föreningar, allsång, tävlingar,
                utlottningar, lekar, trailers, intervjuer och annan typ av
                underhållning som traditionen påbjuder: festligt, folkligt, och
                fullsatt.
              </p>
            </div>
          </Grid>
          <Grid style={{ marginBottom: "3rem" }} cols="2fr 1fr">
            <div>
              <h2>Varierat utbud av akter.</h2>
              <p>
                Kulijuli erbjuder det mesta av det bästa av regionens utbud –
                där lokala och regionala intressenter får möjlighet att visa upp
                sig och sin verksamhet – i kombination med nationella akter i
                absolut toppklass.
              </p>
            </div>
            <div>
              <figure>img</figure>
            </div>
          </Grid>
          <HostSection style={{ marginBottom: "3rem" }}>
            <figure>image</figure>
            <div>
              <h2>Programvärdar</h2>
              <p>
                Kulijuli leds av programvärdarna Dennis Westerberg och Lena
                Bergkvist.
              </p>
              <p>
                Det äkta paret (jo… de är gifta… på riktigt) tog över värdskapet
                år 2020, efter att nöjesmogulen Olle Larsson hållit i trådarna i
                33 år.
              </p>
              <p>
                Dennis och Lena har lång erfarenhet av att producera och leda
                evenemang av detta slag, exempelvis som producenter för olika
                stads- och kommunfestivaler i södra Sverige (exempelvis
                Landskronakarnevalen och Bjuvsfesten).
              </p>
              <p>
                Dennis Westerberg, som vanligtvis arbetar som föreläsare och
                moderator (utnämnd till ”Årets föreläsare 2015), tar huvudrollen
                som programledare, medan Lena Bergkvist, som står bakom upplägg,
                fungerar som ”side-kick”.
              </p>
            </div>
          </HostSection>
          <Grid cols="1fr 2fr">
            <figure>img</figure>
            <div>
              <h2>Produktion</h2>
              <p>
                Kulijuli produceras av Creandia Event & Kommunikation – ett
                välrenommerat evenemangsbolag, med verksamhet i södra Sverige.
                Creandia har lång erfarenhet av att arbeta med stora
                produktioner, och med artistbokning.
              </p>
            </div>
          </Grid>
        </Wrap>
      </Section>
    </PageLayout>
  )
}

export default EventPage

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

const HostSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  figure {
    background: var(--c-sec);
    margin: 0;
  }
  & > div {
    padding: 30px;
  }
`
