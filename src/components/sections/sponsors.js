import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import useSponsorData from "../../queries/useSponsorData"

const SectionSponsors = () => {
  const s = useSponsorData()

  const main = s?.filter(({ node: item }) => item.data.Typ === "Guldsponsor")
  const sponsors = s?.filter(
    ({ node: item }) => item.data.Typ !== "Guldsponsor"
  )
  return (
    <React.Fragment>
      <h2>Sponsorer</h2>
      <Sponsors>
        {main?.map(({ node: sponsor }) => (
          <div className="main" key={sponsor.data.F_retag}>
            <a
              href={sponsor?.data?.HemsidaURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <Img
                  fluid={
                    sponsor?.data?.Logo?.localFiles[0].childImageSharp.fluid
                  }
                />
              </figure>
              <h2>{sponsor?.data?.F_retag}</h2>
            </a>
          </div>
        ))}
        {sponsors?.map(({ node: sponsor }) => (
          <div key={sponsor?.data?.F_retag}>
            <a
              href={sponsor?.data?.HemsidaURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <Img
                  fluid={
                    sponsor?.data?.Logo?.localFiles[0].childImageSharp.fluid
                  }
                />
              </figure>
              <h2>{sponsor?.data?.F_retag}</h2>
            </a>
          </div>
        ))}
      </Sponsors>
    </React.Fragment>
  )
}

export default SectionSponsors

const Sponsors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  a {
    text-decoration: none;
    h2 {
      font-size: 1.2rem !important;
      color: black;
      text-align: center;
    }
  }
  .main {
    grid-area: span 2 / span 2;
  }
`
