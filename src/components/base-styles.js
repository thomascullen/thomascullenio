import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

export const BaseStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 
  html, body {
    font-family: 'Inter', sans-serif;
  }
`

export default BaseStyles
