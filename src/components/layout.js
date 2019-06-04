import React from "react";
import defaultTheme from "../theme";
import Nav from "../components/landing/nav";
import Typography from "../components/landing/typography";
import { Box, Flex, ThemeProvider } from "rimble-ui";
import TableOfContents from "../components/documentation/TableOfContents";
import { StaticQuery, graphql } from "gatsby";
import ContributeBanner from "../components/documentation/ContributeBanner";
import StaticSideNav from "./staticSideNav";

const Layout = ({ children, tableOfContents }) => (
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
      <ThemeProvider theme={defaultTheme}>
        <React.Fragment>
          <Typography />
          <Nav />
          <Flex alignItems={"space-between"}>
            <Box py={3} mr={3} minWidth={"150px"}>
              <StaticSideNav />
            </Box>

            <Box
              maxWidth={"960px"}
              minHeight={"100%"}
              mx={["auto"]}
              padding={3}
            >
              {children}

              <ContributeBanner />
            </Box>
            {console.log("TOC: ", tableOfContents)}
            <TableOfContents tableOfContents={tableOfContents} />
          </Flex>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;
