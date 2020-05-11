import React from "react"
import styled, { css } from "styled-components"

const StyledLink_Text = css`
  &::after {
    content: "";
    left: -2.5%;
    bottom: 0;
    height: 100%;
    width: 105%;
    z-index: -1;
    position: absolute;
    border-radius: 8px;
    background: rgba(34, 0, 246, 0.05);
    opacity: 0;
  }

  &:hover {
    color: #5c24ff;
  }

  &:hover::after {
    opacity: 1;
  }
`

const StyledLink = styled.a`
  color: #2300f6;
  position: relative;
  text-decoration: none;
  ${p => p.isTextLink && StyledLink_Text};
`

function Link({ children, ...props }) {
  const isTextLink = typeof children === "string"
  return (
    <StyledLink {...props} isTextLink={isTextLink}>
      {children}
    </StyledLink>
  )
}

export default Link
