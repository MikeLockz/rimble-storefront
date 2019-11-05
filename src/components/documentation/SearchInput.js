import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input } from "rimble-ui";

const SearchForm = styled(Form)`
  > span,
  > span > input {
    width: 100%;
  }
`

function SearchInput({ ...rest }) {
  useEffect(() => {
    typeof window !== "undefined" &&
      window.docsearch({
        apiKey: "c62d786a7050496460df7969528f68a4",
        indexName: "rimble-ui",
        inputSelector: "#search-input",
        debug: true // Set debug to true if you want to inspect the dropdown
      });
  }, []);

  return (
    <SearchForm role="search" onSubmit={e => e.preventDefault()}>
      <Input
        type="search"
        placeholder="Search"
        aria-label="Search"
        role="searchbox"
        id="search-input"
        {...rest}
      />
    </SearchForm>
  );
}

export default SearchInput;
