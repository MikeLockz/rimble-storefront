import React from "react";
import { Flex, Box, Image, Heading, Text, Link, Icon } from "rimble-ui";

const TemplateConnectionDemo = () => {
  return (
    <Flex flexDirection="column" mb={4}>
      <Box mb={4}>
        <Image
          src="/images/connecting-to-a-dapp.png"
          alt="An illustration of Rimble's connecting to a dApp process"
        />
      </Box>
      <Flex flexDirection="column">
        <Box>
          <Heading as={"h3"} fontSize={[2, 4]} mb={3}>
            dApp connection demo
          </Heading>
          <Text mb={3}>
            Our connection demo shows methods for helping a user connect to your
            dApp and start transacting.
          </Text>
          <Link
            href="https://rimble-app-demo.netlify.com/"
            target="_blank"
            rel="noopener"
            title="Rimble's connection demo dApp"
          >
            <Flex alignItems="center">
              dApp connection demo
              <Icon name="Launch" size={"1em"} ml={2} />
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TemplateConnectionDemo;
