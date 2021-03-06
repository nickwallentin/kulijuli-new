import { Grid, Section, Wrap } from "../components/styled"

import Img from "gatsby-image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import useNewsData from "../queries/useNewsData"

const BlogPage = () => {
  const posts = useNewsData()

  return (
    <Layout>
      <SEO title="Nyheter" />
      <Section bg="linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(244,244,244,1) 50%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 100%)">
        <Wrap>
          <Hero>
            <h1>
              Nyheter <span>Senaste nytt från Kulijuli</span>
            </h1>
            <Article
              to={"/" + posts[0].node.fields.slug}
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              <Img
                fluid={
                  posts[0].node.data.mainOnNewsPage.localFiles[0]
                    .childImageSharp.fluid
                }
              />

              <div className="article-content">
                <h2 style={{ marginBottom: "5px" }}>
                  {posts[0].node.data.Rubrik}
                </h2>
                <small style={{ display: "block", marginBottom: "15px" }}>
                  {posts[0].node.data.Publicerad}
                </small>
                <p>{posts[0].node.data.Text.childMarkdownRemark.excerpt}</p>
              </div>
            </Article>
          </Hero>
        </Wrap>
      </Section>

      <Section space="2rem 0rem 4rem 0rem">
        <Wrap>
          <Grid>
            {posts.map(({ node: post }, index) => {
              if (index !== 0) {
                return (
                  <Article key={post.fields.slug} to={`/${post.fields.slug}`}>
                    <Img
                      fluid={
                        post.data.onNewsPage.localFiles[0].childImageSharp.fluid
                      }
                    />
                    <div className="article-content">
                      <h2>{post.data.Rubrik}</h2>
                      <small>{post.data.Publicerad}</small>
                      <p>{post.data.Text.childMarkdownRemark.excerpt}</p>
                    </div>
                  </Article>
                )
              }
            })}
          </Grid>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default BlogPage

const Hero = styled.div`
  text-align: center;
  .article-content {
    text-align: left;
  }
  .button.subtle {
    padding: 5px 15px;
    background: #00000010;
    color: inherit;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .latest-post {
    max-width: 600px;
    margin: 0 auto;
  }
  h1 {
    margin-bottom: 2rem;
    span {
      display: block;
      font-size: 60%;
      color: var(--c-pri);
    }
  }
`
const Article = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  .gatsby-image-wrapper {
    border-radius: 4px;
  }
  h2 {
    margin: 10px 0px 5px 0px;
  }
  small {
    margin-bottom: 15px;
    display: block;
  }
`
