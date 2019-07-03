import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Link as RimbleLink, Box, Image, Flex, Icon } from "rimble-ui";
import theme from "./../../theme";

const StyledNavbar = styled(Box)`
  & {
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
  }
`;

const Navbar = ({ isNavOpen, setIsNavOpen, toggleNavOpen }) => {
  return (
    <StyledNavbar
      borderBottom={1}
      borderColor={"light-gray"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      p={3}
      bg={theme.colors.white}
      top={0}
      right={0}
      left={0}
      zIndex={9}
    >
      <RimbleLink as={GatsbyLink} to={"/"}>
        <Image src="/rimble-logotype.svg" alt="rimble home" />
      </RimbleLink>

      <RimbleLink
        href="javascript:;" /* eslint-disable-line */
        display={["block", "block", "block", "none"]}
        onClick={e => toggleNavOpen()}
        color={theme.colors.primary}
      >
        {isNavOpen ? (
          <Flex alignItems="center">
            <Icon name="Close" /> Hide Menu
          </Flex>
        ) : (
          <Flex alignItems="center">
            <Icon name="Menu" /> Show Menu
          </Flex>
        )}
      </RimbleLink>
    </StyledNavbar>
  );
};

export default Navbar;
