import React, { useState } from "react"

import { Grid } from "../components/styled"
import SpotifyIcon from "../assets/spotify.svg"
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
        <a href={episode.data.spotifyURL} target="_blank" className="play">
          <SpotifyIcon /> Lyssna nu
          <span>Denna länk tar dig till avsnittet på Spotify.</span>
        </a>
        {/*
          <iframe
            src={`https://open.spotify.com/embed-podcast/episode/${podcastUrl}`}
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        */}
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

  .play {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: #00000010;
    transition: all 200ms;
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    color: black;
    span {
      font-size: 14px;
      text-align: center;
      line-height: 18px;
      font-weight: 400;
      margin-top: 0.3rem;
      opacity: 0.6;
    }
    svg {
      height: 44px;
      width: 44px;
      margin-bottom: 1rem;
    }
    &:hover {
      background: #00000020;
      text-decoration: underline;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0px;
    }
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
