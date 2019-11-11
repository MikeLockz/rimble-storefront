import React from "react";
import styled from "styled-components";
import { Link as RimbleLink, Text, Box } from "rimble-ui";
import { navigate } from "@reach/router";
import theme from "./../../theme";

const Ul = props => <Text as={"ul"} pl={3} m={0} {...props} />;

const Li = props => <Text as={"li"} {...props} lineHeight={1} p={0} />;

const StyledLinkListBox = styled(Box)`
  & {
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
          <Li key={item.url}>
            <RimbleLink
              href={`${item.url}`} /* eslint-disable-line */
              title={item.title}
              fontSize={2}
              onClick={() => {
                navigate(item.url);
              }}
            >
              {item.title}
            </RimbleLink>
            <Ul>{loop(item)}</Ul>
          </Li>
        );
      }
      return (
        <Li key={item.url}>
          <RimbleLink
            /* eslint-disable-line */
            href={`${item.url}`}
            title={item.title}
            fontSize={2}
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
    <Box
      borderWidth="2"
      borderLeft="1"
      borderColor={"primary-light"}
      mt={3}
      mb={4}
      mx={[0, 0, 3]}
    >
      {Object.keys(tableOfContents).length > 0 ? (
        <StyledLinkListBox p={3} ml={3}>
          <Text fontSize={2} fontWeight={4} mb={2}>
            On this page
          </Text>
          <Ul>{loop(tableOfContents)}</Ul>
        </StyledLinkListBox>
      ) : null}
    </Box>
  );
};

export default TableOfContents;
