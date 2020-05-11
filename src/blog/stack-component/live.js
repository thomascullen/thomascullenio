import React from "react"
import Stack from "./stack"
import styled from "styled-components"
import theme from "prism-react-renderer/themes/dracula"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

const Item = styled.div`
  height: 80px;
  background: red;
`

const code = `
  <Stack spacing="md">
    <Item />
    <Item />
    <Item />
  </Stack>
`

const scope = {
  Stack,
  Item,
}

function Live() {
  return (
    <LiveProvider theme={theme} code={code} scope={scope}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export default Live
