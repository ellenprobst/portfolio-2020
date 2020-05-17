import React from "react"

import Layout from "../components/layout"
import Work from "../components/work"
import About from "../components/about"
import Contact from "../components/contact"

import SEO from "../components/seo"
import styled from "styled-components"

const Section = styled.section`
  padding: 25vmin 0;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 10vmin 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section id="work">
      <Work />
    </Section>
    <Section id="about">
      <About />
    </Section>
    <Section id="contact" style={{ minHeight: "100%" }}>
      <Contact />
    </Section>
  </Layout>
)

export default IndexPage
