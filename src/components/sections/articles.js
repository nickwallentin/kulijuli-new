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
        {posts.map(({ node: post }) => (
          <ArticleItem>{post.frontmatter.title}</ArticleItem>
        ))}
      </ArticlesLayout>
    </React.Fragment>
  )
}

export default SectionArticles

const ArticlesLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`
const ArticleItem = styled.article``
