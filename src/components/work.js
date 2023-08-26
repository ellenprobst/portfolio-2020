import React from "react"
import styled from "styled-components"

import deloitteLogo from "../images/amazon-logo.png"
import amazonLogo from "../images/deloitte-logo.png"
import cziLogo from "../images/czi-logo.png"
import clcLogo from "../images/clc-logo.png"
import tdLogo from "../images/td-logo.png"
import loyaltyLogo from "../images/loyalty-logo.png"
import AngleRight from "../images/angle-right-solid.js"

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledImg = styled.img`
  align-self: center;
  filter: grayscale(100%);
  mix-blend-mode: luminosity;

  &:not(:first-child) {
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    width: 23%;
  }
`

const LinkText = styled.a`
  text-decoration: none;
  color: var(--accent);
`

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: var(--color-light);
  margin-top: 4rem;
  opacity: 0.5;
`

const Text = styled.p`
  color: var(--color-light);
  max-width: 1200px;
`

const Work = () => (
  <div style={{ position: "relative" }}>
    <h2>Work</h2>

    <Text>
      I love building clean and user friendly experiences. I mostly work with
      Javascript and CSS, building Node and React/ReactNative/Angular
      applications.
    </Text>
    <Text>
      I have published and maintain my own mobile app for therapy clients to
      keep track of their sessions and notes.
      <LinkText
        style={{ fontSize: "1.5rem" }}
        href="https://therapeze.app"
        target="_blank"
        rel="noreferrer"
      >
        Therapeze <AngleRight />
      </LinkText>
    </Text>
    <Text>
      I’m also a lead mentor at Juno College of Technology and occasional
      teacher at Canada Learning Code.
    </Text>
    <Text>In my free time I like to play around with creative coding.</Text>
    <LinkText
      style={{ fontSize: "1.5rem" }}
      href="https://codepen.io/EllenProbst"
      target="_blank"
      rel="noreferrer"
    >
      See my Codepens <AngleRight />
    </LinkText>
    <SubTitle>Companies I have worked with:</SubTitle>

    <FlexContainer>
      <StyledImg src={cziLogo} alt="Chan Zuckerberg Initiative" />
      <StyledImg src={clcLogo} alt="Canada Learning Code" />
      <StyledImg src={tdLogo} alt="Toronto Dominion" />
      <StyledImg src={loyaltyLogo} alt="Loyalty One" />
      <StyledImg src={amazonLogo} alt="Amazon" />
      <StyledImg src={deloitteLogo} alt="Deloitte" />
    </FlexContainer>
  </div>
)

export default Work
