import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import BaseStyles from "./base-styles";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@200..800&family=Literata:wght@400..800&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
