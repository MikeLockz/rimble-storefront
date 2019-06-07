import React from "react";
import { Link as RimbleLink, Text, Box } from "rimble-ui";
import { navigate } from "@reach/router";
import Ul from "../../components/landing/Ul";
import Li from "../../components/landing/Li";

const TableOfContents = props => {
  const { tableOfContents } = props;
  const loop = data =>
    data.items.map(item => {
      if (typeof item.items !== "undefined" && item.items.length > 0) {
        return (
          <Li key={item.url}>
            <RimbleLink
              href={"javascript:;"}
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
            href={"javascript:;"}
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
    <Box width={"220px"}>
      {tableOfContents ? (
        <Box
          position={'fixed'}
          top={'2rem'}
          right={'2rem'}
          width={'140px'}
        >
          <Text caps color={'mid-gray'} fontSize={0} fontWeight={4} mb={3}>
            On this Page
          </Text>
          <Ul>{loop(tableOfContents)}</Ul>
        </Box>
      ) : null}
    </Box>
  );
};

export default TableOfContents;
