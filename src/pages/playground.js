import React from "react"

import styled from "styled-components"

const StyledComponent = styled.div``

function SubComponent({ children }) {
  return <StyledComponent>{children}</StyledComponent>
}

SubComponent.toString = () => StyledComponent.toString()

const ParentStyles = styled.div`
  ${SubComponent} {
    background: red;
  }
`

function Playground() {
  return (
    <ParentStyles>
      <SubComponent>asdf</SubComponent>
    </ParentStyles>
  )
}

export default Playground
