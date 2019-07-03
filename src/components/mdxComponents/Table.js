import React from "react";
import styled from "styled-components";
import { Table as RimbleTable } from "rimble-ui";

const StyledTable = styled(RimbleTable)`
  & {
    display: block;
    width: 100%;
    overflow: auto;
    border-width: 0;
  }

  th,
  td {
    border: solid;
    border-width: 1px;
    border-color: inherit;
    padding: 0 1.5rem;
  }
`;

export const Table = props => (
  <StyledTable my={4} {...props}>
    {props.children}
  </StyledTable>
);
