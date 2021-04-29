import React, { useState } from "react"

import { Grid } from "../components/styled"
import InfoIcon from "../assets/info.svg"
import styled from "styled-components"

const Episode = ({ episode, showMore }) => {
  const [readMore, setReadMore] = useState(false)

  const numGuests = episode.data.G_ster.length
  console.log(episode.data.Sponsor)
  const hasSponsor = episode.data.Sponsor ? true : false

  const getId = () => {
    const x = episode.data.spotifyURL.split("/")

    const id = x[4].split("?")[0]
    console.log(id)
    return id
  }
  const podcastUrl = getId()

  return (
    <EpisodeContainer>
      <Grid cols="3fr 1fr">
        <div className="info">
          <h3>{episode.data.Rubrik}</h3>
          <p>{episode.data.Beskrivning}</p>
        </div>
        <iframe
          src={`https://open.spotify.com/embed-podcast/episode/${podcastUrl}`}
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Grid>
    </EpisodeContainer>
  )
}

export default Episode

const EpisodeContainer = styled.div`
  padding: 20px;
  border-radius: 4px;
  margin: 20px 0px;
  background: #f2f2f2;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .podcast-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    svg {
      path {
        fill: #bbbbbb;
      }
    }
  }
  dl {
    dt {
      font-weight: 700;
    }
    dd {
      margin-left: 0px;
      margin-bottom: 5px;
    }
  }
`
