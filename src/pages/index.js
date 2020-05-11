import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Link from "../components/mdx/link"

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  max-width: 720px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 400px);
`

const Paragraph = styled.p`
  color: #2e2b38;
  font-size: 28px;
  margin-top: 64px;
  font-weight: 400;
  line-height: 38px;
  text-align: center;
  margin-bottom: 64px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div>
        <Paragraph>
          Thomas is a designer and developer who is currently writing about
          himself in the third person.
        </Paragraph>

        <Paragraph>
          I’m currently working at{" "}
          <Link href="https://advisable.com" target="_blank">
            Advisable
          </Link>{" "}
          to help build a network of top marketing freelancers. You can see my
          latest projects{" "}
          <Link target="_blank" href="https://dribbble.com/thomascullen">
            here
          </Link>
          , read my code{" "}
          <Link target="_blank" href="https://dribbble.com/thomascullen">
            here
          </Link>{" "}
          and get snippets of my thoughts{" "}
          <Link target="_blank" href="https://dribbble.com/thomascullen">
            here
          </Link>
          .
        </Paragraph>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
