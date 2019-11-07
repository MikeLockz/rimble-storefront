import React from "react";
import { Box, Card, Flex, Icon, Heading, Text, Image, Link, Button } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";

const GuideCard = ({ GuideTitle, GuideImage, GuideSubTitle, GuideDescription, children, ImageAlt, DemoLink, DemoTitle, DemoCTA, GuideLink, GuideLinkTitle, GuideCTA }) => {
return (
  <Box>
    <Card width={"auto"} mx={"auto"} mt={4} mb={5} p={0}>
    <Flex flexDirection="column">
      <Image
        alt={ImageAlt}
        width={1}
        src={GuideImage}
      />
      <Box borderTop={1} borderWidth={3} borderColor="primary-light" px={4} py={3}>
        <Heading.h2 py={3}>{GuideTitle}</Heading.h2>
        <Heading.h5 py={2} color="#666">{GuideSubTitle}</Heading.h5>
        <Text my={3}>
          {GuideDescription}
        </Text>
          {children}
      </Box>
    </Flex>
      <Box borderTop={1} borderWidth={1} borderColor="light-gray">
        <Flex my={3} mx={3} flexDirection={["column", "row"]} alignItems="center" justifyContent={["center", "flex-end"]} flexWrap={'wrap'}>
          <Box width={[1, "auto"]}>
            <Flex justifyContent="center" alignItems="center" mb={[3, 2]} mt={[2, 0]} mx={3}>
              <Link
                fontSize={2}
                href={DemoLink}
                title={DemoTitle}
                target="_blank"
                mr={[0, 3]}
                >
                <Flex alignItems="center">
                {DemoCTA}
                <Icon ml={2} color="primary" size="16px" name="Launch" />
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box width={[1, "auto"]}>
            <RimbleGatsbyLink
              to={GuideLink}
              title={GuideLinkTitle}
            >
              <Button
                mr={[0, 4]}
                mb={2}
                width="100%">
              {GuideCTA}
              </Button>
            </RimbleGatsbyLink>
          </Box>
        </Flex>
      </Box>
    </Card>
  </Box>
);
};

export default GuideCard;
