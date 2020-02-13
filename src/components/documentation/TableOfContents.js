import React from "react";
import styled from "styled-components";
import { Link as RimbleLink, Text, Box, theme } from "rimble-ui";
import { navigate } from "@reach/router";

const Ul = props => <Text as={"ul"} pl={3} m={0} {...props} />;

const Li = props => <Text as={"li"} {...props} lineHeight={1} p={0} />;

const StyledLinkListBox = styled(Box)`
  & {
  }
  ul {
    list-style: none;
  }
  a:not(:hover):not(.-is-active) {
    color: inherit;
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
  }
`;

const TableOfContents = props => {
  const { tableOfContents } = props;

  const loop = data =>
    data.items.map(item => {
      if (typeof item.items !== "undefined" && item.items.length > 0) {
        return (
          <Li my={1} key={item.url}>
            <RimbleLink
              href={`${item.url}`} /* eslint-disable-line */
              title={item.title}
              fontSize={2}
              fontWeight={2}
              onClick={() => {
                navigate(item.url);
              }}
            >
              {item.title}
            </RimbleLink>
            <Ul
              my={2}
              ml={2}
              borderLeft={1}
              borderWidth={1}
              borderColor="#f4f4f4"
              pl={3}
            >
              {loop(item)}
            </Ul>
          </Li>
        );
      }
      return (
        <Li my={1} key={item.url}>
          <RimbleLink
            /* eslint-disable-line */
            href={`${item.url}`}
            title={item.title}
            fontSize={2}
            fontWeight={2}
            onClick={() => {
              navigate(item.url);
            }}
          >
            {item.title}
          </RimbleLink>
        </Li>
      );
    });

  return (
    <Box mt={3} mb={4} mx={[0, 0, 3]}>
      {Object.keys(tableOfContents).length > 0 ? (
        <StyledLinkListBox
          p={[0, 0, 3]}
          ml={[1, 1, 3]}
          aria-label="table of contents"
        >
          <Text fontSize={2} fontWeight={3} mb={2}>
            On this page
          </Text>
          <Ul
            ml={1}
            borderLeft={1}
            borderWidth={2}
            borderColor="#f4f4f4"
            pl={3}
          >
            {loop(tableOfContents)}
          </Ul>
        </StyledLinkListBox>
      ) : null}
    </Box>
  );
};

export default TableOfContents;
