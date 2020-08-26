import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrap } from "../components/styled"

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
                <Link to="/podcast">Podcast</Link>
              </li>
              <li>
                <Link to="/hx-grytan">Hx-Grytan</Link>
              </li>
              <li>
                <Link to="/nyheter">Nyheter</Link>
              </li>
              <li>
                <Link to="/om">Om Kulijuli</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Följ oss</h4>
            <ul>
              <li>
                <Link to="/kulijuli-2021">Instagram</Link>
              </li>
              <li>
                <Link to="/podcast">Facebook</Link>
              </li>
              <li>
                <Link to="/kulijuli-2021">Nyhetsbrev</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Press</h4>
            <ul>
              <li>
                <Link to="/kulijuli-2021">Kulijuli i Media</Link>
              </li>
              <li>
                <Link to="/podcast">Grafiskt material</Link>
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
    grid-template-columns: 1fr 1fr 1fr;
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
  }

  .bottom-site-info {
    text-align: center;
    font-size: 0.8rem;
    border-top: 1px solid #ffffff40;
    padding-top: 20px;
    color: white;
  }
`
