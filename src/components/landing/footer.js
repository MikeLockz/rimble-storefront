import React from "react";
import styled from "styled-components";

import { flexDirection, space } from "styled-system";

import Container from "./Container";
import Text from "./Text";
import RimbleLink from "./RimbleLink";

const FooterStyled = styled.footer`
  background: ${props => props.theme.colors["primary-light"]};
`;

const MyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;

  ${space}
  ${flexDirection}
`;

const Footer = ({ props }) => (
  <FooterStyled>
    <MyContainer flexDirection={["column", "row"]} py={4}>
      <RimbleLink
        color="#f5f5f5"
        fontWeight={3}
        fontSize={2}
        href="//consensys.design/"
        target="_blank"
        rel="noopener"
      >
        Made by ConsenSys Design
      </RimbleLink>
      <Text fontWeight={0} fontSize={2} color="#f5f5f5">
        © 2018 ConsenSys Inc.
      </Text>
    </MyContainer>
  </FooterStyled>
);

export default Footer;
