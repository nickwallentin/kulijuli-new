import { Link } from "gatsby"
import React from "react"
import { Wrap } from "../components/styled"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrap>
      <StyledFooter>
        <div className="footer-columns">
          <div>
            <h4>Kulijuli</h4>
            <ul>
              <li>
                <Link to="/kulijuli-2021">Kulijuli 2021</Link>
              </li>
              <li>
                <Link to="/podcast">Kulijulipodden</Link>
              </li>
              <li>
                <Link to="/hx-grytan-2020">Hx-Grytan 2020</Link>
              </li>
              <li>
                <Link to="/nyheter">Nyheter</Link>
              </li>
              <li>
                <Link to="/sponsorer">Sponsorer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Socialt</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/kulijulinojesgrytan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/kulijulinojesgrytan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Press</h4>
            <ul>
              <li>
                <Link to="/press/material">Pressmaterial</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="mailto:info@kulijuli.se">info@kulijuli.se</a>
              </li>
              <li>
                <a href="tel:0739693636">073-969 36 36</a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/messages/t/kulijulinojesgrytan"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Chatta med oss
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-site-info">
          Copyright © Kulijuli {new Date().getFullYear()}. Alla rättigheter
          reserverade. Skapad med kärlek av Creandia.
        </div>
      </StyledFooter>
    </Wrap>
  )
}

export default Footer

const StyledFooter = styled.footer`
  padding: 30px;
  background: var(--c-pri);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: white;

  .footer-columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;
    h4 {
      color: var(--c-sec);
    }
    ul {
      padding: 0px;
      margin: 0px;
      list-style-type: none;
      li {
        margin-bottom: 5px;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .bottom-site-info {
    text-align: center;
    font-size: 0.8rem;
    border-top: 1px solid #ffffff40;
    padding-top: 20px;
    color: white;
  }
`
