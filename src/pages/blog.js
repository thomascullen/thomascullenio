import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 740px;
`

const BlogLink = styled(GatsbyLink)`
  color: #25232c;
  position: relative;
  margin-bottom: 24px;
  display: inline-block;
  text-decoration: none;

  h4 {
    margin: 0;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
  }

  &:hover h4 {
    color: #5c24ff;
  }

  span {
    color: #847d98;
    font-size: 16px;
    font-weight: 400;
  }

  &::after {
    content: "";
    top: -4px;
    left: -12px;
    right: -16px;
    bottom: -12px;
    z-index: -1;
    position: absolute;
    border-radius: 16px;
    background: rgba(34, 0, 246, 0.05);
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 150ms, transform 200ms;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      {data.posts.nodes.map(post => (
        <div key={post.id}>
          <BlogLink to={post.frontmatter.slug}>
            <h4>{post.frontmatter.title}</h4>
            <span>{post.frontmatter.date}</span>
          </BlogLink>
        </div>
      ))}
    </Container>
  </Layout>
)

export const query = graphql`
  {
    posts: allMdx(
      filter: { fields: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          slug
          title
        }
      }
    }
  }
`

export default BlogPage
