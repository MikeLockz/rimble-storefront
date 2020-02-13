import React from "react";
import { Flex, Box, Image, Heading, Text, Link, Icon } from "rimble-ui";

const TemplateDevConDemo = () => {
  return (
    <Flex flexDirection="column" mb={4}>
      <Box mb={4}>
        <Image
          src="/images/Transaction-states.png"
          alt="An illustration of Rimble's transaction UX journey"
        />
      </Box>
      <Flex flexDirection="column">
        <Box>
          <Heading as={"h3"} fontSize={[2, 4]} mb={3}>
            Transaction demo
          </Heading>
          <Text mb={3}>
            Our transaction states demo, presented at Devcon V, shows methods
            for updating a user on the status of their transaction.
          </Text>
          <Link
            href="https://rimble-devcon-demo.netlify.com/"
            target="_blank"
            rel="noopener"
            title="Rimble's transaction states Devcon V demo"
          >
            <Flex alignItems="center">
              Transaction states demo
              <Icon name="Launch" size={"1em"} ml={2} />
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TemplateDevConDemo;
