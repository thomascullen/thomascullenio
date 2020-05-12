import React from "react"
import { motion } from "framer-motion"
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

const Paragraph = styled(motion.p)`
  color: #2e2b38;
  font-size: 28px;
  margin-top: 0px;
  font-weight: 400;
  line-height: 38px;
  text-align: center;
  margin-bottom: 40px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div>
        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, ease: "easeOut", duration: 0.7 }}
        >
          Thomas is a designer and developer who is currently writing about
          himself in the third person.
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: "easeOut", duration: 0.7 }}
        >
          I’m currently working at{" "}
          <Link href="https://advisable.com" target="_blank">
            Advisable
          </Link>{" "}
          to help build a network of top freelancers. You can see my latest
          projects{" "}
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
