import React from "react";
import { Box, Flex, Heading, Text } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import HoverCard from "../global/HoverCard";

const LandingPageCard = ({ link, linkTitle, emoji, heading, description }) => {
  return (
    <RimbleGatsbyLink to={link} title={linkTitle}>
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
          <Text color={"text"} my={3}>
            {description}
          </Text>
        </Box>
      </HoverCard>
    </RimbleGatsbyLink>
  );
};

export default LandingPageCard;
