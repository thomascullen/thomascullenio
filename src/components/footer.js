import React from "react"
import styled from "styled-components"
import {
  InstagramAlt,
  Twitter,
  Github,
  Dribbble,
} from "@styled-icons/boxicons-logos"

const StyledFooterDivider = styled.div`
  height: 1px;
  width: 100%;
  margin: 0 auto;
  max-width: 100px;
  background: #e5e5f0;
  margin-bottom: 60px;
`

const StyledFooter = styled.footer`
  width: calc(100% - 40px);
  margin: 0 auto;
  margin-top: 60px;
  max-width: 710px;
  background: white;
  text-align: center;
  padding-bottom: 60px;
  padding-top: 20px;
`

const StyledFooterIcon = styled.a`
  margin: 0 4px;
  color: #b9b6c3;

  &:hover {
    color: #1900b6;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterDivider />
      <StyledFooterIcon target="_blank" href="https://twitter.com/thomasauros">
        <Twitter />
      </StyledFooterIcon>
      <StyledFooterIcon target="_blank" href="https://github.com/thomascullen">
        <Github />
      </StyledFooterIcon>
      <StyledFooterIcon
        target="_blank"
        href="https://dribbble.com/thomascullen"
      >
        <Dribbble />
      </StyledFooterIcon>
      <StyledFooterIcon
        target="_blank"
        href="https://www.instagram.com/thomascullen/"
      >
        <InstagramAlt />
      </StyledFooterIcon>
    </StyledFooter>
  )
}

export default Footer
