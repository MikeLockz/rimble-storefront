import React from "react";
import SEO from "../components/global/SEO";
import { Box, Flex, Card, Heading, Text, Image, Link } from "rimble-ui";
import SearchInput from "../components/documentation/SearchInput";

const NotFoundPage = () => (

  <Box width="auto" p={4} justifyContent="center">
    <SEO title="404: Not found" />
      <Flex justifyContent={["center", "flex-start"]}>
      <Link href="/" title="To Rimble components">
        <Image src="/rimble-grey.svg"
        alt="Rimble logo"
        mb={5}/>
      </Link>
      </Flex>
    <Flex justifyContent="center">
      <Heading.h1 color="primary">0x404...</Heading.h1>
    </Flex>
    <Flex justifyContent="center" my={3}>
      <Heading.h1 textAlign="center">PAGE NOT FOUND</Heading.h1>
    </Flex>
    <Flex justifyContent="center" my={3}>
      <Text textAlign="center">We must have hard-forked since this page existed.</Text>
    </Flex>
    <Flex justifyContent="center">
    <Card border={0} borderTop={1} borderColor="primary-light" borderWidth={3} mt={3} width={[1, 1/2]}>
      <Text caps fontWeight="bold" fontSize={1}>Search our docs</Text>
      <SearchInput my={3}/>
    <Box mt={3} pt={2} borderTop={1} borderColor="near-white">
      <Text caps fontWeight="bold"  fontSize={1} mt={3}>Quick links</Text>
      <Flex alignItems="center" my={3}>
        <Link
          href="/"
          title="To Rimble components"> Home</Link>
      </Flex>
      <Flex my={3}>
        <Link
          href="/components"
          title="To Rimble components"> Components</Link>
      </Flex>
      <Flex mt={3}>
        <Link
          href="/guides"
          title="To Rimble Guides"> Guides</Link>
      </Flex>
    </Box>
    </Card>
    </Flex>

  </Box>
);

export default NotFoundPage;
