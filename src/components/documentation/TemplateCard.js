import React from "react";
import { Flex, Image, Box, Heading, Text } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import HoverCard from "../global/HoverCard";

const TemplateCard = ({ children, to, title, src, description }) => {
  return (
    <Box width={[1, 1 / 2]} p={2} mt={3}>
      <RimbleGatsbyLink to={to} title={title}>
        <HoverCard p={0} mx={"auto"} height={"100%"}>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"near-black"}
            overflow={"scroll"}
          >
            <Image
              alt={`Example of a ${title} template`}
              width={1}
              src={`/images/${src}.png`}
            />
          </Flex>
          <Box
            px={4}
            py={3}
            borderTop={1}
            borderWidth={3}
            borderColor="primary-light"
          >
            <Heading as="h4" my={3}>
              {title}
            </Heading>
            <Text mb={3} color="text">
              {description}
            </Text>
          </Box>
          {children}
        </HoverCard>
      </RimbleGatsbyLink>
    </Box>
  );
};

export default TemplateCard;
