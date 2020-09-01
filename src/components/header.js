import { Link } from "gatsby"
import styled from "styled-components"
import React, { useState } from "react"

import Logo from "../assets/kulijuli-logo.svg"
import MenuOpenIcon from "../assets/menu.svg"
import MenuCloseIcon from "../assets/closeMenu.svg"

import { Wrap } from "../components/styled"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <StyledHeader>
      <Wrap>
        <div id="desktop-nav">
          <div id="left">
            <Link className="hide-mobile" to="/kulijuli-2021">
              Kulijuli 2021
            </Link>
            <Link className="hide-mobile" to="/podcast">
              Podcast
            </Link>
          </div>
          <div id="center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div id="right">
            <Link className="hide-mobile" to="/hx-grytan-2020">
              Hx-Grytan
            </Link>
            <Link className="hide-mobile" to="/nyheter">
              Nyheter
            </Link>
          </div>
        </div>
        <div id="mobile-nav">
          <Link to="/">
            <Logo id="logo" />
          </Link>
          <MenuOpenIcon onClick={() => setMenuOpen(true)} />
        </div>
      </Wrap>
      {menuOpen && (
        <MobileNav>
          <div className="header">
            <Link to="/">
              <Logo id="logo" />
            </Link>
            <MenuCloseIcon onClick={() => setMenuOpen(false)} />
          </div>
          <div className="links">
            <Link to="/kulijuli-2021">Kulijuli 2021</Link>
            <Link to="/podcast">Podcast</Link>
            <Link to="/hx-grytan-2020">Hx-Grytan</Link>
            <Link to="/nyheter">Nyheter</Link>
          </div>
        </MobileNav>
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 15px 0px;
  ${Wrap} > #desktop-nav {
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
  #mobile-nav {
    display: none;
    justify-content: space-between;
    align-items: center;
    svg#logo {
      width: 120px;
    }
  }
  @media (max-width: 750px) {
    #desktop-nav {
      display: none !important;
    }
    #mobile-nav {
      display: flex;
    }
  }
`

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: #f4f4f4;
  color: white;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  .header {
    max-width: 90%;
    margin: 0 auto;
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    svg {
      &#logo {
        width: 120px;
      }
    }
  }

  .links a {
    display: block;
    padding: 15px;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export default Header
