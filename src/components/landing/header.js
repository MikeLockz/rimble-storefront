import React from "react";
import RimbleGatsbyLink from "./RimbleGatsbyLink";

import Text from "./Text";
import Heading from "./Heading";
import Button from "./Button";

const Header = ({ props }) => (
  <header>
    <Heading.h1 fontSize={[5, 7]} pr={[3, 6]}>
      Rimble Design System
    </Heading.h1>
    <Text.p fontSize={4} mt={3} mb={5} pr={[3, 6]}>
      A growing open-source library of React components and guides for helping you design, build and ship dApps everyone can use.
    </Text.p>

    <RimbleGatsbyLink to={"/components"}>
      <Button width={["100%", "auto"]} mr={[0, 3]} mb={[3, 0]}>
        View Documentaton
      </Button>
    </RimbleGatsbyLink>

  </header>
);

export default Header;
