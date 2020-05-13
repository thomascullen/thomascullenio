import styled from "styled-components"

const StyledPostContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #2e2b38;
  max-width: 800px;
  padding: 0 20px;
  font-size: 20px;
  line-height: 30px;

  *::selection {
    color: white;
    background: #6540cd;
  }

  strong {
    color: #120045;
    font-weight: 600;
  }

  ul li {
    margin-bottom: 12px;
  }

  .gatsby-resp-image-wrapper {
    margin-top: 3rem;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 3rem;
    box-shadow: 0px 16px 40px rgba(23, 0, 90, 0.1);

    img {
      max-width: 100%;
    }
  }
`

export default StyledPostContainer
