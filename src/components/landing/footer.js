import React from "react";
import { Flex, Box, Text, Link } from 'rimble-ui';
import Container from "./Container";

const Footer = () => (
  <Box
    as={'footer'}
    bg={'#f2f4f7'}
    py={4}
    aria-label="Footer"
  >
    <Flex
      as={Container}
      flexDirection={["column", "row"]}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Link
        color="mid-gray"
        hoverColor="dark-gray"
        fontWeight={3}
        fontSize={2}
        href="//consensys.design/"
        target="_blank"
        rel="noopener"
      >
        Made by ConsenSys Design
      </Link>
      <Link
        color="mid-gray"
        hoverColor="dark-gray"
        fontWeight={3}
        fontSize={2}
        href="//twitter.com/MakingRimble"
        target="_blank"
        rel="noopener"
      >
        Follow us on Twitter
      </Link>
      <Text fontWeight={0} fontSize={2} color="mid-gray">
        © 2018 ConsenSys Inc.
      </Text>
    </Flex>
  </Box>
);

export default Footer;
