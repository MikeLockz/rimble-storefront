import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontWeight, fontSize } from "styled-system";
import { Link } from "gatsby";

const RimbleGatsbyLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  ${color}
  ${fontSize}
  ${fontWeight}

  &:hover.active {
      text-decoration: underline
    }
    &:hover{
      & > div {
        box-shadow: ${props => props.theme.shadows[2]};
      }
    }
    &:active {
      & > div {
        box-shadow: ${props => props.theme.shadows[1]};
      }
  }
`;

RimbleGatsbyLink.propTypes = {
  color: PropTypes.string
};

RimbleGatsbyLink.defaultProps = {
  color: "primary"
};

export default RimbleGatsbyLink;
