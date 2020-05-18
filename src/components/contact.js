import React from "react"
import CodepenIcon from "../images/codepen-brands.js"
import LinkedinIcon from "../images/linkedin-in-brands.js"
import TwitterIcon from "../images/twitter-brands.js"
import GithubIcon from "../images/github-brands.js"
import styled from "styled-components"

const ContactContainer = styled.div``

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const StyledLink = styled.a`
  margin-left: 15px;
  color: currentColor;
  @media (max-width: 768px) {
    margin-right: 15px;
  }
`
const StyledHeader = styled.h2`
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const Contact = () => (
  <ContactContainer>
    <p>Contact</p>
    <FlexContainer>
      <StyledHeader>
        <a href="mailto:hello@ellenprobst.com">hello@ellenprobst.com</a>
      </StyledHeader>
      <div>
        <StyledLink
          href="https://codepen.io/EllenProbst"
          rel="noreferrer"
          aria-label="Codepen"
        >
          <CodepenIcon />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/ellen-probst/"
          aria-label="Linkedin"
        >
          <LinkedinIcon />
        </StyledLink>
        <StyledLink
          href="https://twitter.com/EllenProbst_"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </StyledLink>
        <StyledLink href="https://github.com/ellenprobst" aria-label="Github">
          <GithubIcon />
        </StyledLink>
      </div>
    </FlexContainer>
  </ContactContainer>
)

export default Contact
