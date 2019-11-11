import React from "react";
import { Box, Card, Flex, Heading, Text, Image } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";

const ComponentCard = ({ componentName, image, imageAlt, description }) => {
  return (
    <Box width={[1, 1 / 2]} mt={3} p={2}>
      <RimbleGatsbyLink
        to={`/components/rimble-ui/${componentName}`}
        title={`Code and usage examples for the ${componentName} component`}
      >
        <Card p={0} mx={"auto"} height={"100%"}>
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
              <Text mb={3}>{description}</Text>
            </Box>
          </Flex>
        </Card>
      </RimbleGatsbyLink>
    </Box>
  );
};

export default ComponentCard;
