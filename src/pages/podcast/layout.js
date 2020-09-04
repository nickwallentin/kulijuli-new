import React from "react"
import loadable from "@loadable/component"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Section, Wrap } from "../../components/styled"

const PageLayout = ({ children, setTab, tabIndex }) => {
  const LatestPodcast = loadable(() =>
    import("../../components/latestPodcastiFrame")
  )
  return (
    <Layout>
      <Section space="30px 0px 0px 0px">
        <Wrap>
          <Hero>
            <h1>
              Kulijulipodden <span>Lyssna på senaste avsnittet</span>
            </h1>
            <div className="latest-podcast">
              <LatestPodcast />

              <div className="sponsor">
                Podcasten sponsras av: <br />
                {"<sponsorlogga>"}
              </div>
            </div>
          </Hero>
          <PageNav>
            <li onClick={() => setTab(0)}>
              <Link className={tabIndex === 0 ? "active" : null}>
                Om podden
              </Link>
            </li>
            <li onClick={() => setTab(1)}>
              <Link className={tabIndex === 1 ? "active" : null}>Avsnitt</Link>
            </li>
          </PageNav>
        </Wrap>
      </Section>
      {children}
    </Layout>
  )
}

export default PageLayout

const Hero = styled.div`
  text-align: center;
  .button.subtle {
    padding: 5px 15px;
    background: #00000010;
    color: inherit;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .latest-podcast {
    max-width: 600px;
    margin: 0 auto;
  }
  h1 {
    span {
      display: block;
      font-size: 60%;
      color: var(--c-pri);
    }
  }
`
const PageNav = styled.ul`
  max-width: 700px;
  margin: 0px auto;
  margin-top: 30px;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;

  li {
    margin: 0px;
    width: 99%;
    margin-right: 10px;
    cursor: pointer;
    &:last-of-type {
      margin-right: 0px;
    }

    a {
      width: 100%;
      text-align: center;
      display: inline-block;
      padding: 20px 15px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      text-decoration: none;
      color: inherit;
      font-weight: 700;
      background: #ffffff90;

      &:hover {
        background: white;
      }

      &.active {
        background: white;
        box-shadow: 0px -14px 19px #00000005;
      }
    }
  }
`
