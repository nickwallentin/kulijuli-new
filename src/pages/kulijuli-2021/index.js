import { Grid, Section, Wrap } from "../../components/styled"
import { graphql, useStaticQuery } from "gatsby"

import CreandiaLogo from "../../assets/creandia-logo.svg"
import Img from "gatsby-image"
import PageLayout from "./layout"
import React from "react"
import SEO from "../../components/seo"
import styled from "styled-components"

const EventPage = () => {
  const images = useStaticQuery(graphql`
    query getEventPageImages {
      allFile(
        filter: { relativeDirectory: { eq: "eventPage" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

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
              <Img
                style={{ borderRadius: "4px" }}
                fluid={images.allFile.edges[1].node.childImageSharp.fluid}
              />
            </div>
            <div className="flex">
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
            <div className="flex">
              <h2>En tradition i över 50 år.</h2>
              <p>
                I över femtio år har det populära allsångs-evenemanget
                genomförts. Mängder av artister har mött publiken i nöjesgrytan,
                exempelvis Eric Saade, Sanna Nielsen, Hasse Andersson, Marianne
                Mörck, Christer Sjögren, Christina Lindberg, Adde Malmberg,
                Jessica Andersson, Jan Johansen m.fl.
              </p>
            </div>
            <div>
              <Img
                style={{ borderRadius: "4px" }}
                fluid={images.allFile.edges[2].node.childImageSharp.fluid}
              />
            </div>
          </Grid>
          <Grid style={{ marginBottom: "3rem" }} cols="1fr 2fr">
            <div>
              <Img
                style={{ borderRadius: "4px" }}
                fluid={images.allFile.edges[3].node.childImageSharp.fluid}
              />
            </div>
            <div className="flex">
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
            <div className="flex">
              <h2>Varierat utbud av akter.</h2>
              <p>
                Kulijuli erbjuder det mesta av det bästa av regionens utbud –
                där lokala och regionala intressenter får möjlighet att visa upp
                sig och sin verksamhet – i kombination med nationella akter i
                absolut toppklass.
              </p>
            </div>
            <div>
              <Img
                style={{ borderRadius: "4px" }}
                fluid={images.allFile.edges[4].node.childImageSharp.fluid}
              />
            </div>
          </Grid>
          <HostSection style={{ marginBottom: "3rem" }}>
            <Img fluid={images.allFile.edges[5].node.childImageSharp.fluid} />
            <div className="flex">
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
            <CreandiaLogo style={{ width: "100%" }} />
            <div className="flex">
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
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`
