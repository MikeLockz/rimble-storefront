import React from "react";
import styled, { css } from "styled-components";
import { Card } from "rimble-ui";
import { lighten } from "polished";

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`;

export const SearchIcon = styled.div`
  width: 1em;
  pointer-events: none;
  background-color: #aaa;
`;

const focus = css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`;

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`;

const expand = css`
  background: ${props => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  border-radius: ${props => props.theme.smallBorderRadius};
  {highlight-next-line}
  ${props => (props.collapse ? collapse : expand)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const HitsWrapper = styled(Card)`
  display: ${props => (props.show ? `grid` : `none`)};
  position: absolute;
  max-height: 80vh;
  overflow: scroll;
  z-index: 9;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0.5em;
  top: 100%;
  width: 80vw;
  max-width: 30em;
  padding: 0.7em 1em 0.4em;
  background: white;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    width: ${props => `calc(100% - ${props.theme.space[3]}px)`};
  }

  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
  .ais-Snippet-highlighted,
  .ais-Highlight-highlighted {
    background-color: ${props => lighten(0.375, props.theme.colors.primary)};
  }
`;

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">Algolia</a>
  </span>
);
