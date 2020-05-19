import React from "react"
import { Planet } from "react-kawaii"
import flatMountains from "../images/flat-mountains.svg"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const NotFoundContainer = styled.div`
  background-image: url(${flatMountains}); /* background by SVGBackgrounds.com */
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-size: cover;
  padding: 0 25px;
`
const PlanetWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding: 8vmin 0;
`

const TextWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`

const StyledLink = styled(Link)`
  border: 2px solid purple;
  border-radius: 3px;
  padding: 5px 15px;
  background: purple;
`

const NotFoundPage = () => (
  <NotFoundContainer>
    <SEO title="404: Not found" />
    <PlanetWrapper>
      <Planet size={220} mood="sad" color="lightgrey" />
    </PlanetWrapper>
    <TextWrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <StyledLink to="/">Go back to the homepage</StyledLink>
    </TextWrapper>
  </NotFoundContainer>
)

export default NotFoundPage
