import React, { useState } from "react"
import styled from "styled-components"

import { Grid } from "../components/styled"

import InfoIcon from "../assets/info.svg"

const Episode = ({ episode, showMore }) => {
  const [readMore, setReadMore] = useState(false)
  const podcastUrl = episode.data.spotifyUrl.split(":")[2]
  const numGuests = episode.data.G_ster.length
  console.log(episode.data.Sponsor)
  const hasSponsor = episode.data.Sponsor ? true : false

  return (
    <EpisodeContainer>
      <Grid cols="2fr 100px">
        <iframe
          src={`https://open.spotify.com/embed-podcast/episode/${podcastUrl}`}
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <div className="podcast-info">
          <div onClick={() => showMore(episode)}>
            <InfoIcon />
            <p>Läs mer</p>
          </div>
        </div>
      </Grid>
    </EpisodeContainer>
  )
}

export default Episode

const EpisodeContainer = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #d8d8d8;

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
