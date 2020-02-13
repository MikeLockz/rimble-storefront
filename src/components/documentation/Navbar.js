import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Link as RimbleLink, Box, Image, Flex, Icon, theme } from "rimble-ui";
import RimbleLogotype from "../../../static/rimble-blurple.svg";

const StyledNavbar = styled(Box)`
  & {
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
  }
`;

const Navbar = ({ isNavOpen, setIsNavOpen, toggleNavOpen }) => {
  return (
    <StyledNavbar
      bg={"white"}
      borderBottom={1}
      borderColor={"blacks.3"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      p={3}
      top={0}
      right={0}
      left={0}
      zIndex={999}
    >
      <GatsbyLink to={"/"} aria-label={"Rimble, back to homepage"}>
        <Image
          src={RimbleLogotype}
          alt="rimble home"
          display={"block"}
          aria-hidden={"true"}
        />
      </GatsbyLink>

      <RimbleLink
        href="javascript:;" /* eslint-disable-line */
        display={["block", "block", "block", "none"]}
        onClick={e => toggleNavOpen()}
        color={"primary"}
      >
        {isNavOpen ? (
          <Flex
            alignItems="center"
            aria-label="Close navigation"
            aria-controls="mainNavigation"
          >
            <Icon mr={1} name="Close" aria-hidden="true" /> Hide menu
          </Flex>
        ) : (
          <Flex
            alignItems="center"
            aria-label="Show navigation"
            aria-controls="mainNavigation"
          >
            <Icon mr={1} name="Menu" aria-hidden="true" /> Menu
          </Flex>
        )}
      </RimbleLink>
    </StyledNavbar>
  );
};

export default Navbar;
