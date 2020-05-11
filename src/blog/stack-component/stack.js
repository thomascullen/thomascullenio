import React from "react"
import styled from "styled-components"

export const StyledStack = styled.div``

export const StyledStackItem = styled.div`
  background: red;
`

function Stack({ spacing, children }) {
  return (
    <StyledStack>
      {React.Children.map(children, c => {
        if (c === null) return null
        return (
          <StyledStackItem spacing={spacing}>
            {React.cloneElement(c)}
          </StyledStackItem>
        )
      })}
    </StyledStack>
  )
}

export default Stack
