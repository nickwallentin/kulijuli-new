import React from "react"
import styled from "styled-components"

import InstagramIcon from "../../assets/instagram-icon.svg"
import FacebookIcon from "../../assets/facebook-icon.svg"

const SectionSocialCalls = () => {
  return (
    <React.Fragment>
      <h2>Mer av Kulijuli</h2>
      <SocialBlocks>
        <a
          href="https://www.instagram.com/kulijulinojesgrytan/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <InstagramIcon />
          <h4>Följ oss på Instagram</h4>
          <p>Följ med Kulijuli bakom rampljuset.</p>
        </a>
        <a
          href="https://www.facebook.com/kulijulinojesgrytan"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FacebookIcon />
          <h4>Följ oss på Facebook</h4>
          <p>Se exklusivt innehåll från Kulijuli.</p>
        </a>
      </SocialBlocks>
    </React.Fragment>
  )
}

export default SectionSocialCalls

const SocialBlocks = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  & > a {
    padding: 30px 20px;
    background: white;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    text-align: center;

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }

    svg {
      transition: all 200ms;
      width: 44px;
      height: 44px;
      margin-bottom: 10px;
      path {
        fill: white;
      }
    }

    h4 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 0px;
    }
  }
  .instagram {
    background: rgb(254, 218, 117);
    background: linear-gradient(
      318deg,
      rgba(254, 218, 117, 1) 0%,
      rgba(250, 126, 30, 1) 10%,
      rgba(215, 41, 118, 1) 20%,
      rgba(150, 48, 190, 1) 40%,
      rgba(78, 91, 213, 1) 100%
    );

    &:hover {
      background: rgb(254, 218, 117);
      background: linear-gradient(
        318deg,
        rgba(254, 218, 117, 1) 0%,
        rgba(250, 126, 30, 1) 10%,
        rgba(215, 41, 118, 1) 30%,
        rgba(150, 48, 190, 1) 60%,
        rgba(78, 91, 213, 1) 100%
      );
    }
  }

  .facebook {
    background: rgb(49, 93, 248);
    background: linear-gradient(
      159deg,
      rgba(49, 93, 248, 1) 0%,
      rgba(89, 118, 248, 1) 68%,
      rgba(153, 196, 247, 1) 100%
    );
    &:hover {
      background: rgb(49, 93, 248);
      background: linear-gradient(
        159deg,
        rgba(49, 93, 248, 1) 0%,
        rgba(89, 118, 248, 1) 51%,
        rgba(153, 196, 247, 1) 100%
      );
    }
  }
`
