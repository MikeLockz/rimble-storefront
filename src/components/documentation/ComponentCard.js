import React from "react";
import { Box, Card, Flex, Icon, Heading, Text } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";

const ComponentCard = ({ componentName, children, description }) => {
  return (
    <Box width={[1, 1 / 2]} p={2}>
      <RimbleGatsbyLink
        to={`/components/rimble-ui/${componentName}`}
        title={`Code and usage examples for the ${componentName} component`}
      >
        <Card Width={"640px"} mx={"auto"} p={3} px={4} height={"100%"}>
          <Flex
            mt={2}
            mb={3}
            height={"150px"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"near-white"}
            overflow={"scroll"}
          >
            {children}
          </Flex>
          <Heading.h4 my={2}>{componentName}</Heading.h4>
          <Text mb={2}>{description}</Text>
        </Card>
      </RimbleGatsbyLink>
    </Box>
  );
};

export default ComponentCard;
