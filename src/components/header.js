import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./logo";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 960px;
  padding-top: 60px;
  align-items: center;
  padding-bottom: 40px;
  justify-content: space-between;
`;

const StyledRootLink = styled(Link)`
  color: #120045;

  &:hover {
    color: #1900b6;
  }
`;

const StyledNav = styled.nav`
  a {
    color: #92929f;
    font-size: 18px;
    font-weight: 400;
    margin-left: 28px;
    text-decoration: none;
  }

  a:hover {
    color: #020050;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledRootLink to="/">
        <Logo />
      </StyledRootLink>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <a href="mailto:hello@thomascullen.io">Contact</a>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
