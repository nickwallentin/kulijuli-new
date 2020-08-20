import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import useBlogData from "../../queries/useBlogData"

const SectionArticles = () => {
  const posts = useBlogData()
  return (
    <React.Fragment>
      <h2>Senaste inläggen</h2>
      <ArticlesLayout>
        <div className="latest">
          <article className="latest">
            <Img
              fluid={posts[0].node.frontmatter.mainImage.childImageSharp.fluid}
            />

            {posts[0].node.frontmatter.title}
          </article>
        </div>
        <div className="posts">
          {posts.map(({ node: post }, index) => {
            if (index !== 0) {
              return (
                <article key={post.id}>
                  <Img
                    fluid={post.frontmatter.mainImage.childImageSharp.fluid}
                  />
                  <div className="article-content">
                    {post.frontmatter.title}
                  </div>
                </article>
              )
            }
          })}
        </div>
      </ArticlesLayout>
    </React.Fragment>
  )
}

export default SectionArticles

const ArticlesLayout = styled.div`
  display: grid;

  grid-gap: 20px;
  @media (min-width: 980px) {
    grid-template-columns: 1fr 2fr;
  }
  .posts {
    display: grid;
    grid-gap: 20px;
    @media (min-width: 980px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    article {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: 1fr 1fr;
    }
  }
`
