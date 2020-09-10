import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import useBlogData from "../../queries/useBlogData"
import { Link } from "gatsby"

const SectionArticles = () => {
  const posts = useBlogData()
  return (
    <React.Fragment>
      <h2>Senaste inläggen</h2>
      <ArticlesLayout>
        <div className="latest">
          <Link
            to={posts[0].node.fields.slug}
            alt={"Läs artikeln: " + posts[0].node.frontmatter.title}
          >
            <article className="latest">
              <Img
                fluid={
                  posts[0].node.frontmatter.largeThumb.childImageSharp.fluid
                }
              />

              <h3>{posts[0].node.frontmatter.title}</h3>
              <small>{posts[0].node.frontmatter.date}</small>
              <p>{posts[0].node.excerpt}</p>
            </article>
          </Link>
        </div>
        <div className="posts">
          {posts.map(({ node: post }, index) => {
            if (index !== 0 && index < 5) {
              return (
                <Link
                  key={post.id}
                  to={post.fields.slug}
                  alt={"Läs artikeln: " + post.frontmatter.title}
                >
                  <article>
                    <Img fluid={post.frontmatter.thumb.childImageSharp.fluid} />
                    <div className="article-content">
                      <h3>{post.frontmatter.title}</h3>
                      <small>{post.frontmatter.date}</small>
                      <p>{post.excerpt}</p>
                    </div>
                  </article>
                </Link>
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

  a {
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 980px) {
    grid-template-columns: 1fr 2fr;
  }
  .gatsby-image-wrapper {
    border-radius: 4px;
  }
  .latest {
    article {
      small {
        display: block;
        margin: 5px 0px 15px 0px;
      }
      h3 {
        margin: 15px 0px 5px 0px;
      }
    }
  }
  .posts {
    display: grid;
    grid-gap: 10px;
    @media (min-width: 980px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    article {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: 1fr 1fr;
      h3 {
        font-size: 1rem;
        margin: 0px 0px 5px 0px;
      }
      small {
        line-height: 0.8rem;
        margin-bottom: 10px;
        display: block;
      }
      p {
        margin-bottom: 0px;
        padding-bottom: 0px;
        font-size: 0.8rem;
        line-height: 1.1rem;
      }
    }
  }
`
