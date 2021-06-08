import { Section, Wrap } from "../components/styled"

import Img from "gatsby-image"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

const SinglePostTemplate = props => {
  const post = props.data.airtable
  return (
    <Layout>
      <SEO
        title={post.data.Rubrik}
        image={post.data.mainImage.localFiles[0].childImageSharp.fluid.src}
      />
      <Section bg="linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(244,244,244,1) 30%, rgba(255,255,255,1) 30%, rgba(244,244,244,1) 100%)">
        <Wrap>
          <Article>
            <div id="article-meta">
              <small>{post.data.Publicerad}</small>
              <h1>{post.data.Rubrik}</h1>
            </div>
            <Img
              fluid={post.data.mainImage.localFiles[0].childImageSharp.fluid}
            />
            <div
              id="article-content"
              dangerouslySetInnerHTML={{
                __html: post.data.Text.childMarkdownRemark.html,
              }}
            ></div>
          </Article>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default SinglePostTemplate

const Article = styled.article`
  .gatsby-image-wrapper {
    border-radius: 4px;
  }
  #article-content {
    max-width: 700px;
    margin: 2rem auto 0rem auto;
  }
  #article-meta {
    max-width: 700px;
    margin: 0rem auto 2rem auto;
  }
`

export const pageQuery = graphql`
  query getPostByID($slug: String!) {
    airtable(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }

      data {
        Rubrik
        Publicerad(formatString: "D MMMM, YYYY", locale: "sv")
        Text {
          childMarkdownRemark {
            html
          }
        }
        mainImage: Img {
          localFiles {
            childImageSharp {
              fluid(maxWidth: 980, maxHeight: 500, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
