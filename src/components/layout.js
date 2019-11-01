import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, Box, Link, Heading, Text, theme } from "rimble-ui";
import styled from "styled-components";

import TableOfContents from "./documentation/TableOfContents";
import ContributeBanner from "./documentation/ContributeBanner";
import StaticSideNav from "./documentation/StaticSideNav";
import Navbar from "./documentation/Navbar";

const customTheme = {
  ...theme,
  breakpoints: ["40em", "52em", "64em"]
};

const Grid = styled(Box)`
  height: 100vh;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 0 100%;
  grid-template-rows: 57px 1fr 40px;
  grid-template-areas:
    "header  header"
    "sidebar contentWrapper"
    "footer  footer ";

  // Larger than mobile
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  }

  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 17em auto;
    grid-template-rows: 57px 1fr 40px;
  }
`;

const StyledHeader = styled(Navbar)`
  grid-area: header;
`;

const Sidebar = styled(StaticSideNav)`
  grid-area: sidebar;
  height: calc(100vh - 97px);
`;

const ContentWrapper = styled(Box)`
  grid-area: contentWrapper;

  // Larger than mobile
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    height: calc(100vh - 97px);
    overflow: scroll;
    position: relative;
  }

  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Content = styled(Box)`
  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: ${props => props.theme.breakpoints[1]};
    width: 67%;
  }
`;

const Aside = styled(Box)`
  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    position: sticky;
    top: 0;
    width: auto;
    order: 2;
  }
`;

const Footer = styled(Box)`
  grid-area: footer;
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
          <Grid>
            <StyledHeader isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />

            <Sidebar isNavOpen={isNavOpen} />

            <ContentWrapper p={4}>
              <Box display={["block", "block", "block", "none"]}>
                <Heading as={"h1"} fontSize={[5, 6, 7]} mb={4} px={3}>
                  {title}
                </Heading>
              </Box>

              <Aside px={3}>
                <TableOfContents tableOfContents={tableOfContents} />
              </Aside>

              <Content>
                <Box display={["none", "none", "none", "block"]} px={3}>
                  <Heading as={"h1"} fontSize={6} mb={4}>
                    {title}
                  </Heading>
                </Box>

                <Box px={3}>
                  {children}
                  <ContributeBanner componentType={componentType} px={3} />
                </Box>
              </Content>
            </ContentWrapper>

            <Footer borderTop={1} borderColor={"light-gray"}>
              <Text textAlign={"center"} fontSize={1} p={2}>
                Made by{" "}
                <Link
                  href="https://consensys.design/"
                  title={"Learn about ConsenSys Design"}
                  target={"_blank"}
                >
                  ConsenSys Design
                </Link>
              </Text>
            </Footer>
          </Grid>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
