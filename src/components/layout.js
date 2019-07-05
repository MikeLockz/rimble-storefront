import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { ThemeProvider, Box, Flex, Heading } from "rimble-ui";
import theme from "./../theme";

import TableOfContents from "./documentation/TableOfContents";
import ContributeBanner from "./documentation/ContributeBanner";
import StaticSideNav from "./documentation/StaticSideNav";
import Navbar from "./documentation/Navbar";

const StyledPrimaryContent = styled(Flex)`
  & {
    flex-direction: column;
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
  }
`;

const Layout = ({ children, tableOfContents, title }) => {
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
        <ThemeProvider>
          <Navbar isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />

          <Flex position={"absolute"} top={"57px"} left={"0"} right={"0"}>
            <StaticSideNav isNavOpen={isNavOpen} />

            <StyledPrimaryContent
              width={1}
              maxWidth={"960px"}
              overflow={"hidden"}
              mx={"auto"}
              p={[3, 3, 4]}
              flexDirection={["column", "column", "row"]}
            >
              <Box order={[1, 1, 0]} width={[1, 1, "calc(100% - 188px)"]}>
                <Box display={["none", "none", "block"]}>
                  <Heading.h1>{title}</Heading.h1>
                </Box>

                {children}

                <ContributeBanner />
              </Box>

              <Box order={[0, 0, 1]}>
                <Box display={["block", "block", "none"]}>
                  <Heading.h1>{title}</Heading.h1>
                </Box>

                <TableOfContents tableOfContents={tableOfContents} />
              </Box>
            </StyledPrimaryContent>
          </Flex>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
