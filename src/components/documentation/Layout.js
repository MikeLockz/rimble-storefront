import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, Box, theme } from "rimble-ui";
import styled from "styled-components";

import StaticSideNav from "./StaticSideNav";
import Navbar from "./Navbar";
import Content from "./Content";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: 75,
    speed: 300
  });
}
const navbarHeight = "56px";

const customTheme = {
  ...theme,
  breakpoints: ["40em", "52em", "64em"]
};

const StyledHeader = styled(Navbar)``;

const MainContent = styled(Box)`
  padding-top: ${navbarHeight};
`;

const ContentWrapper = styled(Box)`
  position: relative;

  &.nav-open:before {
    background: #000000b3;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    z-index: 9;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding-left: 19em;
  }
`;

const Layout = ({ children, tableOfContents, title, componentType }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavOpen = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      // Enable scrolling
      document.body.style.overflow = "auto";
      document.body.style.position = "initial";
    } else {
      setIsNavOpen(true);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    }
  };

  useEffect(() => {
    // Enable scrolling
    document.body.style.overflow = "auto";
    document.body.style.position = "initial";
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={customTheme}>
          <a href="#reach-skip-nav" data-reach-skip-link="true">
            Skip to main content
          </a>

          <StyledHeader isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />

          <MainContent>
            <StaticSideNav isNavOpen={isNavOpen} navbarHeight={navbarHeight} />

            <ContentWrapper className={isNavOpen ? "nav-open" : "nav-closed"}>
              <Content
                title={title}
                children={children}
                componentType={componentType}
                tableOfContents={tableOfContents}
              />
            </ContentWrapper>
          </MainContent>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
