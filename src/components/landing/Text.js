import styled from "styled-components";

import { fontSize, fontWeight, space, color } from "styled-system";

const Text = styled.div`
  ${fontSize}
  ${fontWeight}
  ${space}
  ${color}
  list-style: none
`;

Text.span = Text.withComponent("span");
Text.p = Text.withComponent("p");
Text.s = Text.withComponent("s");

export default Text;
