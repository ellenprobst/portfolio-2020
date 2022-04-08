import React from "react"
import PropTypes from "prop-types"
import { ParallaxProvider } from "react-scroll-parallax"
import Header from "./header"

import styled from "styled-components"

const PageLayout = styled.div`
  background: var(--color-background);
`

const Footer = styled.footer`
  color: var(--color-light);
  font-size: 12;
  text-align: center;
  margin-bottom: 10px;
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 10vmin 1.45rem;
  min-height: 100vh;
  max-width: 1600px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 6vmin 1.45rem;
  }
`

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <div>
        <Header />
      </div>
      <ParallaxProvider>
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
      </ParallaxProvider>
      <Footer>
        © {new Date().getFullYear()} - code and design by Ellen Probst
      </Footer>
    </PageLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
