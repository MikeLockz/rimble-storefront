import React from "react";
import { Card } from "rimble-ui";
import styled from "styled-components";

const StyledCard = styled(Card)`
  & {
    text-decoration: none;
    color: ${props => props.theme.colors["dark-gray"]};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease;
  }
  &:hover {
    color: ${props => props.theme.colors["primary"]};
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const HoverCard = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default HoverCard;
