import React from "react"
import { Planet } from "react-kawaii"
import flatMountains from "../images/flat-mountains.svg"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const NotFoundContainer = styled.div`
  background-image: url(${flatMountains});
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-size: cover;
  padding: 0 25px;
`

const NotFoundPage = () => (
  <NotFoundContainer>
    <SEO title="404: Not found" />
    <div
      style={{
        margin: "0 auto",
        width: "fit-content",
        padding: "8vmin 0",
      }}
    >
      <Planet size={220} mood="sad" color="lightgrey" />
    </div>
    <div style={{ margin: "0 auto", width: "fit-content", color: "#fff" }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link
        to="/"
        style={{
          border: "2px solid purple",
          borderRadius: "3px",
          padding: "5px 15px",
          background: "purple",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Go back to the homepage
      </Link>
    </div>
  </NotFoundContainer>
)

export default NotFoundPage
