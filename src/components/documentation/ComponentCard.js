import React from "react";
import { Box, Card, Flex, Heading, Text, Image } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import styled, { ThemeProvider } from "styled-components";

const HoverCard = styled(Card)`
  & {
    text-decoration: none;
    color: ${props => props.theme.colors["dark-gray"]};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease;
  }
  &:hover {
    color: ${props => props.theme.colors["primary"]};
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ComponentCard = ({ componentName, image, imageAlt, description }) => {
  return (
    <Box width={[1, 1 / 2]} mt={3} p={2}>
      <RimbleGatsbyLink
        to={`/components/rimble-ui/${componentName}`}
        title={`Code and usage examples for the ${componentName} component`}
      >
        <HoverCard p={0} mx={"auto"} height={"100%"}>
          <Flex flexDirection={"column"}>
            <Image
              alt={`Example of a Rimble ${componentName} component`}
              width={1}
              src={`/images/${componentName}.png`}
            />
            <Box
              px={4}
              py={3}
              borderTop={1}
              borderWidth={3}
              borderColor="primary-light"
            >
              <Heading.h4 my={3}>{componentName}</Heading.h4>
              <Text mb={3} color={"text"}>
                {description}
              </Text>
            </Box>
          </Flex>
        </HoverCard>
      </RimbleGatsbyLink>
    </Box>
  );
};

export default ComponentCard;
