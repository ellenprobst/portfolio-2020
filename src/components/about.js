import React from "react"
import Image from "../components/image"
import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 400px) 80px minmax(min-content, 1fr);
  grid-template-rows: 1vmax 80px auto;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: minmax(100px, 1fr) 80px 0;
    grid-template-rows: minmax(min-content, max-content) 80px auto;
  }
`
const GridImage = styled.div`
  grid-column: 1/3;
  grid-row-start: 2;
  max-width: 500px;
  position: relative;
  @media (max-width: 768px) {
    grid-row-start: 1;
  }
`

const GridTitle = styled.div`
  grid-column: 2/5;
  grid-row: 1/2;
  position: relative;
`

const GridMain = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  padding: 3vmin;
  grid-column-gap: 50px;
  color: var(--color-light);
  position: relative;
  @media (max-width: 768px) {
    padding: 20px 0;
    grid-column-gap: 0;
    grid-row: 2/4;
    grid-column: 1/5;
    background: var(--color-background);
  }
`

const GridTextWrap = styled.div`
  max-width: 800px;
  position: relative;
`

const LinkText = styled.a`
  text-decoration: none;
  color: var(--accent);
`

const About = () => {
  return (
    <div style={{ position: "relative", zIndex: 3 }}>
      <GridContainer>
        <GridImage>
          <Parallax y={[-40, 40]}>
            <Image />
          </Parallax>
        </GridImage>

        <GridTitle>
          <Parallax y={[40, -40]}>
            <h2>About Me</h2>
          </Parallax>
        </GridTitle>

        <GridMain>
          <GridTextWrap>
            <p>
              Hey there! I'm originally from Belgium, but these days you'll find
              me in Toronto, Canada. Back in 2017, I decided to switch things up
              and started learning how to code. It's been a great journey! When
              I'm not busy coding, you can bet I'm out and about, enjoying the
              great outdoors. I also love to get creative in my free time. Let's
              team up and create some awesome web experiences together!
            </p>
          </GridTextWrap>
        </GridMain>
      </GridContainer>
    </div>
  )
}

export default About

// <ParallaxLayer offset={0.1} speed={0}>
//   <span>Scroll down2!</span>
// </ParallaxLayer>
// <ParallaxLayer offset={0.99} speed={3}>
//   <span>I'm fast!</span>
// </ParallaxLayer>
// <ParallaxLayer speed={-0.2} offset={1.3}>
//   <span>I'm going in the other direction!</span>
// </ParallaxLayer>
