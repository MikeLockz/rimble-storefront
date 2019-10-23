import React from "react";
import { Button, Box, Card, Text, Heading } from "rimble-ui";

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
      <Box my={4}>
        <Text textAlign={"center"} mb={4}>
          {"(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧"}
        </Text>
        <Card color="white" bg="primary" border="none">
          <Heading.h2 color="white">Are we missing anything?</Heading.h2>
          <Text color="white" mb={4}>
            If you have any extra insight you'd like to add, please raise an
            issue in Github.
          </Text>
          <Button
            mainColor={"white"}
            contrastColor={"primary"}
            as={"a"}
            href={getContributeUrl(componentType)}
            title="Contribute to Rimble"
            target="_blank"
          >
            Contribute
          </Button>
        </Card>
      </Box>
    ) : (
      <></>
    )}
  </>
);

export default ContributeBanner;
