import React from "react";
import { Box, Text, Link } from "rimble-ui";

const Footer = () => {
  return (
    <Box role="contentinfo" borderTop={1} borderColor={"blacks.3"}>
      <Text textAlign={"center"} fontSize={1} p={2}>
        Made by{" "}
        <Link
          href="https://consensys.design/"
          title={"Learn about ConsenSys Design"}
          target={"_blank"}
        >
          ConsenSys Design
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
