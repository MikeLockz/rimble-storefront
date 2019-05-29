import styled from "styled-components";

import { fontSize, fontWeight, space, color } from "styled-system";

const Li = styled.li`
  ${fontSize}
  ${fontWeight}
  ${space}
  ${color}
  list-style: none;
  padding: 0;
`;

export default Li;
