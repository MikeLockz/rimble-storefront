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
              href={"javascript:;"} /* eslint-disable-line */
              title={item.title}
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
            href={"javascript:;"} /* eslint-disable-line */
            title={item.title}
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
    <Box my={3} mx={[0, 0, 3]}>
      {tableOfContents && (
        <StyledLinkListBox>
          <Text caps color={"mid-gray"} fontSize={0} fontWeight={4} mb={3}>
            On this Page
          </Text>
          <Ul>{loop(tableOfContents)}</Ul>
        </StyledLinkListBox>
      )}
    </Box>
  );
};

export default TableOfContents;
