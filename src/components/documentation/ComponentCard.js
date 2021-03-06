import React from "react";
import { Box, Flex, Heading, Text, Image } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import HoverCard from "./../global/HoverCard";

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
              <Heading as="h4" my={3}>
                {componentName}
              </Heading>
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
