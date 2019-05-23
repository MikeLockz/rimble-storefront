import React from "react";
// import ThemeProvider from "../components/landing/ThemeProvider";
import defaultTheme from "../theme";
import Nav from "../components/landing/nav";
import Typography from "../components/landing/typography";
import GatsbySidebar from "./gatsby-sidebar";
import { Box, Flex, ThemeProvider } from "rimble-ui";
import TableOfContents from "../components/documentation/TableOfContents";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children, location, itemList }) => (
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
          <Flex>
            <GatsbySidebar location={location} itemList={itemList} />

            <Box
              width={"100%"}
              maxWidth={"960px"}
              margin={["auto"]}
              padding={3}
            >
              {children}
            </Box>

            <TableOfContents />
          </Flex>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;
