import React from "react";
import { Box, Flex, Icon, Text, Heading } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import HoverCard from "../global/HoverCard";

const NavCard = ({ urlTitle, url, prev, next, pageTitle }) => {
  return (
    <Box width={[1, 1 / 2]} p={2}>
      <RimbleGatsbyLink title={urlTitle} to={url} height={"100%"}>
        <HoverCard
          alignContent="center"
          border={0}
          borderRight={next ? 1 : 0}
          borderLeft={prev ? 1 : 0}
          borderWidth={3}
          borderColor="primary"
          mb={3}
          maxWidth={"640px"}
          mx={"auto"}
          pt={3}
          px={4}
          pb={0}
          height={"100%"}
        >
          <Flex
            alignItems="center"
            justifyContent={next ? "flex-end" : "flex-start"}
          >
            {prev && (
              <Box>
                <Icon color="primary" mr={3} size="24px" name="ArrowBack" />
              </Box>
            )}
            <Box>
              <Text fontSize={3} fontWeight="bold" color="primary">
                {prev ? "Previous" : "Next"}
              </Text>
              <Text color="text">{pageTitle}</Text>
            </Box>
            {next && (
              <Box>
                <Icon color="primary" ml={3} size="24px" name="ArrowForward" />
              </Box>
            )}
          </Flex>
        </HoverCard>
      </RimbleGatsbyLink>
    </Box>
  );
};

const GuideNextPrevious = ({
  previousTitle,
  previousUrl,
  nextTitle,
  nextUrl,
  isFirstGuide,
  isLastGuide,
  previousGuideName,
  nextGuideName,
  pageTitle,
}) => {
  return (
    <Box aria-label="pagination">
      <Heading as="h5" mb={3} mt={4}>
        Navigate the guide
      </Heading>
      <Flex justifyContent="space-between" mt={4} flexWrap={"wrap"} mx={-2}>
        <NavCard
          pageTitle={previousGuideName}
          url={previousUrl}
          urlTitle={previousTitle}
          prev={true}
          isFirstGuide={isFirstGuide}
        />

        <NavCard
          pageTitle={nextGuideName}
          url={nextUrl}
          urlTitle={nextTitle}
          next={true}
          isLastGuide={isLastGuide}
        />
      </Flex>
    </Box>
  );
};

export default GuideNextPrevious;
