import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, Box, Flex } from "rimble-ui";
import Nav from "../components/landing/nav";
import TableOfContents from "../components/documentation/TableOfContents";
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
      <ThemeProvider>
        <Nav />
        <Flex width={1} overflow={'hidden'}>
          <Box py={3} mr={3} minWidth={"150px"}>
            <StaticSideNav />
          </Box>

          <Box
            width={1}
            maxWidth={'960px'}
            overflow={'hidden'}
            mx={'auto'}
            px={4}
          >
            {children}
            <ContributeBanner />
          </Box>

          {/* {console.log("TOC: ", tableOfContents)} */}
          <TableOfContents tableOfContents={tableOfContents} />
        </Flex>
      </ThemeProvider>
    )}
  />
);

export default Layout;
