import React, { useState } from "react"
import styled from "styled-components"

import { Grid } from "../components/styled"

const Episode = ({ episode }) => {
  const [readMore, setReadMore] = useState(false)
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
            <dt>Gäster</dt>
            <dd>{episode.frontmatter.guests}</dd>
            <dt>Vinnare av tävling</dt>
            <dd>{episode.frontmatter.competitionWinner}</dd>
            <dt>Avsnittets sponsor</dt>
            <dd>{episode.frontmatter.sponsorName}</dd>
          </dl>
          <p
            style={{
              padding: "5px 16px",
              background: "#00000015",
              display: "inline-block",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setReadMore(prev => !prev)}
          >
            {readMore ? "Visa mindre" : "Visa mer"}
          </p>
        </div>
      </Grid>
      {readMore && (
        <div className="content">
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: episode.html }}
          ></div>
          <p>
            <strong>Omnämnanden: </strong>
            {episode.frontmatter.mentions}
          </p>
        </div>
      )}
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
      margin-bottom: 5px;
    }
  }
`
