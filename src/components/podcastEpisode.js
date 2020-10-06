import React from "react"
import styled from "styled-components"

import { Grid } from "../components/styled"

const Episode = ({ episode }) => {
  const podcastUrl = episode.frontmatter.spotify_url.split(":")[2]
  console.log(podcastUrl)
  return (
    <EpisodeContainer>
      <Grid cols="2fr 1fr">
        <iframe
          src={`https://open.spotify.com/embed-podcast/episode/${podcastUrl}`}
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <div className="podcast-meta">
          <dl>
            <dt>Avsnittets sponsor</dt>
            <dd>{episode.frontmatter.sponsorName}</dd>
            <dt>Gäster</dt>
            <dd>{episode.frontmatter.guests}</dd>
            <dt>Vinnare av tävling</dt>
            <dd>{episode.frontmatter.competitionWinner}</dd>
          </dl>
        </div>
      </Grid>
    </EpisodeContainer>
  )
}

export default Episode

const EpisodeContainer = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #d8d8d8;
  dl {
    dt {
      font-weight: 700;
    }
    dd {
      margin-left: 0px;
      margin-bottom: 15px;
    }
  }
`
