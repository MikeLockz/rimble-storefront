import React from "react";
import { Box, Card, Flex, Icon, Text, Heading } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";
import styled, { ThemeProvider } from "styled-components";

const HoverCard = styled(Card)`
  & {
    text-decoration: none;
    color: ${props => props.theme.colors["dark-gray"]};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease;
  }
  &:hover {
    color: ${props => props.theme.colors["primary"]};
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const NavCard = ({ title, url, prev, next }) => {
  return (
    <Box width={[1, 1 / 2]} p={2}>
      <RimbleGatsbyLink title={title} to={url} height={"100%"}>
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
              <Text color="text">{title}</Text>
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
  isLastGuide
}) => {
  return (
    <Box aria-label="pagination">
      <Heading as="h5" mb={3} mt={4}>
        Navigate the guide
      </Heading>
      <Flex justifyContent="space-between" mt={4} flexWrap={"wrap"} mx={-2}>
        <NavCard
          title={previousTitle}
          url={previousUrl}
          prev={true}
          isFirstGuide={isFirstGuide}
        />

        <NavCard
          title={nextTitle}
          url={nextUrl}
          next={true}
          isLastGuide={isLastGuide}
        />
      </Flex>
    </Box>
  );
};

export default GuideNextPrevious;
