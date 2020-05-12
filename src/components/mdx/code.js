import React from "react"
import styled from "styled-components"
import theme from "prism-react-renderer/themes/dracula"
import Highlight, { defaultProps } from "prism-react-renderer"

const StyledPre = styled.pre`
  min-width: 120%;
  margin-left: -10%;
  font-size: 1rem;
  overflow-x: scroll;
  padding: 24px;
  border-radius: 16px;
  line-height: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0px 16px 40px rgba(23, 0, 90, 0.2);

  @media (max-width: 900px) {
    min-width: 100%;
    margin-left: 0px;
  }
`

function Code({ children }) {
  const matches = children.props.className.match(/language-(?<lang>.*)/)
  const language = matches?.groups?.lang

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      language={language}
      code={children.props.children.trim()}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  )
}

export default Code