import React from "react";
import { Table as RimbleTable } from "rimble-ui";

export const Table = props => (
  <RimbleTable my={3} {...props}>{props.children}</RimbleTable>
);
