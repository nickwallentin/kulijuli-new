import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Wrap } from "../components/styled"

const SinglePostTemplate = props => {
  const post = props.data.markdownRemark
  return (
    <Layout>
      <SEO />
      <Section>
        <Wrap>
          <Article>
            <div id="article-meta">
              <small>{post.frontmatter.date}</small>
              <h1>{post.frontmatter.title}</h1>
            </div>
            <Img fluid={post.frontmatter.mainImage.childImageSharp.fluid} />
            <div
              id="article-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
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
  #article-content,
  #article-meta {
    max-width: 700px;
    margin: 2rem auto;
  }
`

export const pageQuery = graphql`
  query getPostByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "D MMMM, YYYY", locale: "sv")
        mainImage {
          childImageSharp {
            fluid(maxWidth: 980, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`