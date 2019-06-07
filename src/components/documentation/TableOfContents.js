import React from "react";
import { Link as RimbleLink, Box } from "rimble-ui";
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
    <Box flex={'0 0 auto'} width={'160px'} position={'relative'}>
      {tableOfContents ? (
        <Box
          position={"fixed"}
          top={"100px"}
          right={'2rem'}
          width={"140px"}
          mr={2}
          ml={2}
        >
          <Ul>{loop(tableOfContents)}</Ul>
        </Box>
      ) : null}
    </Box>
  );
};

export default TableOfContents;
