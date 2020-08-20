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
          <a>Link 1</a>
          <a>Link 2</a>
        </div>
        <div id="center">
          <Logo />
        </div>
        <div id="right">
          <a>Link 3</a>
          <a>Link 4</a>
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
      svg {
        height: 80px;
      }
    }

    a {
      padding: 15px;
    }
  }
`

export default Header
