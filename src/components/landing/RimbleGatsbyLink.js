import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontWeight, fontSize, space } from "styled-system";
import { Link } from "gatsby";

const RimbleGatsbyLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;

  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}

  &:hover::first-line {
    text-decoration: underline;
  }
`;

RimbleGatsbyLink.propTypes = {
  color: PropTypes.string
};

RimbleGatsbyLink.defaultProps = {
  color: "primary"
};

export default RimbleGatsbyLink;
