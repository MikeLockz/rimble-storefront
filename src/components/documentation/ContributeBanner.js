import React from "react";
import { Button, Box, Card, Text, Icon, Heading, Flex, Image } from "rimble-ui";

const getContributeUrl = componentType => {
  switch (componentType) {
    case "rimble-ui":
      return "https://github.com/ConsenSys/rimble-ui/issues";
    case "web3-components":
      return "https://github.com/ConsenSys/rimble-web3-components/issues";
    default:
      return false;
  }
};

const ContributeBanner = ({ componentType }) => (
  <>
    {getContributeUrl(componentType) ? (
      <Box
        my={4}>
        <Text textAlign={"center"} mb={4}>
          {"(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧"}
        </Text>
        <Card color="white" bg="primary-light" borderRadius="2" border="none">
          <Flex>
            <Box width={[3 / 4]}>
              <Heading.h2 id="contribute" mb={3} color="white">
                Contribute to Rimble
              </Heading.h2>
              <Text color="white" mb={4}>
                We welcome pull requests and issues that help improve Rimble!
              </Text>
              <Button
                role="button"
                aria-labelledby="contribute "
                mainColor={"white"}
                contrastColor={"primary"}
                as={"a"}
                href={getContributeUrl(componentType)}
                title="Contribute to Rimble"
                target="_blank"
              >
                Contribute <Icon ml={2} name="Launch" size="16px" />
              </Button>
            </Box>
            <Box
              width={[1 / 4]}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                ml={2}
                src="/images/github-mark.svg"
                alt="Github logo"
                height="120px"
                width="120px"
              />
            </Box>
          </Flex>
        </Card>
      </Box>
    ) : (
      <></>
    )}
  </>
);

export default ContributeBanner;
