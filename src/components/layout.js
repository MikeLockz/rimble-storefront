import React from "react";
// import ThemeProvider from "../components/landing/ThemeProvider";
import defaultTheme from "../theme";
import Nav from "../components/landing/nav";
import Typography from "../components/landing/typography";
import { Box, Flex, ThemeProvider } from "rimble-ui";
import TableOfContents from "../components/documentation/TableOfContents";
import { StaticQuery, graphql } from "gatsby";
import ContributeBanner from "../components/documentation/ContributeBanner";
import StaticSideNav from "./staticSideNav";

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
            <StaticSideNav />

            <Box
              width={"100%"}
              maxWidth={"960px"}
              margin={["auto"]}
              padding={3}
            >
              {children}

              <ContributeBanner />
            </Box>

            <TableOfContents />
          </Flex>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;
