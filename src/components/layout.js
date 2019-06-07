import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, Box, Flex } from "rimble-ui";

import TableOfContents from "./documentation/TableOfContents";
import ContributeBanner from "./documentation/ContributeBanner";
import StaticSideNav from "./documentation/staticSideNav";

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
        <Flex>
          <Box>
            <StaticSideNav />
          </Box>

          <Box
            width={1}
            maxWidth={"960px"}
            overflow={"hidden"}
            mx={"auto"}
            p={4}
          >
            {children}

            <ContributeBanner />
          </Box>

          <TableOfContents tableOfContents={tableOfContents} />
        </Flex>
      </ThemeProvider>
    )}
  />
);

export default Layout;
