import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import Layout from "../components/layout"
import mdx from "../components/mdx"
import Container from "../components/post-container"

const TitleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #2e2b38;
  max-width: 1000px;
  padding: 0 20px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 32px;
`

const StyledTitle = styled.h1`
  color: #120045;
  font-size: 62px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 60px;
  letter-spacing: -0.1rem;

  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 44px;
  }
`

const StyledDate = styled.div`
  color: #847d98;
  font-size: 20px;
  letter-spacing: -0.02rem;
`

const StyledArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description || data.mdx.excerpt}
      />

      <StyledArticle>
        <TitleContainer>
          <StyledTitle>{data.mdx.frontmatter.title}</StyledTitle>
          <StyledDate>{data.mdx.frontmatter.date}</StyledDate>
        </TitleContainer>
        <Container>
          <MDXProvider components={mdx}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </StyledArticle>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
      excerpt(pruneLength: 250)
    }
  }
`
