import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`

function Link({ children, ...props }) {
  return <StyledParagraph {...props}>{children}</StyledParagraph>
}

export default Link
