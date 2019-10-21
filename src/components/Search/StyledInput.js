import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { Form, Input } from "rimble-ui";

export default connectSearchBox(({ refine, ...rest }) => (
  <Form m={2} mb={3}>
    <Input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      width={1}
      {...rest}
    />
  </Form>
));
