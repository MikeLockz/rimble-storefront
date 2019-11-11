import React from "react";
import { Box, Heading } from "rimble-ui";
import TableOfContents from "./TableOfContents";
import ContributeBanner from "./ContributeBanner";
import styled from "styled-components";

const ContentContainer = styled(Box)`
  position: relative;

  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Aside = styled(Box)`
  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    position: sticky;
    margin-top: ${props => props.theme.space[4]}px;
    top: 90px;
    right: 0;
    width: auto;
    order: 2;
  }
`;

const Article = styled(Box)`
  // Extra Large
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: ${props => props.theme.breakpoints[1]};
    width: 67%;
  }
`;

const Content = (
  { title, tableOfContents, children, componentType },
  props
) => {
  return (
    <ContentContainer id="reach-skip-nav" as="main" p={4} {...props}>
      <Box display={["block", "block", "block", "none"]}>
        <Heading as={"h1"} fontSize={[5, 6, 7]} my={4} px={3}>
          {title}
        </Heading>
      </Box>

      <Aside px={3}>
        <TableOfContents tableOfContents={tableOfContents} />
      </Aside>

      <Article mb={3}>
        <Box display={["none", "none", "none", "block"]} px={3}>
          <Heading as={"h1"} fontSize={6} my={4}>
            {title}
          </Heading>
        </Box>

        <Box px={3}>
          {children}
          <ContributeBanner componentType={componentType} px={3} />
        </Box>
      </Article>
    </ContentContainer>
  );
};

export default Content;
