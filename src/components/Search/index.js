import React, { useState, useEffect, createRef } from "react";
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import { Text, Icon, Link, Box, Flex, Heading } from "rimble-ui";
import styled from "styled-components";

import { Root, HitsWrapper, PoweredBy } from "./styles";
import Input from "./StyledInput";
import * as hitComps from "./hitComps";

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children :
    <Box ml={2}>
      <Text textAlign="center" fontSize={6} mb={4}>🥺</Text>
      <Heading.h4 mb={4}>
        We couldn't find "{state.query}"
      </Heading.h4>
      <Text mb={3}>
        If we don't have what you're looking for, raise an issue in GitHub and we'll see what we can do.
      </Text>
      <Flex mb={4}>
      <Link
        color="primary"
        as="a"
        href="https://github.com/ConsenSys/rimble-ui/issues"
        target="_blank"
        title="Go to GitHub to raise an issue"
        >GitHub</Link>
      <Icon color="primary" name="Launch" size="16px" />
      </Flex>
    </Box>
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
);

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler();
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
};

const StyledInstantSearch = styled(InstantSearch)`
  position: relative;
`;

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );
  useClickOutside(ref, () => setFocus(false));
  return (
    <StyledInstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, title, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <h3>{title}</h3>
              <Stats />
            </header>
            <Results>
              <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </StyledInstantSearch>
  );
}
