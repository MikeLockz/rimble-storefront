import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, BaseStyles, Box, theme } from "rimble-ui";
import styled from "styled-components";

import StaticSideNav from "./StaticSideNav";
import Navbar from "./Navbar";
import Content from "./Content";

// primary-ligher is used as link color on black background in templates
// primary-extra-light is used as bg for icons in templates
// primary-2x-light is used for bg of connection modal templates
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    "primary-lighter": "#9387FF",
    "primary-extra-light": "#d3c6d3",
    "primary-2x-light": "#f6f6fc"
  }
};

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: 75,
    speed: 300
  });
}
const navbarHeight = "56px";

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

const SkipLink = styled.a`
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  margin: -1px;
  text-decoration: none;
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
          <BaseStyles>
            <SkipLink href="#reach-skip-nav" data-reach-skip-link="true">
              Skip to main content
            </SkipLink>

            <StyledHeader isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />

            <MainContent>
              <StaticSideNav
                isNavOpen={isNavOpen}
                navbarHeight={navbarHeight}
              />

              <ContentWrapper className={isNavOpen ? "nav-open" : "nav-closed"}>
                <Content
                  title={title}
                  children={children}
                  componentType={componentType}
                  tableOfContents={tableOfContents}
                />
              </ContentWrapper>
            </MainContent>
          </BaseStyles>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
