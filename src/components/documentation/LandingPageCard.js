import React from "react";
import { Box, Card, Flex, Heading, Text } from "rimble-ui";
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

const LandingPageCard = ({ link, linkTitle, emoji, heading, description }) => {
  return (
<RimbleGatsbyLink
  to={link}
  title={linkTitle}
>
  <HoverCard width={"auto"} mx={"auto"} mt={4} mb={[1, 5]} p={0}>
    <Flex
      height={"200px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"near-white"}
      overflow={"scroll"}
      borderBottom={1}
      borderWidth={3}
      borderColor="primary-light"
    >
    <Text fontSize={7}>{emoji}</Text>
    </Flex>
    <Box px={4} py={3}>
      <Heading.h2 my={3}>{heading}</Heading.h2>
      <Text
        color={"text"}
        my={3}
      >
        {description}
      </Text>
    </Box>
  </HoverCard>
</RimbleGatsbyLink>
);
};

export default LandingPageCard;
