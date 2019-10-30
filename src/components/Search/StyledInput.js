import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { Form, Input } from "rimble-ui";

export default connectSearchBox(({ refine, ...rest }) => (
  <Form role="search" m={2} mb={3} onSubmit={e => e.preventDefault()}>
    <Input
      type="search"
      placeholder="Search library"
      aria-label="Search"
      role="searchbox"
      onChange={e => refine(e.target.value)}
      width={1}
      {...rest}
    />
  </Form>
));
