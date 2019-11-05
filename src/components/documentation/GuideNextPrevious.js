import React from "react";
import { Box, Card, Flex, Icon, Text, Heading } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";

const GuideNextPrevious = ({
  previousTitle,
  previousUrl,
  nextTitle,
  nextUrl,
  previousGuideName,
  nextGuideName
}) => {
  return (
    <Box>
      <Heading.h4 mb={3} mt={4}>
        Navigate the guide
      </Heading.h4>
      <Flex justifyContent="space-between" mt={4} flexWrap={"wrap"}>
        <Box width={[1, 1 / 2]} p={2}>
          <RimbleGatsbyLink title={previousTitle} to={previousUrl}>
            <Card
              border={0}
              p={3}
              borderLeft={1}
              borderWidth={3}
              borderColor="primary"
              mb={3}
              maxWidth={"640px"}
              mx={"auto"}
              p={3}
              px={4}
            >
              <Flex alignItems="center">
                <Box>
                  <Icon color="primary" mr={3} size="24px" name="ArrowBack" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={3} color="primary">
                    Previous
                  </Text>
                  <Text>{previousGuideName}</Text>
                </Box>
              </Flex>
            </Card>
          </RimbleGatsbyLink>
        </Box>

        <Box width={[1, 1 / 2]} p={2}>
          <RimbleGatsbyLink title={nextTitle} to={nextUrl}>
            <Card
              alignContent="center"
              p={3}
              border={0}
              borderRight={1}
              borderWidth={3}
              borderColor="primary"
              mb={3}
              maxWidth={"640px"}
              mx={"auto"}
              p={3}
              px={4}
            >
              <Flex alignItems="center" justifyContent="flex-end">
                <Flex
                  flexDirection={"column"}
                  flexWrap={"wrap"}
                  alignItems={"flex-end"}
                >
                  <Text fontSize={3} fontWeight="bold" color="primary">
                    Next
                  </Text>
                  <Text>{nextGuideName}</Text>
                </Flex>
                <Box>
                  <Icon
                    color="primary"
                    ml={3}
                    size="24px"
                    name="ArrowForward"
                  />
                </Box>
              </Flex>
            </Card>
          </RimbleGatsbyLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default GuideNextPrevious;
