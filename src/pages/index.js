import React, { useState } from "react"

import Layout from "../components/layout"
import Work from "../components/work"
import About from "../components/about"
import Contact from "../components/contact"

import SEO from "../components/seo"
import styled from "styled-components"
import GlobalStyle from "../components/styled-layout"
import MoonIcon from "../images/moon-regular.js"
import SunIcon from "../images/sun-solid.js"

const Section = styled.section`
  padding: 25vmin 0;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 10vmin 0;
  }
`

const StyledButton = styled.button`
  position: fixed;
  top: 12.5px;
  right: 15px;
  background: transparent;
  border: none;
  padding: 5px 0;
  width: 25px;
  z-index: 1;

  @media (max-width: 500px) {
    top: 6.5px;
    right: 5px;
    width: 20px;
  }

  svg {
    display: block;
  }
`

const IndexPage = () => {
  // const prefersDark =
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches
  // const defaultTheme = !window.matchMedia
  //   ? "dark"
  //   : prefersDark
  //   ? "dark"
  //   : "light"

  const [theme, setTheme] = useState("dark")

  return (
    <>
      <GlobalStyle theme={theme} />
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
        <StyledButton
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" && <MoonIcon />}
          {theme === "dark" && <SunIcon />}
        </StyledButton>
      </Layout>
    </>
  )
}

export default IndexPage
