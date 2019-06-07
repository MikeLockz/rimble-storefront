import React from "react";
import styled from "styled-components";

import { color, space, width, flex, display } from "styled-system";

import Container from "./Container";
import NavMenu from "./navMenu";
import Heading from "./Heading";
import defaultTheme from "../../theme";

import RimbleGatsbyLink from "./RimbleGatsbyLink";

const NavWrap = styled.nav`

  ${space}
  ${width}
  ${color}

  background: #FFFFFF;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
`;

const NavList = styled.ul`
  & {
    margin: 0;
    padding: 0;
    list-style: none;

    position: relative;
    justify-content: space-between;
    align-items: center;

    height: 5rem;
  }

  ${display}
  ${flex}
`;

const Nav = () => (
  <NavWrap width={1} bg="white">
    <Container>
      <NavList display="flex" flex="row nowrap">
        <li>
          <RimbleGatsbyLink to="/" title="Rimble home" color={"mid-gray"}>
            <Heading.h1 fontSize={[2, 3]} fontWeight={2}>
                Rimble Design System
            </Heading.h1>
          </RimbleGatsbyLink>
        </li>
        <NavMenu theme={defaultTheme} />
      </NavList>
    </Container>
  </NavWrap>
);

export default Nav;
