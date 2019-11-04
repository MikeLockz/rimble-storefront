import React from "react";
import { Box, Card, Flex, Icon, Heading, Text, Image, Link, Button } from "rimble-ui";
import RimbleGatsbyLink from "./../landing/RimbleGatsbyLink";

const GuideCard = ({ GuideTitle, GuideImage, GuideSubTitle, GuideDescription, children, ImageAlt, DemoLink, DemoTitle, DemoCTA, GuideLink, GuideLinkTitle, GuideCTA }) => {
return (
  <Box>
    <Card width={"auto"} mx={"auto"} mt={4} mb={5} p={0}>
      <Image
        alt={ImageAlt}
        width={1}
        src={GuideImage}
      />
      <Box borderTop={1} borderWidth={3} borderColor="primary-light" px={4} py={3}>
      <Heading.h2 py={3}>{GuideTitle}</Heading.h2>
      <Heading.h5 py={3} color="#666">{GuideSubTitle}</Heading.h5>
      <Text my={3}>
        {GuideDescription}
      </Text>
        {children}
      </Box>
      <Box borderTop={1} borderWidth={1} borderColor="light-gray">
        <Flex my={3} px={3} alignItems="center" justifyContent="flex-end" flexWrap={'wrap'} alignItems={"stretch"}>
          <Flex alignItems="center" mx={3}>
            <Link
              fontSize={2}
              href={DemoLink}
              title={DemoTitle}
              target="_blank">
              <Flex alignItems="center">
              {DemoCTA}
              <Icon ml={2} color="primary" size="16px" name="Launch" />
              </Flex>
            </Link>
          </Flex>
          <RimbleGatsbyLink
            to={GuideLink}
            title={GuideLinkTitle}
          >
            <Button mx={3}>
            {GuideCTA}
            </Button>
          </RimbleGatsbyLink>
        </Flex>
      </Box>
    </Card>
  </Box>
);
};

export default GuideCard;
