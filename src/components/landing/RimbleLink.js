import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontWeight, fontSize } from "styled-system";

const RimbleLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  ${color}
  ${fontSize}
  ${fontWeight}

  &:hover {
    text-decoration: underline;
  }
  text-decoration: ${props => (props.activeStyle ? `underline` : "none")};
`;

RimbleLink.propTypes = {
  color: PropTypes.string
};

RimbleLink.defaultProps = {
  color: "primary"
};

export default RimbleLink;
