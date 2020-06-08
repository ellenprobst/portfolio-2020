import React from "react"
import Hero from "../components/hero/index"
import AngleRight from "../images/angle-right-solid.js"
import styled from "styled-components"

const LinkText = styled.a`
  text-decoration: none;
  color: var(--accent);
  font-size: 1.5rem;
  pointer-events: all;
`
const Container = styled.header`
  height: 100vh;
  position: relative;
`
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px 10px 35px;
  position: relative;
  z-index: 1;

  @media (max-width: 500px) {
    padding: 10px 25px 10px 15px;
  }
`

const FlexContainer = styled.div`
  height: calc(100% - 76px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 1.2;
  position: relative;
  z-index: 1;
  pointer-events: none;
`

const TitleContainer = styled.div`
  max-width: 450px;
  margin: 0 10vw;
`

const StyledListItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const Header = () => {
  return (
    <Container>
      <Hero />
      <TopWrapper>
        <p style={{ margin: 0 }}>ELLEN PROBST</p>
        <nav>
          <ul style={{ display: "flex", margin: 0 }}>
            <StyledListItem>
              <a href="#work">WORK</a>
            </StyledListItem>
            <StyledListItem>
              <a href="#about">ABOUT</a>
            </StyledListItem>
            <StyledListItem>
              <a href="#contact">CONTACT</a>
            </StyledListItem>
          </ul>
        </nav>
      </TopWrapper>
      <FlexContainer>
        <TitleContainer>
          <h1 style={{ fontSize: "3.2rem" }}>
            I like building fun things on the web.
          </h1>
          <LinkText href="#work">
            See my work <AngleRight />
          </LinkText>
        </TitleContainer>
      </FlexContainer>
    </Container>
  )
}

export default Header
