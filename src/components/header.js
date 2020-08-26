import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

import Logo from "../assets/kulijuli-logo.svg"

import { Wrap } from "../components/styled"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrap>
      <div id="links">
        <div id="left">
          <Link to="/kulijuli-2021">Kulijuli 2021</Link>
          <Link to="/podcast">Podcast</Link>
        </div>
        <div id="center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div id="right">
          <Link to="/hx-grytan-2020">Hx-Grytan</Link>
          <Link to="/nyheter">Nyheter</Link>
        </div>
      </div>
    </Wrap>
  </StyledHeader>
)

const StyledHeader = styled.header`
  padding: 15px 0px;
  ${Wrap} > #links {
    display: flex;
    justify-content: center;
    align-items: center;
    #left,
    #right {
      width: 300px;
      display: flex;
      justify-content: center;
    }
    #center {
      a {
        padding: 0px !important;
      }
      svg {
        height: 80px;
      }
    }

    a {
      padding: 15px;
      font-weight: 700;
      text-decoration: none;
      color: inherit;
    }
  }
`

export default Header
