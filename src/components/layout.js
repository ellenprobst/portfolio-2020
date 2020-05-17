import React from "react"
import PropTypes from "prop-types"
import { ParallaxProvider } from "react-scroll-parallax"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Footer = styled.footer`
  color: #afbad2;
  font-size: 12;
  text-align: center;
  opacity: 0.6;
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
    <>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
